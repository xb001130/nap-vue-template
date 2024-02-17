<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/plugins/i18n'

const { locale } = useI18n()

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
  <div flex-center font-size-5>
    <div i-carbon-language mr-10px @click="toggleLocales()" />
    <div i="carbon-sun dark:carbon-moon" mr-10px @click="toggleDark()" />
    <a href="https://github.com/xb001130/nap-vue-template" target="_blank">
      <div i-carbon-logo-github />
    </a>
  </div>
</template>

<style scoped>

</style>
