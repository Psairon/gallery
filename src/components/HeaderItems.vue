<script setup lang="ts">
import { useColorThemeStore } from '../stores/ColorThemeStore';

const colorThemeStore = useColorThemeStore();
</script>

<template>
  <header>
    <span>
      <img v-if="!colorThemeStore.theme" src="/public/logo.svg" alt="WFT" class="logo" />
      <img v-else src="/public/logo.dark.svg" alt="WFT" class="logo" />
    </span>
    <span class="theme-btn" @click="colorThemeStore.changeColorTheme">
      <img v-if="!colorThemeStore.theme" src="/public/theme.btn.light.svg" alt="WFT" />
      <img v-else src="/public/theme.btn.dark.svg" alt="WFT" />
    </span>
  </header>
</template>
