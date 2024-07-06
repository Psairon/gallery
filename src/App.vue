<script setup lang="ts">
import HeaderItems from './components/HeaderItems.vue';
import GalleryItems from './components/GalleryItems.vue';
import { useGalleryStore } from './stores/GalleryStore';
import { useSearchStore } from './stores/SearchStore';
import { useColorthemeStore } from './stores/ColorthemeStore';
import { onMounted } from 'vue';
import Paginate from 'vuejs-paginate-next';

const paginate = Paginate;

const galleryStore = useGalleryStore();
const searchStore = useSearchStore();
const colorthemeStore = useColorthemeStore();

onMounted(() => {
  galleryStore.getGallery();
  galleryStore.getAuthors();
  galleryStore.getLocations();
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
    <GalleryItems
      v-for="item in galleryStore.gallery"
      :key="item.id"
      :img="item.imageUrl"
      :title="item.name"
      :year="item.created"
      :author="galleryStore.getAuthorById(item.authorId)"
      :location="galleryStore.getLocationById(item.locationId)"
    />
  </div>
  <div class="pagination-block">
    <paginate
      v-if="searchStore.filters.searchQuery.length === 0"
      :page-count="6"
      :click-handler="galleryStore.changePage"
      :prev-text="''"
      :next-text="''"
      npm
      run
      build
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'prev-link'"
      :next-link-class="'next-link'"
    >
    </paginate>
  </div>
</template>
