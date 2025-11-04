// Leren Timer - Content Script
// This script creates a beautiful 8-minute timer overlay

(function() {
  'use strict';

  // Check if timer already exists
  if (document.getElementById('leren-timer-overlay')) {
    return;
  }

  // Create timer overlay container
  const overlay = document.createElement('div');
  overlay.id = 'leren-timer-overlay';
  overlay.innerHTML = `
    <div class="leren-timer-container" id="leren-timer-container">
      <div class="timer-card">
        <div class="timer-header">
          <h2 class="timer-title">⏱️ Leren Timer</h2>
          <button class="timer-close" id="timer-close" aria-label="Sluiten">×</button>
        </div>
        <div class="timer-display-wrapper">
          <div class="timer-circle-container">
            <svg class="timer-progress-ring" width="200" height="200">
              <defs>
                <linearGradient id="leren-timer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                </linearGradient>
              </defs>
              <circle
                class="timer-progress-ring-circle-bg"
                stroke="#e0e0e0"
                stroke-width="8"
                fill="transparent"
                r="90"
                cx="100"
                cy="100"
              />
              <circle
                class="timer-progress-ring-circle"
                stroke="url(#leren-timer-gradient)"
                stroke-width="8"
                fill="transparent"
                r="90"
                cx="100"
                cy="100"
              />
            </svg>
            <div class="timer-display" id="timer-display">
              <span class="timer-time">8:00</span>
              <span class="timer-label">minuten</span>
            </div>
          </div>
        </div>
        <div class="timer-controls">
          <button class="timer-btn timer-btn-start" id="timer-start">
            <span class="btn-icon">▶</span>
            <span class="btn-text">Start</span>
          </button>
          <button class="timer-btn timer-btn-pause" id="timer-pause" style="display: none;">
            <span class="btn-icon">⏸</span>
            <span class="btn-text">Pauze</span>
          </button>
          <button class="timer-btn timer-btn-reset" id="timer-reset">
            <span class="btn-icon">↻</span>
            <span class="btn-text">Reset</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Timer state
  let defaultDuration = 480; // 8 minutes in seconds (default)
  let timeRemaining = defaultDuration;
  let timerInterval = null;
  let isRunning = false;
  let isPaused = false;

  // Load custom duration from storage
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get(['timerDuration'], function(result) {
      if (result.timerDuration) {
        defaultDuration = result.timerDuration * 60; // Convert minutes to seconds
        timeRemaining = defaultDuration;
        updateDisplay();
      }
    });
  }

  // Get DOM elements
  const timerDisplay = document.getElementById('timer-display');
  const timerDisplayTime = timerDisplay.querySelector('.timer-time');
  const startBtn = document.getElementById('timer-start');
  const pauseBtn = document.getElementById('timer-pause');
  const resetBtn = document.getElementById('timer-reset');
  const closeBtn = document.getElementById('timer-close');
  const container = document.getElementById('leren-timer-container');
  const progressCircle = document.querySelector('.timer-progress-ring-circle');

  // Calculate circle circumference for progress
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  progressCircle.style.strokeDashoffset = 0;

  // Format time display
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Update progress circle
  function updateProgress() {
    const progress = timeRemaining / defaultDuration;
    const offset = circumference - (progress * circumference);
    progressCircle.style.strokeDashoffset = offset;
  }

  // Update timer display
  function updateDisplay() {
    timerDisplayTime.textContent = formatTime(timeRemaining);
    updateProgress();
  }

  // Timer completion animation
  function showCompletionAnimation() {
    container.classList.add('timer-complete');
    
    // Create confetti effect
    createConfetti();
    
    // Play success animation
    timerDisplay.classList.add('pulse-animation');
    
    // Show completion message
    setTimeout(() => {
      timerDisplayTime.textContent = 'Klaar!';
      timerDisplay.querySelector('.timer-label').textContent = 'Goed gedaan! 🎉';
    }, 500);
  }

  // Create confetti animation
  function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
      }, i * 30);
    }
  }

  // Start timer
  function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    isPaused = false;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'flex';
    container.classList.add('timer-running');
    container.classList.remove('timer-complete');
    
    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateDisplay();
        
        // Add pulse effect when time is running low (last minute)
        if (timeRemaining <= 60 && timeRemaining > 0) {
          container.classList.add('timer-warning');
        }
      } else {
        stopTimer();
        showCompletionAnimation();
      }
    }, 1000);
  }

  // Pause timer
  function pauseTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    isPaused = true;
    clearInterval(timerInterval);
    startBtn.style.display = 'flex';
    pauseBtn.style.display = 'none';
    container.classList.remove('timer-running');
  }

  // Stop timer
  function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    startBtn.style.display = 'flex';
    pauseBtn.style.display = 'none';
    container.classList.remove('timer-running');
  }

  // Reset timer
  function resetTimer() {
    stopTimer();
    timeRemaining = defaultDuration;
    updateDisplay();
    container.classList.remove('timer-complete', 'timer-warning');
    timerDisplay.classList.remove('pulse-animation');
    timerDisplayTime.textContent = formatTime(defaultDuration);
    timerDisplay.querySelector('.timer-label').textContent = 'minuten';
    
    // Remove any remaining confetti
    document.querySelectorAll('.confetti').forEach(c => c.remove());
  }

  // Close/minimize timer
  function closeTimer() {
    overlay.classList.toggle('minimized');
  }

  // Event listeners
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  closeBtn.addEventListener('click', closeTimer);

  // Make timer draggable
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const timerCard = container.querySelector('.timer-card');
  const timerHeader = container.querySelector('.timer-header');

  timerHeader.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  function dragStart(e) {
    if (e.target.closest('.timer-close')) return;
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    
    if (e.target.closest('.timer-header')) {
      isDragging = true;
      timerCard.style.cursor = 'grabbing';
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      
      xOffset = currentX;
      yOffset = currentY;
      
      setTranslate(currentX, currentY, container);
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    timerCard.style.cursor = 'default';
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
  }

  // Initialize display
  updateDisplay();

  // Add entrance animation
  setTimeout(() => {
    overlay.classList.add('timer-visible');
  }, 100);

  // Listen for duration updates from popup
  if (typeof chrome !== 'undefined' && chrome.runtime) {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.action === 'updateDuration') {
        defaultDuration = request.duration * 60; // Convert minutes to seconds
        resetTimer();
        sendResponse({success: true});
      }
    });
  }
})();
