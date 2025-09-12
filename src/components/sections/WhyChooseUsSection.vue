<template>
  <section id="why-choose-us" class="why-choose-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose Our College?</h2>
        <p class="section-subtitle">Excellence in paramedical education</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">🎓</div>
          <h3>Quality Education</h3>
          <p>Industry-aligned curriculum with practical training</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">🏥</div>
          <h3>Modern Facilities</h3>
          <p>State-of-the-art labs and medical equipment</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">👨‍⚕️</div>
          <h3>Expert Faculty</h3>
          <p>Experienced medical professionals</p>
        </div>
        
        <div class="feature-item">
          <div class="feature-icon">💼</div>
          <h3>100% Placement</h3>
          <p>Strong industry partnerships</p>
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
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
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
