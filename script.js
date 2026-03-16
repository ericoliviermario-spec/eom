/* ============================================================
   ERIC OLIVIER MARIO — Site Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initArcChapters();
  initAudioPlayers();
  initApplicationForm();
  initHeroSequence();
});

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const overlay = document.querySelector('.nav__mobile-overlay');

  if (!nav) return;

  // Scroll state
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = y;
  }, { passive: true });

  // Mobile toggle
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ============================================================
   HERO ENTRANCE SEQUENCE
   ============================================================ */
function initHeroSequence() {
  const elements = document.querySelectorAll('.hero-reveal');
  if (!elements.length) return;

  // Small delay then trigger all with their stagger
  requestAnimationFrame(() => {
    elements.forEach(el => el.classList.add('visible'));
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   ARC — VISUAL BEZIER ARC WITH SOUNDCLOUD EMBED
   ============================================================ */
function initArcChapters() {
  const chBtns      = document.querySelectorAll('.arc__ch');
  const panel       = document.getElementById('arc-panel');
  const scIframe    = document.getElementById('sc-player');
  if (!chBtns.length || !panel || !scIframe) return;

  const panelMvEl    = document.getElementById('arc-panel-mv');
  const panelNumEl   = document.getElementById('arc-panel-num');
  const panelTitleEl = document.getElementById('arc-panel-title');

  let currentBtn = null;

  chBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const wasActive = btn.getAttribute('aria-pressed') === 'true';

      if (wasActive) {
        btn.setAttribute('aria-pressed', 'false');
        panel.classList.remove('is-open');
        scIframe.src = 'about:blank';
        currentBtn = null;
        return;
      }

      chBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      currentBtn = btn;

      if (panelMvEl)    panelMvEl.textContent   = btn.dataset.mv    || '';
      if (panelNumEl)   panelNumEl.textContent   = btn.dataset.num   || '—';
      if (panelTitleEl) panelTitleEl.textContent = btn.dataset.title || '';
      panel.classList.add('is-open');

      // Parse private sharing URL: split track URL from secret token
      const src = btn.dataset.src;
      const tokenMatch = src.match(/\/(s-[a-zA-Z0-9]+)$/);
      const trackUrl = tokenMatch ? src.replace(/\/s-[a-zA-Z0-9]+$/, '') : src;
      const secretParam = tokenMatch ? '&secret_token=' + tokenMatch[1] : '';

      // Load the SoundCloud embed — SC handles play/pause/progress
      scIframe.src = 'https://w.soundcloud.com/player/?url='
        + encodeURIComponent(trackUrl)
        + secretParam
        + '&color=%23C07838&auto_play=true&hide_related=true&show_comments=false'
        + '&show_user=false&show_reposts=false&show_teaser=false'
        + '&buying=false&liking=false&download=false&sharing=false';
    });
  });
}

/* ============================================================
   AUDIO PLAYER
   ============================================================ */
