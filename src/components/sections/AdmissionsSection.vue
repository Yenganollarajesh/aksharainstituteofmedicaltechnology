<template>
  <section id="admissions" class="admissions-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Admissions 2025-26</h2>
        <p class="section-subtitle">Join our paramedical programs and build a rewarding healthcare career</p>
      </div>

      <!-- Admission Status Banner -->
      <!-- <div class="admission-status-banner">
        <div class="status-content">
          <div class="status-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
            Applications Open
          </div>
          <div class="deadline-info">
            <span class="deadline-label">Application Deadline:</span>
            <span class="deadline-date">June 30, 2026</span>
          </div>
        </div>
        <div class="quick-actions">
          <button class="btn-primary" @click="downloadForm('general')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
            </svg>
            Download Application Form
          </button>
          <button class="btn-secondary" @click="openWhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
            </svg>
            Contact Admissions
          </button>
        </div>
      </div> -->

      <div class="admission-content">
        <!-- Eligibility Criteria -->
        <div class="eligibility-section">
          <h3 class="content-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L1 9l11 6 9-5.09V17h2V9L12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 12v6c0 1.1 2.24 2 5 2s5-.9 5-2v-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
            Eligibility Criteria
          </h3>
          <div class="eligibility-cards">
            <div class="eligibility-card">
              <h4>DMLT (Diploma in Medical Laboratory Technology)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology/Mathematics</li>
              </ul>
            </div>
            <div class="eligibility-card">
              <h4>DAT (Diploma in Anaesthesia technology)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology mandatory</li>
              </ul>
            </div>
            <div class="eligibility-card">
              <h4>DMSOT (Diploma in Medical sterilisation management & operation theatre management technology)</h4>
              <ul>
                <li><strong>Education:</strong> 10+2 or Vocational (Intermediate) from recognized board</li>
                <li><strong>Minimum Marks:</strong> 50% aggregate in 10+2</li>
                <li><strong>Age Limit:</strong> 17-45 years as on admission date</li>
                <li><strong>Subjects:</strong> Physics, Chemistry, Biology mandatory</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- How to Apply -->
        <div class="application-process">
          <h3 class="content-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2h6a2 2 0 0 1 2 2v2h-2V4H9v2H7V4a2 2 0 0 1 2-2z" fill="currentColor"/>
    <rect x="6" y="6" width="12" height="16" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
            How to Apply
          </h3>
          <div class="process-timeline">
            <div class="timeline-item">
              <div class="timeline-number">1</div>
              <div class="timeline-content">
                <h4>Download Application Form</h4>
                <p>Get the application form from our website or collect from college office</p>
                <div class="timeline-actions">
                  <button class="btn-download" @click="downloadForm('general')">
                    Download Form
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <!-- <button class="btn-download" @click="downloadForm('dmlt')">Download DMLT Form</button> -->
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">2</div>
              <div class="timeline-content">
                <h4>Fill Application & Gather Documents</h4>
                <div class="application-requirements">
                  <div class="requirement-card">
                    <div class="requirement-header">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <h5>Important Instructions</h5>
                    </div>
                    <div class="requirement-content">
                      <p class="note">Please read these instructions carefully before filling the application form:</p>
                      <ul class="instructions-list">
                        <!-- <li><strong>Deadline:</strong> Filled-in application forms must reach the DM&HO or concerned authority by <span class="highlight">5:00 PM on 30-10-2024</span>.</li> -->
                        <li><strong>Handwriting:</strong> Application must be filled in the candidate's own handwriting in English.</li>
                        <li><strong>Accuracy:</strong> Applications with incomplete/incorrect information or false certificates will be rejected without notice.</li>
                        <li><strong>No Changes:</strong> Candidates cannot change their social status or local candidature after submission.</li>
                        <li><strong>Complete Submission:</strong> Incomplete applications or those without required certificates will be automatically rejected.</li>
                        <li><strong>Fee Policy:</strong> Full course fees must be paid if studies are discontinued to retrieve original certificates.</li>
                      </ul>
                    </div>
                  </div>

                  <div class="requirement-card documents-card">
                    <div class="requirement-header">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 9H9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <h5>Required Documents</h5>
                    </div>
                    <div class="requirement-content">
                      <p class="note">Please prepare the following documents for submission:</p>
                      <ul class="documents-list">
                        <li><span class="document-number">1</span> Date of Birth certificate (SSC or equivalent)</li>
                        <li><span class="document-number">2</span> Marks memo and pass certificate of qualifying examination (INTERMEDIATE or equivalent) including transfer certificate</li>
                        <li><span class="document-number">3</span> Study certificate from 6th class to Intermediate</li>
                        <li><span class="document-number">4</span> Caste Certificate (if applicable for SC/ST/BC candidates)</li>
                        <li><span class="document-number">5</span> Aadhar Card copy</li>
                      </ul>
                      <!-- <div class="submission-note">
                        <strong>Note:</strong> Submit the filled application form with a processing fee of <span class="highlight">₹100 in cash</span> by <span class="highlight">5:00 PM on 30-10-2024</span>.
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">3</div>
              <div class="timeline-content">
                <h4>Submit Application</h4>
                <p>Submit at college office or send by registered post</p>
                <div class="submission-options">
                  <div class="option">
                    <strong>In Person:</strong> College Office (9 AM - 5 PM)
                  </div>
                  <div class="option">
                    <strong>By Post:</strong> Send to college address with DD
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">4</div>
              <div class="timeline-content">
                <h4>Document Verification & Counseling</h4>
                <p>Attend verification session with original documents</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-number">5</div>
              <div class="timeline-content">
                <h4>Fee Payment & Admission Confirmation</h4>
                <p>Pay fees and complete admission formalities</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Scholarship & Management Admission Requirements -->
        <div class="admission-requirements">
          <h3 class="content-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Document Requirements
          </h3>
          
          <div class="requirements-grid">
            <!-- Scholarship Admission -->
            <div class="requirement-card scholarship">
              <div class="requirement-header">
                <h4>For Scholarship Admission</h4>
              </div>
              <div class="requirement-content">
                <div class="documents-required">
                  <h6>Required Documents:</h6>
                  <ol>
                    <li>SSC Memo</li>
                    <li>Intermediate Memo</li>
                    <li>Bonafide Certificates (1st to 10th & Intermediate)</li>
                    <li>Transfer Certificate</li>
                    <li>Caste Certificate</li>
                    <li>Income Certificate</li>
                    <li>Aadhar Card Copy</li>
                    <li>Bank Account Details Copy</li>
                    <li>Passport Size Photographs (6 Nos.)</li>
                  </ol>
                </div>
                
                <div class="note">
