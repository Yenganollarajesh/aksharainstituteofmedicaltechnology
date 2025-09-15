<template>
  <section id="news" class="news-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">News & Events</h2>
        <p class="section-subtitle">Stay updated with latest seminars, job opportunities, and internship programs</p>
      </div>

      <!-- Event Categories -->
      <div class="event-categories">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-btn', { active: activeCategory === category.id }]"
          @click="setActiveCategory(category.id)"
        >
          <span class="category-icon">
            <svg v-if="category.id === 'all'" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/>
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/>
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
            </svg>
            <svg v-else-if="category.id === 'seminar'" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.10457 10 4 10.8954 4 12C4 13.1046 3.10457 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <svg v-else-if="category.id === 'job-fair'" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
              <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
            </svg>
            <svg v-else-if="category.id === 'internship'" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21V19H3V21Z" stroke="currentColor" stroke-width="2"/>
              <path d="M5 19H19V7H5V19ZM7 9H17V17H7V9Z" stroke="currentColor" stroke-width="2"/>
              <path d="M9 11H15V13H9V11Z" stroke="currentColor" stroke-width="2"/>
              <path d="M9 14H15V15H9V14Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          {{ category.name }}
        </button>
      </div>

      <!-- Events Grid -->
      <div class="events-grid">
        <div 
          v-for="event in filteredEvents" 
          :key="event.id"
          :class="['event-card', event.category]"
        >
          <div class="event-header">
            <div class="header-left">
              <div class="event-category-badge">
                <span class="badge-icon">
                  <svg v-if="event.category === 'seminar'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.10457 10 4 10.8954 4 12C4 13.1046 3.10457 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C20.8954 14 20 13.1046 20 12C20 10.8954 20.8954 10 22 10Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else-if="event.category === 'job-fair'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else-if="event.category === 'internship'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21V19H3V21Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M5 19H19V7H5V19ZM7 9H17V17H7V9Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M9 11H15V13H9V11Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M9 14H15V15H9V14Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                {{ getCategoryName(event.category) }}
              </div>
              <div class="event-date">{{ event.date }}</div>
            </div>
            <div class="header-right" v-if="event.status">
              <span :class="['status-badge', event.status.toLowerCase().replace(/\s+/g, '-')]">{{ event.status }}</span>
            </div>
          </div>
          
          <div class="event-content">
            <h3>{{ event.title }}</h3>
            <p class="event-description">{{ event.description }}</p>
            
            <div class="event-details">
              <div class="detail-item" v-if="event.venue">
                <span class="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#64748b" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#64748b" stroke-width="2"/>
                  </svg>
                </span>
                <span>{{ event.venue }}</span>
              </div>
              <div class="detail-item" v-if="event.time">
                <span class="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#64748b" stroke-width="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ event.time }}</span>
              </div>
              <div class="detail-item" v-if="event.organizer">
                <span class="detail-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>{{ event.organizer }}</span>
              </div>
            </div>

            <div class="event-highlights" v-if="event.highlights">
              <h4>Key Highlights:</h4>
              <ul>
                <li v-for="highlight in event.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>

            <div class="event-actions" v-if="event.registrationLink || event.moreInfo">
              <button v-if="event.registrationLink" class="btn-register" @click="handleRegistration(event)">
                Register Now
              </button>
              <button v-if="event.moreInfo" class="btn-info" @click="showMoreInfo(event)">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Events Summary -->
      <div class="upcoming-summary">
        <h3>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#1e40af" stroke-width="2"/>
            <line x1="16" y1="2" x2="16" y2="6" stroke="#1e40af" stroke-width="2"/>
            <line x1="8" y1="2" x2="8" y2="6" stroke="#1e40af" stroke-width="2"/>
            <line x1="3" y1="10" x2="21" y2="10" stroke="#1e40af" stroke-width="2"/>
          </svg>
          Upcoming This Month
        </h3>
        <div class="summary-grid">
          <div class="summary-item">
            <div class="summary-number">{{ getEventCount('seminar') }}</div>
            <div class="summary-label">Seminars & Workshops</div>
          </div>
          <div class="summary-item">
            <div class="summary-number">{{ getEventCount('job-fair') }}</div>
            <div class="summary-label">Job Fairs</div>
          </div>
          <div class="summary-item">
            <div class="summary-number">{{ getEventCount('internship') }}</div>
            <div class="summary-label">Internship Programs</div>
          </div>
          <div class="summary-item">
            <div class="summary-number">{{ getEventCount('other') }}</div>
            <div class="summary-label">Other Events</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Reactive data
const activeCategory = ref('all');

