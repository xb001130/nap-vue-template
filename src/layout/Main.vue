<script setup lang="ts">
const Header = defineAsyncComponent(() => import('./Header.vue'))
const Footer = defineAsyncComponent(() => import('./Footer.vue'))
</script>

<template>
  <Header />
  <RouterView v-slot="{ Component, route }">
    <component :is="Component" :key="route.name" />
  </RouterView>
  <Footer />
</template>

<style scoped>

</style>
