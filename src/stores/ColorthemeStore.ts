import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useColorthemeStore = defineStore('colorthemeStore', () => {
  const theme = ref(false);
  let root: HTMLElement | null = null;

  onMounted(() => {
    root = document.querySelector(':root') as HTMLElement;
  });

  const colortheme = () => {
    if (root) {
      if (theme.value) {
        root.classList.remove('white');
      } else {
        root.classList.add('white');
      }
      theme.value = !theme.value;
    }
  };

  return { theme, colortheme };
});