// Categories for filtering
const categories = ref([
  { id: 'all', name: 'All Events' },
  { id: 'seminar', name: 'Seminars' },
  { id: 'job-fair', name: 'Job Fairs' },
  { id: 'internship', name: 'Internships' },
  { id: 'other', name: 'Other' }
]);

// Events data
const events = ref([
  {
    id: 1,
    category: 'seminar',
    title: 'Advanced Diagnostic Techniques in Medical Laboratory',
    description: 'Comprehensive workshop on latest diagnostic technologies and laboratory management practices.',
    date: 'December 15, 2024',
    time: '10:00 AM - 4:00 PM',
    venue: 'College Auditorium',
    organizer: 'Department of Medical Laboratory Technology',
    status: 'Open',
    registrationLink: true,
    moreInfo: true,
    highlights: [
      'Hands-on training with latest equipment',
      'Expert sessions by industry professionals',
      'Certificate of participation',
      'Networking opportunities'
    ]
  },
  {
    id: 2,
    category: 'job-fair',
    title: 'Healthcare Career Fair 2024',
    description: 'Major healthcare institutions recruiting for various paramedical positions and internships.',
    date: 'January 10, 2025',
    time: '9:00 AM - 5:00 PM',
    venue: 'College Campus Ground',
    organizer: 'Placement Cell',
    status: 'Registration Open',
    registrationLink: true,
    moreInfo: true,
    highlights: [
      '50+ healthcare partners participating',
      'On-spot interviews and selections',
      'Internship and full-time opportunities',
      'Resume building workshop'
    ]
  },
  {
    id: 3,
    category: 'internship',
    title: 'Summer Internship Program 2025',
    description: 'Comprehensive internship opportunities at leading hospitals and diagnostic centers.',
    date: 'Applications Open',
    time: 'Duration: 3-6 months',
    venue: 'Various Partner Hospitals',
    organizer: 'Internship Coordination Office',
    status: 'Applications Open',
    registrationLink: true,
    moreInfo: true,
    highlights: [
      'Stipend-based internships available',
      'Real-world clinical experience',
      'Mentorship by senior professionals',
      'Potential for job offers post-completion'
    ]
  },
  {
    id: 4,
    category: 'seminar',
    title: 'Infection Control & Patient Safety Workshop',
    description: 'Essential training on infection prevention protocols and patient safety measures.',
    date: 'December 28, 2024',
    time: '2:00 PM - 6:00 PM',
    venue: 'Skills Laboratory',
    organizer: 'Department of Nursing Sciences',
    status: 'Limited Seats',
    registrationLink: true,
    highlights: [
      'WHO-approved protocols training',
      'Practical demonstrations',
      'Industry-recognized certification'
    ]
  },
  {
    id: 5,
    category: 'job-fair',
    title: 'Government Hospital Recruitment Drive',
    description: 'Special recruitment drive for government hospital positions across the state.',
    date: 'February 5, 2025',
    time: '10:00 AM - 3:00 PM',
    venue: 'Main Conference Hall',
    organizer: 'State Health Department',
    status: 'Upcoming',
    registrationLink: true,
    moreInfo: true,
    highlights: [
      'Direct government job opportunities',
      'Competitive salary packages',
      'Job security and benefits',
      'Multiple location options'
    ]
  },
  {
    id: 6,
    category: 'internship',
    title: 'Research Internship in Medical Technology',
    description: 'Research-focused internship program for students interested in medical technology innovation.',
    date: 'March 1, 2025',
    time: '6 months program',
    venue: 'Research Laboratory',
    organizer: 'Research & Development Cell',
    status: 'Applications Open',
    registrationLink: true,
    highlights: [
      'Work on cutting-edge research projects',
      'Publication opportunities',
      'Research methodology training',
      'Industry collaboration exposure'
    ]
  },
  {
    id: 7,
    category: 'other',
    title: 'Alumni Meet & Industry Connect 2024',
    description: 'Annual gathering of alumni sharing career experiences and networking opportunities.',
    date: 'December 22, 2024',
    time: '11:00 AM - 8:00 PM',
    venue: 'College Campus',
    organizer: 'Alumni Association',
    status: 'Open for All',
    moreInfo: true,
    highlights: [
      'Success stories from alumni',
      'Career guidance sessions',
      'Industry insights and trends',
      'Cultural programs and dinner'
    ]
  },
  {
    id: 8,
    category: 'seminar',
    title: 'Digital Health & Telemedicine Seminar',
    description: 'Exploring the future of healthcare through digital technologies and telemedicine.',
    date: 'January 18, 2025',
    time: '1:00 PM - 5:00 PM',
    venue: 'Digital Learning Center',
    organizer: 'IT Department',
    status: 'Registration Open',
    registrationLink: true,
    highlights: [
      'Latest trends in digital health',
      'Telemedicine platform demonstrations',
      'Career opportunities in health-tech',
      'Interactive Q&A sessions'
    ]
  }
]);

