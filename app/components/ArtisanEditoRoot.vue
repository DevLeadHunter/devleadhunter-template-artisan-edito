<template>
  <div
    ref="rootRef"
    class="edito min-h-dvh"
    :style="{ '--edito-accent': page.theme.accent }">
    <!-- Grain papier — overlay global (repris de `.landing-grain`) -->
    <div
      class="edito-grain"
      aria-hidden="true"></div>

    <SiteHeader
      :business-name="page.businessName"
      :phone="page.phone"
      :nav-items="navItems" />

    <main>
      <HeroSection
        v-if="hasHero"
        v-bind="editableAttrs(props.content._editable?.hero)"
        :hero="page.hero" />

      <TrustStrip
        v-if="hasTrust"
        v-bind="editableAttrs(props.content._editable?.trust)"
        :trust="page.trust" />

      <ServicesSection
        v-bind="editableAttrs(props.content._editable?.services)"
        id="services"
        :services="page.services" />

      <AboutSection
        v-if="hasAbout"
        v-bind="editableAttrs(props.content._editable?.about)"
        :about="page.about" />

      <GallerySection
        v-if="hasGallery"
        v-bind="editableAttrs(props.content._editable?.gallery)"
        id="galerie"
        :gallery="page.gallery" />

      <BeforeAfterSection
        v-if="hasBeforeAfter"
        v-bind="editableAttrs(props.content._editable?.beforeAfter)"
        id="avant-apres"
        :before-after="page.beforeAfter" />

      <ReviewsSection
        v-if="hasReviews"
        v-bind="editableAttrs(props.content._editable?.reviews)"
        id="avis"
        :reviews="page.reviews" />

      <FaqSection
        v-if="hasFaq"
        v-bind="editableAttrs(props.content._editable?.faq)"
        :faq="page.faq" />

      <ContactSection
        v-bind="editableAttrs(props.content._editable?.contact)"
        id="contact"
        :contact="page.contact" />
    </main>

    <footer class="border-t border-[#e3dccd] px-5 py-10 md:px-8">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span class="edito-display text-lg font-semibold text-[#1b1813]">
          {{ page.businessName }}
        </span>

        <!-- Réseaux sociaux (masqués si le prospect n'en a aucun) -->
        <ul
          v-if="page.social.length"
          class="flex flex-wrap items-center gap-2">
          <li
            v-for="link in page.social"
            :key="link.network">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              :title="link.label"
              :aria-label="link.label"
              class="edito-mono inline-flex items-center gap-1.5 rounded-full border border-[#e3dccd] px-3 py-1.5 text-[11px] tracking-[0.12em] text-[#1b1813] uppercase transition-colors hover:border-[#1b1813] hover:bg-[#fcfaf5]">
              {{ link.label }}
              <svg
                class="h-2.5 w-2.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </li>
        </ul>

        <span class="edito-mono text-xs tracking-[0.14em] text-[#6b6355] uppercase">
          <template v-if="page.city">{{ page.city }} · </template>© {{ year }}
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
/**
 * Template 'artisan-edito' (« Artisan Édito ») — direction artistique reprise fidèlement de
 * la landing page DevLeadHunter : papier éditorial noir & blanc + ambre miel « annotation »,
 * Fraunces display à l'italique optique, Instrument Sans en corps, Spline Sans Mono pour les
 * eyebrows. Template PAR DÉFAUT, MULTI-MÉTIER (plombier, électricien, garagiste, menuisier,
 * paysagiste, coiffeur…). Grain papier, cartes surélevées, tilt léger au hover, reveals doux
 * au scroll (IntersectionObserver, désactivés si l'utilisateur réduit les animations).
 *
 * Racine publique de la template : elle rend un `SiteContent` typé et POSSÈDE sa copie
 * éditoriale (via `buildArtisanEditoContent`). Aucune dépendance à demo-host.
 */
import type { ComputedRef, PropType, Ref } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { ArtisanEditoPageContent, EditoNavItem } from '~/types/artisan-edito'
import { buildArtisanEditoContent } from '~/types/artisan-edito'
import type { SiteContent } from '~/types/SiteContent'
import { editableAttrs } from '@devleadhunter/website-content'
import SiteHeader from './sections/SiteHeader.vue'
import HeroSection from './sections/HeroSection.vue'
import TrustStrip from './sections/TrustStrip.vue'
import ServicesSection from './sections/ServicesSection.vue'
import AboutSection from './sections/AboutSection.vue'
import GallerySection from './sections/GallerySection.vue'
import BeforeAfterSection from './sections/BeforeAfterSection.vue'
import ReviewsSection from './sections/ReviewsSection.vue'
import FaqSection from './sections/FaqSection.vue'
import ContactSection from './sections/ContactSection.vue'

/**
 * Racine de la template — l'unique point d'entrée public rendu par demo-host.
 * `content` porte les données variables réelles du prospect (toutes clés optionnelles).
 */
const props = defineProps({
  content: {
    type: Object as PropType<SiteContent>,
    required: true,
  },
})

/** Contenu de page résolu (données prospect + copie éditoriale par défaut). */
const page: ComputedRef<ArtisanEditoPageContent> = computed((): ArtisanEditoPageContent =>
  buildArtisanEditoContent(props.content),
)

/** Le hero ne s'affiche qu'avec un nom d'entreprise. */
const hasHero: ComputedRef<boolean> = computed((): boolean => page.value.businessName.length > 0)
/** La bande de confiance s'affiche s'il y a au moins un repère. */
const hasTrust: ComputedRef<boolean> = computed((): boolean => page.value.trust.items.length > 0)
/** L'à-propos ne s'affiche qu'avec un texte fourni par le prospect. */
const hasAbout: ComputedRef<boolean> = computed((): boolean => page.value.about.text.length > 0)
/** La galerie ne s'affiche qu'avec au moins une image. */
const hasGallery: ComputedRef<boolean> = computed(
  (): boolean => page.value.gallery.items.length > 0,
)
/** Le comparateur avant/après ne s'affiche qu'avec au moins une paire. */
const hasBeforeAfter: ComputedRef<boolean> = computed(
  (): boolean => page.value.beforeAfter.pairs.length > 0,
)
/** Les avis ne s'affichent qu'avec au moins une citation. */
const hasReviews: ComputedRef<boolean> = computed(
  (): boolean => page.value.reviews.items.length > 0,
)
/** La FAQ ne s'affiche qu'avec au moins une entrée (défauts inclus). */
const hasFaq: ComputedRef<boolean> = computed((): boolean => page.value.faq.items.length > 0)

/** Ancres du header, masquées quand la section correspondante est absente. */
const navItems: ComputedRef<EditoNavItem[]> = computed((): EditoNavItem[] => {
  const items: EditoNavItem[] = [{ label: 'Prestations', href: '#services' }]
  if (hasGallery.value) {
    items.push({ label: 'Réalisations', href: '#galerie' })
  } else if (hasBeforeAfter.value) {
    items.push({ label: 'Réalisations', href: '#avant-apres' })
  }
  if (hasReviews.value) {
    items.push({ label: 'Avis', href: '#avis' })
  }
  items.push({ label: 'Contact', href: '#contact' })
  return items
})

/** Année courante pour le pied de page. */
const year: number = new Date().getFullYear()

/** Racine du composant, cible de l'observateur de reveal. */
const rootRef: Ref<HTMLElement | null> = ref<HTMLElement | null>(null)

/** Observateur de reveal au scroll (nettoyé au démontage). */
let revealObserver: IntersectionObserver | null = null

/**
 * Filet de sécurité : si l'IntersectionObserver n'a rien révélé après ce délai
 * (webviews in-app au pipeline de rendu gelé, navigateurs exotiques), tout le
 * contenu est affiché d'un bloc — un prospect ne doit JAMAIS voir une page blanche.
 */
let revealFallbackTimer: number | null = null

onMounted((): void => {
  const root: HTMLElement | null = rootRef.value
  if (!root) {
    return
  }

  // Arme les animations côté client : sans JS le contenu reste visible (SSR/no-JS safe).
  root.classList.add('edito-js')

  const targets: HTMLElement[] = Array.from(root.querySelectorAll<HTMLElement>('.edito-reveal'))
  const prefersReducedMotion: boolean = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  /** Révèle tout le contenu immédiatement (chemin sans animation). */
  function revealEverything(): void {
    targets.forEach((target: HTMLElement): void => target.classList.add('is-visible'))
    revealObserver?.disconnect()
  }

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEverything()
    return
  }

  revealObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  )
  targets.forEach((target: HTMLElement): void => revealObserver?.observe(target))

  // Si l'observer fonctionne, le hero est révélé en quelques ms et ce timer ne fait
  // rien ; sinon (rendu gelé) il désarme les animations plutôt que cacher la page.
  revealFallbackTimer = window.setTimeout((): void => {
    if (!root.querySelector('.edito-reveal.is-visible')) {
      revealEverything()
    }
  }, 1400)
})

onBeforeUnmount((): void => {
  if (revealFallbackTimer !== null) {
    window.clearTimeout(revealFallbackTimer)
    revealFallbackTimer = null
  }
  revealObserver?.disconnect()
  revealObserver = null
})

// Les polices sont déclarées ICI (pas dans un <head> global partagé) : demo-host ne charge
// que la racine de la template rendue, donc seule la typo de CETTE template est téléchargée.
useHead({
  htmlAttrs: { lang: 'fr' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500;1,9..144,600&family=Instrument+Sans:wght@400;500;600;700&family=Spline+Sans+Mono:wght@400;500;600&display=swap',
    },
  ],
})
</script>
