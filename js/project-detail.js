        // PROJECT DATA - Add all your projects here
        const projectsData = {
            'pos-system': {
                title: 'POS System Website',
                subtitle: 'A comprehensive point-of-sale system built with modern technologies for efficient business operations.',
                client: 'Personal Project',
                year: '2024',
                category: 'Full Stack Development',
                tags: ['NextJs', 'NodeJs', 'Supabase', 'Postgres', 'Shadcn'],
                image: 'images/project.png',
                liveLink: 'https://example.com',
                codeLink: 'https://github.com/yourusername/pos-system',
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
                        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
                        caption: 'Analytics Dashboard'
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
                        caption: 'Inventory Management'
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
                        caption: 'Sales Dashboard'
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
                image: 'images/project1.png',
                liveLink: 'https://figma.com/your-design',
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
                        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
                        caption: 'Dashboard Overview'
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
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
            'ecommerce-platform': {
                title: 'E-commerce Platform',
                subtitle: 'Full-featured online shopping platform with cart, checkout, and payment integration for seamless customer experience.',
                client: 'Retail Business',
                year: '2023',
                category: 'Full Stack Development',
                tags: ['React', 'Laravel', 'MySQL', 'Stripe', 'Redux'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
                liveLink: 'https://example-shop.com',
                codeLink: 'https://github.com/yourusername/ecommerce',
                overview: [
                    'A modern e-commerce platform built for a growing retail business, featuring product management, shopping cart, secure checkout, and payment processing.',
                    'The platform handles thousands of transactions monthly and provides an intuitive shopping experience for customers.'
                ],
                features: [
                    {
                        title: 'Product Catalog',
                        description: 'Advanced search and filtering with categories, tags, and price ranges.'
                    },
                    {
                        title: 'Shopping Cart',
                        description: 'Real-time cart updates with quantity management and price calculations.'
                    },
                    {
                        title: 'Secure Checkout',
                        description: 'Multi-step checkout process with Stripe payment integration.'
                    },
                    {
                        title: 'Order Management',
                        description: 'Complete order tracking system for customers and admin dashboard.'
                    },
                    {
                        title: 'User Accounts',
                        description: 'Customer profiles with order history, wishlists, and saved addresses.'
                    }
                ],
                technologies: [
                    {
                        title: 'Frontend',
                        description: 'React with Redux for state management, React Router for navigation, and styled-components for styling.'
                    },
                    {
                        title: 'Backend',
                        description: 'Laravel framework with RESTful API architecture and authentication system.'
                    },
                    {
                        title: 'Database',
                        description: 'MySQL with optimized queries and database indexing for performance.'
                    },
                    {
                        title: 'Payments',
                        description: 'Stripe integration for secure payment processing and subscription management.'
                    }
                ],
                screenshots: [
                    {
                        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
                        caption: 'Product Catalog'
                    },
                    {
                        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
                        caption: 'Shopping Cart'
                    }
                ],
                challenges: [
                    {
                        title: 'Payment Security',
                        solution: 'Implemented PCI DSS compliant payment processing through Stripe, ensuring customer data security.'
                    },
                    {
                        title: 'Scalability',
                        solution: 'Optimized database queries and implemented caching strategies to handle increased traffic during sales events.'
                    }
                ],
                results: [
                    'Processed over 10,000 successful transactions',
                    'Achieved 99.9% uptime',
                    'Reduced cart abandonment rate by 25%',
                    'Increased mobile conversion rate by 40%'
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