<strong>Note:</strong> Please submit two complete sets of photocopies of all required documents at the time of admission.
                </div>
              </div>
            </div>
            
            <!-- Management Admission -->
            <div class="requirement-card management">
              <div class="requirement-header">
                <h4>For Management Admission</h4>
              </div>
              <div class="requirement-content">
                <div class="documents-required">
                  <h6>Required Documents:</h6>
                  <ol>
                    <li>SSC Memo</li>
                    <li>Intermediate Memo</li>
                    <li>Bonafide Certificates (1st to 10th & Intermediate)</li>
                    <li>Transfer Certificate</li>
                    <li>Caste Certificate</li>
                    <li>Aadhar Card Copy</li>
                    <li>Passport Size Photographs (6 Nos.)</li>
                  </ol>
                </div>
                
                <div class="note">
<strong>Note:</strong> Please submit one set of color photocopies and one set of black & white photocopies of all required documents at the time of admission.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Downloadable Forms -->
        <div class="forms-section">
          <h3 class="content-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
            </svg>
            Downloadable Application Forms
          </h3>
          <div class="forms-grid">
            <div class="form-card">
              <div class="form-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
                </svg>
              </div>
              <h4>General Application Form</h4>
              <p>Common application form for all courses</p>
              <button class="btn-download" @click="downloadForm('general')">
                Download PDF
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2v7.59l-4.3 4.3a5 5 0 107.07 7.07l4.3-4.3V2h-7.07z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
              </div>
              <h4>DMLT Specific Form</h4>
              <p>Specialized form for Medical Laboratory Technology</p>
              <button class="btn-download" @click="downloadForm('dmlt')">
                Download PDF
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3a3 3 0 016 0v6a3 3 0 11-6 0V3zM18 9v6a6 6 0 11-12 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="18" cy="9" r="2" fill="currentColor"/>
  </svg>
              </div>
              <h4>DAT Specific Form</h4>
              <p>Specialized form for Anaesthesia technology</p>
              <button class="btn-download" @click="downloadForm('dat')">
                Download PDF
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
            <div class="form-card">
              <div class="form-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
    <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
              </div>
              <h4>DMSOT Specific Form</h4>
              <p>Specialized form for Medical sterilisation management & operation theatre management technology</p>
              <button class="btn-download" @click="downloadForm('dmsot')">
                Download PDF
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Offline Registration -->
        <div class="offline-registration">
          <h3 class="content-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Offline Registration Option
          </h3>
          <div class="offline-content">
            <div class="offline-info">
              <h4>Visit Our Campus</h4>
              <div class="campus-details">
                <div class="detail-item">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Office Hours:</strong>
                    <p>Monday to Saturday: 9:00 AM - 5:00 PM<br>Sunday: Closed</p>
                  </div>
                </div>
                <div class="detail-item">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Address:</strong>
                    <p>AKSHARA INSTITUTE OF MEDICAL TECHNOLOGY<br>2nd Floor Shetty Complex, Rajendranagar, Mahabubnagar, Telangana 509001</p>
                  </div>
                </div>
                <div class="detail-item">
                  <span class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Admissions Helpline:</strong>
                    <p>+91 9949698592, +91 8328574600<br>aimtmahabubnagar@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="offline-benefits">
              <h4>Benefits of Offline Registration</h4>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Personal guidance from admission counselors
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Immediate document verification
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Campus tour and facility visit
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Direct interaction with faculty
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Instant query resolution
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
                    <polyline points="20,6 9,17 4,12" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Same-day admission confirmation (if eligible)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Download form functionality
