// Popup Script
(function() {
  'use strict';

  // Constants
  const ERROR_MESSAGES = {
    INVALID_DURATION: 'Voer een geldige duur in (1-60 minuten)',
    CHROME_API_UNAVAILABLE: 'Chrome extensie API niet beschikbaar'
  };

  // Get DOM elements
  const durationInput = document.getElementById('duration-input');
  const presetButtons = document.querySelectorAll('.preset-btn');
  const saveBtn = document.getElementById('save-btn');
  const showBtn = document.getElementById('show-btn');
  const statusMessage = document.getElementById('status-message');

  // Load saved duration
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.sync.get(['timerDuration'], function(result) {
      if (result.timerDuration) {
        durationInput.value = result.timerDuration;
        updateActivePreset(result.timerDuration);
      }
    });
  }

  // Preset button handlers
  presetButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const minutes = parseInt(this.dataset.minutes);
      durationInput.value = minutes;
      updateActivePreset(minutes);
    });
  });

  // Update active preset button
  function updateActivePreset(minutes) {
    presetButtons.forEach(btn => {
      if (parseInt(btn.dataset.minutes) === minutes) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Update active state when input changes
  durationInput.addEventListener('input', function() {
    updateActivePreset(parseInt(this.value));
  });

  // Save button handler
  saveBtn.addEventListener('click', function() {
    const duration = parseInt(durationInput.value);
    
    // Validate duration
    if (!duration || duration < 1 || duration > 60) {
      showStatus(ERROR_MESSAGES.INVALID_DURATION, 'error');
      return;
    }

    // Check if chrome API is available
    if (typeof chrome === 'undefined' || !chrome.storage) {
      showStatus(ERROR_MESSAGES.CHROME_API_UNAVAILABLE, 'error');
      return;
    }

    // Save to storage
    chrome.storage.sync.set({ timerDuration: duration }, function() {
      showStatus('✓ Instellingen opgeslagen!', 'success');
      
      // Notify content script about the change
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          try {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { action: 'updateDuration', duration: duration },
              function() {
                // Swallow errors if no content script on this page
                void chrome.runtime?.lastError;
              }
            );
          } catch (e) {
            // Ignore; not a supported page or messaging unavailable
          }
        }
      });
    });
  });

  // Show overlay button handler
  if (showBtn) {
    showBtn.addEventListener('click', function() {
      if (typeof chrome === 'undefined' || !chrome.tabs) return;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          try {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { action: 'showOverlay' },
              function() { void chrome.runtime?.lastError; }
            );
          } catch (e) {
            // ignore
          }
        }
      });
    });
  }

  // Show status message
  function showStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = 'status-message show ' + type;
    
    setTimeout(() => {
      statusMessage.classList.remove('show');
    }, 3000);
  }

  // Handle Enter key in input
  durationInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      saveBtn.click();
    }
  });
})();
