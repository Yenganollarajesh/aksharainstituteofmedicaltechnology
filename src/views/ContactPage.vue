<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p class="hero-subtitle">Get in touch with us for admissions, inquiries, and more</p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                  <h3>Address</h3>
                  <p>123 Healthcare Avenue<br>Medical District, City - 123456<br>State, India</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>Main: +91 98765 43210<br>Admissions: +91 98765 43211<br>Fax: +91 98765 43212</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>info@paramedicalcollege.edu<br>admissions@paramedicalcollege.edu<br>principal@paramedicalcollege.edu</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">🕐</div>
                <div class="contact-details">
                  <h3>Office Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <h2>Send us a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" v-model="formData.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" v-model="formData.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" v-model="formData.phone">
              </div>
              <div class="form-group">
                <label for="subject">Subject *</label>
                <select id="subject" v-model="formData.subject" required>
                  <option value="">Select Subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="courses">Course Information</option>
                  <option value="facilities">Facilities Query</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Find Us</h2>
        <div class="map-placeholder">
          <div class="map-content">
            <h3>📍 Location Map</h3>
            <p>Interactive map would be embedded here showing the exact location of our college campus.</p>
            <p><strong>Directions:</strong> Take bus route 45 or metro line 2 to Medical District Station. Our campus is a 5-minute walk from the station.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  isSubmitting.value = true
  
  setTimeout(() => {
    alert('Message sent successfully! We will get back to you within 24 hours.')
    // Reset form
    Object.keys(formData.value).forEach(key => {
      formData.value[key] = ''
    })
    isSubmitting.value = false
  }, 2000)
}
</script>

<style lang="scss" scoped>
.contact-page {
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
  margin-bottom: 3rem;
}

// Hero Section
.contact-hero {
  background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
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

// Contact Content
.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  h2 {
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
}

.contact-item {
  display: flex;
  margin-bottom: 2rem;

  .contact-icon {
    font-size: 2rem;
    margin-right: 1rem;
    margin-top: 0.5rem;
  }

  .contact-details {
    h3 {
      color: #2c5aa0;
      margin-bottom: 0.5rem;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.contact-form-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
}

.contact-form {
  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      color: #333;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input, select, textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #2c5aa0;
      }
    }
  }

  .submit-btn {
    background: #2c5aa0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
    width: 100%;

    &:hover:not(:disabled) {
      background: #1e3f72;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

// Map Section
.map-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.map-placeholder {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 4rem 2rem;
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  .map-content {
    h3 {
      color: #2c5aa0;
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 1rem;
      max-width: 600px;
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .contact-hero h1 {
    font-size: 2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
