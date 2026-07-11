<template>
  <section class="scroll-mt-24 border-t border-[#e3dccd] bg-[#fcfaf5]">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p class="edito-eyebrow edito-reveal">Avant · Après</p>
      <h2
        class="edito-display edito-reveal mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl"
        :style="editoRevealDelay(80)">
        {{ beforeAfter.heading }}
      </h2>

      <div class="mt-12 grid gap-10 lg:grid-cols-2">
        <figure
          v-for="(pair, index) in beforeAfter.pairs"
          :key="index"
          class="edito-reveal"
          :style="editoRevealDelay((index % 2) * 90)">
          <div class="edito-card relative overflow-hidden rounded-2xl">
            <img
              :src="pair.before"
              :alt="`Avant — ${labelOf(pair, index)}`"
              class="block aspect-[3/2] w-full object-cover"
              loading="lazy" />
            <img
              :src="pair.after"
              :alt="`Après — ${labelOf(pair, index)}`"
              class="absolute inset-0 h-full w-full object-cover"
              :style="{ clipPath: `inset(0 0 0 ${positionOf(index)}%)` }"
              loading="lazy" />
            <span
              class="edito-mono absolute top-3 left-3 rounded-full bg-[#1b1813]/85 px-3 py-1 text-[0.65rem] tracking-[0.12em] text-[#fcfaf5] uppercase">
              Avant
            </span>
            <span
              class="edito-mono absolute top-3 right-3 rounded-full bg-[#fcfaf5]/90 px-3 py-1 text-[0.65rem] tracking-[0.12em] text-[#1b1813] uppercase">
              Après
            </span>
            <span
              class="pointer-events-none absolute inset-y-0 w-0.5 bg-[#fcfaf5] shadow-[0_0_0_1px_rgba(12,10,8,0.25)]"
              :style="{ left: `${positionOf(index)}%` }"
              aria-hidden="true"></span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            :value="positionOf(index)"
            class="edito-range mt-5"
            :aria-label="`Comparateur avant/après : ${labelOf(pair, index)}`"
            @input="onSlide(index, $event)" />

          <figcaption
            v-if="pair.label"
            class="edito-mono mt-3 text-xs tracking-[0.12em] text-[#6b6355] uppercase">
            {{ pair.label }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { EditoBeforeAfterBlock, EditoBeforeAfterPair } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  beforeAfter: EditoBeforeAfterBlock
}>()

/** Position du volet de révélation (en %) par paire ; 50 % par défaut. */
const positions: Ref<Record<number, number>> = ref<Record<number, number>>({})

/**
 * Position courante du curseur pour une paire donnée.
 * @param index - Index de la paire.
 * @returns Le pourcentage de révélation (0–100), 50 par défaut.
 */
function positionOf(index: number): number {
  return positions.value[index] ?? 50
}

/**
 * Met à jour la position du curseur d'une paire lors du déplacement du range.
 * @param index - Index de la paire.
 * @param event - Événement `input` du champ range.
 */
function onSlide(index: number, event: Event): void {
  const target: HTMLInputElement = event.target as HTMLInputElement
  positions.value = { ...positions.value, [index]: Number(target.value) }
}

/**
 * Libellé d'une paire, avec un repli numéroté quand il manque.
 * @param pair - Paire avant/après.
 * @param index - Index de la paire (base 0).
 * @returns Le libellé à utiliser.
 */
function labelOf(pair: EditoBeforeAfterPair, index: number): string {
  return pair.label.length > 0 ? pair.label : `réalisation ${index + 1}`
}
</script>
