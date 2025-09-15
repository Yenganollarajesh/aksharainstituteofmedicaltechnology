<template>
  <section id="home" class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
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
import collegeBuildingImg from '@/assets/collegeBuildingImg.jpg';
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: white;
  padding: 0;
  margin: 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/collegeBuildingImg.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #f5f7fa; /* Light gray background for better contrast */
  z-index: 0;
  animation: zoomIn 15s ease-in-out infinite alternate;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: translateZ(0);
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
}

@keyframes zoomIn {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
  pointer-events: none;
  backdrop-filter: blur(1px);
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 2rem 1rem;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  /* max-width: 800px; */
  width: 100%;
  margin: 0 auto;
}

.college-logo {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  padding: 0.5rem;
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(5, 150, 105, 0.2));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.college-logo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  padding: 0.25rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.college-logo img {
  max-width: clamp(100px, 16vw, 180px);
  height: auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.25rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.college-logo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.college-logo:hover img {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.college-name {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 1.5rem 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.02em;
}

.hero-tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 500;
  color: #a5f3fc;
  margin-bottom: 1.5rem;
  font-style: italic;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #f0f9ff;
  margin: 2rem auto 3rem;
  max-width: 800px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
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
  white-space: nowrap;
}

.admission-info {
  background: rgba(30, 64, 175, 0.9);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  max-width: 600px;
  margin: 2rem auto 0;
  border: none;
  text-align: center;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.admission-info:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

@media (max-width: 1024px) {
  .hero-background {
    background-attachment: scroll;
    background-position: center top;
    background-size: contain;
    background-color: #000; /* Add a dark background for any empty space */
  }
  
  .hero-container {
    min-height: 100vh;
    height: auto;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
    height: 100%;
    min-height: -webkit-fill-available;
  }
  
  .hero-background {
    background-size: contain;
    background-position: center top;
    background-color: #f5f7fa; /* Light gray background for better contrast */
  }
  
  .hero-container {
    padding: 4rem 1rem 2rem;
    min-height: 100vh;
  }
  
  .college-logo img {
    max-width: 120px;
  }
  
  .college-info {
    gap: 0.75rem;
    margin: 1.5rem 0;
    flex-direction: column;
    align-items: center;
  }
  
  .info-item {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .admission-info {
    margin: 1.5rem 0.5rem 0;
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
    max-width: 100%;
  }
  
  .hero-description {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .college-name {
    font-size: clamp(1.5rem, 7vw, 2rem);
    margin: 1rem 0;
    padding: 0 0.5rem;
  }
  
  .hero-tagline {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 1.5rem auto 2rem;
  }
  
  .info-item {
    max-width: 100%;
  }
}
</style>
