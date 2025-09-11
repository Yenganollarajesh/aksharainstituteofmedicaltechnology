<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Welcome to Premier Paramedical College</h1>
          <p class="hero-subtitle">Shaping Healthcare Professionals for Tomorrow</p>
          <p class="hero-description">
            Join our world-class paramedical programs and embark on a rewarding career 
            in healthcare. We provide comprehensive training with state-of-the-art facilities 
            and experienced faculty.
          </p>
          <div class="hero-buttons">
            <a href="#admissions" class="btn btn-primary">Get Application Form</a>
            <a href="#courses" class="btn btn-secondary">View Courses</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="placeholder-image">🏥</div>
        </div>
      </div>
    </section>

    <!-- Announcement Banner -->
    <section class="announcement-banner" v-if="false">
      <div class="container">
        <div class="announcement-content">
          <div class="announcement-icon">📢</div>
          <div class="announcement-text">
            <h3>Admissions Open for 2024-25</h3>
            <p>Limited seats available. Apply now for our prestigious paramedical programs!</p>
          </div>
          <div class="announcement-action">
            <a href="#admissions" class="btn btn-accent">Get Application Form</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section id="why-choose-us" class="features-section">
      <div class="container">
        <h2 class="section-title">Why Choose Us?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3>Quality Education</h3>
            <p>Comprehensive curriculum designed by industry experts with hands-on training.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏥</div>
            <h3>Modern Facilities</h3>
            <p>State-of-the-art laboratories and equipment for practical learning experience.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👨‍⚕️</div>
            <h3>Expert Faculty</h3>
            <p>Learn from experienced professionals and certified instructors in the field.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💼</div>
            <h3>Placement Support</h3>
            <p>Strong industry connections ensuring excellent job opportunities for graduates.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section (part of Home) -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-scroller">
          <div class="stats-grid">
            <div class="stat-item">
              <h3>500+</h3>
              <p>Students Enrolled</p>
            </div>
            <div class="stat-item">
              <h3>15+</h3>
              <p>Courses Offered</p>
            </div>
            <div class="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div class="stat-item">
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
            <!-- Duplicated for seamless scroll -->
            <div class="stat-item">
              <h3>500+</h3>
              <p>Students Enrolled</p>
            </div>
            <div class="stat-item">
              <h3>15+</h3>
              <p>Courses Offered</p>
            </div>
            <div class="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div class="stat-item">
              <h3>20+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
      <div class="container">
        <h2 class="section-title">About Our College</h2>
        <div class="about-content">
          <div class="about-text">
            <div class="about-kicker">Accredited. Experienced. Career-Focused.</div>
            <h3>Excellence in Paramedical Education Since 2004</h3>
            <p>
              Established in 2004, our Paramedical College began as a small institution with a vision to provide quality healthcare education. Over the years, we have grown into a premier educational institution, recognized for our commitment to excellence.
            </p>
            <p>
              Starting with just 3 courses and 50 students, we have expanded to offer 15+ specialized programs with state-of-the-art facilities and a student body of over 500 students. Our graduates have found employment in leading hospitals, clinics, and healthcare facilities across the country.
            </p>
            <ul class="about-bullets">
              <li>Recognized curriculum aligned with hospital requirements</li>
              <li>Hands-on training in modern labs and real clinical settings</li>
              <li>Dedicated placement support with strong hospital tie-ups</li>
            </ul>
          </div>
          <div class="about-highlights">
            <div class="highlight-card">
              <div class="highlight-icon">✅</div>
              <h4>Accredited Programs</h4>
              <p>Programs designed with rigorous academic standards and industry relevance.</p>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">👩‍⚕️</div>
              <h4>Experienced Faculty</h4>
              <p>Learn from seasoned practitioners and educators with hospital experience.</p>
            </div>
            <div class="highlight-card">
              <div class="highlight-icon">🤝</div>
              <h4>Hospital Tie‑ups</h4>
              <p>Structured clinical exposure and internships with reputed healthcare partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Courses Section -->
    <section id="courses" class="courses-section">
      <div class="container">
        <h2 class="section-title">Our Courses</h2>
        <div id="courses-detail" class="detailed-courses">
          <div class="course-category">
            <h3>Certificate Courses (6 months - 1.5 years)</h3>
            <div class="courses-list">
              <div class="course-item">
                <h4>🔬 X-Ray Technology</h4>
                <p><strong>Duration:</strong> 1.5 Years | <strong>Fee:</strong> ₹35,000</p>
                <p>Specialized training in radiological imaging techniques and diagnostic radiology procedures.</p>
              </div>
              <div class="course-item">
                <h4>💊 Pharmacy Assistant</h4>
                <p><strong>Duration:</strong> 1 Year | <strong>Fee:</strong> ₹25,000</p>
                <p>Training in pharmaceutical operations, drug dispensing, and patient counseling.</p>
              </div>
              <div class="course-item">
                <h4>💓 ECG Technician</h4>
                <p><strong>Duration:</strong> 6 Months | <strong>Fee:</strong> ₹15,000</p>
                <p>Specialized training in electrocardiography and cardiac monitoring techniques.</p>
              </div>
            </div>
          </div>
          <div class="course-category">
            <h3>Diploma Courses (1.5 - 2 years)</h3>
            <div class="courses-list">
              <div class="course-item">
                <h4>🔬 Medical Laboratory Technology</h4>
                <p><strong>Duration:</strong> 2 Years | <strong>Fee:</strong> ₹45,000</p>
                <p>Comprehensive program covering laboratory techniques, diagnostic procedures, and medical testing.</p>
              </div>
              <div class="course-item">
                <h4>🏥 Operation Theatre Technology</h4>
                <p><strong>Duration:</strong> 2 Years | <strong>Fee:</strong> ₹50,000</p>
                <p>Specialized training in surgical procedures, sterilization, and operation theatre management.</p>
              </div>
              <div class="course-item">
                <h4>🫘 Dialysis Technology</h4>
                <p><strong>Duration:</strong> 1.5 Years | <strong>Fee:</strong> ₹55,000</p>
                <p>Comprehensive training in dialysis procedures and renal care technology.</p>
              </div>
            </div>
          </div>

          <div class="course-category">
            <h3>Courses Offered</h3>
            <div class="courses-list core-courses">
              <div class="course-item">
                <h4>🧪 Diploma in Medical Laboratory Technology (DMLT)</h4>
                <p><strong>Duration:</strong> 2 Years</p>
                <p><strong>Eligibility:</strong> 10+2 (Science) with PCB/PCM</p>
                <ul class="syllabus-list">
                  <li>Clinical Pathology, Hematology, Blood Banking</li>
                  <li>Microbiology, Biochemistry, Serology</li>
                  <li>Lab instruments, quality control, hospital training</li>
                </ul>
              </div>

              <div class="course-item">
                <h4>🩺 Diploma in Anaesthesia & Nursing Sciences (DANS)</h4>
                <p><strong>Duration:</strong> 2 Years</p>
                <p><strong>Eligibility:</strong> 10+2 (Science) with PCB/PCM</p>
                <ul class="syllabus-list">
                  <li>Pre‑operative and post‑operative patient care</li>
                  <li>Anaesthetic drugs, equipment, monitoring</li>
                  <li>OT protocols, emergency management</li>
                </ul>
              </div>

              <div class="course-item">
                <h4>🏥 Diploma in Medical Surgical OT Technology (DMSOT)</h4>
                <p><strong>Duration:</strong> 2 Years</p>
                <p><strong>Eligibility:</strong> 10+2 (Science) with PCB/PCM</p>
                <ul class="syllabus-list">
                  <li>Operation theatre setup and sterilization</li>
                  <li>Surgical instruments and assistance</li>
                  <li>Anatomy basics, asepsis, patient positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Admissions Section -->
    <section id="admissions" class="admissions-section">
      <div class="container">
        <h2 class="section-title">Admissions 2024-25</h2>
        <div class="admission-info">
          <div class="admission-status">
            <div class="status-badge">Applications Open</div>
            <div class="deadline">Deadline: June 30, 2024</div>
          </div>
          <div class="admission-process">
            <h3>Admission Process</h3>
            <div class="process-steps">
              <div class="step">1. Collect/Download Application Form</div>
              <div class="step">2. Fill Form & Attach Required Documents</div>
              <div class="step">3. Submit at Campus Office / By Post</div>
              <div class="step">4. Verification & Counseling</div>
              <div class="step">5. Fee Payment & Admission Confirmation</div>
            </div>
          </div>
          <div class="eligibility">
            <h3>Eligibility Criteria</h3>
            <ul>
              <li><strong>Certificate Courses:</strong> 10+2 from recognized board with 45% aggregate</li>
              <li><strong>Diploma Courses:</strong> 10+2 (Science) with 50% in PCB/PCM</li>
              <li><strong>Age Limit:</strong> 17-25 years</li>
            </ul>
          </div>
          <div class="offline-note">
            <p><strong>Offline Registration:</strong> Application forms are available at the college office during working hours. You can submit the filled form with photocopies of required documents at the campus or send by post. For assistance, call the admissions desk.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- News & Events Section -->
    <section id="news" class="news-section">
      <div class="container">
        <h2 class="section-title">News & Events</h2>
        <div class="news-grid">
          <div class="news-item">
            <div class="news-date">Sep 15, 2024</div>
            <h3>Seminar on Advanced Diagnostics</h3>
            <p>Experts from leading hospitals discuss innovations in diagnostic technologies.</p>
          </div>
          <div class="news-item">
            <div class="news-date">Oct 01, 2024</div>
            <h3>Campus Job Fair</h3>
            <p>Multiple healthcare partners will recruit interns and full-time positions.</p>
          </div>
          <div class="news-item">
            <div class="news-date">Oct 20, 2024</div>
            <h3>Community Health Camp</h3>
            <p>Students to participate in a free health check-up camp in nearby villages.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Placement Section -->
    <section id="placement" class="placement-section">
      <div class="container">
        <h2 class="section-title">Placements</h2>
        <div class="placement-grid">
          <div class="placement-card">
            <h3>Our Recruiters</h3>
            <p>Apollo Hospitals, Rainbow Hospitals, Yashoda Hospitals, AIG Hospitals, and more.</p>
          </div>
          <div class="placement-card">
            <h3>Student Testimonials</h3>
            <p>“I secured a role as Lab Technician through campus placements.”</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Facilities Section -->
    <section id="facilities" class="facilities-section">
      <div class="container">
        <h2 class="section-title">Our Facilities</h2>
        <div class="facilities-grid">
          <div class="facility-item">
            <div class="facility-icon">🔬</div>
            <h3>Advanced Laboratories</h3>
            <p>Modern laboratories equipped with latest instruments for practical training in pathology, biochemistry, and microbiology.</p>
          </div>
          <div class="facility-item">
            <div class="facility-icon">📚</div>
            <h3>Digital Library</h3>
            <p>Comprehensive library with extensive collection of medical books, journals, and digital resources.</p>
          </div>
          <div class="facility-item">
            <div class="facility-icon">🏥</div>
            <h3>Simulation Labs</h3>
            <p>Clinical simulation labs for hands-on training with advanced medical equipment and procedures.</p>
          </div>
          <div class="facility-item">
            <div class="facility-icon">💻</div>
            <h3>Computer Center</h3>
            <p>Modern computer lab with high-speed internet for digital learning and research activities.</p>
          </div>
          <div class="facility-item">
            <div class="facility-icon">🏢</div>
            <h3>Auditorium</h3>
            <p>Large auditorium for lectures, seminars, and conferences with modern audio-visual systems.</p>
          </div>
          <div class="facility-item">
            <div class="facility-icon">🏠</div>
            <h3>Hostel Accommodation</h3>
            <p>Safe and comfortable hostel facilities with modern amenities for outstation students.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery-section">
      <Gallery :images="galleryImages" />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Healthcare Avenue<br>Medical District, City - 123456<br>State, India</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>Main: +91 98765 43210<br>Admissions: +91 98765 43211</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@paramedicalcollege.edu<br>admissions@paramedicalcollege.edu</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕐</div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Gallery from '@/components/Gallery.vue';

