$(document).ready(function() {
    
    // ===== DETECT MOBILE/TABLET =====
    const isMobile = window.innerWidth <= 768;
    
    // ===== THEME TOGGLE =====
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

    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    $('#themeToggle').on('click', function() {
        if ($('body').hasClass('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // ===== PAGE LOADER 
    $(window).on('load', function() {
        setTimeout(function() {
            $('.page-loader').addClass('hide');
            // Force removal after transition completes
            setTimeout(function() {
                $('.page-loader').css('display', 'none');
            }, 500);
        }, 1000);
    });

    // Fallback: If page takes too long to load, hide loader anyway
    $(document).ready(function() {
        setTimeout(function() {
            if (!$('.page-loader').hasClass('hide')) {
                $('.page-loader').addClass('hide');
                setTimeout(function() {
                    $('.page-loader').css('display', 'none');
                }, 500);
            }
        }, 3000); // Hide after 3 seconds maximum
    });
    // ===== NAVIGATION =====
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Add navbar scroll styles
    if (!$('#navbar-scroll-styles').length) {
        $('<style id="navbar-scroll-styles">')
            .html(`
                #navbar.scrolled {
                    background: #1a1d29;
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                    padding: 15px;
                }
                body.light-mode #navbar.scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }
            `)
            .appendTo('head');
    }

    // Smooth scroll for all anchor links
    $('a[href^="#"]').on('click', function(e) {
        if (this.hash !== '') {
            const targetElement = $(this.hash);
            if (targetElement.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: targetElement.offset().top - 80
                }, 800, 'swing');
                
                // Close mobile menu if open
                $('.hamburger').removeClass('active');
                $('.mobile-menu').removeClass('active');
                $('body').removeClass('menu-open');
            }
        }
    });

    // Active navigation link based on scroll position
    $(window).on('scroll', function() {
        let current = '';
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top;
            if ($(window).scrollTop() >= sectionTop - 100) {
                current = $(this).attr('id');
            }
        });
        
        $('.nav-links a, .mobile-nav-links a').removeClass('active');
        if (current) {
            $('.nav-links a[href="#' + current + '"], .mobile-nav-links a[href="#' + current + '"]').addClass('active');
        }
    });

    // ===== MOBILE MENU =====
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('body').toggleClass('menu-open');
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

    // ===== SCROLL TO TOP BUTTON (Desktop only) =====
    if (!isMobile) {
        if (!$('.scroll-to-top').length) {
            $('<button class="scroll-to-top"><i class="fas fa-arrow-up"></i></button>')
                .appendTo('body')
                .click(function() {
                    $('html, body').animate({ scrollTop: 0 }, 800);
                });
        }

        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.scroll-to-top').addClass('show');
            } else {
                $('.scroll-to-top').removeClass('show');
            }
        });
    }

    // ===== SKILL ITEMS CLICK EFFECT (Desktop only) =====
    if (!isMobile) {
        $('.skill-item').on('click', function() {
            $(this).addClass('clicked');
            setTimeout(() => {
                $(this).removeClass('clicked');
            }, 300);
        });

        if (!$('#skill-click-styles').length) {
            $('<style id="skill-click-styles">')
                .html(`
                    .skill-item.clicked {
                        animation: skillPop 0.3s ease;
                    }
                    @keyframes skillPop {
                        0% { transform: scale(1); }
                        50% { transform: scale(0.95); }
                        100% { transform: scale(1); }
                    }
                `)
                .appendTo('head');
        }
    }

    // ===== PORTFOLIO HOVER OVERLAY (Desktop only) =====
    if (!isMobile) {
        $('.portfolio-item, .portfolio-item-1').each(function() {
                if (!$(this).find('.portfolio-overlay').length) {
                    // Get the project ID from data attribute
                    const projectId = $(this).data('project-id') || 'default';
                    const projectLink = `project-detail.html?project=${projectId}`;
                    
                    $(this).append(`
                        <div class="portfolio-overlay">
                            <a href="${projectLink}" class="overlay-link">
                                <div class="overlay-content">
                                    <i class="fas fa-eye"></i>
                                    <span>View Project</span>
                                    <p class="project-subtitle">Click to see details</p>
                                </div>
                            </a>
                        </div>
                    `);
                }
            });

        if (!$('#portfolio-overlay-styles').length) {
            $('<style id="portfolio-overlay-styles">')
                .html(`
                    .portfolio-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95));
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        z-index: 2;
                        cursor: pointer;
                    }
                    .portfolio-item:hover .portfolio-overlay,
                    .portfolio-item-1:hover .portfolio-overlay {
                        opacity: 1;
                    }
                    .overlay-content {
                        text-align: center;
                        color: white;
                        transform: translateY(20px);
                        transition: transform 0.3s ease;
                    }
                    .portfolio-item:hover .overlay-content,
                    .portfolio-item-1:hover .overlay-content {
                        transform: translateY(0);
                    }
                    .overlay-content i {
                        font-size: 40px;
                        margin-bottom: 10px;
                        display: block;
                    }
                    .overlay-content span {
                        font-size: 18px;
                        font-weight: 600;
                    }
                `)
                .appendTo('head');
        }
    }

    // ===== PARALLAX EFFECT (Desktop only) =====
    if (!isMobile) {
        $(window).scroll(function() {
            var scrolled = $(this).scrollTop();
            
            $('.hero-image').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
            $('.about-image-1').css('transform', 'translateY(' + (scrolled * 0.1) + 'px)');
            $('.about-image-2').css('transform', 'translateY(' + (scrolled * -0.1) + 'px)');
        });
    }

    // ===== RESUME DOWNLOAD NOTIFICATION =====
    $('.resume-btn, .resume-nav-link, .floating-resume-btn a').on('click', function(e) {
        showDownloadNotification();
    });

    function showDownloadNotification() {
        const notification = $('<div class="download-notification">')
            .html('<i class="fas fa-check-circle"></i> Resume download started!')
            .appendTo('body');
        
        notification.css({
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'background': '#4caf50',
            'color': 'white',
            'padding': '15px 25px',
            'border-radius': '8px',
            'box-shadow': '0 4px 15px rgba(0,0,0,0.2)',
            'z-index': '10000',
            'display': 'flex',
            'align-items': 'center',
            'gap': '10px',
            'font-weight': '600',
            'animation': 'slideInRight 0.5s ease'
        });
        
        setTimeout(function() {
            notification.fadeOut(400, function() {
                $(this).remove();
            });
        }, 3000);
    }

    if (!$('#notification-styles').length) {
        $('<style id="notification-styles">')
            .html(`
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `)
            .appendTo('head');
    }

    // ===== IMAGE LAZY LOADING =====
    $('img').each(function() {
        $(this).on('load', function() {
            $(this).addClass('loaded');
        });
        
        if (this.complete) {
            $(this).addClass('loaded');
        }
    });

    if (!$('#image-load-styles').length) {
        $('<style id="image-load-styles">')
            .html(`
                img {
                    opacity: 1;
                    transition: opacity 0.5s ease;
                }
                img.loaded {
                    opacity: 1;
                }
            `)
            .appendTo('head');
    }

    // ===== MOUSE TRAIL EFFECT (Desktop only) =====
    if (!isMobile) {
        $(document).mousemove(function(e) {
            if ($('.mouse-trail').length < 20) {
                let trail = $('<div class="mouse-trail"></div>');
                $('body').append(trail);
                
                trail.css({
                    left: e.pageX,
                    top: e.pageY
                });
                
                setTimeout(function() {
                    trail.remove();
                }, 500);
            }
        });

        if (!$('#mouse-trail-styles').length) {
            $('<style id="mouse-trail-styles">')
                .html(`
                    .mouse-trail {
                        position: absolute;
                        width: 10px;
                        height: 10px;
                        background: rgba(102, 126, 234, 0.3);
                        border-radius: 50%;
                        pointer-events: none;
                        animation: trailFade 0.5s ease-out forwards;
                        z-index: 9999;
                    }
                    @keyframes trailFade {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `)
                .appendTo('head');
        }
    }

    // ===== REFRESH AOS ON PAGE VISIBILITY =====
    window.refreshAOS = function() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    };

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    });

    console.log('✨ Portfolio loaded successfully!');
    if (isMobile) {
        console.log('📱 Mobile mode: Heavy animations disabled for better performance');
    }
});

// ===== FORM SUBMISSION (Outside document.ready) =====
$("#myForm").on("submit", function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
        url: "https://api.web3forms.com/submit",
        method: "POST",
        data: formData,
        success: function (response) {
            Swal.fire({
                title: "Thank you!",
                text: "Your message has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
            $("#myForm")[0].reset();
        },
        error: function (xhr, status, error) {
            Swal.fire({
                title: "Thank you!",
                text: "Your message has been submitted successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });
            $("#myForm")[0].reset();
        },
    });
});