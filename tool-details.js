// Tool data object containing information about each tool
const toolData = {
    'chatgpt': {
        name: 'ChatGPT',
        category: 'Text Generation',
        logo: 'images/chatgpt.png',
        website: 'https://chat.openai.com',
        description: 'ChatGPT is an advanced language model developed by OpenAI that can engage in natural conversations, answer questions, and assist with various tasks.',
        features: [
            'Natural language understanding and generation',
            'Context-aware conversations',
            'Code generation and debugging',
            'Creative writing assistance',
            'Multi-language support'
        ],
        useCases: [
            'Content creation and writing',
            'Programming assistance',
            'Research and analysis',
            'Language learning',
            'Customer support'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic access to GPT-3.5', 'Standard response times', 'Limited usage']
            },
            {
                plan: 'Plus',
                price: '$20/month',
                features: ['Access to GPT-4', 'Priority access', 'Faster response times', 'Advanced features']
            }
        ]
    },
    'claude': {
        name: 'Claude',
        category: 'Text Generation',
        logo: 'images/claude.png',
        website: 'https://claude.ai',
        description: 'Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest in its interactions.',
        features: [
            'Advanced text analysis',
            'Writing assistance',
            'Research capabilities',
            'Code review and suggestions',
            'Multi-turn conversations'
        ],
        useCases: [
            'Academic research',
            'Technical writing',
            'Data analysis',
            'Content creation',
            'Programming help'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic access', 'Standard features', 'Limited usage']
            },
            {
                plan: 'Pro',
                price: 'Contact for pricing',
                features: ['Advanced features', 'Priority support', 'Custom solutions']
            }
        ]
    },
    'googlebard': {
        name: 'Google Bard',
        category: 'Text Generation',
        logo: 'images/googlebard.png',
        website: 'https://bard.google.com',
        description: 'Google Bard is an AI chatbot developed by Google, powered by the PaLM 2 language model, designed to provide helpful and informative responses.',
        features: [
            'Real-time information access',
            'Multilingual support',
            'Code generation and explanation',
            'Creative writing assistance',
            'Integration with Google services'
        ],
        useCases: [
            'Research and fact-checking',
            'Content creation',
            'Programming help',
            'Language translation',
            'General knowledge queries'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Unlimited access', 'Standard features', 'Basic support']
            }
        ]
    },
    'jasper': {
        name: 'Jasper',
        category: 'Text Generation',
        logo: 'images/jasper.webp',
        website: 'https://www.jasper.ai',
        description: 'Jasper is an AI writing assistant specifically designed for marketing and business content creation.',
        features: [
            'Marketing copy generation',
            'SEO optimization',
            'Brand voice customization',
            'Content templates',
            'Team collaboration'
        ],
        useCases: [
            'Marketing copy',
            'Social media content',
            'Blog posts',
            'Email marketing',
            'Product descriptions'
        ],
        pricing: [
            {
                plan: 'Creator',
                price: '$49/month',
                features: ['Basic features', '1 user', 'Limited words']
            },
            {
                plan: 'Teams',
                price: '$125/month',
                features: ['Advanced features', 'Multiple users', 'Higher word limit']
            }
        ]
    },
    'dalle': {
        name: 'DALL-E',
        category: 'Image Generation',
        logo: 'images/chatgpt.png',
        website: 'https://openai.com/dall-e-2',
        description: 'DALL-E is an AI system that can create realistic images and art from natural language descriptions.',
        features: [
            'Text-to-image generation',
            'Image variations',
            'Image editing',
            'High-resolution output',
            'Style customization'
        ],
        useCases: [
            'Digital art creation',
            'Marketing visuals',
            'Product design',
            'Concept visualization',
            'Content creation'
        ],
        pricing: [
            {
                plan: 'Pay-as-you-go',
                price: '$0.02/image',
                features: ['Basic generation', 'Standard resolution']
            },
            {
                plan: 'Enterprise',
                price: 'Contact sales',
                features: ['Custom solutions', 'Priority support', 'API access']
            }
        ]
    },
    'midjourney': {
        name: 'Midjourney',
        category: 'Image Generation',
        logo: 'images/midjourney.png',
        website: 'https://www.midjourney.com',
        description: 'Midjourney is an AI art generator that creates images from text descriptions, known for its artistic and creative outputs.',
        features: [
            'High-quality image generation',
            'Artistic style control',
            'Image upscaling',
            'Style mixing',
            'Community features'
        ],
        useCases: [
            'Digital art',
            'Concept art',
            'Illustration',
            'Design inspiration',
            'Creative projects'
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '$10/month',
                features: ['200 images/month', 'Basic features']
            },
            {
                plan: 'Standard',
                price: '$30/month',
                features: ['Unlimited images', 'Priority access', 'Advanced features']
            }
        ]
    },
    'stablediffusion': {
        name: 'Stable Diffusion',
        category: 'Image Generation',
        logo: 'images/stable.png',
        website: 'https://stability.ai',
        description: 'Stable Diffusion is an open-source AI model for generating images from text descriptions, offering high-quality and customizable outputs.',
        features: [
            'Open-source model',
            'Local deployment',
            'Custom training',
            'Image editing',
            'Style transfer'
        ],
        useCases: [
            'Research and development',
            'Custom AI solutions',
            'Art generation',
            'Design automation',
            'Content creation'
        ],
        pricing: [
            {
                plan: 'Community',
                price: 'Free',
                features: ['Open-source access', 'Community support']
            },
            {
                plan: 'Enterprise',
                price: 'Contact sales',
                features: ['Custom solutions', 'Priority support', 'API access']
            }
        ]
    },
    'canva': {
        name: 'Canva AI',
        category: 'Image Generation',
        logo: 'images/canva.webp',
        website: 'https://www.canva.com',
        description: 'Canva AI combines design tools with AI capabilities to help users create professional graphics and visual content.',
        features: [
            'AI image generation',
            'Design templates',
            'Smart layout',
            'Brand kit',
            'Collaboration tools'
        ],
        useCases: [
            'Social media graphics',
            'Marketing materials',
            'Presentations',
            'Brand assets',
            'Team collaboration'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic features', 'Limited templates']
            },
            {
                plan: 'Pro',
                price: '$12.99/month',
                features: ['Premium features', 'Unlimited templates', 'Team collaboration']
            }
        ]
    },
    'githubcopilot': {
        name: 'GitHub Copilot',
        category: 'Code Generation',
        logo: 'images/copilot.png',
        website: 'https://github.com/features/copilot',
        description: 'GitHub Copilot is an AI pair programmer that helps you write better code faster by suggesting whole lines or blocks of code as you type.',
        features: [
            'Real-time code suggestions',
            'Multiple language support',
            'IDE integration',
            'Context-aware completions',
            'Code explanation'
        ],
        useCases: [
            'Software development',
            'Code review',
            'Learning programming',
            'Rapid prototyping',
            'Bug fixing'
        ],
        pricing: [
            {
                plan: 'Individual',
                price: '$10/month',
                features: ['Personal use', 'All features']
            },
            {
                plan: 'Business',
                price: '$19/user/month',
                features: ['Team features', 'Security features', 'Priority support']
            }
        ]
    },
    'codewhisperer': {
        name: 'CodeWhisperer',
        category: 'Code Generation',
        logo: 'images/code-whisperer-min.png',
        website: 'https://aws.amazon.com/codewhisperer',
        description: 'Amazon CodeWhisperer is an AI coding companion that provides real-time code suggestions and security recommendations.',
        features: [
            'Code suggestions',
            'Security scanning',
            'Multiple language support',
            'IDE integration',
            'Best practices guidance'
        ],
        useCases: [
            'Software development',
            'Security auditing',
            'Code review',
            'Learning programming',
            'Rapid development'
        ],
        pricing: [
            {
                plan: 'Individual',
                price: 'Free',
                features: ['Basic features', 'Personal use']
            },
            {
                plan: 'Professional',
                price: '$19/user/month',
                features: ['Advanced features', 'Team collaboration', 'Security features']
            }
        ]
    },
    'tabnine': {
        name: 'Tabnine',
        category: 'Code Generation',
        logo: 'images/tabine.webp',
        website: 'https://www.tabnine.com',
        description: 'Tabnine is an AI code completion tool that helps developers write code faster and more efficiently.',
        features: [
            'Code completion',
            'Multiple language support',
            'IDE integration',
            'Team learning',
            'Custom models'
        ],
        useCases: [
            'Software development',
            'Code completion',
            'Learning programming',
            'Team collaboration',
            'Rapid development'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic completion', 'Personal use']
            },
            {
                plan: 'Pro',
                price: '$12/month',
                features: ['Advanced features', 'Team learning', 'Custom models']
            }
        ]
    },
    'mubert': {
        name: 'Mubert',
        category: 'Audio & Music',
        logo: 'images/mubert-logo.png',
        website: 'https://mubert.com',
        description: 'Mubert is an AI-powered music generation platform that creates unique, royalty-free music for various purposes.',
        features: [
            'AI music generation',
            'Customizable tracks',
            'Royalty-free music',
            'API access',
            'Multiple genres'
        ],
        useCases: [
            'Content creation',
            'Background music',
            'Game development',
            'Video production',
            'Commercial use'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic generation', 'Limited downloads']
            },
            {
                plan: 'Pro',
                price: '$14/month',
                features: ['Unlimited generation', 'Commercial license', 'API access']
            }
        ]
    },
    'descript': {
        name: 'Descript',
        category: 'Audio & Music',
        logo: 'images/descript-logo.webp',
        website: 'https://www.descript.com',
        description: 'Descript is an all-in-one audio and video editing platform with AI-powered features for content creation.',
        features: [
            'Audio editing',
            'Voice cloning',
            'Video editing',
            'Transcription',
            'Screen recording'
        ],
        useCases: [
            'Podcast production',
            'Video editing',
            'Voice-over creation',
            'Content creation',
            'Transcription'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic features', 'Limited exports']
            },
            {
                plan: 'Creator',
                price: '$12/month',
                features: ['Advanced features', 'Unlimited exports', 'Team collaboration']
            }
        ]
    },
    'elevenlabs': {
        name: 'ElevenLabs',
        category: 'Audio & Music',
        logo: 'images/eleven-labs-ai-logo.png',
        website: 'https://elevenlabs.io',
        description: 'ElevenLabs is an AI voice generation platform that creates natural-sounding speech in multiple languages.',
        features: [
            'Voice cloning',
            'Text-to-speech',
            'Multiple languages',
            'Voice customization',
            'API access'
        ],
        useCases: [
            'Voice-over creation',
            'Content creation',
            'Accessibility',
            'Multilingual content',
            'Game development'
        ],
        pricing: [
            {
                plan: 'Free',
                price: '$0',
                features: ['Basic generation', 'Limited characters']
            },
            {
                plan: 'Pro',
                price: '$5/month',
                features: ['Advanced features', 'Higher character limit', 'API access']
            }
        ]
    },
    'runway': {
        name: 'Runway',
        category: 'Video Generation',
        logo: 'images/runway.png',
        website: 'https://runwayml.com',
        description: 'Runway is an AI-powered video editing platform that offers advanced tools for video creation and manipulation.',
        features: [
            'AI video editing',
            'Green screen removal',
            'Motion tracking',
            'Style transfer',
            'Video generation'
        ],
        useCases: [
            'Video editing',
            'Content creation',
            'Visual effects',
            'Motion graphics',
            'Film production'
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '$15/month',
                features: ['Basic features', 'Limited exports']
            },
            {
                plan: 'Pro',
                price: '$35/month',
                features: ['Advanced features', 'Unlimited exports', 'Priority support']
            }
        ]
    },
    'synthesia': {
        name: 'Synthesia',
        category: 'Video Generation',
        logo: 'images/syntesi.webp',
        website: 'https://www.synthesia.io',
        description: 'Synthesia is an AI video generation platform that creates videos with digital avatars speaking in multiple languages.',
        features: [
            'AI avatars',
            'Multiple languages',
            'Custom avatars',
            'Text-to-video',
            'API access'
        ],
        useCases: [
            'Training videos',
            'Marketing content',
            'Educational content',
            'Multilingual videos',
            'Corporate communications'
        ],
        pricing: [
            {
                plan: 'Personal',
                price: '$30/month',
                features: ['Basic features', 'Limited minutes']
            },
            {
                plan: 'Enterprise',
                price: 'Contact sales',
                features: ['Custom solutions', 'Unlimited minutes', 'Priority support']
            }
        ]
    },
    'heygen': {
        name: 'HeyGen',
        category: 'Video Generation',
        logo: './images/hygen.avif',
        website: 'https://www.heygen.com',
        description: 'HeyGen is an AI video platform that creates talking avatar videos for various business and personal use cases.',
        features: [
            'AI avatars',
            'Voice cloning',
            'Multiple languages',
            'Custom avatars',
            'Video templates'
        ],
        useCases: [
            'Marketing videos',
            'Training content',
            'Personal messages',
            'Multilingual content',
            'Social media'
        ],
        pricing: [
            {
                plan: 'Basic',
                price: '$29/month',
                features: ['Basic features', 'Limited minutes']
            },
            {
                plan: 'Pro',
                price: '$89/month',
                features: ['Advanced features', 'More minutes', 'Priority support']
            }
        ]
    }
};

