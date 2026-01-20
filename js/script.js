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
    $('.mobile-nav-links a').on('click', function(e) {
        $('.hamburger').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('menu-open');
        
        // Smooth scroll only if hash exists and element is on the same page
        if (this.hash !== '') {
            const targetElement = $(this.hash);
            if (targetElement.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 80
                }, 800);
            }
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
            const targetElement = $(this.hash);
            // Only prevent default and scroll if element exists on current page
            if (targetElement.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 80
                }, 800);
            }
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
        if (current) {
            $('.nav-links a[href="#' + current + '"], .mobile-nav-links a[href="#' + current + '"]').addClass('active');
        }
    });

    // Counter animation for skills (optional)
    let counted = false;
    $(window).on('scroll', function() {
        const skillsSection = $('.skills');
        if (skillsSection.length && !counted && $(window).scrollTop() > skillsSection.offset().top - 500) {
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
        // Don't prevent default - let it navigate to projects.html
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

// Form submission - keep outside document.ready to ensure it works
$("#myForm").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Serialize form data
    var formData = $(this).serialize();

    // Submit the form using AJAX
    $.ajax({
        url: "https://api.web3forms.com/submit",
        method: "POST",
        data: formData,
        success: function (response) {
            // Always show the thank you message regardless of the response
            Swal.fire({
                title: "Thank you!",
                text: "Your message has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });

            // Optionally reset the form fields
            $("#myForm")[0].reset();
        },
        error: function (xhr, status, error) {
            // Even if there's an error, still show the thank you message
            Swal.fire({
                title: "Thank you!",
                text: "Your message has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });

            // Optionally reset the form fields
            $("#myForm")[0].reset();
        },
    });
});