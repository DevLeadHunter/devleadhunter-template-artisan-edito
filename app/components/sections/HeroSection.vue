<template>
  <section
    id="top"
    class="relative overflow-hidden">
    <div class="mx-auto max-w-6xl px-5 pt-16 pb-16 md:px-8 md:pt-24 md:pb-24">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <!-- Colonne éditoriale -->
        <div>
          <p class="edito-eyebrow edito-reveal">
            {{ hero.badge }}<template v-if="hero.city"> · {{ hero.city }}</template>
          </p>

          <h1
            class="edito-display edito-reveal mt-6 text-[2.75rem] leading-[1.02] font-semibold text-[#1b1813] md:text-6xl lg:text-7xl"
            :style="revealDelay(90)">
            {{ hero.businessName
            }}<span
              class="text-[var(--edito-accent)]"
              aria-hidden="true"
              >.</span
            >
          </h1>

          <p
            class="edito-display edito-reveal mt-6 max-w-xl text-2xl leading-[1.15] font-medium text-[#1b1813] md:text-[2rem]"
            :style="revealDelay(170)">
            {{ hero.leadStart }} <em>{{ hero.leadAccent }}</em>
          </p>

          <p
            v-if="hero.subtitle"
            class="edito-reveal mt-6 max-w-xl text-lg leading-relaxed text-[#6b6355]"
            :style="revealDelay(240)">
            {{ hero.subtitle }}
          </p>

          <div
            class="edito-reveal mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            :style="revealDelay(320)">
            <a
              v-if="hero.phone"
              :href="`tel:${phoneHref}`"
              class="edito-btn-primary">
              <svg
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true">
                <path
                  d="M3 5a2 2 0 0 1 2-2h2.4a1 1 0 0 1 1 .8l.9 4a1 1 0 0 1-.5 1.1L7.5 10a11 11 0 0 0 5.5 5.5l1.1-1.3a1 1 0 0 1 1.1-.5l4 .9a1 1 0 0 1 .8 1V18a2 2 0 0 1-2 2A15 15 0 0 1 3 5Z" />
              </svg>
              <span
                >{{ hero.ctaCallLabel
                }}<span class="hidden sm:inline"> — {{ hero.phone }}</span></span
              >
            </a>
            <a
              href="#contact"
              class="edito-btn-ghost">
              {{ hero.ctaQuoteLabel }}
            </a>
          </div>

          <ul
            v-if="hero.points.length"
            class="edito-reveal mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            :style="revealDelay(400)">
            <li
              v-for="point in hero.points"
              :key="point"
              class="edito-mono inline-flex items-center gap-2 text-xs tracking-[0.1em] text-[#6b6355] uppercase">
              <svg
                class="h-3 w-3 text-[var(--edito-accent)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Colonne figure : photo du prospect, sinon fiche éditoriale -->
        <div
          class="edito-reveal"
          :style="revealDelay(260)">
          <figure
            v-if="showHeroImage"
            class="edito-card edito-tilt relative p-2.5">
            <span
              class="edito-corner edito-corner--tl"
              aria-hidden="true"></span>
            <span
              class="edito-corner edito-corner--br"
              aria-hidden="true"></span>
            <img
              :src="hero.image"
              :alt="heroImageAlt"
              class="aspect-[4/5] w-full rounded-xl object-cover"
              loading="eager"
              @error="onHeroImageError" />
          </figure>

          <aside
            v-else
            class="edito-card relative p-7 md:p-8">
            <span
              class="edito-corner edito-corner--tl"
              aria-hidden="true"></span>
            <span
              class="edito-corner edito-corner--br"
              aria-hidden="true"></span>
            <p class="edito-mono text-xs tracking-[0.16em] text-[#6b6355] uppercase">En bref</p>
            <dl class="mt-5 divide-y divide-[#e3dccd]">
              <div class="flex items-baseline justify-between gap-4 py-3">
                <dt class="edito-mono text-xs tracking-[0.08em] text-[#6b6355] uppercase">
                  Disponibilité
                </dt>
                <dd class="edito-display text-base font-semibold text-[#1b1813]">
                  {{ hero.badge }}
                </dd>
              </div>
              <div
                v-if="hero.city"
                class="flex items-baseline justify-between gap-4 py-3">
                <dt class="edito-mono text-xs tracking-[0.08em] text-[#6b6355] uppercase">Zone</dt>
                <dd class="edito-display text-base font-semibold text-[#1b1813]">
                  {{ hero.city }}
                </dd>
              </div>
              <div
                v-if="hero.phone"
                class="flex items-baseline justify-between gap-4 py-3">
                <dt class="edito-mono text-xs tracking-[0.08em] text-[#6b6355] uppercase">
                  Ligne directe
                </dt>
                <dd class="edito-display text-base font-semibold text-[#1b1813] tabular-nums">
                  {{ hero.phone }}
                </dd>
              </div>
              <div class="flex items-baseline justify-between gap-4 py-3">
                <dt class="edito-mono text-xs tracking-[0.08em] text-[#6b6355] uppercase">Devis</dt>
                <dd class="edito-display text-base font-semibold text-[#1b1813]">
                  Gratuit · sans engagement
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CSSProperties, ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { EditoHeroBlock } from '~/types/artisan-edito'

const props = defineProps<{
  hero: EditoHeroBlock
}>()

/** Vrai quand la photo du prospect n'a pas pu être chargée (URL scrapée morte). */
const heroImageFailed: Ref<boolean> = ref<boolean>(false)

/** Téléphone nettoyé pour l'attribut `tel:` (espaces retirés). */
const phoneHref: ComputedRef<string> = computed((): string => props.hero.phone.replace(/\s+/g, ''))

/** Affiche la photo si elle existe ET se charge — sinon repli sur la fiche « En bref ». */
const showHeroImage: ComputedRef<boolean> = computed(
  (): boolean => props.hero.image.length > 0 && !heroImageFailed.value,
)

/** Texte alternatif de la photo du hero, contextualisé avec la ville quand elle existe. */
const heroImageAlt: ComputedRef<string> = computed((): string =>
  props.hero.city
    ? `${props.hero.businessName} — ${props.hero.city}`
    : props.hero.businessName || 'Photo de présentation',
)

/**
 * Construit le délai d'entrée d'un reveal (staggered) sous forme de variable CSS.
 * @param delayMs - Délai en millisecondes.
 * @returns Le style inline portant la variable `--edito-reveal-delay`.
 */
function revealDelay(delayMs: number): CSSProperties {
  return { '--edito-reveal-delay': `${delayMs}ms` } as CSSProperties
}

/** Bascule sur la fiche « En bref » quand la photo du hero ne charge pas. */
function onHeroImageError(): void {
  heroImageFailed.value = true
}
</script>