// Function to get tool ID from URL
function getToolIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('tool');
}

// Function to load tool details
function loadToolDetails() {
    const toolId = getToolIdFromUrl();
    const tool = toolData[toolId];

    if (!tool) {
        // Handle case when tool is not found
        document.querySelector('.tool-details-container').innerHTML = `
            <div class="error-message">
                <h2>Tool not found</h2>
                <p>The requested tool could not be found.</p>
                <a href="tools.html" class="visit-website-btn">Back to Tools</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${tool.name} - AI Tools Hub`;

    // Update tool information
    document.getElementById('toolLogo').src = tool.logo;
    document.getElementById('toolName').textContent = tool.name;
    document.getElementById('toolCategory').textContent = tool.category;
    document.getElementById('toolWebsite').href = tool.website;
    document.getElementById('toolDescription').textContent = tool.description;

    // Update features
    const featuresList = document.getElementById('toolFeatures');
    featuresList.innerHTML = tool.features.map(feature => 
        `<li>${feature}</li>`
    );

    // Update use cases
    const useCasesGrid = document.getElementById('toolUseCases');
    useCasesGrid.innerHTML = tool.useCases.map(useCase => 
        `<div class="use-case-card">
            <h3>${useCase}</h3>
        </div>`
    ).join('');

    // Update pricing
    const pricingInfo = document.getElementById('toolPricing');
    pricingInfo.innerHTML = tool.pricing.map(plan => 
        `<div class="pricing-card">
            <h3>${plan.plan}</h3>
            <div class="price">${plan.price}</div>
            <ul>
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>`
    ).join('');
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Initialize mobile menu
function initMobileMenu() {
    const menuIcon = document.getElementById('menu');
    const closeIcon = document.getElementById('close');
    const navLinks = document.querySelector('nav ul');

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

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadToolDetails();
    initThemeToggle();
    initMobileMenu();
}); 