<template>
  <div class="gallery-container">
    <h2>Gallery</h2>
    <div v-if="!showAll" class="gallery-scroller">
      <div class="image-scroll-grid">
        <div v-for="(image, index) in duplicatedImages" :key="index" class="image-item">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
    <div v-else class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <button @click="showAll = !showAll" class="view-all-btn">
      {{ showAll ? 'Show Less' : 'View All' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const showAll = ref(false);

const duplicatedImages = computed(() => {
  return [...props.images, ...props.images];
});
</script>

<style scoped>
.gallery-container {
  padding: 2rem;
  text-align: center;
}

.gallery-scroller {
  max-width: 100%;
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  margin-top: 2rem;
}

.image-scroll-grid {
  display: flex;
  width: calc(300px * 40);
  animation: scroll 60s linear infinite;
  gap: 2rem; /* Add space between cards */
  padding: 1rem 0; /* Add vertical padding */
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 20)); /* Update to match new width */
  }
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.view-all-btn {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-all-btn:hover {
  background-color: var(--primary-dark);
}

.image-item {
  width: 280px;
  height: 210px; /* Fixed height for consistency */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin: 0.5rem;
  position: relative;
}

.image-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  object-position: center;
}

.image-item:hover img {
  transform: scale(1.05);
}

/* Adjust grid layout for better responsiveness */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 1400px;
  padding: 0 1rem;
}

/* Adjust scroll grid for better spacing */
.image-scroll-grid {
  display: flex;
  width: calc(300px * 40);
  animation: scroll 60s linear infinite;
  gap: 1.5rem;
  padding: 2rem 0;
  align-items: center;
}
</style>
