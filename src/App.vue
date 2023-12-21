<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/plugins/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div font-rubik>
    {{ t('test') }}
    Nap
    <i class="i-carbon-3d-mpr-toggle" />
  </div>
  <div i-carbon-language font-size-10 @click="toggleLocales()" />
</template>

<style scoped>
</style>