// Import gallery images
import image1 from '@/assets/gallery/image1.jpeg';
import image2 from '@/assets/gallery/image2.jpeg';
import image3 from '@/assets/gallery/image3.jpeg';
import image4 from '@/assets/gallery/image4.jpeg';
import image5 from '@/assets/gallery/image5.jpeg';
import image6 from '@/assets/gallery/image6.jpeg';
import image7 from '@/assets/gallery/image7.jpeg';
import image8 from '@/assets/gallery/image8.jpeg';
import image9 from '@/assets/gallery/image9.jpeg';
import image10 from '@/assets/gallery/image10.jpeg';
import image11 from '@/assets/gallery/image11.jpeg';
import image12 from '@/assets/gallery/image12.jpeg';
import image13 from '@/assets/gallery/image13.jpeg';
import image14 from '@/assets/gallery/image14.jpeg';
import image15 from '@/assets/gallery/image15.jpeg';
import image16 from '@/assets/gallery/image16.jpeg';
import image17 from '@/assets/gallery/image17.jpeg';
import image18 from '@/assets/gallery/image18.jpeg';
import image19 from '@/assets/gallery/image19.jpeg';
import image20 from '@/assets/gallery/image20.jpeg';

const galleryImages = ref([
  { src: image1, alt: 'Gallery Image 1' },
  { src: image2, alt: 'Gallery Image 2' },
  { src: image3, alt: 'Gallery Image 3' },
  { src: image4, alt: 'Gallery Image 4' },
  { src: image5, alt: 'Gallery Image 5' },
  { src: image6, alt: 'Gallery Image 6' },
  { src: image7, alt: 'Gallery Image 7' },
  { src: image8, alt: 'Gallery Image 8' },
  { src: image9, alt: 'Gallery Image 9' },
  { src: image10, alt: 'Gallery Image 10' },
  { src: image11, alt: 'Gallery Image 11' },
  { src: image12, alt: 'Gallery Image 12' },
  { src: image13, alt: 'Gallery Image 13' },
  { src: image14, alt: 'Gallery Image 14' },
  { src: image15, alt: 'Gallery Image 15' },
  { src: image16, alt: 'Gallery Image 16' },
  { src: image17, alt: 'Gallery Image 17' },
  { src: image18, alt: 'Gallery Image 18' },
  { src: image19, alt: 'Gallery Image 19' },
  { src: image20, alt: 'Gallery Image 20' },
]);

