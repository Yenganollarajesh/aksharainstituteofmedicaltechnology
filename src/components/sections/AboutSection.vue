<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Our College</h2>
        <p class="section-subtitle">Excellence in paramedical education since 2004</p>
      </div>
      
      <!-- College History & Vision -->
      <div class="about-content">
        <div class="about-text">
          <h3>Our History & Vision</h3>
          <p>
            <strong>Founded in 2004</strong> with a vision to bridge the gap between healthcare demand and skilled professionals, 
            our college has evolved into a leading paramedical education institution. Starting with just 3 courses and 50 students, 
            we now serve over 500 students across 15+ specialized programs.
          </p>
          <p>
            <strong>Our Vision:</strong> To be the premier paramedical college that produces competent healthcare professionals 
            who contribute meaningfully to society's health and well-being.
          </p>
          <p>
            <strong>Our Mission:</strong> Providing quality education, practical training, and holistic development to create 
            skilled paramedical professionals ready for the healthcare industry.
          </p>
        </div>
        
        <div class="about-image">
          <div class="image-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-icon">🏥</span>
              <p>Modern Campus & Facilities</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Accreditation Details -->
      <div class="accreditation-section">
        <h3>Accreditation & Recognition</h3>
        <div class="accreditation-grid">
          <div class="accreditation-card">
            <div class="accreditation-icon">🏆</div>
            <h4>State Government Approved</h4>
            <p>Recognized by the State Health Department and Education Ministry</p>
          </div>
          <div class="accreditation-card">
            <div class="accreditation-icon">📜</div>
            <h4>NAAC Accredited</h4>
            <p>National Assessment and Accreditation Council certified institution</p>
          </div>
          <div class="accreditation-card">
            <div class="accreditation-icon">🤝</div>
            <h4>Hospital Affiliations</h4>
            <p>Partnerships with 25+ leading hospitals for clinical training</p>
          </div>
          <div class="accreditation-card">
            <div class="accreditation-icon">✅</div>
            <h4>Industry Standards</h4>
            <p>Curriculum aligned with national healthcare standards and protocols</p>
          </div>
        </div>
      </div>

      <!-- Management & Faculty Profiles -->
      <div class="faculty-section">
        <h3>Leadership & Faculty</h3>
        
        <div class="management-profiles">
          <h4>Management Team</h4>
          <div class="profile-grid">
            <div class="profile-card">
              <div class="profile-avatar">👨‍💼</div>
              <div class="profile-info">
                <h5>Dr. Rajesh Kumar</h5>
                <p class="profile-title">Principal & Director</p>
                <p class="profile-desc">M.D., 25+ years in medical education and healthcare administration</p>
              </div>
            </div>
            <div class="profile-card">
              <div class="profile-avatar">👩‍💼</div>
              <div class="profile-info">
                <h5>Mrs. Priya Sharma</h5>
                <p class="profile-title">Academic Dean</p>
                <p class="profile-desc">M.Sc. Nursing, 20+ years in paramedical education and curriculum development</p>
              </div>
            </div>
          </div>
        </div>

        <div class="faculty-highlights">
          <h4>Faculty Excellence</h4>
          <div class="faculty-stats">
            <div class="faculty-stat">
              <span class="stat-number">25+</span>
              <span class="stat-label">Experienced Faculty</span>
            </div>
            <div class="faculty-stat">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years Avg. Experience</span>
            </div>
            <div class="faculty-stat">
              <span class="stat-number">80%</span>
              <span class="stat-label">Industry Background</span>
            </div>
          </div>
          <p class="faculty-description">
            Our faculty comprises experienced healthcare professionals, certified educators, and industry experts 
            who bring real-world knowledge to the classroom. Many hold advanced degrees and maintain active 
            practice in their respective fields.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  padding: 4rem 0;
  background: white;
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.about-text {
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
    line-height: 1.3;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    font-size: 1rem;
    
    strong {
      color: #1e40af;
      font-weight: 600;
    }
  }
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cbd5e1;
}

.placeholder-content {
  text-align: center;
  
  .placeholder-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }
  
  p {
    color: #64748b;
    font-weight: 500;
    margin: 0;
  }
}

// Accreditation Section
.accreditation-section {
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }
}

.accreditation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.accreditation-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.1);
    border-color: #1e40af;
  }
  
  .accreditation-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }
}

// Faculty Section
.faculty-section {
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }
}

.management-profiles {
  margin-bottom: 3rem;
  
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.profile-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e2e8f0;
  
  .profile-avatar {
    font-size: 2.5rem;
    width: 60px;
    height: 60px;
    background: #1e40af;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  
  .profile-info {
    h5 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.25rem;
      font-family: 'Inter', sans-serif;
    }
    
    .profile-title {
      font-size: 0.9rem;
      color: #1e40af;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    .profile-desc {
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.4;
      margin: 0;
    }
  }
}

.faculty-highlights {
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
}

.faculty-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.faculty-stat {
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  
  .stat-number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e40af;
    margin-bottom: 0.25rem;
    font-family: 'Inter', sans-serif;
  }
  
  .stat-label {
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 500;
  }
}

.faculty-description {
  color: #64748b;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .about-text h3, .accreditation-section h3, .faculty-section h3 {
    font-size: 1.5rem;
  }
  
  .image-placeholder {
    height: 250px;
  }
  
  .profile-card {
    flex-direction: column;
    text-align: center;
  }
  
  .faculty-stats {
    grid-template-columns: 1fr;
  }
}
</style>
