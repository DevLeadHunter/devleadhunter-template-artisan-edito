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
          v-for="(entry, displayIndex) in visibleEntries"
          :key="entry.index"
          class="edito-card edito-tilt edito-reveal relative p-2.5"
          :style="editoRevealDelay((displayIndex % 3) * 80)">
          <img
            :src="entry.image.url"
            :alt="altOf(entry.image, displayIndex)"
            class="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy"
            @error="onImageError(entry.index)" />
          <figcaption class="mt-3 flex items-center justify-between gap-3 px-1 pb-1">
            <span class="edito-mono text-xs tracking-[0.14em] text-[#6b6355] uppercase">
              Planche {{ formatIndex(displayIndex) }}
            </span>
            <span
              v-if="entry.image.alt"
              class="truncate text-sm text-[#6b6355]">
              {{ entry.image.alt }}
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, Ref } from 'vue'
import { computed, ref } from 'vue'
import type { EditoGalleryBlock, EditoGalleryImage } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

/** Une image de galerie associée à son index d'origine (clé stable). */
interface GalleryEntry {
  image: EditoGalleryImage
  index: number
}

const props = defineProps<{
  gallery: EditoGalleryBlock
}>()

/** Index (d'origine) des images scrapées qui n'ont pas pu être chargées. */
const failedImageIndexes: Ref<Set<number>> = ref<Set<number>>(new Set<number>())

/** Tuiles réellement affichables — les images mortes disparaissent proprement. */
const visibleEntries: ComputedRef<GalleryEntry[]> = computed((): GalleryEntry[] =>
  props.gallery.items
    .map((image: EditoGalleryImage, index: number): GalleryEntry => ({ image, index }))
    .filter((entry: GalleryEntry): boolean => !failedImageIndexes.value.has(entry.index)),
)

/**
 * Masque une tuile dont l'image ne charge pas (URL scrapée morte).
 * @param index - Index d'origine de l'image dans la galerie.
 */
function onImageError(index: number): void {
  const next: Set<number> = new Set<number>(failedImageIndexes.value)
  next.add(index)
  failedImageIndexes.value = next
}

/**
 * Formate l'index d'une planche en numéro à deux chiffres (01, 02, …).
 * @param index - Index affiché de l'image (base 0).
 * @returns Le numéro affiché.
 */
function formatIndex(index: number): string {
  return String(index + 1).padStart(2, '0')
}

/**
 * Retourne le texte alternatif d'une image, avec un repli numéroté quand il manque.
 * @param image - Image de la galerie.
 * @param index - Index affiché de l'image (base 0).
 * @returns Le texte alternatif à utiliser.
 */
function altOf(image: EditoGalleryImage, index: number): string {
  return image.alt.length > 0 ? image.alt : `Réalisation ${index + 1}`
}
</script>
