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

      <div :class="['flex items-center gap-4', navItems.length ? 'md:ml-8' : 'ml-auto']">
        <a
          v-if="phone"
          :href="`tel:${phoneHref}`"
          class="edito-mono hidden text-sm font-medium tracking-[0.04em] text-[#1b1813] tabular-nums sm:inline">
          {{ phone }}
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
