<script setup lang="ts">
import { useColorthemeStore } from '../stores/ColorthemeStore';

const colorthemeStore = useColorthemeStore();
</script>

<template>
  <header>
    <span>
      <img v-if="!colorthemeStore.theme" src="/public/logo.svg" alt="WFT" class="logo" />
      <img v-else src="/public/logo.dark.svg" alt="WFT" class="logo" />
    </span>
    <span class="theme-btn" @click="colorthemeStore.colortheme">
      <img v-if="!colorthemeStore.theme" src="/public/theme.btn.light.svg" alt="WFT" />
      <img v-else src="/public/theme.btn.dark.svg" alt="WFT" />
    </span>
  </header>
</template>
