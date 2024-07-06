import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

interface Author {
  id: number;
  name: string;
}

interface Location {
  id: number;
  location: string;
}

export const useGalleryStore = defineStore('galleryStore', () => {
  const gallery = ref<Painting[]>([]);
  const authors = ref<Author[]>([]);
  const locations = ref<Location[]>([]);

  const getGallery = async () => {
    try {
      const { data } = await axios.get<Painting[]>(
        'https://test-front.framework.team/paintings?_limit=6'
      );
      gallery.value = data;
    } catch (err) {
      console.error(err);
    }
  };

  const getAuthors = async () => {
    try {
      const { data } = await axios.get<Author[]>('https://test-front.framework.team/authors');
      authors.value = data;
    } catch (err) {
      console.error(err);
    }
  };

  const getLocations = async () => {
    try {
      const { data } = await axios.get<Location[]>('https://test-front.framework.team/locations');
      locations.value = data;
    } catch (err) {
      console.error(err);
    }
  };

  const getAuthorById = (id: number): string => {
    const result = authors.value.find((author) => author.id === id);
    return result ? result.name : 'Unknown Author';
  };

  const getLocationById = (id: number): string => {
    const result = locations.value.find((location) => location.id === id);
    return result ? result.location : 'Unknown Location';
  };

  const newPage = async (page: number) => {
    try {
      const { data } = await axios.get<Painting[]>(
        `https://test-front.framework.team/paintings?_page=${page}&_limit=6`
      );
      gallery.value = data;
    } catch (err) {
      console.error(err);
    }
  };

  const changePage = (page: number) => {
    newPage(page);
  };

  return {
    gallery,
    getGallery,
    changePage,
    getAuthors,
    getAuthorById,
    getLocations,
    getLocationById
  };
});
