<template>
  <section id="why-choose-us" class="why-choose-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose Our College?</h2>
        <p class="section-subtitle">Excellence in paramedical education</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
              <path d="M19 15L20.09 19.26L24 20L20.09 20.74L19 25L17.91 20.74L14 20L17.91 19.26L19 15Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Quality Education</h3>
          <p>Industry-aligned curriculum with practical training</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21V19H3V21ZM5 19V7H7V19H5ZM9 19V3H11V19H9ZM13 19V11H15V19H13ZM17 19V15H19V19H17Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Modern Facilities</h3>
          <p>State-of-the-art labs and medical equipment</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>Expert Faculty</h3>
          <p>Experienced medical professionals</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H16L14 4H10L8 6H4C2.9 6 2 6.9 2 8V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V8C22 6.9 21.1 6 20 6ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17Z" fill="currentColor"/>
            </svg>
          </div>
          <h3>100% Placement</h3>
          <p>Trusted by Medical & Health Department networks</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-choose-section {
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.1);
    border-color: #1e40af;
  }
  
  .feature-icon {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 40px;
      height: 40px;
      color: #1e40af;
    }
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: #64748b;
    line-height: 1.5;
    font-size: 0.95rem;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .why-choose-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .features-grid {
    gap: 1rem;
  }
  
  .feature-item {
    padding: 1.5rem;
  }
}
</style>
