<template>
  <section class="stats-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Achievements</h2>
        <p class="section-subtitle">Building excellence in paramedical education</p>
      </div>
      
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-number">120+</div>
          <div class="stat-label">Students Enrolled</div>
          <div class="stat-description">Active learners across all programs</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-number">3</div>
          <div class="stat-label">Courses Offered</div>
          <div class="stat-description">Comprehensive paramedical programs</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#1e40af" stroke-width="2"/>
              <circle cx="12" cy="12" r="6" stroke="#1e40af" stroke-width="2"/>
              <circle cx="12" cy="12" r="2" stroke="#1e40af" stroke-width="2"/>
            </svg>
          </div>
          <div class="stat-number">100%</div>
          <div class="stat-label">Placement Rate</div>
          <div class="stat-description">Guaranteed career opportunities</div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-number">2+</div>
          <div class="stat-label">Years Experience</div>
          <div class="stat-description">Trusted healthcare education</div>
        </div>
      </div>
      
      <div class="achievements-banner">
        <div class="banner-content">
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
              <path d="M6 9C6 10.45 6.39 11.8 7.12 12.96C7.85 14.12 8.88 15.02 10.11 15.58C11.34 16.14 12.72 16.34 14.07 16.16C15.42 15.98 16.68 15.43 17.71 14.57C18.74 13.71 19.5 12.58 19.92 11.31C20.34 10.04 20.4 8.68 20.08 7.38C19.76 6.08 19.07 4.89 18.08 3.93C17.09 2.97 15.84 2.28 14.5 1.92L12 9H6Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 21V9L12 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 21V9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Recognized Excellence
          </h3>
          <p>Accredited by leading healthcare education boards and trusted by top hospitals nationwide</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats-section {
  padding: 4rem 0;
  // background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
  grid-template-columns: repeat(4, 1fr);
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

/* Tablet Styles */
@media (min-width: 641px) and (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: 100%;
    margin: 0 auto 3rem;
  }
}

/* Mobile Styles */
@media (max-width: 640px) {
  .stats-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
    margin: 0 auto 2rem;
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
