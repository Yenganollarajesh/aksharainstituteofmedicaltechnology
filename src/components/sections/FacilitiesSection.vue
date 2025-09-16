<template>
  <section id="facilities" class="facilities-section">
    <div class="container">
      <h2 class="section-title">Our Facilities</h2>
      <div class="facilities-grid">
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="#1e40af" stroke-width="2"/>
              <path d="M12 1V3" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M12 21V23" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M4.22 4.22L5.64 5.64" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M18.36 18.36L19.78 19.78" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M1 12H3" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M21 12H23" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M4.22 19.78L5.64 18.36" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
              <path d="M18.36 5.64L19.78 4.22" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Advanced Laboratories</h3>
          <p>Modern laboratories equipped with latest instruments for practical training in pathology, biochemistry, and microbiology.</p>
        </div>
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3>Digital Library</h3>
          <p>Comprehensive library with extensive collection of medical books, journals, and digital resources.</p>
        </div>
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21V19H3V21Z" stroke="#1e40af" stroke-width="2"/>
              <path d="M5 19H19V7H5V19ZM7 9H17V17H7V9Z" stroke="#1e40af" stroke-width="2"/>
              <path d="M9 11H15V13H9V11Z" stroke="#1e40af" stroke-width="2"/>
              <path d="M9 14H15V15H9V14Z" stroke="#1e40af" stroke-width="2"/>
            </svg>
          </div>
          <h3>Simulation Labs</h3>
          <p>Clinical simulation labs for hands-on training with advanced medical equipment and procedures.</p>
        </div>
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#1e40af" stroke-width="2"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="#1e40af" stroke-width="2"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="#1e40af" stroke-width="2"/>
            </svg>
          </div>
          <h3>Computer Center</h3>
          <p>Modern computer lab with high-speed internet for digital learning and research activities.</p>
        </div>
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 20h18M3 4h18v16H3V4z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 8c2-2 6-2 9-2s7 0 9 2" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 12h8" stroke="#1e40af" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3>Auditorium</h3>
          <p>Large auditorium for lectures, seminars, and conferences with modern audio-visual systems.</p>
        </div>
        <div class="facility-item">
          <div class="facility-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#1e40af" stroke-width="2"/>
              <polyline points="9,22 9,12 15,12 15,22" stroke="#1e40af" stroke-width="2"/>
            </svg>
          </div>
          <h3>Hostel Accommodation</h3>
          <p>Safe and comfortable hostel facilities with modern amenities for outstation students.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.facilities-section {
  // padding: 5rem 0;
  // background: var(--background-white);
  padding-bottom: 3rem;
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

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.facility-item {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
  
  .facility-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1rem;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .facilities-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  .facilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .facility-item {
    padding: 2rem 1.5rem;
  }
}
</style>
