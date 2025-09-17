<template>
  <div 
    class="whatsapp-widget" 
    @click="openWhatsApp" 
    @mouseenter="handleHover(true)" 
    @mouseleave="handleHover(false)"
    :class="{ 'is-hovered': isHovered }"
  >
    <div class="whatsapp-ripple"></div>
    <div class="whatsapp-icon" :class="{ 'pulse': isPulsing }">
      <svg 
        viewBox="0 0 24 24" 
        class="whatsapp-logo"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012 0a11.94 11.94 0 00-10.2 18.42L0 24l5.73-1.77A11.94 11.94 0 0012 24a11.91 11.91 0 008.52-20.52zm-8.52 18a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.4 1.05 1.09-3.31-.23-.37A9.93 9.93 0 1112 21.48zm5.65-7.48c-.31-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.21.31-.78 1-.95 1.21-.18.21-.35.23-.66.08s-1.28-.47-2.43-1.5a9.2 9.2 0 01-1.7-2.1c-.18-.31 0-.48.14-.63.15-.15.31-.35.47-.52.16-.18.21-.31.31-.52.1-.21.05-.39-.02-.55-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.79.39s-1.04 1.02-1.04 2.48 1.07 2.87 1.22 3.07c.15.21 2.1 3.22 5.07 4.52.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.11.57-.08 1.82-.74 2.08-1.46.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.59-.37z"/>
      </svg>
    </div>
    <div class="whatsapp-tooltip" :class="{ 'show': showTooltip }">
      <div class="tooltip-content">
        <div class="tooltip-header">Need help?</div>
        <div class="tooltip-message">Chat with us on WhatsApp</div>
        <div class="tooltip-hint">We typically reply within minutes</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showTooltip = ref(false);
const isMobile = ref(window.innerWidth <= 768);
const isHovered = ref(false);
const isPulsing = ref(false);
const pulseInterval = ref(null);
const tooltipTimeout = ref(null);
const lastInteraction = ref(null);
const unreadCount = ref(0);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleHover = (isHovering) => {
  isHovered.value = isHovering;
  if (isHovering) {
    showTooltip.value = true;
    if (tooltipTimeout.value) clearTimeout(tooltipTimeout.value);
  } else {
    tooltipTimeout.value = setTimeout(() => {
      showTooltip.value = false;
    }, 300);
  }
};

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number (with country code, no + or spaces)
  const phoneNumber = '919949698592'; // Example Indian number
  const message = encodeURIComponent('Hello, I have a question about your courses.');
  
  // Track the interaction
  lastInteraction.value = Date.now();
  localStorage.setItem('whatsappWidgetLastVisit', lastInteraction.value.toString());
  
  // Reset unread count and stop pulsing
  unreadCount.value = 0;
  isPulsing.value = false;
  
  // Open WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  
  // Add click animation
  const icon = document.querySelector('.whatsapp-icon');
  if (icon) {
    icon.classList.add('clicked');
    setTimeout(() => icon.classList.remove('clicked'), 300);
  }
};

const triggerPulse = () => {
  if (!isHovered.value && document.visibilityState === 'visible') {
    isPulsing.value = true;
    setTimeout(() => {
      isPulsing.value = false;
    }, 1200);
    
    if (showTooltip.value === false) {
      showTooltip.value = true;
      setTimeout(() => {
        if (!isHovered.value) {
          showTooltip.value = false;
        }
      }, 3000);
    }
  }
};

const startPulseInterval = () => {
  if (pulseInterval.value) clearInterval(pulseInterval.value);
  
  // Initial delay before first pulse (10 seconds)
  setTimeout(() => {
    triggerPulse();
    
    // Set interval for subsequent pulses (every 30 seconds)
    pulseInterval.value = setInterval(() => {
      triggerPulse();
    }, 30000);
  }, 10000);
};

const checkLastInteraction = () => {
  const lastInteractionTime = localStorage.getItem('whatsappWidgetLastVisit');
  if (lastInteractionTime) {
    const hoursSinceLastInteraction = (Date.now() - parseInt(lastInteractionTime)) / (1000 * 60 * 60);
    // Show pulse if last interaction was more than 1 hour ago
    if (hoursSinceLastInteraction > 1) {
      startPulseInterval();
    } else {
      // If recent interaction, start pulsing after 1 hour
      const timeUntilNextPulse = (1 - hoursSinceLastInteraction) * 60 * 60 * 1000;
      setTimeout(startPulseInterval, Math.max(0, timeUntilNextPulse));
    }
  } else {
    // First time user, start pulsing after 10 seconds
    setTimeout(startPulseInterval, 10000);
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('resize', handleResize);
  checkLastInteraction();
  // 👇 Show welcome message on page load
  showTooltip.value = true;
  tooltipTimeout.value = setTimeout(() => {
    showTooltip.value = false;
  }, 5000); // Hide after 5 seconds
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  if (tooltipTimeout.value) clearTimeout(tooltipTimeout.value);
  if (pulseInterval.value) clearInterval(pulseInterval.value);
});
</script>

