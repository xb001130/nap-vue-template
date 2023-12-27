<script setup lang="ts">
import { useAppStoreHook } from '~/store/modules/app'

const projectName = computed(() => useAppStoreHook().projectName)
</script>

<template>
  <div flex-center flex-col>
    <div i-nap:napt h20 font-size-30 />
    <div>[pinia] {{ projectName }}</div>
  </div>
</template>

<style scoped>

</style>
