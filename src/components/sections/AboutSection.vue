<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About Our College</h2>
        <p class="section-subtitle">Excellence in paramedical education since 2024</p>
      </div>
      
      <!-- College History & Vision -->
      <div class="about-content">
        <div class="about-image">
          <img 
            src="@/assets/OurHistoryAndVision.png" 
            alt="Our History and Vision" 
            class="about-image-content"
            loading="lazy"
          />
        </div>
        
        <div class="about-text">
          <h3>Our History & Vision</h3>
          <p>
            <strong>Founded in 2024</strong> with a vision to bridge the gap between healthcare demand and skilled professionals, 
            our college has evolved into a leading paramedical education institution. Starting with just 3 courses and 40 students, 
            we now serve over 120+ students across 3 specialized programs.
          </p>
          <p>
            <strong>Our Vision:</strong> To be the premier paramedical college that produces competent healthcare professionals 
            who contribute meaningfully to society's health and well-being.
          </p>
          <p>
            <strong>Our Mission:</strong> Providing quality education, practical training, and holistic development to create 
            skilled paramedical professionals ready for the Medical & Health Department.
          </p>
        </div>
      </div>

      <!-- Accreditation Details -->
      <div class="accreditation-section">
        <h3>Accreditation & Recognition</h3>
        <div class="accreditation-grid">
          <div class="accreditation-card">
            <div class="accreditation-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 22h16l-1-7H5l-1 7z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 15v-3a4 4 0 0 1 8 0v3" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4>State Government Approved</h4>
            <p>Recognized by the Telangana State Health Department and affiliated with the TS Paramedical Board</p>
          </div>
          <div class="accreditation-card">
            <div class="accreditation-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18l2 2 4-4" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 4.21l4.5 2.6 4.5-2.6" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 6.81V17" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h4>Hospital Affiliations</h4>
            <p>Partnerships with 25+ leading hospitals for clinical training</p>
          </div>
          <div class="accreditation-card">
            <div class="accreditation-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="#059669" stroke-width="2"/>
              </svg>
            </div>
            <h4>Medical & Health Dept. Standards</h4>
            <p>Curriculum-based teaching with fully equipped library, experienced faculty, and dedicated management</p>
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
              <div class="profile-avatar">
                <img src="@/assets/coFounder.jpeg" alt="Managing Director" />
              </div>
              <div class="profile-info">
                <h5>Ms. Sunaiah Parveena Shaik</h5>
                <p class="profile-title">Managing Director</p>
                <p class="profile-desc">MSc Nursing, MSc Psychology</p>
                <p class="profile-experience">13 years clinical experience and 7 years teaching experience</p>
              </div>
            </div>
            <div class="profile-card">
              <div class="profile-avatar">
                <img src="@/assets/Principal.jpeg" alt="Principal" />
              </div>
              <div class="profile-info">
                <h5>Ms. Rumandla Padma</h5>
                <p class="profile-title">Principal</p>
                <p class="profile-desc">MSc Botany, MA English</p>
                <p class="profile-experience">20+ years of teaching experience</p>
              </div>
            </div>
          </div>
        </div>

        <div class="faculty-highlights">
          <h4>Faculty Excellence</h4>
          <div class="faculty-stats">
            <div class="faculty-stat">
              <span class="stat-number">12+</span>
              <span class="stat-label">Experienced Faculty</span>
            </div>
            <div class="faculty-stat">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years Avg. Experience</span>
            </div>
            <div class="faculty-stat">
              <span class="stat-number">80%</span>
              <span class="stat-label">Medical & Health Dept. Background</span>
            </div>
          </div>
          <p class="faculty-description">
            Our faculty comprises experienced healthcare professionals, certified educators, and Medical & Health Dept. experts 
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
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 66.67%; /* 3:2 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #f8fafc;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  .about-image-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 12px;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(30, 64, 175, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.profile-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.3), rgba(5, 150, 105, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-card:hover::before {
  opacity: 1;
}

.profile-avatar {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
  border-bottom: 1px solid rgba(30, 64, 175, 0.1);
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.profile-avatar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 30%, rgba(30, 64, 175, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.profile-avatar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-avatar img,
/* Profile Avatar Styles */
.profile-avatar .default-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(30, 64, 175, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.default-avatar {
  background: #f0f7ff !important;
}

.default-avatar svg {
  width: 60%;
  height: 60%;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.profile-card:hover .default-avatar svg {
  transform: scale(1.1);
  opacity: 0.9;
}

.profile-info {
  padding: 1.5rem;
  padding-top: 0.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  position: relative;
  z-index: 1;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(30, 64, 175, 0.15);
  border-color: rgba(30, 64, 175, 0.3);
}

.profile-card:hover .profile-avatar img,
.profile-card:hover .default-avatar {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.profile-card:hover .profile-avatar::after {
  opacity: 0;
}

.profile-card h5 {
  font-size: 1.25rem;
  color: #1e293b;
  margin: 0 0 0.5rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.profile-card:hover h5 {
  color: #1e40af;
}

.profile-title {
  color: #1e40af;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0.5rem 0;
  display: inline-block;
  background: rgba(30, 64, 175, 0.1);
  padding: 0.25rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  text-align: center;
  width: auto;
}

.profile-card:hover .profile-title {
  background: rgba(30, 64, 175, 0.15);
  transform: translateY(-2px);
}

.profile-desc {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0.25rem 0 0;
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
