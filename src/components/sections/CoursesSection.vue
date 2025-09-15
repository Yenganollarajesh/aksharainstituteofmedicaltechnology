<template>
  <section id="courses" class="courses-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Courses</h2>
        <p class="section-subtitle">Professional paramedical programs designed for healthcare excellence</p>
      </div>
      
      <div class="courses-grid">
        <div v-for="course in courses" :key="course.id" class="course-card">
          <div 
            class="course-bg" 
            :style="{ backgroundImage: `url(${course.bgImage})` }"
          >
            <div class="course-overlay"></div>
          </div>
          <div class="course-content">
            <div class="course-icon">
              <svg v-if="course.id === 'dmlt'" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H15L13 13.5L11 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 3H6L8 17H19L21 7H10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="9" cy="20" r="1" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="20" r="1" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="course.id === 'dans'" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2"/>
                <path d="M12 8v8M8 12h8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>{{ course.title }}</h3>
            <div class="course-details">
              <div class="detail-item">
                <span class="label">Duration:</span>
                <span class="value">{{ course.duration }}</span>
              </div>
              <div class="detail-item eligibility-item">
                <span class="label">Eligibility:</span>
                <span class="value">{{ course.eligibility }}</span>
              </div>
            </div>
            <div class="syllabus-highlights">
              <h4>Key Subjects:</h4>
              <ul>
                <li v-for="(subject, index) in course.subjects" :key="index">{{ subject }}</li>
              </ul>
            </div>
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
          <span>Medical & Health Dept.-Standard Curriculum</span>
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

<script setup>
import dmltBg from '@/assets/DMLT.png';
import dansBg from '@/assets/DANS.jpg';
import dmsotBg from '@/assets/DMSOT.jpg';

const courses = [
  {
    id: 'dmlt',
    title: 'Diploma in Medical Laboratory Technology (DMLT)',
    duration: '2 Years',
    eligibility: '10+2 or Vocational (Intermediate) from recognized board',
    subjects: [
      'Clinical Pathology & Hematology',
      'Microbiology & Biochemistry',
      'Immunology & Parasitology',
      'Blood Banking & Serology',
      'Lab Instruments & Quality Control'
    ],
    bgImage: dmltBg
  },
  {
    id: 'dans',
    title: 'Diploma in Anaesthesia & Nursing Sciences (DANS)',
    duration: '2 Years',
    eligibility: '10+2 or Vocational (Intermediate) from recognized board',
    subjects: [
      'Pre & Post-operative Patient Care',
      'Anaesthetic Drugs & Equipment',
      'Airway Management & Ventilation',
      'ICU Management',
      'Patient Monitoring & Safety'
    ],
    bgImage: dansBg
  },
  {
    id: 'dmsot',
    title: 'Diploma in Medical Surgical OT Technology (DMSOT)',
    duration: '2 Years',
    eligibility: '10+2 or Vocational (Intermediate)',
    subjects: [
      'Operation Theatre Setup & Protocols',
      'Surgical Instruments & Sterilization',
      'ICU & Emergency Room Management',
      'Patient Positioning & Basic Anatomy',
      'Asepsis, Disinfection & Infection Control'
    ],
    bgImage: dmsotBg
  }
];
</script>

<style lang="scss" scoped>
.courses-section {
  padding: 4rem 0;
  // background: #f8fafc;
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

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1300px;
  // padding: 0 1.5rem;
}

.course-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  min-height: 500px;
  color: white;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    
    .course-bg {
      transform: scale(1.05);
    }
    
    .course-overlay {
      background: rgba(0, 0, 0, 0.75);
    }
  }

  .course-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  .course-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    transition: background 0.4s ease;
    z-index: 2;
  }

  .course-content {
    position: relative;
    z-index: 3;
    padding: 1.5rem 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .course-icon {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1.25rem;
    text-align: center;
    line-height: 1.3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .course-details {
    margin: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding: 1.25rem 0;

    .detail-item {
      display: flex;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;

      &:last-child {
        margin-bottom: 0;
      }

      .label {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        min-width: 80px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      .value {
        color: rgba(255, 255, 255, 0.85);
        flex: 1;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      &.eligibility-item {
        flex-direction: column;
        
        .label {
          margin-bottom: 0.25rem;
        }
      }
    }
  }

  .syllabus-highlights {
    h4 {
      font-size: 1.1rem;
      color: white;
      margin-bottom: 0.75rem;
      font-weight: 600;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #4ade80;
          font-weight: bold;
        }
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
  
  .course-content {
    padding: 0 !important;
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
