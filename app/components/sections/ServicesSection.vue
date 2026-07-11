<template>
  <section class="scroll-mt-24">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p class="edito-eyebrow edito-reveal">Prestations</p>
          <h2
            class="edito-display edito-reveal mt-6 text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl"
            :style="editoRevealDelay(80)">
            {{ services.heading }}
          </h2>
        </div>
        <p
          v-if="services.lede"
          class="edito-reveal max-w-xl text-lg leading-relaxed text-[#6b6355] lg:pb-1"
          :style="editoRevealDelay(160)">
          {{ services.lede }}
        </p>
      </div>

      <div class="mt-14 border-b border-[#e3dccd]">
        <article
          v-for="(service, index) in services.items"
          :key="index"
          class="edito-reveal grid gap-3 border-t border-[#e3dccd] py-8 md:grid-cols-[auto_1fr] md:gap-12"
          :style="editoRevealDelay(index * 60)">
          <span
            class="edito-display text-3xl leading-none font-semibold text-[var(--edito-accent)] md:text-4xl">
            {{ formatIndex(index) }}
          </span>
          <div>
            <h3 class="edito-display text-2xl font-semibold text-[#1b1813] md:text-3xl">
              {{ service.title }}
            </h3>
            <p
              v-if="service.description"
              class="mt-3 max-w-2xl text-base leading-relaxed text-[#6b6355]">
              {{ service.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { EditoServicesBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  services: EditoServicesBlock
}>()

/**
 * Formate l'index d'un service en numéro à deux chiffres (01, 02, … 10).
 * @param index - Index du service dans la liste (base 0).
 * @returns Le numéro affiché, préfixé d'un zéro sous la dizaine.
 */
function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}
</script>
