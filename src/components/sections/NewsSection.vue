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
          <span class="category-icon">{{ category.icon }}</span>
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
                <span class="badge-icon">{{ getCategoryIcon(event.category) }}</span>
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
                <span class="detail-icon">📍</span>
                <span>{{ event.venue }}</span>
              </div>
              <div class="detail-item" v-if="event.time">
                <span class="detail-icon">🕒</span>
                <span>{{ event.time }}</span>
              </div>
              <div class="detail-item" v-if="event.organizer">
                <span class="detail-icon">👥</span>
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
        <h3>📅 Upcoming This Month</h3>
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
  { id: 'all', name: 'All Events', icon: '📅' },
  { id: 'seminar', name: 'Seminars', icon: '🎓' },
  { id: 'job-fair', name: 'Job Fairs', icon: '💼' },
  { id: 'internship', name: 'Internships', icon: '🏥' },
  { id: 'other', name: 'Other', icon: '📢' }
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

const getCategoryIcon = (category) => {
  const categoryMap = {
    'seminar': '🎓',
    'job-fair': '💼',
    'internship': '🏥',
    'other': '📢'
  };
  return categoryMap[category] || '📅';
};

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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