<style scoped lang="scss">
$whatsapp-green: #25D366;
$whatsapp-dark: #075E54;
$whatsapp-light: #DCF8C6;
$shadow-color: rgba(0, 0, 0, 0.15);

.whatsapp-widget {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  -webkit-tap-highlight-color: transparent;
  perspective: 1000px;
  
  &:hover {
    transform: translateY(-3px);
    filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.15));
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &.is-hovered {
    .whatsapp-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(0) translateY(-50%);
    }
  }
}

.whatsapp-ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(37, 211, 102, 0.15);
  border-radius: 50%;
  animation: ripple 2s infinite;
  opacity: 0;
  transition: all 0.4s ease-out;
  pointer-events: none;
}

.whatsapp-widget:hover .whatsapp-ripple {
  opacity: 1;
  transform: scale(1.1);
}

@keyframes ripple {
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.3);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes pulse {
  0% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% { 
    transform: scale(1.12);
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0.3);
  }
  100% { 
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.whatsapp-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #FF3B30;
  color: white;
  border-radius: 10px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  padding: 0 5px;
  z-index: 3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: bounceIn 0.3s ease-out;
}

.whatsapp-icon {
  width: 64px;
  height: 64px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 9999;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  overflow: visible;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:active {
    transform: scale(0.95) translateY(2px);
  }
  
  &.clicked {
    animation: pulse 0.5s ease-out;
  }
}

.whatsapp-logo {
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;
  transform: translateZ(0);
  
  .pulse & {
    animation: pulse 1.5s infinite;
  }
}

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0.5) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.whatsapp-tooltip {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translate(10px, -50%);
  background: white;
  color: #333;
  width: 260px;
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  pointer-events: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-align: left;
  overflow: hidden;
  z-index: 10000;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #25D366, #128C7E);
  }
  
  .tooltip-content {
    padding: 18px 20px;
    position: relative;
    z-index: 1;
  }
  
  .tooltip-header {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 6px;
    color: #075E54;
    letter-spacing: 0.2px;
  }
  
  .tooltip-message {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 6px;
    color: #374151;
    font-weight: 400;
  }
  
  .tooltip-hint {
    font-size: 12px;
    color: #6B7280;
    font-style: normal;
    margin-top: 4px;
    display: flex;
    align-items: center;
    
    &::before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 6px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236B7280'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
}

.whatsapp-tooltip .tooltip-arrow {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: white;
  box-shadow: 3px -3px 6px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.whatsapp-tooltip.show {
  opacity: 1;
  visibility: visible;
  transform: translate(0, -50%);
  animation: tooltipFadeIn 0.3s ease-out forwards;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translate(10px, -50%) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translate(0, -50%) scale(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .whatsapp-widget {
    bottom: 20px;
    right: 15px;
    
    &:hover {
      transform: none;
    }
  }
  
  .whatsapp-icon {
    width: 56px;
    height: 56px;
    padding: 10px;
  }
  
  .whatsapp-tooltip {
    display: block;
    right: 0%;
    top: -115%;
  }
  
  .whatsapp-badge {
    min-width: 18px;
    height: 18px;
    font-size: 10px;
  }
  
  .whatsapp-widget:active .whatsapp-icon {
    transform: scale(0.92);
  }
}

.whatsapp-widget:hover .whatsapp-icon {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  
  &::before {
    opacity: 1;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .whatsapp-tooltip {
    background: #1F2937;
    border-color: rgba(255, 255, 255, 0.05);
    color: #F3F4F6;
    
    .tooltip-header {
      color: #4ADE80;
    }
    
    .tooltip-message {
      color: #E5E7EB;
    }
    
    .tooltip-hint {
      color: #9CA3AF;
      
      &::before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z'/%3E%3C/svg%3E");
      }
    }
  }
  
  .whatsapp-icon {
    background: #075E54;
    box-shadow: 0 4px 15px rgba(7, 94, 84, 0.3);
    
    &:hover {
      box-shadow: 0 6px 20px rgba(7, 94, 84, 0.5);
    }
  }
}
</style>
