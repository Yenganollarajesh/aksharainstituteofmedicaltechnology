<template>
  <div class="facilities-page">
    <!-- Hero Section -->
    <section class="facilities-hero">
      <div class="container">
        <h1>Our Facilities</h1>
        <p class="hero-subtitle">State-of-the-art Infrastructure for Excellence in Healthcare Education</p>
      </div>
    </section>

    <!-- Main Facilities Grid -->
    <section class="facilities-grid-section">
      <div class="container">
        <div class="facilities-grid">
          <div class="facility-card">
            <div class="facility-icon">🔬</div>
            <h3>Advanced Laboratories</h3>
            <p>Modern laboratories equipped with latest instruments for practical training in pathology, biochemistry, and microbiology.</p>
            <ul>
              <li>Pathology Lab with microscopes</li>
              <li>Biochemistry Lab with analyzers</li>
              <li>Microbiology Lab with cultures</li>
              <li>Research facilities</li>
            </ul>
          </div>

          <div class="facility-card">
            <div class="facility-icon">📚</div>
            <h3>Digital Library</h3>
            <p>Comprehensive library with extensive collection of medical books, journals, and digital resources.</p>
            <ul>
              <li>5000+ medical books</li>
              <li>Digital database access</li>
              <li>Study halls with Wi-Fi</li>
              <li>Research journals</li>
            </ul>
          </div>

          <div class="facility-card">
            <div class="facility-icon">🏥</div>
            <h3>Simulation Labs</h3>
            <p>Clinical simulation labs for hands-on training with advanced medical equipment and procedures.</p>
            <ul>
              <li>Patient simulators</li>
              <li>X-ray machines</li>
              <li>ECG equipment</li>
              <li>Dialysis units</li>
            </ul>
          </div>

          <div class="facility-card">
            <div class="facility-icon">💻</div>
            <h3>Computer Center</h3>
            <p>Modern computer lab with high-speed internet for digital learning and research activities.</p>
            <ul>
              <li>50+ computers</li>
              <li>High-speed internet</li>
              <li>Medical software</li>
              <li>Online learning platforms</li>
            </ul>
          </div>

          <div class="facility-card">
            <div class="facility-icon">🏢</div>
            <h3>Auditorium</h3>
            <p>Large auditorium for lectures, seminars, and conferences with modern audio-visual systems.</p>
            <ul>
              <li>300+ seating capacity</li>
              <li>Modern AV systems</li>
              <li>Air conditioning</li>
              <li>Conference facilities</li>
            </ul>
          </div>

          <div class="facility-card">
            <div class="facility-icon">🏠</div>
            <h3>Hostel Accommodation</h3>
            <p>Safe and comfortable hostel facilities with modern amenities for outstation students.</p>
            <ul>
              <li>Separate boys & girls hostels</li>
              <li>24/7 security</li>
              <li>Mess facilities</li>
              <li>Wi-Fi connectivity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Clinical Training Section -->
    <section class="clinical-training">
      <div class="container">
        <h2 class="section-title">Clinical Training Partners</h2>
        <p class="section-subtitle">Hands-on training at affiliated hospitals and healthcare facilities</p>
        <div class="partners-grid">
          <div class="partner-card">
            <h3>🏥 City General Hospital</h3>
            <p>500-bed multispecialty hospital for clinical rotations and internships.</p>
          </div>
          <div class="partner-card">
            <h3>🩺 Regional Medical Center</h3>
            <p>Advanced diagnostic center for practical training in laboratory procedures.</p>
          </div>
          <div class="partner-card">
            <h3>🚑 Emergency Care Unit</h3>
            <p>24/7 emergency services for real-world emergency medical training.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Amenities -->
    <section class="amenities-section">
      <div class="container">
        <h2 class="section-title">Additional Amenities</h2>
        <div class="amenities-grid">
          <div class="amenity-item">
            <div class="amenity-icon">🍽️</div>
            <h3>Cafeteria</h3>
            <p>Healthy and hygienic food options</p>
          </div>
          <div class="amenity-item">
            <div class="amenity-icon">🚌</div>
            <h3>Transport</h3>
            <p>College bus service for students</p>
          </div>
          <div class="amenity-item">
            <div class="amenity-icon">⚕️</div>
            <h3>Medical Center</h3>
            <p>On-campus health services</p>
          </div>
          <div class="amenity-item">
            <div class="amenity-icon">🏃‍♂️</div>
            <h3>Sports Complex</h3>
            <p>Indoor and outdoor sports facilities</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Facilities page logic
</script>

<style lang="scss" scoped>
.facilities-page {
  padding-top: 70px;
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
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

// Hero Section
.facilities-hero {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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

// Facilities Grid
.facilities-grid-section {
  padding: 4rem 0;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.facility-card {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .facility-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #2c5aa0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    text-align: left;
    color: #666;

    li {
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;

      &:before {
        content: '✓';
        color: #28a745;
        margin-right: 0.5rem;
        font-weight: bold;
      }
    }
  }
}

// Clinical Training
.clinical-training {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.partner-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
}

// Amenities
.amenities-section {
  padding: 4rem 0;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.amenity-item {
  text-align: center;
  padding: 2rem;

  .amenity-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2c5aa0;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
}

// Responsive Design
@media (max-width: 768px) {
  .facilities-hero h1 {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
