<template>
  <section class="stats-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Achievements</h2>
        <p class="section-subtitle">Building excellence in paramedical education</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">👥</div>
          <div class="stat-number">120+</div>
          <div class="stat-label">Students Enrolled</div>
          <div class="stat-description">Active learners across all programs</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">📚</div>
          <div class="stat-number">3</div>
          <div class="stat-label">Courses Offered</div>
          <div class="stat-description">Comprehensive paramedical programs</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🎯</div>
          <div class="stat-number">100%</div>
          <div class="stat-label">Placement Rate</div>
          <div class="stat-description">Guaranteed career opportunities</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">⭐</div>
          <div class="stat-number">2+</div>
          <div class="stat-label">Years Experience</div>
          <div class="stat-description">Trusted healthcare education</div>
        </div>
      </div>
      
      <div class="achievements-banner">
        <div class="banner-content">
          <h3>🏆 Recognized Excellence</h3>
          <p>Accredited by leading healthcare education boards and trusted by top hospitals nationwide</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.75rem;
  font-family: 'Inter', sans-serif;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #64748b;
  font-weight: 400;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-item {
  text-align: center;
  padding: 2.5rem 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.15);
    border-color: #1e40af;
  }
  
  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  .stat-number {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: #1e40af;
    font-family: 'Inter', sans-serif;
    line-height: 1;
  }
  
  .stat-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  .stat-description {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.4;
  }
}

.achievements-banner {
  background: linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(30, 64, 175, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .banner-content {
    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      font-family: 'Inter', sans-serif;
      color: #ffffff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    
    p {
      font-size: 1rem;
      color: #e2e8f0;
      line-height: 1.6;
      margin: 0;
      font-weight: 400;
    }
  }
}

@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .stat-item {
    padding: 2rem 1rem;
    
    .stat-icon {
      font-size: 2rem;
    }
    
    .stat-number {
      font-size: 2.5rem;
    }
    
    .stat-label {
      font-size: 1rem;
    }
    
    .stat-description {
      font-size: 0.85rem;
    }
  }
  
  .achievements-banner {
    padding: 1.5rem;
    
    .banner-content h3 {
      font-size: 1.25rem;
    }
    
    .banner-content p {
      font-size: 0.9rem;
    }
  }
}
</style>
