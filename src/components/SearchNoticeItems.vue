<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="search-notice-item">
    <div class="search-notice-item__header-container">
      <p>No matches for</p>
      <p class="search-notice-item__header-text">{{ text }}</p>
    </div>
    <p class="search-notice-item__text">Please try again with a different spelling or keywords.</p>
  </div>
</template>