const downloadForm = (formType) => {
  // Import the PDF file from assets
  import('@/assets/ApplicationForm2.pdf').then((pdfModule) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = pdfModule.default;
    link.download = 'Application-Form.pdf'; // Set the download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }).catch((error) => {
    console.error('Error downloading PDF:', error);
    alert('Error downloading the form. Please try again.');
  });
};

// Open WhatsApp with pre-filled message
const openWhatsApp = () => {
  const phoneNumber = '919949698592'; // Your WhatsApp number with country code
  const message = encodeURIComponent('Hello, I am interested in learning more about the admission process at Akshara Institute of Medical Technology. Could you please provide me with more information about the available courses and admission requirements?');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
};

// Scroll to contact section
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
.admissions-section {
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

// Admission Status Banner
.admission-status-banner {
  background: linear-gradient(135deg, #1e40af 0%, #059669 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 30px rgba(30, 64, 175, 0.2);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 1.25rem;
    margin-bottom: 2rem;
  }
}

.status-content {
  .status-badge {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      justify-content: center;
      margin-bottom: 0.4rem;
    }
    
    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      
      @media (max-width: 768px) {
        width: 14px;
        height: 14px;
      }
    }
  }
  
  .deadline-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
      justify-content: center;
      gap: 0.3rem;
    }
    
    .deadline-label {
      font-weight: 400;
      opacity: 0.9;
      font-size: 0.95rem;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
    
    .deadline-date {
      font-weight: 600;
      font-size: 1.05rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}

.quick-actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
}