// Computed properties
const filteredEvents = computed(() => {
  if (activeCategory.value === 'all') {
    return events.value;
  }
  return events.value.filter(event => event.category === activeCategory.value);
});

// Methods
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};

// Removed getCategoryIcon function as we now use SVGs directly in template

const getCategoryName = (category) => {
  const categoryMap = {
    'seminar': 'Seminar',
    'job-fair': 'Job Fair',
    'internship': 'Internship',
    'other': 'Event'
  };
  return categoryMap[category] || 'Event';
};

const getEventCount = (category) => {
  if (category === 'other') {
    return events.value.filter(event => !['seminar', 'job-fair', 'internship'].includes(event.category)).length;
  }
  return events.value.filter(event => event.category === category).length;
};

const handleRegistration = (event) => {
  // In production, this would handle actual registration
  alert(`Registration for "${event.title}" - In production, this would open the registration form or redirect to registration page.`);
};

const showMoreInfo = (event) => {
  // In production, this would show detailed event information
  alert(`More info for "${event.title}" - In production, this would show detailed event information in a modal or separate page.`);
};
</script>

<style lang="scss" scoped>
.news-section {
  padding: 4rem 0;
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

// Event Categories
.event-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 25px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #1e40af;
    color: #1e40af;
    transform: translateY(-2px);
  }
  
  &.active {
    background: #1e40af;
    border-color: #1e40af;
    color: white;
    
    .category-icon {
      filter: brightness(1.2);
    }
  }
  
  .category-icon {
    font-size: 1.1rem;
  }
}

// Events Grid
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.event-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.15);
  }
  
  &.seminar {
    border-left: 4px solid #059669;
  }
  
  &.job-fair {
    border-left: 4px solid #dc2626;
  }
  
  &.internship {
    border-left: 4px solid #7c3aed;
  }
  
  &.other {
    border-left: 4px solid #ea580c;
  }
}

.event-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}

.event-category-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f1f5f9;
  color: #1e40af;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  
  .badge-icon {
    font-size: 1rem;
  }
}

.event-date {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  flex-shrink: 0;
}

.event-content {
  padding: 0 1.5rem 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    line-height: 1.4;
  }
  
  .event-description {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
}

.event-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #64748b;
  
  .detail-icon {
    font-size: 1rem;
    flex-shrink: 0;
  }
}

.event-highlights {
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 0.75rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.5rem;
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.4;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #059669;
        font-weight: bold;
      }
    }
  }
}

.event-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-register, .btn-info {
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-register {
  background: #1e40af;
  color: white;
  
  &:hover {
    background: #1e3a8a;
    transform: translateY(-1px);
  }
}

.btn-info {
  background: #f1f5f9;
  color: #1e40af;
  border: 1px solid #e2e8f0;
  
  &:hover {
    background: #e2e8f0;
    transform: translateY(-1px);
  }
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.header-right {
  display: flex;
  align-items: flex-start;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &.open {
    background: #dcfce7;
    color: #166534;
  }
  
  &.registration {
    background: #dbeafe;
    color: #1e40af;
  }
  
  &.registration-open {
    background: #dbeafe;
    color: #1e40af;
  }
  
  &.applications {
    background: #fef3c7;
    color: #92400e;
  }
  
  &.applications-open {
    background: #fef3c7;
    color: #92400e;
  }
  
  &.limited {
    background: #fee2e2;
    color: #dc2626;
  }
  
  &.limited-seats {
    background: #fee2e2;
    color: #dc2626;
  }
  
  &.open-for-all {
    background: #dcfce7;
    color: #166534;
  }
  
  &.upcoming {
    background: #f3e8ff;
    color: #7c3aed;
  }
}

// Upcoming Summary
.upcoming-summary {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e40af;
    margin-bottom: 2rem;
  }
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.summary-item {
  text-align: center;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  
  .summary-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e40af;
    margin-bottom: 0.5rem;
  }
  
  .summary-label {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }
}

@media (max-width: 768px) {
  .news-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .event-categories {
    justify-content: flex-start;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }
  
  .events-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .event-card {
    margin: 0 0.5rem;
  }
  
  .event-actions {
    flex-direction: column;
  }
  
  .summary-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .summary-item {
    padding: 1rem;
    
    .summary-number {
      font-size: 2rem;
    }
  }
}
</style>
