<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/plugins/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div flex justify-center>
    <div font-rubik>
      {{ t('test') }}
      Nap
      <i class="i-carbon-3d-mpr-toggle" />
    </div>
    <div i-carbon-language font-size-10 @click="toggleLocales()" />
    <div i="carbon-sun dark:carbon-moon" font-size-10 @click="toggleDark()" />
    <div i-nap:napt inline-block h50px text-lg font-size-20 text-red color="#fff" />
  </div>
</template>

<style scoped>
</style>