function initAudioPlayers() {
  const players = document.querySelectorAll('.audio-player');
  if (!players.length) return;

  // Track currently playing
  let currentlyPlaying = null;

  players.forEach(player => {
    const btn = player.querySelector('.audio-player__btn');
    const progressWrap = player.querySelector('.audio-player__progress-wrap');
    const progressFill = player.querySelector('.audio-player__progress-fill');
    const timeDisplay = player.querySelector('.audio-player__time');
    const playIcon = btn.querySelector('.play-icon');
    const pauseIcon = btn.querySelector('.pause-icon');

    // Create audio element
    const audioSrc = player.dataset.src;
    let audio = null;
    let isPlaying = false;
    let duration = 0;

    // Demo mode: simulate playback when no actual audio file
    const isDemoMode = !audioSrc;
    let demoInterval = null;
    let demoProgress = 0;
    const demoDuration = 240; // 4 minutes simulated

    function formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function updatePlayState(playing) {
      isPlaying = playing;
      if (playIcon) playIcon.style.display = playing ? 'none' : 'block';
      if (pauseIcon) pauseIcon.style.display = playing ? 'block' : 'none';
      btn.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    }

    function stopDemo() {
      if (demoInterval) {
        clearInterval(demoInterval);
        demoInterval = null;
      }
    }

    btn.addEventListener('click', () => {
      if (isDemoMode) {
        // Demo playback simulation
        if (isPlaying) {
          stopDemo();
          updatePlayState(false);
        } else {
          // Stop any other playing
          if (currentlyPlaying && currentlyPlaying !== player) {
            const otherBtn = currentlyPlaying.querySelector('.audio-player__btn');
            otherBtn.click();
          }
          currentlyPlaying = player;

          updatePlayState(true);
          demoInterval = setInterval(() => {
            demoProgress += 1;
            if (demoProgress >= demoDuration) {
              demoProgress = 0;
              stopDemo();
              updatePlayState(false);
            }
            const pct = (demoProgress / demoDuration) * 100;
            progressFill.style.width = pct + '%';
            timeDisplay.textContent = formatTime(demoProgress);
          }, 1000);
        }
        return;
      }

      // Real audio
      if (!audio) {
        audio = new Audio(audioSrc);
        audio.addEventListener('loadedmetadata', () => {
          duration = audio.duration;
          timeDisplay.textContent = formatTime(duration);
        });
        audio.addEventListener('timeupdate', () => {
          const pct = (audio.currentTime / duration) * 100;
          progressFill.style.width = pct + '%';
          timeDisplay.textContent = formatTime(audio.currentTime);
        });
        audio.addEventListener('ended', () => {
          updatePlayState(false);
          progressFill.style.width = '0%';
          timeDisplay.textContent = formatTime(duration);
          currentlyPlaying = null;
        });
      }

      if (isPlaying) {
        audio.pause();
        updatePlayState(false);
      } else {
        // Stop any other playing
        if (currentlyPlaying && currentlyPlaying !== player) {
          const otherBtn = currentlyPlaying.querySelector('.audio-player__btn');
          otherBtn.click();
        }
        currentlyPlaying = player;
        audio.play();
        updatePlayState(true);
      }
    });

    // Click on progress bar to seek
    if (progressWrap) {
      progressWrap.addEventListener('click', (e) => {
        const rect = progressWrap.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;

        if (isDemoMode) {
          demoProgress = Math.floor(pct * demoDuration);
          progressFill.style.width = (pct * 100) + '%';
          timeDisplay.textContent = formatTime(demoProgress);
        } else if (audio && duration) {
          audio.currentTime = pct * duration;
          progressFill.style.width = (pct * 100) + '%';
        }
      });
    }

    // Initial state
    updatePlayState(false);
  });
}

/* ============================================================
   APPLICATION FORM (Stepped)
   ============================================================ */
function initApplicationForm() {
  const form = document.getElementById('application-form');
  if (!form) return;

  const steps = form.querySelectorAll('.form-step');
  const progressFill = form.querySelector('.form-progress__fill');
  const confirmation = document.querySelector('.form-confirmation');
  const totalSteps = steps.length;
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });

    // Update progress
    const pct = ((index + 1) / totalSteps) * 100;
    if (progressFill) {
      progressFill.style.width = pct + '%';
    }

    // Focus first input in step
    const firstInput = steps[index].querySelector('input, textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 300);
    }

    currentStep = index;
  }

  // Next buttons
  form.querySelectorAll('[data-action="next"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep < totalSteps - 1) {
        showStep(currentStep + 1);
      }
    });
  });

  // Back buttons
  form.querySelectorAll('[data-action="back"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep > 0) {
        showStep(currentStep - 1);
      }
    });
  });

  // Radio selections
  form.querySelectorAll('.form-radio').forEach(radio => {
    radio.addEventListener('click', () => {
      const group = radio.closest('.form-radios');
      group.querySelectorAll('.form-radio').forEach(r => r.classList.remove('selected'));
      radio.classList.add('selected');
      radio.querySelector('input').checked = true;
    });
  });

  // Submit
  const submitBtn = form.querySelector('[data-action="submit"]');
  if (submitBtn) {
    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      // Collect form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });

      // Remove any previous error
      const existingError = form.querySelector('.form-error');
      if (existingError) existingError.remove();

      // Loading state
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.classList.add('btn--loading');
      submitBtn.disabled = true;

      try {
        const res = await fetch('/api/submit-application', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const json = await res.json();

        if (res.ok && json.success) {
          // Success — show confirmation
          form.style.display = 'none';
          if (confirmation) {
            confirmation.classList.add('active');
          }
        } else {
          throw new Error(json.error || 'Something went wrong. Please try again.');
        }

      } catch (err) {
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.classList.remove('btn--loading');
        submitBtn.disabled = false;

        // Show inline error
        const errorEl = document.createElement('p');
        errorEl.className = 'form-error';
        errorEl.textContent = err.message || 'Network error. Please check your connection and try again.';
        submitBtn.closest('.form-step__actions, .form-step') ?
          submitBtn.parentElement.appendChild(errorEl) :
          submitBtn.insertAdjacentElement('afterend', errorEl);
      }
    });
  }

  // Keyboard: Enter advances to next step (except in textarea)
  form.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (currentStep < totalSteps - 1) {
        showStep(currentStep + 1);
      }
    }
  });

  // Initialize
  showStep(0);
}

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
