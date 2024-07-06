<script setup lang="ts">
import { onMounted } from 'vue';
import HeaderItems from './components/HeaderItems.vue';
import GalleryItems from './components/GalleryItems.vue';
import SearchNoticeItems from './components/SearchNoticeItems.vue';
import { useGalleryStore } from './stores/GalleryStore';
import { useSearchStore } from './stores/SearchStore';
import { useColorThemeStore } from './stores/ColorThemeStore';
import Paginate from 'vuejs-paginate-next';

const paginate = Paginate;

const galleryStore = useGalleryStore();
const searchStore = useSearchStore();
const colorthemeStore = useColorThemeStore();

onMounted(() => {
  galleryStore.getGallery();
  galleryStore.getAuthors();
  galleryStore.getLocations();
  galleryStore.getPaintingCount();
});
</script>

<template>
  <HeaderItems />
  <div class="search">
    <div class="search-container">
      <img v-if="!colorthemeStore.theme" src="/public/search.svg" alt="" />
      <img v-else src="/public/search.dark.svg" alt="" />
      <input
        @input="searchStore.onChangeSearchInput"
        type="text"
        placeholder="Painting title..."
        class="search-input"
      />
    </div>
  </div>
  <div class="gallery">
    <GalleryItems v-if="!searchStore.filters.isEmpty" />
    <SearchNoticeItems v-else :text="searchStore.filters.searchQuery" />
  </div>
  <div class="pagination-block">
    <paginate
      v-if="searchStore.filters.searchQuery.length === 0"
      :page-count="galleryStore.getPageCount()"
      :click-handler="galleryStore.changePage"
      :prev-text="''"
      :next-text="''"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'prev-link'"
      :next-link-class="'next-link'"
    >
    </paginate>
  </div>
</template>
