import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useGalleryStore } from './GalleryStore';

export const useSearchStore = defineStore('searchStore', () => {
  const galleryStore = useGalleryStore();

  const filters = reactive<{ searchQuery: string }>({
    searchQuery: ''
  });

  const onChangeSearchInput = debounce((event: Event) => {
    const target = event.target as HTMLInputElement;
    filters.searchQuery = target.value;
  }, 300);

  const fetchItems = async () => {
    try {
      if (filters.searchQuery !== '') {
        const { data } = await axios.get(
          `https://test-front.framework.team/paintings?q=${filters.searchQuery}`
        );
        console.log(data);
        galleryStore.gallery = data;
      } else {
        galleryStore.getGallery();
      }
    } catch (err) {
      console.log(err);
    }
  };

  watch(filters, fetchItems, { deep: true });

  return {
    filters,
    onChangeSearchInput
  };
});
