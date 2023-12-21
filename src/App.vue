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
// const toggleDark = useToggle(isDark)
// @ts-expect-error: Transition API
const isAppearanceTransition = document.startViewTransition
  && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function toggleDark() {
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }
  const x = (event as any).clientX
  const y = (event as any).clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
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
  </div>
</template>

<style scoped>
</style>
