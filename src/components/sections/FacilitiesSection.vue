<template>
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
</template>

<style lang="scss" scoped>
.facilities-section {
  padding: 5rem 0;
  background: var(--background-white);
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
