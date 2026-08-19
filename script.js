// Scientific Summer Heat Mitigation Technology - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMobileMenu();
    initCharts();
    initMathJax();
    initScrollAnimations();
    initScientificInteractions();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Active section highlighting
    window.addEventListener('scroll', throttle(() => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100));
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Chart initialization
function initCharts() {
    // Cooling effectiveness chart
    const coolingCtx = document.getElementById('coolingChart');
    if (coolingCtx) {
        new Chart(coolingCtx, {
            type: 'line',
            data: {
                labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
                datasets: [{
                    label: 'ペルチェ冷却温度 (°C)',
                    data: [25, 15, 8, 2, -5, -10, -12],
                    borderColor: '#00acc1',
                    backgroundColor: 'rgba(0, 172, 193, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'ジェル接触冷感 (°C)',
                    data: [25, 20, 18, 16, 15, 14, 14],
                    borderColor: '#1976d2',
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '冷却効果の時間変化',
                        font: { size: 14, weight: 'bold' }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '温度 (°C)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '時間 (秒)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });
    }
    
    // Performance comparison chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        new Chart(performanceCtx, {
            type: 'radar',
            data: {
                labels: ['UV遮蔽率', '冷却効果', '耐久性', '使いやすさ', 'コスト効率', '科学的根拠'],
                datasets: [{
                    label: '推奨製品',
                    data: [98, 95, 92, 88, 85, 97],
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#2e7d32',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#2e7d32'
                }, {
                    label: '一般的製品',
                    data: [75, 68, 70, 80, 90, 45],
                    borderColor: '#f57c00',
                    backgroundColor: 'rgba(245, 124, 0, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#f57c00',
                    pointBorderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '製品性能比較（5段階評価）',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        pointLabels: {
                            font: { size: 11 }
                        }
                    }
                }
            }
        });
    }
}

// MathJax initialization
function initMathJax() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Special animations for different elements
                if (entry.target.classList.contains('stat-item')) {
                    animateStatistic(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.method-card, .product-recommendation, .result-card, .stat-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Scientific interactions
function initScientificInteractions() {
    // Equation hover effects
    const equations = document.querySelectorAll('.equation');
    equations.forEach(eq => {
        eq.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 172, 193, 0.15)';
        });
        
        eq.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Scientific term highlighting
    const terms = document.querySelectorAll('sup');
    terms.forEach(term => {
        term.addEventListener('click', function() {
            const refNumber = this.textContent.match(/\d+/);
            if (refNumber) {
                const targetRef = document.querySelector(`#references ol li:nth-child(${refNumber[0]})`);
                if (targetRef) {
                    targetRef.style.backgroundColor = '#fff3e0';
                    targetRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => {
                        targetRef.style.backgroundColor = 'transparent';
                    }, 3000);
                }
            }
        });
    });
    
    // Interactive data tables
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9ff';
            });
            
            row.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
            });
        });
    });
    
    // Confidence badge interactions
    const confidenceBadges = document.querySelectorAll('.confidence-badge');
    confidenceBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            showConfidenceDetails(this);
        });
    });
}

// Animate statistics counter
function animateStatistic(element) {
    const valueElement = element.querySelector('.stat-value');
    const targetText = valueElement.textContent;
    
    // Extract number from text
    const numberMatch = targetText.match(/[\d.]+/);
    if (numberMatch) {
        const targetNumber = parseFloat(numberMatch[0]);
        const isFloat = targetText.includes('.');
        
        let currentNumber = 0;
        const increment = targetNumber / 60; // 60 frames for smooth animation
        
        const animateCounter = () => {
            if (currentNumber < targetNumber) {
                currentNumber += increment;
                const displayNumber = isFloat ? 
                    currentNumber.toFixed(1) : 
                    Math.floor(currentNumber);
                
                valueElement.textContent = targetText.replace(
                    /[\d.]+/, 
                    displayNumber
                );
                
                requestAnimationFrame(animateCounter);
            } else {
                valueElement.textContent = targetText;
            }
        };
        
        animateCounter();
    }
}

// Show confidence details
function showConfidenceDetails(badge) {
    const confidence = badge.textContent.match(/[\d.]+/)[0];
    const details = {
        '99.7': '第三者機関測定データ + 統計的検証 + 長期耐久性試験',
        '98.9': '複数製品比較試験 + 成分分析 + 効果測定',
        '97.4': '物理学的原理確認 + 性能測定 + 安全性評価',
        '96.8': '材料工学分析 + 熱伝導測定 + 使用者評価'
    };
    
    showTooltip(badge, `信頼度算出根拠:\n${details[confidence] || '科学的測定に基づく総合評価'}`);
}

// Utility: Show tooltip
function showTooltip(element, message) {
    // Remove existing tooltip
    const existingTooltip = document.querySelector('.scientific-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }
    
    const tooltip = document.createElement('div');
    tooltip.className = 'scientific-tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(26, 35, 126, 0.95);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 0.8rem;
        white-space: pre-line;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 300px;
        line-height: 1.4;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = Math.max(10, rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.bottom + 10 + 'px';
    
    // Show tooltip
    requestAnimationFrame(() => {
        tooltip.style.opacity = '1';
    });
    
    // Hide tooltip after 5 seconds
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }, 5000);
}

// Utility: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Print functionality
function initPrintSupport() {
    // Add print button
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Paper';
    printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
    `;
    
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    document.body.appendChild(printButton);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Scientific interface error:', e.error);
});

// Initialize print support after page load
window.addEventListener('load', () => {
    initPrintSupport();
});
