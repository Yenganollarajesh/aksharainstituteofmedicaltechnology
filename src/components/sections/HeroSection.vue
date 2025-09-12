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
        <div class="hero-highlights">
          <div class="highlight-item">
            <span class="highlight-icon">🎓</span>
            <span class="highlight-text">Expert Faculty</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">🏥</span>
            <span class="highlight-text">Modern Facilities</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-icon">📚</span>
            <span class="highlight-text">Comprehensive Curriculum</span>
          </div>
        </div>
        <p class="admission-info">
          Admissions open for 2024-25 batch. Visit our campus for offline registration and counseling.
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
  padding-bottom: 2rem;
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
    max-width: 200px;
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

.hero-highlights {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 200px;
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.highlight-text {
  font-weight: 500;
  color: #1e40af;
  font-size: 0.95rem;
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
  .hero-highlights {
    gap: 1.5rem;
  }
  
  .highlight-item {
    max-width: 120px;
  }
  
  .admission-info {
    margin: 1rem 0.5rem 0;
    font-size: 0.95rem;
    padding: 0.8rem 1rem;
  }
}
</style>
