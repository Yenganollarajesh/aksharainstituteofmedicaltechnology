<template>
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
</template>

<style lang="scss" scoped>
.contact-section {
  padding: 5rem 0;
  background: var(--background-section);
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

.contact-grid {
  display: flex;
  justify-content: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 800px;
  width: 100%;
}

.contact-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .contact-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .contact-item {
    padding: 1.5rem;
  }
}
</style>