// Contact form data
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// Contact form submission
const submitContactForm = () => {
  alert('Thank you for your message! We will get back to you within 24 hours.');
  // Reset form
  Object.keys(contactForm.value).forEach(key => {
    contactForm.value[key] = '';
  });
};
</script>

<style lang="scss" scoped>
.home-page {
  padding-top: 70px; // Account for fixed header
}

.hero-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 6rem 2rem 6rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
      linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    z-index: 2;
  }
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 3;
  position: relative;
}

.hero-text {
  z-index: 2;
  position: relative;
  
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 2rem;
    line-height: 1.1;
    font-family: 'Playfair Display', serif;
    letter-spacing: -0.025em;
    animation: fadeInUp 0.8s ease-out;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.95);
    animation: fadeInUp 0.8s ease-out 0.2s both;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .hero-description {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 3rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
    animation: fadeInUp 0.8s ease-out 0.4s both;
    max-width: 600px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.btn {
  padding: 1.25rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &.btn-primary {
    background: white;
    color: var(--primary-color);
    box-shadow: var(--shadow-lg);

    &:hover {
      background: var(--background-light);
      color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }
  }

  &.btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: white;
      color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: var(--shadow-xl);
    }
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  .placeholder-image {
    font-size: 10rem;
    opacity: 0.9;
    animation: float 3s ease-in-out infinite;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
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
  color: var(--text-primary);
  margin-bottom: 4rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: -0.025em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--primary-color);
    border-radius: 1.5px;
  }
}

