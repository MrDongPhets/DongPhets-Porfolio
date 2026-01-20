$(document).ready(function() {
    
    // Theme Toggle Functionality
    function setTheme(theme) {
        if (theme === 'light') {
            $('body').addClass('light-mode');
            localStorage.setItem('theme', 'light');
            $('#themeToggle').html('<i class="fas fa-moon"></i>');
        } else {
            $('body').removeClass('light-mode');
            localStorage.setItem('theme', 'dark');
            $('#themeToggle').html('<i class="fas fa-sun"></i>');
        }
    }

    // Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

    // Theme toggle click event
    $('#themeToggle').on('click', function() {
        if ($('body').hasClass('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Hamburger menu toggle
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Close mobile menu when clicking on a link
    $('.mobile-nav-links a').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('menu-open');
        
        // Smooth scroll
        if (this.hash !== '') {
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.hamburger, .mobile-menu, .theme-toggle').length) {
            if ($('.mobile-menu').hasClass('active')) {
                $('.hamburger').removeClass('active');
                $('.mobile-menu').removeClass('active');
                $('body').removeClass('menu-open');
            }
        }
    });

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    $('.nav-links a, .cta-button, .footer-links a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Fade-in animation on scroll
    function fadeInOnScroll() {
        $('.about-item, .skill-item, .portfolio-item').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }

    // Initial state for fade-in elements
    $('.about-item, .skill-item, .portfolio-item').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease-out'
    });

    // Trigger fade-in on scroll
    $(window).on('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Initial check

    // Form submission
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = $(this).find('input[type="text"]').val();
        const email = $(this).find('input[type="email"]').val();
        const phone = $(this).find('input[type="tel"]').val();
        const message = $(this).find('textarea').val();
        
        // Simple validation
        if (name && email && message) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            $(this)[0].reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Skill items hover effect
    // $('.skill-item').hover(
    //     function() {
    //         $(this).find('i').css({
    //             'transform': 'scale(1.2) rotate(5deg)',
    //             'transition': 'all 0.3s ease'
    //         });
    //     },
    //     function() {
    //         $(this).find('i').css({
    //             'transform': 'scale(1) rotate(0deg)'
    //         });
    //     }
    // );

    // Portfolio item hover effect
    $('.portfolio-item').hover(
        function() {
            $(this).find('img').css({
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).find('img').css({
                'transform': 'scale(1)'
            });
        }
    );

        $('.portfolio-item-1').hover(
        function() {
            $(this).find('img').css({
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).find('img').css({
                'transform': 'scale(1)'
            });
        }
    );

    // Active navigation link based on scroll position
    $(window).on('scroll', function() {
        let current = '';
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).height();
            
            if ($(window).scrollTop() >= sectionTop - 100) {
                current = $(this).attr('id');
            }
        });
        
        $('.nav-links a, .mobile-nav-links a').removeClass('active');
        $('.nav-links a[href="#' + current + '"], .mobile-nav-links a[href="#' + current + '"]').addClass('active');
    });

    // Parallax effect for hero image
    // $(window).on('scroll', function() {
    //     const scrolled = $(window).scrollTop();
    //     if ($(window).width() > 768) {
    //         $('.hero-image img').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
    //     }
    // });

    // Counter animation for skills (optional)
    let counted = false;
    $(window).on('scroll', function() {
        if (!counted && $(window).scrollTop() > $('.skills').offset().top - 500) {
            counted = true;
            $('.skill-item').each(function(index) {
                $(this).delay(index * 100).fadeIn(500);
            });
        }
    });

    // Social links hover animation
    $('.social-links a, .contact-social a, .footer-social a, .mobile-social a').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px) rotate(360deg)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0) rotate(0deg)'
            });
        }
    );

    // View all projects button animation
    $('.view-all').on('click', function(e) {
        e.preventDefault();
        $(this).animate({
            'padding-left': '30px'
        }, 200, function() {
            $(this).animate({
                'padding-left': '0'
            }, 200);
        });
    });

    // CTA button animation
    $('.cta-button').hover(
        function() {
            $(this).find('i').css({
                'transform': 'translateX(10px)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).find('i').css({
                'transform': 'translateX(0)'
            });
        }
    );

    // Submit button animation
    $('.submit-btn').on('mouseenter', function() {
        $(this).find('i').css({
            'transform': 'translateX(10px)',
            'transition': 'all 0.3s ease'
        });
    }).on('mouseleave', function() {
        $(this).find('i').css({
            'transform': 'translateX(0)'
        });
    });

});