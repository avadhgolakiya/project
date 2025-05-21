$(document).ready(function() {
    try {
        // Initial fade in animation
        $("#fadeHeading").fadeIn(1000);

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) {
            console.error('Theme toggle button not found');
            return;
        }

        const html = document.documentElement;
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            try {
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                
                // Add transition class
                document.body.classList.add('theme-transition');
                
                // Change theme
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(newTheme);
                    
                // Remove transition class after animation
                setTimeout(() => {
                    document.body.classList.remove('theme-transition');
                }, 300);
            } catch (error) {
                console.error('Error toggling theme:', error);
            }
        });

        function updateThemeIcon(theme) {
            try {
                const sunIcon = themeToggle.querySelector('.fa-sun');
                const moonIcon = themeToggle.querySelector('.fa-moon');
                
                if (!sunIcon || !moonIcon) {
                    console.error('Theme icons not found');
                    return;
                }

                if (theme === 'dark') {
                    sunIcon.style.display = 'block';
                    moonIcon.style.display = 'none';
                } else {
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'block';
                }
            } catch (error) {
                console.error('Error updating theme icon:', error);
            }
        }

        // Add hover effect to tool cards
        $('.tool-card').hover(
            function() {
                $(this).find('.tool-image').css('transform', 'scale(1.05)');
            },
            function() {
                $(this).find('.tool-image').css('transform', 'scale(1)');
            }
        );

        // Add smooth scroll for navigation
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            const target = $(this.hash);
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 20
                }, 800);
            }
        });

        // Mobile menu functionality
        function initMobileMenu() {
            const menuIcon = document.getElementById('menu');
            const closeIcon = document.getElementById('close');
            const navLinks = document.querySelector('nav ul');

            if (!menuIcon || !closeIcon || !navLinks) return;

            menuIcon.addEventListener('click', () => {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
                navLinks.style.display = 'flex';
            });

            closeIcon.addEventListener('click', () => {
                closeIcon.style.display = 'none';
                menuIcon.style.display = 'block';
                navLinks.style.display = 'none';
            });
        }

        // Initialize all functionality
        document.addEventListener('DOMContentLoaded', () => {
            initMobileMenu();
        });

    } catch (error) {
        console.error('Error initializing page:', error);
    }
});