// Announcement Banner
.announcement-banner {
  background: linear-gradient(135deg, var(--gold-accent) 0%, #f97316 100%);
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent);
    animation: shimmer 4s infinite;
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.announcement-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
  position: relative;
}

.announcement-icon {
  font-size: 3rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.announcement-text {
  flex: 1;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', serif;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
  
  p {
    margin: 0;
    opacity: 0.95;
    font-size: 1.1rem;
    line-height: 1.4;
    font-weight: 400;
  }
}

.announcement-action {
  .btn-accent {
    background: white;
    color: var(--primary-color);
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--background-light);
      color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
  }
}

// Features Section
.features-section {
  padding: 6rem 0;
  background: var(--background-white);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--background-light) 0%, transparent 100%);
    opacity: 0.5;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--background-white);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px var(--shadow-light);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(213, 219, 219, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px var(--shadow-medium);
    
    &::before {
      transform: scaleX(1);
    }
  }

  .feature-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    filter: grayscale(0.2);
    transition: all 0.3s ease;
  }

  &:hover .feature-icon {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-weight: 400;
  }
}

// Courses Overview
.courses-overview {
  padding: 4rem 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid #2c5aa0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #2c5aa0;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .course-link {
    color: #2c5aa0;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
}

// Stats Section
.stats-section {
  background: var(--primary-color);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 58, 138, 0.3) 100%);
    pointer-events: none;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.stats-scroller {
  max-width: 100%;
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.stats-scroller:hover .stats-grid {
  animation-play-state: paused;
}

.stats-grid {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 3rem;
  width: 200%;
  text-align: center;
  z-index: 2;
  position: relative;
  animation: scroll 20s linear infinite;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-family: 'Playfair Display', serif;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}

// News Section
.news-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}


