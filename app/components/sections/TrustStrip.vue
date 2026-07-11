<template>
  <section class="border-y border-[#e3dccd] bg-[#fcfaf5]">
    <div class="mx-auto max-w-6xl px-5 md:px-8">
      <dl class="grid grid-cols-2 gap-px bg-[#e3dccd] md:grid-cols-4">
        <div
          v-for="(item, index) in trust.items"
          :key="index"
          class="edito-reveal flex flex-col gap-2 bg-[#fcfaf5] px-5 py-8 md:px-7"
          :style="editoRevealDelay(index * 70)">
          <span
            class="h-0.5 w-6 bg-[var(--edito-accent)]"
            aria-hidden="true"></span>
          <dt class="edito-display text-3xl leading-none font-semibold text-[#1b1813] md:text-4xl">
            {{ item.value }}
          </dt>
          <dd
            v-if="item.label"
            class="edito-mono text-xs tracking-[0.12em] text-[#6b6355] uppercase">
            {{ item.label }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { EditoTrustBlock } from '~/types/artisan-edito'
import { editoRevealDelay } from '~/types/artisan-edito'

defineProps<{
  trust: EditoTrustBlock
}>()
</script>
