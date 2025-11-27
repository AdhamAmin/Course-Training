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
