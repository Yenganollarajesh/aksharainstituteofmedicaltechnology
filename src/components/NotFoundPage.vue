<template>
  <div class="not-found">
    <div class="content">
      <div class="error-code">404</div>
      <div class="error-message">
        <h1>Page Not Found</h1>
        <p class="lead">Oops! The page you're looking for doesn't exist or has been moved.</p>
      </div>
      <!-- <div class="error-actions">
        <router-link to="/" class="home-button">
          <i class="fas fa-home"></i> Return Home
        </router-link>
        <a href="javascript:history.back()" class="back-button">
          <i class="fas fa-arrow-left"></i> Go Back
        </a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  font-family: 'Poppins', sans-serif;
}

.content {
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 4rem 3rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #4a90e2;
  line-height: 1;
  margin: 0 0 1.5rem;
  text-shadow: 3px 3px 0 rgba(74, 144, 226, 0.1);
  position: relative;
  display: inline-block;
}

.error-message h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin: 0 0 1rem;
  font-weight: 700;
}

.lead {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.home-button, .back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.home-button {
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: white;
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
}

.back-button {
  background: white;
  color: #4a90e2;
  border: 2px solid #e1e5ee;
}

.home-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.back-button:hover {
  background: #f8f9fa;
  border-color: #4a90e2;
}

/* Responsive adjustments */
@media (max-width: 480px) {
  .content {
    padding: 3rem 1.5rem;
  }
  
  .error-code {
    font-size: 6rem;
  }
  
  .error-message h1 {
    font-size: 1.8rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .home-button, .back-button {
    padding: 10px 20px;
    font-size: 0.95rem;
  }
}
</style>
