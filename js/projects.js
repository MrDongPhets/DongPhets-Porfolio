$(document).ready(function() {
    
    // Filter functionality
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter projects
        if (filter === 'all') {
            $('.project-card').removeClass('hidden').css({
                'opacity': '0',
                'transform': 'scale(0.8)'
            }).animate({
                opacity: 1
            }, 400).css({
                'transform': 'scale(1)',
                'transition': 'all 0.4s ease'
            });
        } else {
            $('.project-card').each(function() {
                const categories = $(this).data('category').split(' ');
                
                if (categories.includes(filter)) {
                    $(this).removeClass('hidden').css({
                        'opacity': '0',
                        'transform': 'scale(0.8)'
                    }).animate({
                        opacity: 1
                    }, 400).css({
                        'transform': 'scale(1)',
                        'transition': 'all 0.4s ease'
                    });
                } else {
                    $(this).addClass('hidden');
                }
            });
        }
    });
    
    // Animate projects on scroll
    function animateProjects() {
        $('.project-card').each(function() {
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
    
    // Initial state for projects
    $('.project-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease-out'
    });
    
    // Trigger animation on scroll
    $(window).on('scroll', animateProjects);
    animateProjects(); // Initial check
    
    // Project card hover effects
    $('.project-card').hover(
        function() {
            $(this).find('.project-image img').css({
                'transform': 'scale(1.1)',
                'transition': 'all 0.5s ease'
            });
        },
        function() {
            $(this).find('.project-image img').css({
                'transform': 'scale(1)'
            });
        }
    );
    
    // View project button animation
    $('.view-project-btn').hover(
        function() {
            $(this).find('i').css({
                'transform': 'translateX(5px)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).find('i').css({
                'transform': 'translateX(0)'
            });
        }
    );
    
    // Stagger animation for initial load
    $('.project-card').each(function(index) {
        $(this).delay(index * 100).queue(function(next) {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
            next();
        });
    });
    
});