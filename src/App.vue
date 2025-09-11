<script setup>
import { RouterView, useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCommon } from './stores/common.store.js';
import CircularProgressBar from './components/sharedComponents/CircularProgressBar.vue';
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

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
    <AppHeader />
    <main class="main-content">
      <RouterView :key="route.fullPath" />
    </main>
    <AppFooter />
    <CircularProgressBar v-if="commonLoaderState" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

:root {
  /* Modern Academic Color Palette - Inspired by Harvard, Stanford, MIT */
  --primary-color: #1e3a8a; /* Deep academic blue */
  --primary-light: #3b82f6; /* Bright blue */
  --primary-dark: #1e40af; /* Darker blue */
  --secondary-color: #059669; /* Academic green */
  --accent-color: #dc2626; /* Academic red accent */
  --gold-accent: #f59e0b; /* Gold for achievements */
  --success-color: #10b981; /* Success green */
  --warning-color: #f59e0b; /* Warning amber */
  
  /* Professional Neutral Colors */
  --text-primary: #111827; /* Almost black */
  --text-secondary: #4b5563; /* Medium gray */
  --text-light: #6b7280; /* Light gray */
  --background-white: #ffffff;
  --background-light: #f9fafb; /* Very light gray */
  --background-section: #f3f4f6; /* Light section background */
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-primary);
  background-color: var(--background-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Typography - Academic Style */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin-bottom: 0.75em;
  letter-spacing: -0.025em;
}

h1 { 
  font-size: 3.5rem; 
  font-weight: 800;
  font-family: 'Playfair Display', serif;
  line-height: 1.1;
}
h2 { 
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}
h3 { 
  font-size: 1.875rem;
  font-weight: 600;
}
h4 { 
  font-size: 1.5rem;
  font-weight: 600;
}
h5 {
  font-size: 1.25rem;
  font-weight: 600;
}
h6 {
  font-size: 1.125rem;
  font-weight: 600;
}

p {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1em;
}

/* Ensure sections account for fixed header */
section {
  scroll-margin-top: 80px;
  transition: all 0.3s ease;
}

/* Smooth animations */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide-up {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Smooth hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow-medium);
}

/* Smooth scroll for anchor links */
a[href^="#"] {
  text-decoration: none;
  transition: all 0.3s ease;
}

/* Button base styles */
.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Inter', sans-serif;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  box-shadow: var(--shadow-md);
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875rem;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875rem;
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.btn-accent {
  background: var(--accent-color);
  color: white;
  box-shadow: var(--shadow-md);
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.875rem;
}

.btn-accent:hover {
  background: #b91c1c;
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

/* Form elements */
input, textarea, select {
  font-family: 'Inter', sans-serif;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 0.875rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--background-white);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--shadow-light);
}
</style>
