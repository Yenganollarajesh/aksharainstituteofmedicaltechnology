<template>
  <section id="courses" class="courses-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Courses</h2>
        <p class="section-subtitle">Professional paramedical programs designed for healthcare excellence</p>
      </div>
      
      <div class="courses-grid">
        <div class="course-card">
          <div class="course-icon">🧪</div>
          <h3>Diploma in Medical Laboratory Technology (DMLT)</h3>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Duration:</span>
              <span class="value">2 Years</span>
            </div>
            <div class="detail-item eligibility-item">
              <span class="label">Eligibility:</span>
              <span class="value">10+2 Science (PCB/PCM) - 50%</span>
            </div>
          </div>
          <div class="syllabus-highlights">
            <h4>Key Subjects:</h4>
            <ul>
              <li>Clinical Pathology & Hematology</li>
              <li>Microbiology & Biochemistry</li>
              <li>Blood Banking & Serology</li>
              <li>Lab Instruments & Quality Control</li>
            </ul>
          </div>
        </div>

        <div class="course-card">
          <div class="course-icon">🩺</div>
          <h3>Diploma in Anaesthesia & Nursing Sciences (DANS)</h3>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Duration:</span>
              <span class="value">2 Years</span>
            </div>
            <div class="detail-item eligibility-item">
              <span class="label">Eligibility:</span>
              <span class="value">10+2 Science (PCB/PCM) - 50%</span>
            </div>
          </div>
          <div class="syllabus-highlights">
            <h4>Key Subjects:</h4>
            <ul>
              <li>Pre & Post-operative Patient Care</li>
              <li>Anaesthetic Drugs & Equipment</li>
              <li>Patient Monitoring & Safety</li>
              <li>OT Protocols & Emergency Management</li>
            </ul>
          </div>
        </div>

        <div class="course-card">
          <div class="course-icon">🏥</div>
          <h3>Diploma in Medical Surgical OT Technology (DMSOT)</h3>
          <div class="course-details">
            <div class="detail-item">
              <span class="label">Duration:</span>
              <span class="value">2 Years</span>
            </div>
            <div class="detail-item eligibility-item">
              <span class="label">Eligibility:</span>
              <span class="value">10+2 Science (PCB/PCM) - 50%</span>
            </div>
          </div>
          <div class="syllabus-highlights">
            <h4>Key Subjects:</h4>
            <ul>
              <li>Operation Theatre Setup & Management</li>
              <li>Surgical Instruments & Sterilization</li>
              <li>Anatomy & Patient Positioning</li>
              <li>Asepsis & Infection Control</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="course-features">
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>Hands-on Clinical Training</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>Industry-Standard Curriculum</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>Hospital Internship Program</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">✓</span>
          <span>100% Placement Assistance</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.courses-section {
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

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.15);
    border-color: #1e40af;
  }
  
  .course-icon {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
    line-height: 1.4;
    text-align: center;
    font-family: 'Inter', sans-serif;
  }
}

.course-details {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .label {
    font-weight: 600;
    color: #475569;
    font-size: 0.9rem;
    flex-shrink: 0;
    min-width: 90px;
  }
  
  .value {
    font-weight: 500;
    color: #1e40af;
    font-size: 0.85rem;
    line-height: 1.3;
    flex: 1;
  }
}

.syllabus-highlights {
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        top: 0;
        color: #1e40af;
        font-weight: bold;
      }
    }
  }
}

.course-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  .feature-icon {
    width: 20px;
    height: 20px;
    background: #1e40af;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  span:last-child {
    color: #475569;
    font-weight: 500;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .courses-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .course-card {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
    }
  }
  
  .course-features {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>
