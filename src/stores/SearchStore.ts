import { reactive, watch } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useGalleryStore } from './GalleryStore';

export const useSearchStore = defineStore('searchStore', () => {
  const galleryStore = useGalleryStore();

  const filters = reactive<{ searchQuery: string; isEmpty: boolean }>({
    searchQuery: '',
    isEmpty: false
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
        if (data.length) {
          galleryStore.gallery = data;
        } else {
          filters.isEmpty = true;
        }
      } else {
        galleryStore.getGallery();
        filters.isEmpty = false;
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
