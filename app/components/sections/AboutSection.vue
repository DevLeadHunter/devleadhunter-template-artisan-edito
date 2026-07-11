<template>
  <section class="scroll-mt-24 border-t border-[#e3dccd] bg-[#fcfaf5]">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div :class="['grid gap-12 lg:items-center lg:gap-16', hasImage ? 'lg:grid-cols-2' : '']">
        <div class="edito-reveal">
          <p class="edito-eyebrow">À propos</p>
          <h2
            class="edito-display mt-6 text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl">
            {{ about.heading }}
          </h2>
          <div
            :class="[
              'mt-6 space-y-4 text-lg leading-relaxed text-[#6b6355]',
              hasImage ? 'max-w-xl' : 'max-w-3xl',
            ]">
            <p
              v-for="(paragraph, index) in paragraphs"
              :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <figure
          v-if="hasImage"
          class="edito-card edito-tilt edito-reveal relative p-2.5"
          :style="editoRevealDelay(120)">
          <span
            class="edito-corner edito-corner--tl"
            aria-hidden="true"></span>
          <span
            class="edito-corner edito-corner--br"
            aria-hidden="true"></span>
          <img
            :src="about.image"
            :alt="about.heading"
            class="aspect-[4/5] w-full rounded-xl object-cover"
            loading="lazy"
            @error="onImageError" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { EditoAboutBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

const props = defineProps<{
  about: EditoAboutBlock
}>()

/** Vrai quand la photo d'à-propos n'a pas pu être chargée (URL scrapée morte). */
const imageFailed: Ref<boolean> = ref<boolean>(false)

/** Photo fournie ET chargeable — pilote la mise en page en deux colonnes. */
const hasImage: ComputedRef<boolean> = computed(
  (): boolean => props.about.image.length > 0 && !imageFailed.value,
)

/** Texte d'à-propos découpé en paragraphes (sur les sauts de ligne, entrées vides retirées). */
const paragraphs: ComputedRef<string[]> = computed((): string[] =>
  props.about.text
    .split(/\n+/)
    .map((paragraph: string): string => paragraph.trim())
    .filter((paragraph: string): boolean => paragraph.length > 0),
)

/** Repasse en une colonne quand la photo ne charge pas. */
function onImageError(): void {
  imageFailed.value = true
}
</script>
