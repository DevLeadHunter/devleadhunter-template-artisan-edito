<template>
  <section class="scroll-mt-24 border-t border-[#e3dccd]">
    <div class="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <p class="edito-eyebrow edito-reveal">Réalisations</p>
      <h2
        class="edito-display edito-reveal mt-6 max-w-2xl text-4xl leading-[1.05] font-semibold text-[#1b1813] md:text-5xl"
        :style="editoRevealDelay(80)">
        {{ gallery.heading }}
      </h2>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="(image, index) in gallery.items"
          :key="index"
          class="edito-card edito-tilt edito-reveal relative p-2.5"
          :style="editoRevealDelay((index % 3) * 80)">
          <img
            :src="image.url"
            :alt="altOf(image, index)"
            class="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy" />
          <figcaption class="mt-3 flex items-center justify-between gap-3 px-1 pb-1">
            <span class="edito-mono text-xs tracking-[0.14em] text-[#6b6355] uppercase">
              Planche {{ formatIndex(index) }}
            </span>
            <span
              v-if="image.alt"
              class="truncate text-sm text-[#6b6355]">
              {{ image.alt }}
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { EditoGalleryBlock, EditoGalleryImage } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  gallery: EditoGalleryBlock
}>()

/**
 * Formate l'index d'une planche en numéro à deux chiffres (01, 02, …).
 * @param index - Index de l'image dans la galerie (base 0).
 * @returns Le numéro affiché.
 */
function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}

/**
 * Retourne le texte alternatif d'une image, avec un repli numéroté quand il manque.
 * @param image - Image de la galerie.
 * @param index - Index de l'image (base 0).
 * @returns Le texte alternatif à utiliser.
 */
function altOf(image: EditoGalleryImage, index: number): string {
  return image.alt.length > 0 ? image.alt : `Réalisation ${index + 1}`
}
</script>
