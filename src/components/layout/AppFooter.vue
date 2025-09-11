<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- College Info -->
          <div class="footer-section">
            <h3>Paramedical College</h3>
            <p>Shaping Healthcare Professionals for Tomorrow</p>
            <p>Established in 2004, we have been providing quality paramedical education for over 20 years.</p>
            <div class="contact-info">
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@paramedicalcollege.edu</p>
              <p>📍 123 Healthcare Avenue, Medical District</p>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <!-- Courses -->
          <div class="footer-section">
            <h3>Popular Courses</h3>
            <ul class="footer-links">
              <li><a href="#mlt">Medical Laboratory Technology</a></li>
              <li><a href="#xray">X-Ray Technology</a></li>
              <li><a href="#pharmacy">Pharmacy Assistant</a></li>
              <li><a href="#ot">Operation Theatre Technology</a></li>
              <li><a href="#physiotherapy">Physiotherapy Assistant</a></li>
            </ul>
          </div>

          <!-- Follow Us -->
          <div class="footer-section">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#facebook" class="social-link">📘 Facebook</a>
              <a href="#instagram" class="social-link">📷 Instagram</a>
              <a href="#twitter" class="social-link">🐦 Twitter</a>
              <a href="#linkedin" class="social-link">💼 LinkedIn</a>
              <a href="#youtube" class="social-link">📺 YouTube</a>
            </div>
            <div class="newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe for updates and announcements</p>
              <div class="newsletter-form">
                <input type="email" placeholder="Enter your email" v-model="email">
                <button @click="subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; 2024 Paramedical College. All rights reserved.</p>
          <div class="footer-links-bottom">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms & Conditions</a>
            <span>|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const subscribe = () => {
  if (email.value) {
    alert('Thank you for subscribing to our newsletter!')
    email.value = ''
  } else {
    alert('Please enter a valid email address.')
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  background: #2c5aa0;
  color: white;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  padding: 3rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section {
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}

.contact-info {
  margin-top: 1.5rem;

  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
}

.footer-links {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;

    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }
  }
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;

  .social-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
}

.newsletter {
  h4 {
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    input {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 3px;
      font-size: 0.9rem;
    }

    button {
      background: #ff6b6b;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s ease;

      &:hover {
        background: #ff5252;
      }
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  background: #1e3f72;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }

  .footer-links-bottom {
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: white;
      }
    }

    span {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}

// Responsive Design
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .newsletter-form {
    flex-direction: column;
    gap: 0.5rem;

    button {
      align-self: stretch;
    }
  }

  .social-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}
</style>
