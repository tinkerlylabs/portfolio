/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Native JavaScript interactive controls for Jensen Omega portfolio

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & Smooth Scroll Offset
  const sections = ['home', 'about', 'projects', 'contact'];
  const navLinks = document.querySelectorAll('.desktop-nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  const handleScrollHighlight = () => {
    const scrollPosition = window.scrollY + 120;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          // Highlight desktop nav
          navLinks.forEach(link => {
            const id = link.getAttribute('data-section');
            if (id === section) {
              link.classList.remove('text-white/40', 'border-transparent');
              link.classList.add('text-white', 'border-white/60');
            } else {
              link.classList.remove('text-white', 'border-white/60');
              link.classList.add('text-white/40', 'border-transparent');
            }
          });

          // Highlight mobile nav
          mobileNavLinks.forEach(link => {
            const id = link.getAttribute('data-section');
            if (id === section) {
              link.classList.remove('text-white/40');
              link.classList.add('text-white', 'border-l-2', 'border-white', 'pl-3');
            } else {
              link.classList.remove('text-white', 'border-l-2', 'border-white', 'pl-3');
              link.classList.add('text-white/40');
            }
          });
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScrollHighlight);
  handleScrollHighlight(); // initial call

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Close mobile menu helper
  const closeMobileMenu = () => {
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuIconOpen = document.getElementById('mobile-menu-icon-open');
    const mobileMenuIconClose = document.getElementById('mobile-menu-icon-close');
    if (mobileMenuPanel) {
      mobileMenuPanel.classList.add('hidden');
      mobileMenuPanel.classList.remove('block');
      mobileMenuIconOpen?.classList.remove('hidden');
      mobileMenuIconClose?.classList.add('hidden');
    }
  };

  // Attach navigation scroll events
  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      if (targetId) {
        // Close mobile menu if open
        closeMobileMenu();
        scrollToSection(targetId);
      }
    });
  });

  // 2. Mobile Sidebar Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const mobileMenuIconOpen = document.getElementById('mobile-menu-icon-open');
  const mobileMenuIconClose = document.getElementById('mobile-menu-icon-close');

  const toggleMobileMenu = () => {
    if (mobileMenuPanel) {
      const isHidden = mobileMenuPanel.classList.contains('hidden');
      if (isHidden) {
        mobileMenuPanel.classList.remove('hidden');
        mobileMenuPanel.classList.add('block');
        mobileMenuIconOpen?.classList.add('hidden');
        mobileMenuIconClose?.classList.remove('hidden');
      } else {
        closeMobileMenu();
      }
    }
  };

  mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

  // 3. Battleship Terminal Log Ticker Simulator
  const battleshipLogContainer = document.getElementById('battleship-log-container');
  const initialBattleshipLogs = [
    "Hit!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> F2",
    "Miss!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> F1",
    "Miss!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> E3",
    "Hit!",
    "Enter a location to strike i.e., 'A2' from A-J and 0-9",
    "-> D3",
    "Hit!",
    "You sunk a Cruiser. There are 4 ships left!"
  ];

  if (battleshipLogContainer) {
    let index = 0;
    const currentLines = [initialBattleshipLogs[0]];

    const renderLogs = () => {
      battleshipLogContainer.innerHTML = '';
      currentLines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'flex items-start';
        lineDiv.innerHTML = `<span class="text-white/20 mr-2.5 select-none">$</span><span>${line}</span>`;
        battleshipLogContainer.appendChild(lineDiv);
      });
      // Append cursor line
      const activeDiv = document.createElement('div');
      activeDiv.className = 'flex items-center text-white';
      activeDiv.innerHTML = `<span class="text-white/20 mr-2.5 select-none">$</span><span class="cursor-blink">Enter strike coordinate</span>`;
      battleshipLogContainer.appendChild(activeDiv);
    };

    renderLogs();

    setInterval(() => {
      index = (index + 1) % initialBattleshipLogs.length;
      if (index === 0) {
        currentLines.length = 0;
        currentLines.push(initialBattleshipLogs[0]);
      } else {
        currentLines.push(initialBattleshipLogs[index]);
        if (currentLines.length > 8) {
          currentLines.shift();
        }
      }
      renderLogs();
    }, 2200);
  }

  // 4. Monochrome Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const submitTextDefault = document.getElementById('submit-text-default');
  const submitTextLoading = document.getElementById('submit-text-loading');
  const successBanner = document.getElementById('contact-success-banner');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Read input elements
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    if (!nameInput?.value || !emailInput?.value || !messageInput?.value) return;

    // Loading State
    if (submitBtn) submitBtn.setAttribute('disabled', 'true');
    submitTextDefault?.classList.add('hidden');
    submitTextLoading?.classList.remove('hidden');

    // Simulate direct secure API post delay
    setTimeout(() => {
      // Success State
      if (submitBtn) submitBtn.removeAttribute('disabled');
      submitTextDefault?.classList.remove('hidden');
      submitTextLoading?.classList.add('hidden');

      // Clear layout fields
      contactForm.reset();

      // Show success notification banner
      successBanner?.classList.remove('hidden');
      successBanner?.classList.add('block');

      // Dismiss after 5 seconds
      setTimeout(() => {
        successBanner?.classList.add('hidden');
        successBanner?.classList.remove('block');
      }, 5000);
    }, 1200);
  });

  // 5. Interactive Resume Modal overlays
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtns = document.querySelectorAll('[data-open-resume]');
  const closeResumeBtns = document.querySelectorAll('[data-close-resume]');
  const printResumeBtn = document.getElementById('print-resume-btn');

  const openResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.remove('hidden');
      resumeModal.classList.add('flex');
      document.body.style.overflow = 'hidden'; // stop background scroll
    }
  };

  const closeResumeModal = () => {
    if (resumeModal) {
      resumeModal.classList.add('hidden');
      resumeModal.classList.remove('flex');
      document.body.style.overflow = ''; // restore scroll
    }
  };

  openResumeBtns.forEach(btn => btn.addEventListener('click', openResumeModal));
  closeResumeBtns.forEach(btn => btn.addEventListener('click', closeResumeModal));
  
  resumeModal?.addEventListener('click', (e) => {
    // Close if backdrop clicked
    if (e.target === resumeModal) {
      closeResumeModal();
    }
  });

  printResumeBtn?.addEventListener('click', () => {
    window.print();
  });

  // 6. Scroll back to top
  const scrollTopBtn = document.querySelector('[data-scroll-top]');
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
