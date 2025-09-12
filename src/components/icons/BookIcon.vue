<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
  >
    <path 
      d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20M4 19.5C4 20.8807 5.11929 22 6.5 22H20V17M4 19.5V6.5C4 5.11929 5.11929 4 6.5 4H20V17M20 4H6.5C5.11929 4 4 5.11929 4 6.5V19.5" 
      :stroke="color" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path 
      d="M8 8H16M8 12H16" 
      :stroke="color" 
      stroke-width="2" 
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
