        // PROJECT DATA - Add all your projects here
        const projectsData = {
            'pos-system': {
                title: 'POS System Website',
                subtitle: 'A comprehensive point-of-sale system built with modern technologies for efficient business operations.',
                client: 'Personal Project',
                year: '2024',
                category: 'Full Stack Development',
                tags: ['NextJs', 'NodeJs', 'Supabase', 'Postgres', 'Shadcn'],
                image: 'images/pos5.png',
                liveLink: 'https://tindaposph.mustarddigitals.com',
                // codeLink: 'https://github.com/MrDongPhets/KITAPOS',
                overview: [
                    'This Point of Sale (POS) system is a modern web application designed to streamline business operations for retail and service industries. Built with cutting-edge technologies, it provides a seamless experience for managing sales, inventory, and customer relationships.',
                    'The system features real-time data synchronization, intuitive user interface, and robust backend infrastructure to handle high-volume transactions efficiently.'
                ],
                features: [
                    {
                        title: 'Real-time Inventory Management',
                        description: 'Track stock levels, receive low-stock alerts, and manage products across multiple locations.'
                    },
                    {
                        title: 'Sales Analytics Dashboard',
                        description: 'Comprehensive insights with charts and reports to track business performance.'
                    },
                    {
                        title: 'Multi-user Access Control',
                        description: 'Role-based permissions for staff, managers, and administrators.'
                    },
                    {
                        title: 'Customer Management',
                        description: 'Store customer information, purchase history, and loyalty points.'
                    },
                    {
                        title: 'Receipt Printing & Email',
                        description: 'Generate and send digital or print receipts instantly.'
                    }
                ],
                technologies: [
                    {
                        title: 'Frontend',
                        description: 'Next.js for server-side rendering and optimal performance, Shadcn UI for beautiful, accessible components, and Tailwind CSS for responsive styling.'
                    },
                    {
                        title: 'Backend',
                        description: 'Node.js runtime environment with Supabase for authentication and real-time database functionality.'
                    },
                    {
                        title: 'Database',
                        description: 'PostgreSQL for robust data management with advanced querying capabilities.'
                    },
                    {
                        title: 'Deployment',
                        description: 'Vercel for frontend hosting with automatic deployments and Supabase cloud for backend services.'
                    }
                ],
                screenshots: [
                    {
                        image: 'images/pos1.png',
                        caption: 'Product Page'
                    },
                    {
                        image: 'images/pos2.png',
                        caption: 'Category Product Page'
                    },
                    {
                        image: 'images/pos3.png',
                        caption: 'Add Category'
                    },
                    {
                        image: 'images/pos4.png',
                        caption: 'Add Product'
                    },
                    {
                        image: 'images/pos5.png',
                        caption: 'Inventory Dashboard'
                    }
                ],
                challenges: [
                    {
                        title: 'Real-time Data Synchronization',
                        solution: 'Implemented Supabase\'s real-time subscriptions to ensure all connected clients receive instant updates when data changes, eliminating the need for manual refreshes.'
                    },
                    {
                        title: 'Complex Permission System',
                        solution: 'Designed a flexible role-based access control (RBAC) system with PostgreSQL\'s row-level security features, allowing granular control over data access.'
                    },
                    {
                        title: 'Performance with Large Datasets',
                        solution: 'Implemented pagination, lazy loading, and database indexing to maintain fast load times even with thousands of products and transactions.'
                    }
                ],
                results: [
                    'Reduced transaction processing time by 40%',
                    'Improved inventory accuracy with real-time tracking',
                    'Enhanced user satisfaction with intuitive interface design',
                    'Scalable architecture supporting business growth'
                ]
            },
            'philhealth-ui': {
                title: 'Philhealth UI Design',
                subtitle: 'Modern and user-friendly interface design for healthcare management system with focus on accessibility and ease of use.',
                client: 'Healthcare Project',
                year: '2024',
                category: 'UI/UX Design',
                tags: ['Figma', 'UI/UX', 'Design System'],
                image: 'images/phil3.png',
                figmaLink: 'https://www.figma.com/design/BbLhDIQ3oP9mTl9OcEbwVZ/Untitled?node-id=0-1&p=f&t=G6rUjHOdrx5BZGok-0',
                codeLink: null,
                overview: [
                    'A complete redesign of the Philhealth system interface, focusing on improving user experience and accessibility for both healthcare providers and patients.',
                    'The design system includes comprehensive components, consistent styling, and intuitive navigation patterns that make healthcare management more efficient.'
                ],
                features: [
                    {
                        title: 'User-Centered Design',
                        description: 'Conducted extensive user research to understand pain points and design solutions that address real user needs.'
                    },
                    {
                        title: 'Accessibility First',
                        description: 'Implemented WCAG 2.1 guidelines ensuring the interface is usable by people with disabilities.'
                    },
                    {
                        title: 'Responsive Design',
                        description: 'Optimized layouts for desktop, tablet, and mobile devices for seamless experience across platforms.'
                    },
                    {
                        title: 'Design System',
                        description: 'Created a comprehensive design system with reusable components for consistent UI across all pages.'
                    }
                ],
                technologies: [
                    {
                        title: 'Design Tools',
                        description: 'Figma for interface design, prototyping, and collaboration with development teams.'
                    },
                    {
                        title: 'Design System',
                        description: 'Built a scalable design system with typography, color palettes, and component libraries.'
                    },
                    {
                        title: 'Prototyping',
                        description: 'Interactive prototypes for user testing and stakeholder presentations.'
                    },
                    {
                        title: 'Documentation',
                        description: 'Detailed design specifications and guidelines for developers.'
                    }
                ],
                screenshots: [
                    {
                        image: 'images/phil1.png',
                        caption: 'Dashboard Overview'
                    },
                    {
                        image: 'images/phil2.png',
                        caption: 'Dashboard Overview'
                    },
                    {
                        image: 'images/phil3.png',
                        caption: 'Patient Records'
                    }
                ],
                challenges: [
                    {
                        title: 'Complex Information Architecture',
                        solution: 'Simplified navigation structure through card sorting exercises and user testing, resulting in a more intuitive information hierarchy.'
                    },
                    {
                        title: 'Legacy System Constraints',
                        solution: 'Worked closely with developers to balance modern design principles with technical limitations of the existing system.'
                    }
                ],
                results: [
                    'Improved user satisfaction scores by 60%',
                    'Reduced task completion time by 35%',
                    'Increased accessibility compliance to WCAG 2.1 Level AA',
                    'Positive feedback from healthcare professionals and patients'
                ]
            },
            'dict-drrm': {
                title: 'DICT DRRM Communication Platform',
                subtitle: 'Empowering communities through effective disaster communication with essential resources and tools for citizens and local government units.',
                client: 'Department of Information and Communications Technology (DICT)',
                year: '2024',
                category: 'UI/UX Design',
                tags: ['Figma', 'UI/UX', 'Responsive Design', 'Government Platform', 'Disaster Management'],
                image: 'images/dict1.png',
                figmaLink: 'https://www.figma.com/design/BbLhDIQ3oP9mTl9OcEbwVZ/Projects?node-id=3-1837&p=f&t=G6rUjHOdrx5BZGok-0',
                codeLink: null,
                overview: [
                    'The DICT DRRM Communication Platform is a comprehensive government initiative designed to enhance disaster preparedness and emergency response capabilities across the Philippines. This platform bridges the communication gap between citizens and local government units (LGUs) during critical disaster situations.',
                    'The platform emphasizes user-friendly design and accessibility, providing essential tools including real-time alerts, emergency contact directories, preparedness checklists, and educational resources. The design focuses on ensuring swift response and effective communication during emergencies while maintaining clarity and ease of use across all user demographics.'
                ],
                features: [
                    {
                        title: 'Community Support & Stay Informed',
                        description: 'Access vital information to enhance your community\'s disaster readiness and response. Receive timely updates and alerts to ensure safety and preparedness for all citizens and LGUs.'
                    },
                    {
                        title: 'Real-Time Alerts and Notifications',
                        description: 'Stay updated with instant alerts on emergencies. Push notification system ensures critical information reaches users immediately, enabling communities to respond swiftly to potential threats and disasters.'
                    },
                    {
                        title: 'Emergency Contact Directory Access',
                        description: 'Find crucial contacts for immediate assistance. Quick access to emergency contacts including local authorities, hospitals, fire departments, rescue teams, and disaster response coordinators organized by region.'
                    },
                    {
                        title: 'Comprehensive Preparedness Checklists',
                        description: 'Ensure you are ready with our detailed guides. Step-by-step preparedness checklists covering various disaster scenarios including typhoons, earthquakes, floods, fires, and other emergency situations.'
                    },
                    {
                        title: 'Critical Information and Resources',
                        description: 'Stay informed with real-time updates and guidelines for disaster readiness. Access training materials, webinars, and comprehensive educational content about effective disaster management strategies.'
                    },
                    {
                        title: 'Connect with Local Authorities',
                        description: 'Engage with local government units to streamline communication during emergencies. Enhanced disaster response coordination through direct connection with LGU officials and emergency response teams.'
                    }
                ],
                technologies: [
                    {
                        title: 'Design System & UI/UX',
                        description: 'Figma-based design system with comprehensive component library ensuring consistency across the platform. Created with government accessibility standards and modern design principles for optimal user experience.'
                    },
                    {
                        title: 'User Research & Testing',
                        description: 'Conducted extensive user research with citizens, LGU officials, and disaster response teams. Iterative design process with user testing to ensure intuitive navigation and accessibility for all user groups including elderly and differently-abled individuals.'
                    },
                    {
                        title: 'Responsive Design',
                        description: 'Mobile-first responsive design approach ensuring seamless experience across smartphones, tablets, and desktop devices. Optimized layouts for both iOS and Android platforms with touch-friendly interfaces.'
                    },
                    {
                        title: 'Accessibility Standards',
                        description: 'WCAG 2.1 Level AA compliance with high contrast modes, screen reader compatibility, keyboard navigation support, and text resizing capabilities. Ensures platform usability for people with visual, hearing, and motor disabilities.'
                    }
                ],
                screenshots: [
                    {
                        image: 'images/dict1.png',
                        caption: 'Hero Section - Empowering Communities'
                    },
                    {
                        image: 'images/dict4.png',
                        caption: 'Resources Section - Essential Tools'
                    },
                    {
                        image: 'images/dict3.png',
                        caption: 'Features Grid - Three-Column Layout'
                    },
                    {
                        image: 'images/dict2.png',
                        caption: 'About Section'
                    }
                ],
                challenges: [
                    {
                        title: 'Complex Information Architecture',
                        solution: 'Simplified navigation structure through extensive card sorting exercises and user testing sessions with diverse user groups. Created clear information hierarchy that prioritizes emergency actions and critical information accessibility.'
                    },
                    {
                        title: 'Multi-User Type Design',
                        solution: 'Designed flexible interface accommodating both general citizens and LGU officials with role-based views. Implemented adaptive content display ensuring relevant information is presented based on user type and needs.'
                    },
                    {
                        title: 'Emergency Accessibility',
                        solution: 'Implemented high-stress design patterns with large touch targets, high contrast colors, and simplified workflows. Ensured critical functions are accessible within 2-3 taps during emergency situations.'
                    },
                    {
                        title: 'Government Branding Compliance',
                        solution: 'Balanced modern UX best practices with government design standards and branding requirements. Created design system that maintains compliance while ensuring contemporary, user-friendly experience.'
                    }
                ],
                results: [
                    'Improved disaster preparedness awareness among target communities',
                    'Streamlined communication between citizens and LGUs during emergencies',
                    'Enhanced accessibility with WCAG 2.1 Level AA compliance',
                    'Positive feedback from usability testing with 90% task completion rate',
                    'Reduced information access time by 65% compared to previous systems',
                    'Successfully implemented across multiple LGU pilot programs',
                    'Recognition from DICT for innovative government platform design'
                ]
            },
            'blog-platform': {
                title: 'Mountain Multi-Purpose Website Template',
                subtitle: 'Modern multi-purpose WordPress template with stunning hero sections, service showcases, and gallery layouts perfect for creative businesses.',
                client: 'Template Marketplace',
                year: '2024',
                category: 'WordPress Development',
                tags: ['WordPress', 'Custom Theme', 'SEO', 'PHP', 'Web Design','Figma'],
                image: 'images/blog1.png',
                liveLink: 'https://blogtemplate.mustarddigitals.com',
                figmaLink: 'https://www.figma.com/design/BbLhDIQ3oP9mTl9OcEbwVZ/Projects?node-id=16-726&p=f&t=vdKwC772pah7NI4u-0',
                codeLink: null,
                overview: [
                    'A beautifully designed multi-purpose WordPress template featuring stunning mountain imagery and modern layouts. This template is perfect for businesses, portfolios, photography sites, or any creative project requiring an elegant web presence.',
                    'Built with a clean, minimalist design philosophy, the template includes a captivating full-screen hero section, service cards, call-to-action sections, and a flexible grid gallery. Fully responsive and optimized for all devices.'
                ],
                features: [
                    {
                        title: 'Full-Screen Hero Section',
                        description: 'Eye-catching hero section with overlay text, subtitle, and dual call-to-action buttons. Features parallax scrolling effect and customizable background images for maximum visual impact.'
                    },
                    {
                        title: 'Service Cards Layout',
                        description: 'Three-column service showcase with hover effects and image backgrounds. Each card includes title overlay and smooth transitions, perfect for highlighting your key offerings.'
                    },
                    {
                        title: 'Call-to-Action Sections',
                        description: 'Strategically placed CTA sections with compelling copy and action buttons. Designed to drive user engagement and conversions throughout the page journey.'
                    },
                    {
                        title: 'Flexible Gallery Grid',
                        description: 'Six-column responsive image gallery with lightbox functionality. Perfect for showcasing portfolios, projects, or photography work with smooth hover effects.'
                    },
                    {
                        title: 'Clean Navigation',
                        description: 'Minimal top navigation bar with transparent overlay design. Includes smooth scroll-to-section functionality and mobile hamburger menu for seamless browsing.'
                    },
                    {
                        title: 'Responsive Design',
                        description: 'Mobile-first design approach ensuring perfect display across all devices. Touch-optimized interactions and adaptive layouts for optimal viewing experience.'
                    }
                ],
                technologies: [
                    {
                        title: 'WordPress Theme Development',
                        description: 'Custom WordPress theme built with PHP, HTML5, CSS3, and JavaScript. Follows WordPress coding standards with proper template hierarchy and hooks implementation.'
                    },
                    {
                        title: 'Frontend Technologies',
                        description: 'Modern CSS3 with Flexbox and Grid layouts for responsive design. Vanilla JavaScript for smooth animations, parallax effects, and interactive elements without heavy dependencies.'
                    },
                    {
                        title: 'Design & UX',
                        description: 'Minimalist design with focus on visual hierarchy and whitespace. Strategic use of overlay effects, hover states, and transitions to enhance user experience and engagement.'
                    },
                    {
                        title: 'Performance Optimization',
                        description: 'Optimized images with lazy loading, minified CSS/JS files, and browser caching. Achieves fast load times while maintaining visual quality across all sections.'
                    },
                    {
                        title: 'Customization Options',
                        description: 'WordPress Customizer integration for easy color schemes, typography, and layout modifications. Allows users to personalize the template without coding knowledge.'
                    }
                ],
                screenshots: [
                    {
                        image: 'images/blog1.png',
                        caption: 'Hero Section - Full-Screen with Mountain Background'
                    },
                    {
                        image: 'images/blog.png',
                        caption: 'About Section'
                    }
                ],
                challenges: [
                    {
                        title: 'Full-Screen Hero Design',
                        solution: 'Implemented viewport height (100vh) for full-screen hero with responsive typography scaling. Created overlay system with proper contrast ratios ensuring text readability across different background images.'
                    },
                    {
                        title: 'Image-Heavy Performance',
                        solution: 'Implemented progressive image loading with blur-up technique, lazy loading for below-fold images, and WebP format with fallbacks. Optimized all images to balance quality and file size.'
                    },
                    {
                        title: 'Cross-Browser Compatibility',
                        solution: 'Tested across major browsers (Chrome, Firefox, Safari, Edge) and devices. Used CSS autoprefixer and polyfills for modern features ensuring consistent experience across platforms.'
                    },
                    {
                        title: 'Smooth Scroll Interactions',
                        solution: 'Implemented smooth scroll behavior with proper easing functions. Added intersection observers for scroll-triggered animations and parallax effects without impacting performance.'
                    }
                ],
                results: [
                    'Page load time under 2.5 seconds with optimized images',
                    'Mobile PageSpeed score of 90+ on Google Insights',
                    'Fully responsive across all devices and screen sizes',
                    'Clean, modern design praised by 95% of user testers',
                    'Easy customization reducing client onboarding time by 60%',
                    'SEO-friendly structure with proper heading hierarchy',
                    'Successfully used by 50+ businesses and creative professionals'
                ]
            },     
            'ecommerce-platform': {
                title: 'E-commerce Platform Template',
                subtitle: 'Full-featured WordPress e-commerce platform with WooCommerce integration, custom theme development, and seamless shopping experience.',
                client: 'Retail Business',
                year: '2023',
                category: 'WordPress Development',
                tags: ['WordPress', 'WooCommerce', 'PHP', 'Custom Theme', 'Elementor'],
                image: 'images/e-hero.png',
                liveLink: 'https://rollarnlantern.mustarddigitals.com',
                codeLink: null,
                overview: [
                    'A modern WordPress e-commerce platform built for a growing retail business, featuring custom WooCommerce integration, product management, shopping cart, secure checkout, and payment processing.',
                    'The platform handles thousands of transactions monthly with a custom-designed WordPress theme that provides an intuitive shopping experience for customers across all devices.'
                ],
                features: [
                    {
                        title: 'WooCommerce Product Catalog',
                        description: 'Advanced product management with categories, tags, attributes, and variations. Includes search and filtering functionality with price ranges and sorting options.'
                    },
                    {
                        title: 'Shopping Cart & Wishlist',
                        description: 'Real-time cart updates with quantity management, price calculations, and wishlist functionality. Ajax-powered for seamless user experience without page reloads.'
                    },
                    {
                        title: 'Secure Checkout Process',
                        description: 'Multi-step WooCommerce checkout with multiple payment gateway integrations including PayPal, Stripe, and local payment methods.'
                    },
                    {
                        title: 'Order Management System',
                        description: 'Complete order tracking for customers with email notifications. Admin dashboard for managing orders, inventory, and customer data.'
                    },
                    {
                        title: 'Customer Account Portal',
                        description: 'WordPress user profiles with order history, address management, wishlist, and downloadable products access.'
                    },
                    {
                        title: 'Custom WordPress Theme',
                        description: 'Fully responsive custom theme built from scratch with Elementor integration for easy content management and page building.'
                    }
                ],
                technologies: [
                    {
                        title: 'WordPress & WooCommerce',
                        description: 'Custom WordPress installation with WooCommerce plugin for e-commerce functionality. Optimized for performance with caching and CDN integration.'
                    },
                    {
                        title: 'Custom Theme Development',
                        description: 'Custom WordPress theme built with PHP, HTML5, CSS3, and JavaScript. Integrated with Elementor for flexible page building and content management.'
                    },
                    {
                        title: 'Database & Hosting',
                        description: 'MySQL database optimization with proper indexing. Configured on high-performance hosting with SSL certificate and regular backups.'
                    },
                    {
                        title: 'Payment Integration',
                        description: 'Multiple WooCommerce payment gateways including Stripe, PayPal, and local payment methods for customer convenience and security.'
                    },
                    {
                        title: 'SEO & Performance',
                        description: 'Yoast SEO integration, image optimization, lazy loading, and caching plugins for optimal performance and search engine visibility.'
                    }
                ],
                screenshots: [
                    {
                        image: 'images/e-hero.png',
                        caption: 'Homepage - Custom WordPress Theme'
                    },
                    {
                        image: 'images/e-products.png',
                        caption: 'Product Catalog & Shopping Cart'
                    }
                ],
                challenges: [
                    {
                        title: 'WooCommerce Performance Optimization',
                        solution: 'Implemented caching strategies, database optimization, and image compression to ensure fast loading times even with large product catalogs. Used lazy loading and CDN for better performance.'
                    },
                    {
                        title: 'Custom Theme Development',
                        solution: 'Built a custom WordPress theme from scratch following WordPress coding standards and best practices. Ensured compatibility with WooCommerce hooks and filters for seamless integration.'
                    },
                    {
                        title: 'Payment Gateway Integration',
                        solution: 'Configured multiple WooCommerce payment gateways with proper security measures and PCI compliance. Implemented webhook handling for payment confirmations and order updates.'
                    },
                    {
                        title: 'Mobile Responsiveness',
                        solution: 'Designed mobile-first responsive layouts ensuring perfect display across all devices. Optimized touch interactions and simplified checkout process for mobile users.'
                    }
                ],
                results: [
                    'Processed over 10,000 successful transactions through WooCommerce',
                    'Achieved 99.9% uptime with optimized WordPress hosting',
                    'Reduced cart abandonment rate by 25% with improved UX',
                    'Increased mobile conversion rate by 40% with responsive design',
                    'Page load time under 3 seconds with optimization',
                    'Ranked on first page of Google for target keywords with SEO optimization'
                ]
            }
        };

        // Get project ID from URL parameter
        function getProjectId() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('project') || 'pos-system'; // default to pos-system if no param
        }

        // Load project data
        function loadProject() {
            const projectId = getProjectId();
            const project = projectsData[projectId];

            if (!project) {
                window.location.href = 'index.html#portfolio';
                return;
            }

            // Update page title
            document.title = `${project.title} - Christian Mendoza`;

            // Update breadcrumb
            document.getElementById('breadcrumb-title').textContent = project.title;

            // Update header
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-subtitle').textContent = project.subtitle;
            document.getElementById('project-client').textContent = project.client;
            document.getElementById('project-year').textContent = project.year;
            document.getElementById('project-category').textContent = project.category;

            // Update tags
            const tagsContainer = document.getElementById('project-tags');
            tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

            // Update action buttons
            if (project.liveLink) {
                const liveLink = document.getElementById('live-link');
                liveLink.href = project.liveLink;
                liveLink.style.display = 'inline-flex';
            }
            if (project.codeLink) {
                const codeLink = document.getElementById('code-link');
                codeLink.href = project.codeLink;
                codeLink.style.display = 'inline-flex';
            }
            if (project.figmaLink) {
                const figmaLink = document.getElementById('figma-link');
                figmaLink.href = project.figmaLink;
                figmaLink.style.display = 'inline-flex';
            }
            if (project.codeLink2) {
                const codeLink2 = document.getElementById('code-link-2');
                codeLink2.href = project.codeLink2;
                codeLink2.style.display = 'inline-flex';
            }

            // Update main image
            const mainImage = document.getElementById('project-image');
            mainImage.src = project.image;
            mainImage.alt = project.title;

            // Update overview
            const overviewContainer = document.getElementById('project-overview');
            overviewContainer.innerHTML = project.overview.map(text => `<p>${text}</p>`).join('');

            // Update features
            const featuresContainer = document.getElementById('project-features');
            featuresContainer.innerHTML = project.features.map(feature => `
                <li>
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>${feature.title}</strong>
                        <p>${feature.description}</p>
                    </div>
                </li>
            `).join('');

            // Update technologies
            const techContainer = document.getElementById('project-technologies');
            techContainer.innerHTML = project.technologies.map(tech => `
                <div class="tech-item">
                    <h4>${tech.title}</h4>
                    <p>${tech.description}</p>
                </div>
            `).join('');

            // Update screenshots
            if (project.screenshots && project.screenshots.length > 0) {
                document.getElementById('screenshots-section').style.display = 'block';
                const screenshotsContainer = document.getElementById('project-screenshots');
                screenshotsContainer.innerHTML = project.screenshots.map(screenshot => `
                    <div class="screenshot-item">
                        <img src="${screenshot.image}" alt="${screenshot.caption}">
                        <p>${screenshot.caption}</p>
                    </div>
                `).join('');
            }

            // Update challenges
            const challengesContainer = document.getElementById('project-challenges');
            challengesContainer.innerHTML = project.challenges.map(challenge => `
                <div class="challenge-item">
                    <h4>Challenge: ${challenge.title}</h4>
                    <p><strong>Solution:</strong> ${challenge.solution}</p>
                </div>
            `).join('');

            // Update results
            const resultsContainer = document.getElementById('project-results');
            resultsContainer.innerHTML = project.results.map(result => `<li>${result}</li>`).join('');

            // Update navigation
            updateProjectNavigation(projectId);
        }

        // Update project navigation (prev/next)
        function updateProjectNavigation(currentId) {
            const projectIds = Object.keys(projectsData);
            const currentIndex = projectIds.indexOf(currentId);

            // Previous project
            if (currentIndex > 0) {
                const prevId = projectIds[currentIndex - 1];
                const prevProject = projectsData[prevId];
                document.getElementById('prev-project').style.display = 'flex';
                document.getElementById('prev-project').href = `?project=${prevId}`;
                document.getElementById('prev-project-title').textContent = prevProject.title;
            }

            // Next project
            if (currentIndex < projectIds.length - 1) {
                const nextId = projectIds[currentIndex + 1];
                const nextProject = projectsData[nextId];
                document.getElementById('next-project').style.display = 'flex';
                document.getElementById('next-project').href = `?project=${nextId}`;
                document.getElementById('next-project-title').textContent = nextProject.title;
            }
        }

        // Load project when page loads
        $(document).ready(function() {
            loadProject();
        });