// Buttons
.btn-primary, .btn-secondary, .btn-download {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
}

.btn-primary {
  background: white;
  color: #1e40af;
  
  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
}

.btn-download {
  background: #1e40af;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #1e3a8a;
    transform: translateY(-2px);
  }
}

// Content sections
.admission-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
}

// Eligibility Section
.eligibility-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.eligibility-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-family: 'Inter', sans-serif;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 0.5rem 0;
      color: #64748b;
      line-height: 1.5;
      border-bottom: 1px solid #f1f5f9;
      
      &:last-child {
        border-bottom: none;
      }
      
      strong {
        color: #1e293b;
      }
    }
  }
}

// Application Process Timeline
.process-timeline {
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e2e8f0;
    
    @media (max-width: 768px) {
      left: 1.5rem;
    }
  }
}

.timeline-item {
  position: relative;
  padding-left: 5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding-left: 4rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-number {
  position: absolute;
  left: 1.25rem;
  top: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: #1e40af;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    left: 1rem;
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
}

.timeline-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.application-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.requirement-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  border-left: 4px solid #3f51b5;
}

.documents-card {
  border-left-color: #4caf50;
}

.requirement-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.requirement-header svg {
  color: #3f51b5;
  flex-shrink: 0;
}

.documents-card .requirement-header svg {
  color: #4caf50;
}

.requirement-header h5 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.requirement-content {
  padding: 1.25rem;
}

.note {
  color: #555;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.instructions-list,
.documents-list {
  padding-left: 1.5rem;
  margin: 0.75rem 0;
}

.instructions-list li,
.documents-list li {
  margin-bottom: 0.75rem;
  line-height: 1.5;
  color: #444;
}

.documents-list {
  list-style: none;
  padding-left: 0;
}

.documents-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #eee;
}

.document-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #e8f5e9;
  color: #2e7d32;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
}

.highlight {
  color: #d32f2f;
  font-weight: 600;
}

.submission-note {
  margin-top: 1.25rem;
  padding: 0.75rem 1rem;
  background-color: #fff8e1;
  border-radius: 6px;
  border-right: 3px solid #ffc107;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .application-requirements {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .requirement-card {
    width: 100%;
    margin: 0;
  }
  
  .requirement-header {
    padding: 0.75rem 1rem;
  }
  
  .requirement-header h5 {
    font-size: 1rem;
  }
  
  .requirement-header svg {
    width: 20px;
    height: 20px;
  }
  
  .requirement-content {
    padding: 1rem;
  }
  
  .note {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  .instructions-list,
  .documents-list {
    padding-left: 1.25rem;
    margin: 0.5rem 0;
  }
  
  .instructions-list li,
  .documents-list li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .document-number {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
  }
  
  .submission-note {
    margin-top: 1rem;
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
  
  /* Adjust timeline item spacing on mobile */
  .timeline-item {
    margin-bottom: 1.5rem;
  }
  
  .timeline-content {
    padding: 1rem;
  }
  
  .timeline-number {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
    line-height: 28px;
  }
}

/* Extra small devices (phones, 600px and down) */
@media (max-width: 600px) {
  .requirement-header {
    padding: 0.6rem 0.8rem;
  }
  
  .requirement-content {
    padding: 0.8rem;
  }
  
  .documents-list li {
    align-items: flex-start;
    padding: 0.4rem 0;
  }
  
  .document-number {
    margin-top: 3px;
  }
  
  .submission-note {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  
  .highlight {
    display: inline-block;
    margin-top: 2px;
  }
}

.document-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.25rem 0;
    color: #64748b;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
    }
  }
}

.submission-options {
  display: grid;
  gap: 0.75rem;
  
  .option {
    padding: 0.75rem;
    background: #f8fafc;
    border-radius: 6px;
    color: #64748b;
    
    strong {
      color: #1e40af;
    }
  }
}

