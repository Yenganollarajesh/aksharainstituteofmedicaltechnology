<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#1e40af" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="#1e40af" stroke-width="2"/>
              </svg>
            </div>
            <div>
              <h3>Address</h3>
              <p>123 Healthcare Avenue<br>Medical District, City - 123456<br>State, India</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>Phone</h3>
              <p>Main: +91 98765 43210<br>Admissions: +91 98765 43211</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@paramedicalcollege.edu<br>admissions@paramedicalcollege.edu</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#1e40af" stroke-width="2"/>
                <polyline points="12,6 12,12 16,14" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
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
  display: grid;
  justify-content: center;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 1.5rem 2rem;
  max-width: 960px;
  width: 100%;
}

.contact-item {
  background: white;
  padding: 1.5rem 1.25rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
  
  .contact-icon {
    font-size: 1.75rem;
    flex-shrink: 0;
    line-height: 1;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
  }
}

@media (max-width: 992px) {
  .contact-section {
    padding: 3.5rem 0;
  }
  
  .section-title {
    font-size: 2.125rem;
    margin-bottom: 2.25rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    max-width: 680px;
  }
  
  .contact-item {
    padding: 1.25rem 1rem;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 1.875rem;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .contact-item {
    padding: 1rem;
    border-radius: 10px;
  }
}
</style>
