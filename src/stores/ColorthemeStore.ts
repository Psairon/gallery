import { defineStore } from 'pinia';
import { ref, onMounted, watch } from 'vue';

export const useColorThemeStore = defineStore('colorThemeStore', () => {
  const theme = ref(false);
  let root: HTMLElement | null = null;

  onMounted(() => {
    root = document.querySelector(':root') as HTMLElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      theme.value = JSON.parse(savedTheme);
      if (theme.value) {
        root.classList.add('white');
      }
    }
  });

  const changeColorTheme = () => {
    if (root) {
      if (theme.value) {
        root.classList.remove('white');
      } else {
        root.classList.add('white');
      }
      theme.value = !theme.value;
    }
  };

  watch(
    theme,
    () => {
      localStorage.setItem('theme', JSON.stringify(theme.value));
    },
    { deep: true }
  );

  return { theme, changeColorTheme };
});