// Forms Section
.admission-requirements {
  margin: 3rem 0;
  
  .requirements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
    
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
  
  .requirement-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e2e8f0;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }
    
    &.scholarship {
      border-top: 4px solid #4f46e5;
    }
    
    &.management {
      border-top: 4px solid #10b981;
    }
  }
  
  .requirement-header {
    padding: 1.25rem 1.5rem;
    background-color: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    
    h4 {
      margin: 0;
      color: #1e293b;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  
  .requirement-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    
    h5 {
      margin: 0 0 0.5rem;
      color: #1e293b;
      font-size: 1rem;
      font-weight: 600;
    }
    
    .address {
      color: #64748b;
      font-size: 0.9rem;
      margin-bottom: 1.25rem;
      padding-bottom: 1rem;
      border-bottom: 1px dashed #e2e8f0;
    }
    
    .documents-required {
      margin-bottom: 1.25rem;
      flex: 1;
      
      h6 {
        margin: 0 0 0.75rem;
        color: #334155;
        font-size: 0.95rem;
        font-weight: 600;
      }
      
      ol {
        margin: 0;
        padding-left: 1.25rem;
        
        li {
          margin-bottom: 0.5rem;
          color: #475569;
          font-size: 0.9rem;
          line-height: 1.5;
        }
      }
    }
    
    .note {
      background-color: #f8fafc;
      border-left: 3px solid #f59e0b;
      padding: 0.75rem 1rem;
      border-radius: 0 4px 4px 0;
      font-size: 0.85rem;
      color: #64748b;
      line-height: 1.5;
      
      strong {
        color: #d97706;
      }
    }
  }
}

.forms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.15);
  }
  
  .form-icon {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 32px;
      height: 32px;
      color: #1e40af;
    }
  }
  
  h4 {
    color: #1e40af;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  p {
    color: #64748b;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-download {
    margin-top: auto;
  }
}

//* Offline Registration */
.offline-registration {
  margin-top: 3rem;
}

.offline-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  margin-top: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.offline-info, .offline-benefits {
  background: white;
  padding: 1.5rem;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  h4 {
    color: #1e40af;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e2e8f0;
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
}

.campus-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.35rem 0;
  
  @media (max-width: 768px) {
    gap: 0.85rem;
  }
  
  .icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #f0f7ff;
    border-radius: 8px;
    
    @media (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
    
    svg {
      width: 18px;
      height: 18px;
      color: #1e40af;
      
      @media (max-width: 768px) {
        width: 16px;
        height: 16px;
      }
    }
  }
  
  div {
    flex: 1;
    
    strong {
      color: #1e40af;
      display: block;
      margin-bottom: 0.3rem;
      font-size: 1.05rem;
      
      @media (max-width: 768px) {
        font-size: 0.95rem;
        margin-bottom: 0.2rem;
      }
    }
    
    p {
      color: #4a5568;
      margin: 0;
      line-height: 1.5;
      font-size: 0.95rem;
      
      @media (max-width: 768px) {
        font-size: 0.88rem;
        line-height: 1.45;
      }
    }
  }
}

.offline-benefits {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.8rem;
    
    li {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      padding: 0.6rem 0.75rem;
      background: #f8fafc;
      border-radius: 8px;
      color: #2d3748;
      line-height: 1.4;
      transition: all 0.2s ease;
      font-size: 0.94rem;
      
      &:hover {
        background: #edf2f7;
        transform: translateX(4px);
      }
      
      svg {
        flex-shrink: 0;
        margin-top: 0.15rem;
      }
      
      @media (max-width: 768px) {
        font-size: 0.88rem;
        padding: 0.5rem 0.6rem;
        gap: 0.6rem;
      }
    }
  }
  
  @media (max-width: 1024px) {
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .admissions-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 1.875rem;
  }
  
  .eligibility-cards, .forms-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-actions {
    flex-direction: column;
  }
}
</style>
