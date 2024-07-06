<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  img: string;
  title: string;
  year: string;
  author: string;
  location: string;
}>();

const AnimationEffect = (event: Event, flag: boolean = false) => {
  const target = event.currentTarget as HTMLElement;
  const block1 = target.querySelector('#block1') as HTMLElement;
  const block2 = target.querySelector('#block2') as HTMLElement;
  const img = target.querySelector('img') as HTMLImageElement;
  const title = target.querySelector('.gallery-item__name') as HTMLElement;

  if (flag) {
    block2.classList.remove('transition-left', 'gallery-title-block-2');
    block1.classList.remove('transition-top', 'gallery-title-block-1');

    block2.classList.add('transition-right');
    block1.classList.add('transition-bottom');
    img.style.transform = 'scale(1.05)';
    img.classList.add('fade-in');
    title.classList.add('fade-in-strong');
  } else {
    block1.classList.remove('transition-bottom');
    block2.classList.remove('transition-right');
    img.classList.remove('fade-in');
    title.classList.remove('fade-in-strong');

    block1.classList.add('transition-top', 'gallery-title-block-1');
    block2.classList.add('transition-left', 'gallery-title-block-2');
    img.style.transform = 'scale(1)';
  }
};
</script>

<template>
  <div
    class="gallery-item"
    @mouseover="(event) => AnimationEffect(event, true)"
    @mouseleave="(event) => AnimationEffect(event)"
  >
    <img :src="'https://test-front.framework.team' + img" alt="img" />
    <div class="gallery-item__name">
      <div class="gallery-title-block-1" id="block1">
        <h1 class="gallery-item__title">{{ title }}</h1>
        <p class="gallery-item__year">{{ year }}</p>
      </div>
      <div class="gallery-title-block-2" id="block2">
        <h1 class="gallery-item__author">{{ author }}</h1>
        <p class="gallery-item__location">{{ location }}</p>
      </div>
    </div>
  </div>
</template>
