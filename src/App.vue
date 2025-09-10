<script setup>
import { RouterView, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCommon } from './stores/common.store.js';
import CircularProgressBar from './components/sharedComponents/CircularProgressBar.vue';

const route = useRoute();
const commonStore = useCommon();
const { commonLoaderState } = storeToRefs(commonStore);

// Example init function
const init = () => {
  console.log('App initialized');
};
init();
</script>

<template>
  <div class="app-wrapper">
    <RouterView :key="route.fullPath" />
    <CircularProgressBar v-if="commonLoaderState" />
  </div>
</template>