.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.news-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  .news-date {
    color: #2c5aa0;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

.placement-section {
  padding: 6rem 0;
  background: var(--background-light);
}

.placement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.placement-card {
  background: var(--background-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.3);
}

// About Section
.about-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-white) 0%, var(--background-light) 50%, var(--background-section) 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(74, 144, 164, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(127, 179, 211, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-text {
  z-index: 2;
  position: relative;
  
  .about-kicker {
    display: inline-block;
    background: rgba(30, 58, 138, 0.1);
    color: var(--primary-color);
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-size: 1.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    letter-spacing: -0.01em;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    font-weight: 400;
  }

  .about-bullets {
    margin: 0 0 1rem 0;
    padding-left: 1.25rem;
    color: var(--text-secondary);
    li { margin-bottom: 0.5rem; }
  }
}


.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.highlight-card {
  background: var(--background-white);
  padding: 1.5rem;
  border-radius: 14px;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.3);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px var(--shadow-medium);
  }

  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}

// Courses Section
.courses-section {
  padding: 6rem 0;
  background: var(--background-white);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(93, 173, 226, 0.04) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(74, 144, 164, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
}

.detailed-courses {
  display: grid;
  gap: 3rem;
}

.course-category {
  z-index: 2;
  position: relative;
  
  h3 {
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    text-align: center;
    padding-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      border-radius: 2px;
    }
  }
}

