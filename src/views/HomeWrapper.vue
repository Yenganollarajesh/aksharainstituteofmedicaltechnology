<template>
  <div class="home-page">
    <HeroSection />

    <WhyChooseUsSection />

    <StatsSection />

    <AboutSection />

    <CoursesSection />

    <AdmissionsSection />

    <!-- <NewsSection /> -->

    <PlacementSection />
    
    <FacilitiesSection />

    <section id="gallery" class="gallery-section">
      <Gallery :images="galleryImages" />
    </section>

    <ContactSection />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Gallery from '@/components/Gallery.vue';

// Import all section components
import HeroSection from '@/components/sections/HeroSection.vue';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import CoursesSection from '@/components/sections/CoursesSection.vue';
import AdmissionsSection from '@/components/sections/AdmissionsSection.vue';
import NewsSection from '@/components/sections/NewsSection.vue';
import PlacementSection from '@/components/sections/PlacementSection.vue';
import FacilitiesSection from '@/components/sections/FacilitiesSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

// Import gallery images
import image1 from '@/assets/gallery/image1.jpeg';
import image2 from '@/assets/gallery/image2.jpeg';
import image3 from '@/assets/gallery/image3.jpeg';
import image4 from '@/assets/gallery/image4.jpeg';
import image5 from '@/assets/gallery/image5.jpeg';
import image6 from '@/assets/gallery/image6.jpeg';
import image7 from '@/assets/gallery/image7.jpeg';
import image8 from '@/assets/gallery/image8.jpeg';
import image9 from '@/assets/gallery/image9.jpeg';
import image10 from '@/assets/gallery/image10.jpeg';
import image11 from '@/assets/gallery/image11.jpeg';
import image12 from '@/assets/gallery/image12.jpeg';
import image13 from '@/assets/gallery/image13.jpeg';
import image14 from '@/assets/gallery/image14.jpeg';
import image15 from '@/assets/gallery/image15.jpeg';
import image16 from '@/assets/gallery/image16.jpeg';
import image17 from '@/assets/gallery/image17.jpeg';
import image18 from '@/assets/gallery/image18.jpeg';
import image19 from '@/assets/gallery/image19.jpeg';
import image20 from '@/assets/gallery/image20.jpeg';
import image21 from '@/assets/gallery/image21.jpeg';
import image22 from '@/assets/gallery/image22.jpeg';
import image23 from '@/assets/gallery/image23.jpeg';
import image24 from '@/assets/gallery/image24.jpeg';

const galleryImages = ref([
  { src: image1, alt: 'Gallery Image 1' },
  { src: image2, alt: 'Gallery Image 2' },
  { src: image3, alt: 'Gallery Image 3' },
  { src: image4, alt: 'Gallery Image 4' },
  { src: image21, alt: 'Gallery Image 21' },
  { src: image22, alt: 'Gallery Image 22' },
  { src: image23, alt: 'Gallery Image 23' },
  { src: image24, alt: 'Gallery Image 24' },
  { src: image5, alt: 'Gallery Image 5' },
  { src: image6, alt: 'Gallery Image 6' },
  { src: image7, alt: 'Gallery Image 7' },
  { src: image8, alt: 'Gallery Image 8' },
  { src: image9, alt: 'Gallery Image 9' },
  { src: image10, alt: 'Gallery Image 10' },
  { src: image11, alt: 'Gallery Image 11' },
  { src: image12, alt: 'Gallery Image 12' },
  { src: image13, alt: 'Gallery Image 13' },
  { src: image14, alt: 'Gallery Image 14' },
  { src: image15, alt: 'Gallery Image 15' },
  { src: image16, alt: 'Gallery Image 16' },
  { src: image17, alt: 'Gallery Image 17' },
  { src: image18, alt: 'Gallery Image 18' },
  { src: image19, alt: 'Gallery Image 19' },
  { src: image20, alt: 'Gallery Image 20' },
]);

// Gallery images for the gallery section
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 70px; // Account for fixed header
}

// Gallery section styling
.gallery-section {
  // padding: 5rem 0;
  background: var(--background-section);
}
</style>
<style lang="scss">
section{
  background: var(--background-section);
  // background: linear-gradient(to right, #1e3a8a, #0f766e);
  // background: #f8fafc;
}
</style>
