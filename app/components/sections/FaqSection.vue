<template>
  <section class="scroll-mt-24 border-t border-[#e3dccd] bg-[#fcfaf5]">
    <div class="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <p class="edito-eyebrow edito-reveal">FAQ</p>
      <h2
        class="edito-display edito-reveal mt-6 text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl"
        :style="editoRevealDelay(80)">
        {{ faq.heading }}
      </h2>

      <div class="mt-10 border-t border-[#e3dccd]">
        <details
          v-for="(item, index) in faq.items"
          :key="index"
          class="edito-reveal group border-b border-[#e3dccd]"
          :style="editoRevealDelay(index * 50)">
          <summary
            class="flex cursor-pointer list-none items-baseline gap-4 py-6 [&::-webkit-details-marker]:hidden">
            <span
              class="edito-display text-base font-semibold text-[var(--edito-accent)] tabular-nums">
              {{ formatIndex(index) }}
            </span>
            <span class="edito-display flex-1 text-lg font-medium text-[#1b1813] md:text-xl">
              {{ item.question }}
            </span>
            <svg
              class="mt-1 h-4 w-4 shrink-0 text-[#1b1813] transition-transform duration-300 group-open:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p
            v-if="item.answer"
            class="max-w-2xl pb-6 pl-9 text-base leading-relaxed text-[#6b6355]">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { EditoFaqBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  faq: EditoFaqBlock
}>()

/**
 * Formate l'index d'une question en numéro à deux chiffres (01, 02, …).
 * @param index - Index de la question (base 0).
 * @returns Le numéro affiché.
 */
function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}
</script>
