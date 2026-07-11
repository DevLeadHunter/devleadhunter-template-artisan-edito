<template>
  <section class="scroll-mt-24 bg-[#1b1813] text-[#f6f3ec]">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <!-- Appel à l'action -->
        <div class="edito-reveal">
          <p class="edito-eyebrow edito-eyebrow--inverse">Contact</p>
          <h2
            class="edito-display mt-6 max-w-md text-4xl leading-[1.05] font-semibold text-[#fcfaf5] md:text-5xl">
            {{ contact.heading }}
          </h2>
          <a
            v-if="contact.phone"
            :href="`tel:${phoneHref}`"
            class="edito-display mt-6 block text-4xl leading-none font-semibold text-[#fcfaf5] tabular-nums transition-opacity hover:opacity-80 md:text-6xl">
            {{ contact.phone }}
          </a>
          <p
            v-if="contact.lede"
            class="mt-5 max-w-md text-lg leading-relaxed text-[#f6f3ec]/70">
            {{ contact.lede }}
          </p>
          <a
            v-if="contact.phone"
            :href="`tel:${phoneHref}`"
            class="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#fcfaf5] px-7 py-3.5 text-base font-semibold text-[#1b1813] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
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
            {{ contact.ctaCallLabel }}
          </a>
        </div>

        <!-- Coordonnées + horaires -->
        <div
          class="edito-reveal"
          :style="editoRevealDelay(120)">
          <dl class="border-t border-[#f6f3ec]/15">
            <div
              v-if="contact.email"
              class="flex items-baseline justify-between gap-4 border-b border-[#f6f3ec]/15 py-4">
              <dt class="edito-mono text-xs tracking-[0.12em] text-[#f6f3ec]/55 uppercase">
                Email
              </dt>
              <dd class="text-right font-medium break-all text-[#fcfaf5]">{{ contact.email }}</dd>
            </div>
            <div
              v-if="zoneLabel"
              class="flex items-baseline justify-between gap-4 border-b border-[#f6f3ec]/15 py-4">
              <dt class="edito-mono text-xs tracking-[0.12em] text-[#f6f3ec]/55 uppercase">Zone</dt>
              <dd class="text-right font-medium text-[#fcfaf5]">{{ zoneLabel }}</dd>
            </div>
            <div
              class="flex items-baseline justify-between gap-4 border-b border-[#f6f3ec]/15 py-4">
              <dt class="edito-mono text-xs tracking-[0.12em] text-[#f6f3ec]/55 uppercase">
                Devis
              </dt>
              <dd class="text-right font-medium text-[#fcfaf5]">Gratuit · sans engagement</dd>
            </div>
          </dl>

          <div
            v-if="contact.openingHours.length"
            class="mt-8">
            <p
              class="edito-mono flex items-center gap-2 text-xs tracking-[0.14em] text-[#f6f3ec]/55 uppercase">
              <span
                class="h-0.5 w-4 bg-[var(--edito-accent)]"
                aria-hidden="true"></span>
              Horaires
            </p>
            <ul class="mt-3 border-t border-[#f6f3ec]/15">
              <li
                v-for="(slot, index) in contact.openingHours"
                :key="index"
                class="flex items-baseline justify-between gap-4 border-b border-[#f6f3ec]/15 py-3">
                <span class="text-sm text-[#f6f3ec]/80">{{ slot.day }}</span>
                <span class="text-right text-sm font-medium text-[#fcfaf5] tabular-nums">
                  {{ slot.hours }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { EditoContactBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

const props = defineProps<{
  contact: EditoContactBlock
}>()

/** Téléphone nettoyé pour l'attribut `tel:` (espaces retirés). */
const phoneHref: ComputedRef<string> = computed((): string =>
  props.contact.phone.replace(/\s+/g, ''),
)

/** Libellé de zone : ville, complétée du secteur quand il diffère. */
const zoneLabel: ComputedRef<string> = computed((): string => {
  const { city, area } = props.contact
  if (city && area && area !== city) {
    return `${city} · ${area}`
  }
  return city || area
})
</script>
