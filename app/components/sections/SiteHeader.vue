<template>
  <header class="sticky top-0 z-50 border-b border-[#e3dccd] bg-[#f6f3ec]/85 backdrop-blur-md">
    <div class="mx-auto flex max-w-6xl items-center gap-5 px-5 py-4 md:px-8">
      <a
        href="#top"
        class="edito-display text-lg leading-none font-semibold tracking-[-0.01em] text-[#1b1813]">
        {{ businessName }}
      </a>

      <nav
        v-if="navItems.length"
        class="ml-auto hidden items-center gap-8 md:flex"
        aria-label="Navigation principale">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="edito-mono text-xs tracking-[0.14em] text-[#6b6355] uppercase transition-colors hover:text-[#1b1813]">
          {{ item.label }}
        </a>
      </nav>

      <div :class="['flex items-center gap-3 sm:gap-4', navItems.length ? 'md:ml-8' : 'ml-auto']">
        <a
          v-if="phone"
          :href="`tel:${phoneHref}`"
          class="edito-mono hidden text-sm font-medium tracking-[0.04em] text-[#1b1813] tabular-nums sm:inline">
          {{ phone }}
        </a>
        <!-- Appel direct sur mobile : l'action n°1 d'un site artisan, en un tap. -->
        <a
          v-if="phone"
          :href="`tel:${phoneHref}`"
          aria-label="Appeler"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3dccd] text-[#1b1813] transition-colors hover:border-[#1b1813] hover:bg-[#fcfaf5] sm:hidden">
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
        </a>
        <a
          href="#contact"
          class="edito-btn-primary !px-5 !py-2.5 text-sm">
          Devis
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { EditoNavItem } from '~/types/artisan-edito'

const props = defineProps<{
  businessName: string
  phone: string
  navItems: EditoNavItem[]
}>()

/** Téléphone nettoyé pour l'attribut `tel:` (espaces retirés). */
const phoneHref: ComputedRef<string> = computed((): string => props.phone.replace(/\s+/g, ''))
</script>