.courses-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.course-item {
  background: var(--background-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.3);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), var(--success-color));
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px var(--shadow-medium);
    
    &::before {
      transform: scaleY(1);
    }
  }

  h4 {
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    line-height: 1.7;
    font-weight: 400;

    strong {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
}

.core-courses .course-item {
  border-left-color: var(--accent-color);
}

.syllabus-list {
  margin: 0.5rem 0 0;
  padding-left: 1.2rem;
  color: var(--text-secondary);
  li { margin-bottom: 0.35rem; }
}

// Facilities Section
.facilities-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-section) 50%, var(--background-white) 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 60% 30%, rgba(127, 179, 211, 0.06) 0%, transparent 50%),
                radial-gradient(circle at 30% 70%, rgba(74, 144, 164, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.facility-item {
  background: var(--background-white);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.2);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px var(--shadow-medium);
    
    &::before {
      transform: scaleX(1);
    }
    
    .facility-icon {
      transform: scale(1.1);
      filter: brightness(1.2);
    }
  }

  .facility-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    filter: brightness(0.9);
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1.25rem;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-weight: 400;
  }
}

// Admissions Section
.admissions-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--success-color) 0%, var(--primary-light) 50%, var(--accent-color) 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 25% 40%, rgba(255,255,255,0.1) 0%, transparent 60%),
                radial-gradient(circle at 75% 60%, rgba(255,255,255,0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  .section-title {
    color: white;
    z-index: 2;
    position: relative;
    
    &::after {
      background: linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
    }
  }
}

.admission-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.admission-status {
  text-align: center;
  
  .status-badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem 2rem;
    border-radius: 25px;
    font-size: 1.2rem;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1rem;
  }
  
  .deadline {
    font-size: 1.1rem;
    opacity: 0.9;
  }
}

.admission-process, .eligibility {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
}

.offline-note {
  grid-column: 1 / -1;
  background: #ffffff;
  color: var(--text-primary);
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  margin-top: 0.5rem;
  line-height: 1.7;
  box-shadow: 0 8px 25px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.35);
  backdrop-filter: none;

  strong {
    color: var(--primary-color);
  }
}

.process-steps {
  display: grid;
  gap: 0.5rem;
  
  .step {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 5px;
    font-weight: 500;
  }
}

.eligibility {
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:before {
        content: '✓';
        color: #90EE90;
        margin-right: 0.5rem;
        font-weight: bold;
      }
    }
  }
}

// Contact Section
.contact-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background-section) 0%, var(--background-light) 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 40% 20%, rgba(74, 144, 164, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 80% 80%, rgba(93, 173, 226, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
}

.contact-grid {
  display: block;
}

.contact-info {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1.25rem 1rem;
  background: var(--background-white);
  border-radius: 12px;
  box-shadow: 0 6px 20px var(--shadow-light);
  border: 1px solid rgba(213, 219, 219, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px var(--shadow-medium);
  }

  .contact-icon {
    font-size: 2rem;
    margin-top: 0.25rem;
    filter: brightness(0.9);
    transition: all 0.3s ease;
    flex: 0 0 2.25rem;
  }
  
  &:hover .contact-icon {
    filter: brightness(1.1);
    transform: scale(1.05);
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-weight: 400;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  > div:last-child {
    min-width: 0;
  }
}

/* Contact form removed */

// Smooth Scrolling
html {
  scroll-behavior: smooth;
}

// Section spacing
section {
  scroll-margin-top: 70px; // Account for fixed header
}

// Responsive Design
@media (max-width: 1024px) and (min-width: 769px) {
  .announcement-text h3 {
    font-size: 1.6rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  .stat-item {
    padding: 2.5rem 2rem;
    
    h3 {
      font-size: 3.5rem;
    }
  }
}

@media (max-width: 768px) {
  .hero-section{
    padding: 2rem 2rem 6rem;
  }
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-image{
    display: none;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid,
  .courses-grid,
  .news-grid,
  .facilities-grid,
  .courses-list {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .stat-item {
    padding: 2rem 1.5rem;
    
    h3 {
      font-size: 3rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }

  .announcement-content {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .announcement-text h3 {
    font-size: 1.5rem;
  }

  .announcement-text p {
    font-size: 1rem;
  }

  .about-content,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .mission-vision {
    margin-top: 2rem;
  }

  .admission-info {
    grid-template-columns: 1fr;
  }
}
</style>
