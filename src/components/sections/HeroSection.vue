<template>
  <section id="home" class="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="college-logo">
          <img :src="collegeLogo" alt="College Logo" />
        </div>
        <h1 class="college-name">AKSHARA INSTITUTE OF MEDICAL TECHNOLOGY</h1>
        <p class="hero-tagline">Shaping Healthcare Professionals for Tomorrow</p>
        <p class="hero-description">
          Join our world-class paramedical programs and embark on a rewarding career in healthcare.
        </p>
        <div class="college-info">
          <div class="info-item">
            <span class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="info-text">Founded: 2024</span>
          </div>
          <div class="info-item">
            <span class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="info-text">College Code: AIT-2024</span>
          </div>
        </div>
        <p class="admission-info">
          Admissions open for 2025-26 batch. Visit our campus for offline registration and counseling.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import collegeLogo from '@/assets/collegeLogo.png';
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 1rem 1rem 2rem 1rem;
  z-index: 2;
}

.hero-content {
  text-align: center;
  // max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.college-logo {
  // margin-bottom: 2rem;
  
  img {
    max-width: clamp(140px, 18vw, 220px);
    height: auto;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  }
}

.college-name {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #1e40af;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.02em;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  color: #059669;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 2.5rem;
  // max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.college-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
    color: #1e40af;
  }
}

.info-text {
  font-weight: 600;
  color: #1e40af;
  font-size: 1rem;
}

.admission-info {
  background: rgba(30, 64, 175, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #1e40af;
  font-weight: 500;
  max-width: 600px;
  margin: 1.5rem auto 0;
  border-left: 4px solid #1e40af;
  text-align: center;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
  }
  
  .hero-container {
    padding: 1rem 1rem 1.5rem 1rem;
  }
  
  .college-info {
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .info-item {
    padding: 0.65rem 1rem;
    font-size: 0.9rem;
  }
  
  .admission-info {
    margin: 1rem 0.5rem 0;
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
  }
}

@media (max-width: 480px) {
  .college-name {
    font-size: clamp(1.6rem, 8vw, 2.1rem);
  }
  .hero-description {
    font-size: 1rem;
  }
}
</style>
