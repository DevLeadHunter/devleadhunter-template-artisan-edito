<template>
  <section class="scroll-mt-24 border-t border-[#e3dccd]">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p class="edito-eyebrow edito-reveal">Avis</p>
      <h2
        class="edito-display edito-reveal mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl"
        :style="editoRevealDelay(80)">
        {{ reviews.heading }}
      </h2>

      <div class="mt-12 grid gap-x-12 md:grid-cols-2">
        <figure
          v-for="(review, index) in reviews.items"
          :key="index"
          class="edito-reveal border-t border-[#e3dccd] py-8"
          :style="editoRevealDelay((index % 2) * 80)">
          <span
            v-if="review.rating > 0"
            class="mb-4 inline-flex gap-1 text-[var(--edito-accent)]"
            role="img"
            :aria-label="`Note : ${review.rating} sur 5`">
            <svg
              v-for="starIndex in 5"
              :key="starIndex"
              class="h-4 w-4"
              :class="
                starIndex <= review.rating ? 'fill-current' : 'fill-none stroke-current opacity-30'
              "
              viewBox="0 0 24 24"
              stroke-width="1.5"
              aria-hidden="true">
              <path
                d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3Z" />
            </svg>
          </span>

          <blockquote
            class="edito-display text-xl leading-[1.35] font-medium text-[#1b1813] md:text-2xl">
            « {{ review.text }} »
          </blockquote>

          <figcaption
            v-if="review.author"
            class="edito-mono mt-4 text-xs tracking-[0.12em] text-[#6b6355] uppercase">
            — {{ review.author }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { EditoReviewsBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  reviews: EditoReviewsBlock
}>()
</script>
