<template>
  <section id="admissions" class="admissions-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Admissions 2025-26</h2>
        <p class="section-subtitle">Join our paramedical programs and build a rewarding healthcare career</p>
      </div>

      <!-- Admission Status Banner -->
      <div class="admission-status-banner">
        <div class="status-content">
          <div class="status-badge">🎓 Applications Open</div>
          <div class="deadline-info">
            <span class="deadline-label">Application Deadline:</span>
            <span class="deadline-date">June 30, 2026</span>
          </div>
        </div>
        <div class="quick-actions">
          <button class="btn-primary" @click="downloadForm('general')">
            📄 Download Application Form
          </button>
          <button class="btn-secondary" @click="scrollToContact">
            📞 Contact Admissions
          </button>
        </div>
      </div>

      <div class="admission-content">
        <!-- Eligibility Criteria -->
        <div class="eligibility-section">
          <h3 class="content-title">📋 Eligibility Criteria</h3>
          <div class="eligibility-cards">
            <div class="eligibility-card">
              <h4>DMLT (Diploma in Medical Laboratory Technology)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology/Mathematics</li>
              </ul>
            </div>
            <div class="eligibility-card">
              <h4>DANS (Diploma in Anaesthesia & Nursing Sciences)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology mandatory</li>
              </ul>
            </div>
            <div class="eligibility-card">
              <h4>DMSOT (Diploma in Medical Surgical OT Technology)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology mandatory</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- How to Apply -->
        <div class="application-process">
          <h3 class="content-title">🚀 How to Apply</h3>
          <div class="process-timeline">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <div class="timeline-content">
                <h4>Download Application Form</h4>
                <p>Get the application form from our website or collect from college office</p>
                <div class="timeline-actions">
                  <button class="btn-download" @click="downloadForm('general')">Download General Form</button>
                  <button class="btn-download" @click="downloadForm('dmlt')">Download DMLT Form</button>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <div class="timeline-content">
                <h4>Fill Application & Gather Documents</h4>
                <p>Complete the form and attach required documents (photocopies acceptable)</p>
                <ul class="document-list">
                  <li>10+2 Mark Sheet & Certificate</li>
                  <li>Transfer Certificate</li>
                  <li>Character Certificate</li>
                  <li>Passport Size Photos (4 copies)</li>
                  <li>Aadhar Card Copy</li>
                </ul>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <div class="timeline-content">
                <h4>Submit Application</h4>
                <p>Submit at college office or send by registered post</p>
                <div class="submission-options">
                  <div class="option">
                    <strong>In Person:</strong> College Office (9 AM - 5 PM)
                  </div>
                  <div class="option">
                    <strong>By Post:</strong> Send to college address with DD
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <div class="timeline-content">
                <h4>Document Verification & Counseling</h4>
                <p>Attend verification session with original documents</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <div class="timeline-content">
                <h4>Fee Payment & Admission Confirmation</h4>
                <p>Pay fees and complete admission formalities</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Downloadable Forms -->
        <div class="forms-section">
          <h3 class="content-title">📥 Downloadable Application Forms</h3>
          <div class="forms-grid">
            <div class="form-card">
              <div class="form-icon">📄</div>
              <h4>General Application Form</h4>
              <p>Common application form for all courses</p>
              <button class="btn-download" @click="downloadForm('general')">
                Download PDF
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">🧪</div>
              <h4>DMLT Specific Form</h4>
              <p>Specialized form for Medical Laboratory Technology</p>
              <button class="btn-download" @click="downloadForm('dmlt')">
                Download PDF
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">🩺</div>
              <h4>DANS Specific Form</h4>
              <p>Specialized form for Anaesthesia & Nursing Sciences</p>
              <button class="btn-download" @click="downloadForm('dans')">
                Download PDF
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">🏥</div>
              <h4>DMSOT Specific Form</h4>
              <p>Specialized form for Medical Surgical OT Technology</p>
              <button class="btn-download" @click="downloadForm('dmsot')">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <!-- Offline Registration -->
        <div class="offline-registration">
          <h3 class="content-title">🏢 Offline Registration Option</h3>
          <div class="offline-content">
            <div class="offline-info">
              <h4>Visit Our Campus</h4>
              <div class="campus-details">
                <div class="detail-item">
                  <span class="icon">🕒</span>
                  <div>
                    <strong>Office Hours:</strong>
                    <p>Monday to Saturday: 9:00 AM - 5:00 PM<br>Sunday: Closed</p>
                  </div>
                </div>
                <div class="detail-item">
                  <span class="icon">📍</span>
                  <div>
                    <strong>Address:</strong>
                    <p>Paramedical College Campus<br>Main Road, City - 123456</p>
                  </div>
                </div>
                <div class="detail-item">
                  <span class="icon">📞</span>
                  <div>
                    <strong>Admissions Helpline:</strong>
                    <p>+91-XXXXX-XXXXX<br>admissions@college.edu</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="offline-benefits">
              <h4>Benefits of Offline Registration</h4>
              <ul>
                <li>✓ Personal guidance from admission counselors</li>
                <li>✓ Immediate document verification</li>
                <li>✓ Campus tour and facility visit</li>
                <li>✓ Direct interaction with faculty</li>
                <li>✓ Instant query resolution</li>
                <li>✓ Same-day admission confirmation (if eligible)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Download form functionality
