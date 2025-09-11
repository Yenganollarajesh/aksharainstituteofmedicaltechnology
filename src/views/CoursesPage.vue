<template>
  <div class="courses-page">
    <!-- Hero Section -->
    <section class="courses-hero">
      <div class="container">
        <h1>Our Courses</h1>
        <p class="hero-subtitle">Comprehensive Paramedical Education Programs</p>
      </div>
    </section>

    <!-- Courses Filter -->
    <section class="courses-filter">
      <div class="container">
        <div class="filter-buttons">
          <button 
            @click="filterCourses('all')" 
            :class="{ active: activeFilter === 'all' }"
            class="filter-btn"
          >
            All Courses
          </button>
          <button 
            @click="filterCourses('diploma')" 
            :class="{ active: activeFilter === 'diploma' }"
            class="filter-btn"
          >
            Diploma
          </button>
          <button 
            @click="filterCourses('certificate')" 
            :class="{ active: activeFilter === 'certificate' }"
            class="filter-btn"
          >
            Certificate
          </button>
          <button 
            @click="filterCourses('degree')" 
            :class="{ active: activeFilter === 'degree' }"
            class="filter-btn"
          >
            Degree
          </button>
        </div>
      </div>
    </section>

    <!-- Courses Grid -->
    <section class="courses-grid-section">
      <div class="container">
        <div class="courses-grid">
          <div 
            v-for="course in filteredCourses" 
            :key="course.id"
            class="course-card"
          >
            <div class="course-header">
              <div class="course-icon">{{ course.icon }}</div>
              <div class="course-badge">{{ course.type }}</div>
            </div>
            <h3>{{ course.name }}</h3>
            <p class="course-description">{{ course.description }}</p>
            
            <div class="course-details">
              <div class="detail-item">
                <strong>Duration:</strong> {{ course.duration }}
              </div>
              <div class="detail-item">
                <strong>Eligibility:</strong> {{ course.eligibility }}
              </div>
              <div class="detail-item">
                <strong>Seats:</strong> {{ course.seats }}
              </div>
            </div>

            <div class="course-highlights">
              <h4>Course Highlights:</h4>
              <ul>
                <li v-for="highlight in course.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>

            <div class="course-career">
              <h4>Career Opportunities:</h4>
              <p>{{ course.career }}</p>
            </div>

            <div class="course-fees">
              <span class="fees-label">Course Fee:</span>
              <span class="fees-amount">₹{{ course.fees }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="additional-info">
      <div class="container">
        <h2 class="section-title">Why Choose Our Programs?</h2>
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">👨‍🏫</div>
            <h3>Expert Faculty</h3>
            <p>Learn from experienced professionals with industry expertise and academic excellence.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🏥</div>
            <h3>Clinical Training</h3>
            <p>Hands-on training in affiliated hospitals and healthcare facilities for practical experience.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">🔬</div>
            <h3>Modern Labs</h3>
            <p>State-of-the-art laboratories equipped with latest technology and equipment.</p>
          </div>
          <div class="info-card">
            <div class="info-icon">💼</div>
            <h3>Placement Support</h3>
            <p>Dedicated placement cell ensuring job opportunities with leading healthcare providers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Admission Process Section -->
    <section class="admission-process">
      <div class="container">
        <h2 class="section-title">Admission Process</h2>
        <div class="process-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <h3>Application</h3>
            <p>Submit online application with required documents</p>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <h3>Entrance Test</h3>
            <p>Appear for entrance examination (if applicable)</p>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <h3>Interview</h3>
            <p>Personal interview and document verification</p>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <h3>Admission</h3>
            <p>Fee payment and admission confirmation</p>
          </div>
        </div>
        <div class="cta-section">
          <router-link to="/admissions" class="cta-btn">Start Your Application</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const courses = ref([
  {
    id: 1,
    name: "Medical Laboratory Technology",
    type: "Diploma",
    icon: "🔬",
    duration: "2 Years",
    eligibility: "12th (Science)",
    seats: "60",
    fees: "45,000",
    description: "Comprehensive program covering laboratory techniques, diagnostic procedures, and medical testing methodologies.",
    highlights: [
      "Clinical biochemistry training",
      "Microbiology and pathology",
      "Laboratory management",
      "Quality control procedures"
    ],
    career: "Medical laboratories, hospitals, diagnostic centers, research institutions"
  },
  {
    id: 2,
    name: "X-Ray Technology",
    type: "Certificate",
    icon: "📱",
    duration: "1.5 Years",
    eligibility: "12th Pass",
    seats: "40",
    fees: "35,000",
    description: "Specialized training in radiological imaging techniques and diagnostic radiology procedures.",
    highlights: [
      "X-ray machine operation",
      "Radiation safety protocols",
      "Image processing",
      "Patient positioning techniques"
    ],
    career: "Hospitals, diagnostic centers, imaging clinics, emergency care units"
  },
  {
    id: 3,
    name: "Pharmacy Assistant",
    type: "Certificate",
    icon: "💊",
    duration: "1 Year",
    eligibility: "12th Pass",
    seats: "50",
    fees: "25,000",
    description: "Training in pharmaceutical operations, drug dispensing, and patient counseling.",
    highlights: [
      "Pharmaceutical calculations",
      "Drug inventory management",
      "Patient counseling skills",
      "Pharmacy law and ethics"
    ],
    career: "Retail pharmacies, hospital pharmacies, pharmaceutical companies"
  },
  {
    id: 4,
    name: "Operation Theatre Technology",
    type: "Diploma",
    icon: "🏥",
    duration: "2 Years",
    eligibility: "12th (Science)",
    seats: "30",
    fees: "50,000",
    description: "Specialized training in surgical procedures, sterilization, and operation theatre management.",
    highlights: [
      "Surgical instrumentation",
      "Sterilization techniques",
      "Anesthesia assistance",
      "Emergency procedures"
    ],
    career: "Operation theatres, surgical units, emergency departments"
  },
  {
    id: 5,
    name: "Physiotherapy Assistant",
    type: "Certificate",
    icon: "🤸‍♂️",
    duration: "1 Year",
    eligibility: "12th Pass",
    seats: "35",
    fees: "30,000",
    description: "Training in physical therapy techniques, rehabilitation, and therapeutic exercises.",
    highlights: [
      "Therapeutic exercises",
      "Physical assessment",
      "Rehabilitation techniques",
      "Equipment handling"
    ],
    career: "Physiotherapy clinics, rehabilitation centers, sports medicine facilities"
  },
  {
    id: 6,
    name: "Bachelor of Medical Laboratory Science",
    type: "Degree",
    icon: "🎓",
    duration: "3 Years",
    eligibility: "12th (PCB)",
    seats: "40",
    fees: "75,000",
    description: "Comprehensive degree program in medical laboratory science with advanced diagnostic techniques.",
    highlights: [
      "Advanced laboratory techniques",
      "Research methodology",
      "Laboratory management",
      "Quality assurance"
    ],
    career: "Senior laboratory positions, research institutions, laboratory management"
  },
  {
    id: 7,
    name: "ECG Technician",
    type: "Certificate",
    icon: "💓",
    duration: "6 Months",
    eligibility: "12th Pass",
    seats: "25",
    fees: "15,000",
    description: "Specialized training in electrocardiography and cardiac monitoring techniques.",
    highlights: [
      "ECG machine operation",
      "Cardiac rhythm analysis",
      "Patient preparation",
      "Report generation"
    ],
    career: "Cardiology departments, clinics, diagnostic centers"
  },
  {
    id: 8,
    name: "Dialysis Technology",
    type: "Diploma",
    icon: "🫘",
    duration: "1.5 Years",
    eligibility: "12th (Science)",
    seats: "20",
    fees: "55,000",
    description: "Comprehensive training in dialysis procedures and renal care technology.",
    highlights: [
      "Dialysis machine operation",
      "Renal care procedures",
      "Patient monitoring",
      "Infection control"
    ],
    career: "Dialysis centers, nephrology departments, kidney care units"
  }
])

const filteredCourses = computed(() => {
  if (activeFilter.value === 'all') {
    return courses.value
  }
  return courses.value.filter(course => course.type.toLowerCase() === activeFilter.value)
})

const filterCourses = (filter) => {
  activeFilter.value = filter
}
</script>

<style lang="scss" scoped>
.courses-page {
  padding-top: 70px; // Account for fixed header
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
}

// Hero Section
.courses-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
    opacity: 0.9;
  }
}

