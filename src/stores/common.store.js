import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCommon = defineStore('common', () => {
  const commonLoaderState = ref(false);

  // Example function to toggle loader
  const toggleLoader = () => {
    commonLoaderState.value = !commonLoaderState.value;
  };

  return { commonLoaderState, toggleLoader };
});
