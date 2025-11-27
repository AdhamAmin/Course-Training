// Common JavaScript module for loading header and footer
// This file should be included in all pages

// Load header
fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        // Highlight active nav link based on current page
        const navLinks = document.querySelectorAll('#header-placeholder .nav-link');
        navLinks.forEach(link => {
            try {
                const linkHref = new URL(link.href);
                const linkPath = linkHref.pathname.split('/').pop();
                const current = location.pathname.split('/').pop() || 'index.html';
                if (linkPath === current) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            } catch (e) {
                const href = link.getAttribute('href');
                const current = location.pathname.split('/').pop() || 'index.html';
                if (href === current || (current === '' && href === 'index.html')) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            }
        });
    })
    .catch(error => console.error('Error loading header:', error));

// Load footer
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Scroll-trigger reveal for feature cards (adds .in-view when cards enter viewport)
(function () {
    function initReveal() {
        const cards = document.querySelectorAll('.feature-card');
        if (!cards || cards.length === 0) return;

        function revealAll() {
            cards.forEach(c => c.classList.add('in-view'));
        }

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        obs.unobserve(entry.target);
                    }
                });
            }, { root: null, rootMargin: '0px', threshold: 0.15 });

            cards.forEach(c => io.observe(c));
        } else {
            revealAll();
        }
    }

    // Run after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReveal);
    } else {
        initReveal();
    }
})();

// Mobile drawer toggle: open/close, overlay click, escape key
(function () {
    function initDrawer() {
        const toggle = document.querySelector('.nav-toggle');
        const drawer = document.getElementById('mobile-drawer');
        if (!toggle || !drawer) return;

        const inner = drawer.querySelector('.mobile-drawer-inner');
        const overlay = drawer.querySelector('.drawer-overlay');
        const closeBtn = drawer.querySelector('.drawer-close');

        function open() {
            drawer.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
            toggle.setAttribute('aria-expanded', 'true');
            // focus first link
            const firstLink = drawer.querySelector('.nav-link');
            if (firstLink) firstLink.focus();
        }

        function close() {
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }

        toggle.addEventListener('click', () => {
            if (drawer.classList.contains('open')) close(); else open();
        });

        overlay && overlay.addEventListener('click', close);
        closeBtn && closeBtn.addEventListener('click', close);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer.classList.contains('open')) close();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDrawer);
    } else {
        initDrawer();
    }
})();