const downloadForm = (formType) => {
  // In a real application, this would download actual PDF files
  const forms = {
    general: 'general-application-form.pdf',
    dmlt: 'dmlt-application-form.pdf',
    dans: 'dans-application-form.pdf',
    dmsot: 'dmsot-application-form.pdf'
  };
  
  // Simulate download
  const fileName = forms[formType] || forms.general;
  console.log(`Downloading ${fileName}`);
  
  // In production, you would implement actual file download
  alert(`Downloading ${fileName}. In production, this would download the actual PDF form.`);
};

// Scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
.admissions-section {
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

// Admission Status Banner
.admission-status-banner {
  background: linear-gradient(135deg, #1e40af 0%, #059669 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 30px rgba(30, 64, 175, 0.2);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}

.status-content {
  .status-badge {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .deadline-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    .deadline-label {
      font-weight: 400;
      opacity: 0.9;
    }
    
    .deadline-date {
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
}

.quick-actions {
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
}

// Buttons
.btn-primary, .btn-secondary, .btn-download {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-primary {
  background: white;
  color: #1e40af;
  
  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
}

.btn-download {
  background: #1e40af;
  color: white;
  
  &:hover {
    background: #1e3a8a;
    transform: translateY(-2px);
  }
}

// Content sections
.admission-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
}

// Eligibility Section
.eligibility-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.eligibility-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 0.5rem 0;
      color: #64748b;
      line-height: 1.5;
      border-bottom: 1px solid #f1f5f9;
      
      &:last-child {
        border-bottom: none;
      }
      
      strong {
        color: #1e293b;
      }
    }
  }
}

// Application Process Timeline
.process-timeline {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e2e8f0;
    
    @media (max-width: 768px) {
      left: 1.5rem;
    }
  }
}

.timeline-item {
  position: relative;
  padding-left: 5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding-left: 4rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-number {
  position: absolute;
  left: 1.25rem;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: #1e40af;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    left: 1rem;
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
}

.timeline-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.document-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.25rem 0;
    color: #64748b;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
  }
}

.submission-options {
  display: grid;
  gap: 0.75rem;
  
  .option {
    padding: 0.75rem;
    background: #f8fafc;
    border-radius: 6px;
    color: #64748b;
    
    strong {
      color: #1e40af;
    }
  }
}

// Forms Section
.forms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.15);
  }
  
  .form-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-download {
    margin-top: auto;
  }
}

// Offline Registration
.offline-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.offline-info, .offline-benefits {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  h4 {
    color: #1e40af;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
}

.campus-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  .icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  
  div {
    flex: 1;
    
    strong {
      color: #1e40af;
      display: block;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: #64748b;
      margin: 0;
      line-height: 1.5;
    }
  }
}

.offline-benefits ul {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.5rem 0;
    color: #64748b;
    line-height: 1.5;
  }
}

@media (max-width: 768px) {
  .admissions-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .eligibility-cards, .forms-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-actions {
    flex-direction: column;
  }
}
</style>