// Filter Section
.courses-filter {
  padding: 2rem 0;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.8rem 1.5rem;
  border: 2px solid #2c5aa0;
  background: white;
  color: #2c5aa0;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &.active {
    background: #2c5aa0;
    color: white;
  }
}

// Courses Grid
.courses-grid-section {
  padding: 4rem 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.course-header {
  background: linear-gradient(135deg, #2c5aa0 0%, #1e3f72 100%);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .course-icon {
    font-size: 3rem;
  }

  .course-badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }
}

.course-card h3 {
  padding: 1.5rem 2rem 1rem;
  color: #333;
  font-size: 1.5rem;
  margin: 0;
}

.course-description {
  padding: 0 2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.course-details {
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  .detail-item {
    margin-bottom: 0.5rem;
    color: #555;

    strong {
      color: #2c5aa0;
    }
  }
}

.course-highlights {
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  h4 {
    color: #2c5aa0;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }

  ul {
    color: #666;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.3rem;
    }
  }
}

.course-career {
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  h4 {
    color: #2c5aa0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: 0.95rem;
  }
}

.course-fees {
  padding: 1.5rem 2rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;

  .fees-label {
    color: #666;
    font-weight: 600;
  }

  .fees-amount {
    color: #2c5aa0;
    font-size: 1.5rem;
    font-weight: 700;
  }
}

// Additional Info Section
.additional-info {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .info-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2c5aa0;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

// Admission Process Section
.admission-process {
  padding: 4rem 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.step-item {
  text-align: center;

  .step-number {
    width: 60px;
    height: 60px;
    background: #2c5aa0;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 1.5rem;
  }

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

.cta-section {
  text-align: center;
}

.cta-btn {
  display: inline-block;
  background: #ff6b6b;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ff5252;
    transform: translateY(-2px);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .courses-hero h1 {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .filter-buttons {
    justify-content: center;
  }

  .info-grid,
  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
