<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="#home" class="logo-link">
            <img :src="collegeLogo" alt="Akshara Institute of Medical Technology Logo" class="logo-img" />
            <div class="logo-text-wrapper">
              <h2 class="logo-text">AKSHARA INSTITUTE OF MEDICAL TECHNOLOGY</h2>
              <div class="logo-subtext">Redg:148/14/11/TGPMB/2024</div>
            </div>
          </a>
        </div>
        
        <div class="nav-menu" :class="{ active: isMenuOpen }">
          <a href="#home" class="nav-link" :class="{ active: activeSection === 'home' }" @click="closeMenu">Home</a>
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }" @click="closeMenu">About</a>
          <a href="#courses" class="nav-link" :class="{ active: activeSection === 'courses' }" @click="closeMenu">Courses</a>
          <a href="#admissions" class="nav-link" :class="{ active: activeSection === 'admissions' }" @click="closeMenu">Admissions</a>
          <a href="#news" class="nav-link" :class="{ active: activeSection === 'news' }" @click="closeMenu">News</a>
          <a href="#placement" class="nav-link" :class="{ active: activeSection === 'placement' }" @click="closeMenu">Placement</a>
          <a href="#facilities" class="nav-link" :class="{ active: activeSection === 'facilities' }" @click="closeMenu">Facilities</a>
          <a href="#gallery" class="nav-link" :class="{ active: activeSection === 'gallery' }" @click="closeMenu">Gallery</a>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }" @click="closeMenu">Contact</a>
        </div>
        
        <div class="nav-toggle" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import collegeLogo from '@/assets/collegeLogo.jpeg'

const isMenuOpen = ref(false)
const activeSection = ref('home')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Simple and reliable scroll detection
const updateActiveSection = () => {
  const sections = ['home', 'about', 'courses', 'admissions', 'news', 'placement', 'facilities', 'gallery', 'contact']
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  // If at the very top, always show home as active
  if (scrollTop < 100) {
    activeSection.value = 'home'
    return
  }
  
  // If near the bottom, show contact as active
  if (scrollTop + windowHeight >= documentHeight - 100) {
    activeSection.value = 'contact'
    return
  }
  
  // Find which section is most visible
  let currentSection = 'home'
  const offset = 150 // Account for header height
  
  for (let i = 0; i < sections.length; i++) {
    const section = document.getElementById(sections[i])
    if (section) {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionBottom = sectionTop + sectionHeight
      
      // Check if the section is in view
      if (scrollTop + offset >= sectionTop && scrollTop + offset < sectionBottom) {
        currentSection = sections[i]
        break
      }
    }
  }
  
  activeSection.value = currentSection
}

// Throttled scroll handler
let ticking = false
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateActiveSection()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Initial check after DOM is ready
  setTimeout(() => {
    updateActiveSection()
  }, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #ffffff;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--border-color);
}

.navbar {
  padding: 0 0.75rem;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  gap: 1.25rem;
}

.nav-logo {
  margin-right: 1.5rem;
  .logo-link {
    text-decoration: none;
    color: var(--primary-color);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    
    &:hover {
      color: var(--primary-light);
    }
    
    .logo-img {
      height: 52px;
      width: auto;
      object-fit: contain;
      object-position: center;
      border-radius: 0;
      display: block;
      flex-shrink: 0;
    }

    .logo-text-wrapper {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .logo-text {
      margin: 0;
      font-size: 1.2rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      letter-spacing: 0.01em;
      white-space: nowrap;
      max-width: 60vw;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .logo-subtext {
      margin: 0;
      margin-top: 2px;
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.04em;
    }
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
  margin-left: auto;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover, &.active {
    color: var(--primary-color);
    
    &::after {
      width: 100%;
    }
  }

  &.active {
    font-weight: 600;
  }
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.3s;
  }
}

@media screen and (max-width: 768px) {
  .nav-logo .logo-link {
    gap: 0.5rem;
  }

  .nav-logo .logo-link .logo-img {
    height: 44px;
    width: auto;
  }

  .nav-logo .logo-link .logo-text {
    font-size: 1rem;
    white-space: normal;
  }

  .nav-logo .logo-link .logo-subtext {
    font-size: 0.7rem;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;

    &.active {
      left: 0;
    }
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
