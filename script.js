// DOM Elements
const clock = document.getElementById('clock');
const date = document.getElementById('date');
const dayOfWeek = document.getElementById('dayOfWeek');
const timezone = document.getElementById('timezone');
const period = document.getElementById('period');
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const toggleBtn = document.getElementById('toggleTheme');
const setBackgroundBtn = document.getElementById('setBackground');
const bgButtons = document.querySelectorAll('.bg-btn');

// State
let darkMode = false;
let currentBackground = 'gradient';

// Initialize
function init() {
  updateClock();
  setInterval(updateClock, 1000);
  setupEventListeners();
  createParticles();
  createWaves();
}

// Update clock
function updateClock() {
  const now = new Date();
  
  // Digital time
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${mins}:${secs}`;
  
  // Date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  date.textContent = now.toLocaleDateString('en-US', options);
  
  // Day of week
  const dayOptions = { weekday: 'long' };
  dayOfWeek.textContent = now.toLocaleDateString('en-US', dayOptions);
  
  // Time period
  period.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
  
  // Analog clock hands
  const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
  const minuteDeg = now.getMinutes() * 6 + now.getSeconds() * 0.1;
  const secondDeg = now.getSeconds() * 6;
  
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Setup event listeners
function setupEventListeners() {
  toggleBtn.addEventListener('click', toggleTheme);
  setBackgroundBtn.addEventListener('click', setAsDesktopBackground);
  
  bgButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      changeBackground(btn.dataset.bg);
    });
  });
}

// Toggle theme
function toggleTheme() {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
  
  if (darkMode) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i><span>Light Mode</span>';
    document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i><span>Dark Mode</span>';
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }
  
  showNotification(`Switched to ${darkMode ? 'Dark' : 'Light'} Mode`, 'info');
}

// Change background
function changeBackground(type) {
  currentBackground = type;
  
  // Remove active class from all buttons
  bgButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  event.target.classList.add('active');
  
  // Apply background
  switch(type) {
    case 'gradient':
      document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      document.getElementById('particles').style.display = 'none';
      document.getElementById('waves').style.display = 'none';
      break;
    case 'particles':
      document.body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
      document.getElementById('particles').style.display = 'block';
      document.getElementById('waves').style.display = 'none';
      break;
    case 'waves':
      document.body.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
      document.getElementById('particles').style.display = 'none';
      document.getElementById('waves').style.display = 'block';
      break;
    case 'minimal':
      document.body.style.background = '#f8f9fa';
      document.getElementById('particles').style.display = 'none';
      document.getElementById('waves').style.display = 'none';
      break;
  }
  
  showNotification(`Background changed to ${type}`, 'info');
}

// Set as desktop background
function setAsDesktopBackground() {
  // Create a canvas to capture the current state
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Draw background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Convert to blob and download
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'clock-background.png';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Background image downloaded! Set it as your desktop wallpaper.', 'success');
  });
}

// Create particles effect
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      animation: float ${3 + Math.random() * 4}s linear infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    particlesContainer.appendChild(particle);
  }
}

// Create waves effect
function createWaves() {
  const wavesContainer = document.getElementById('waves');
  
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement('div');
    wave.style.cssText = `
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200%;
      height: 100px;
      background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
      animation: wave ${2 + i}s ease-in-out infinite;
      transform: translateX(-50%);
    `;
    wavesContainer.appendChild(wave);
  }
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#6c5ce7'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-size: 14px;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  @keyframes wave {
    0%, 100% {
      transform: translateX(-50%) translateY(0px);
    }
    50% {
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);

// Initialize the clock
init(); 