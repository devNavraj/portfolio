// ========================================
// Site Configuration & Data
// ========================================

const CONFIG = {
    // Personal Information
    personal: {
        name: 'Nawaraj Rai',
        title: 'AI/ML Engineer',
        email: 'nawarajrai37@gmail.com',
        phone: '+61 449 996 859',
        location: 'Sydney, NSW, Australia',
        github: 'https://github.com/devNavraj',
        linkedin: 'https://linkedin.com/in/nawaraj-rai',
    },

    // Featured Projects (Top 4 Flagship)
    featuredProjects: [
        {
            title: 'ChemSAGE: Graph Neural Networks for Drug Discovery',
            description: 'Novel chemistry-aware GNN architecture for HIV inhibition prediction, achieving 0.785 ROC-AUC on ogbg-molhiv benchmark. Developed edge-aware aggregation, global context injection, and residual connections. Systematic comparison of GCN, GraphSAGE, GAT, and GIN architectures with comprehensive ablation studies revealing that global molecular context outperforms local bond-level features.',
            tech: ['PyTorch', 'PyTorch Geometric', 'GraphSAGE', 'GCN', 'GAT', 'GIN', 'OGB', 'RDKit', 'NetworkX'],
            github: 'https://github.com/devNavraj/GNN-HIV-Inhibition-prediction',
            category: 'featured'
        },
        {
            title: 'Kumora (Empathetic AI Companion)',
            description: 'Full-stack GenAI system with 27-class emotion detection using fine-tuned DistilBERT, dynamic prompt engineering, and LLM integration (Gemini/GPT) for mental health support. Features Redis-backed context management and brain-inspired conversational flow.',
            tech: ['PyTorch', 'DistilBERT', 'Gemini', 'GPT-4', 'Flask', 'Redis', 'Prompt Engineering'],
            github: 'https://github.com/devNavraj/empathetic-ai-companion',
            category: 'featured'
        },
        {
            title: 'Spill Identification & Robot Reaction',
            description: 'End-to-end computer vision system deployed on a physical robot, identifying 21 types of domestic spills with fine-tuned ResNet50 (100% test accuracy) and executing autonomous motor commands via ROS2 integration in real-time.',
            tech: ['PyTorch', 'ResNet50', 'ROS2', 'OpenCV', 'Transfer Learning', 'Computer Vision'],
            github: 'https://github.com/devNavraj/advanced-computer-vision',
            category: 'featured'
        },
        {
            title: 'LLM-Powered Travel Assistant with RAG',
            description: 'Personalized chatbot comparing locally hosted LLMs (Llama-3.2, Mistral-7B, Qwen2.5) with RAG pipeline using LangChain and ChromaDB to ground responses in factual knowledge, reducing hallucinations. Deployed as multilingual web app with FastAPI.',
            tech: ['LangChain', 'ChromaDB', 'Llama', 'Mistral', 'Qwen', 'FastAPI', 'RAG', 'Ollama'],
            github: 'https://github.com/devNavraj/advanced-nlp',
            category: 'featured'
        }
    ],

    // Academic Excellence Projects
    academicProjects: [
        {
            title: 'DDIM: Fast Diffusion Model for Image Generation',
            description: 'Complete implementation of Denoising Diffusion Implicit Models achieving 10x-50x faster sampling than DDPM. Built custom 38M-parameter U-Net with attention mechanisms, trained for 200 epochs on CIFAR-10 with EMA and cosine scheduling. Achieved FID score of 80 with deterministic 50-step sampling, demonstrating strong image quality with comprehensive evaluation using Inception Score and FID metrics.',
            tech: ['PyTorch', 'U-Net', 'DDIM', 'CIFAR-10', 'InceptionV3', 'FID', 'EMA', 'Attention Mechanisms'],
            github: 'https://github.com/devNavraj/DDIM-CIFAR10',
            category: 'academic'
        },
        {
            title: 'Human vs AI Text Detection',
            description: 'Classifier distinguishing human-written vs AI-generated text using fine-tuned DistilBERT achieving 91.93% accuracy on custom 20,000-sample dataset sourced from GPT-4, Claude, Llama, and diverse human sources (news, academic, social media).',
            tech: ['DistilBERT', 'BERT', 'RoBERTa', 'PyTorch', 'Transformers', 'TF-IDF', 'scikit-learn'],
            github: 'https://github.com/devNavraj/advanced-nlp',
            category: 'academic'
        },
        {
            title: 'Fine-grained Aircraft Classification',
            description: '102-class FGVC-Aircraft classification achieving 66% validation accuracy with ResNet50 fine-tuning. Explored DCGAN for synthetic data generation and DeepDream for model interpretability visualization.',
            tech: ['PyTorch', 'ResNet50', 'GANs', 'DeepDream', 'Transfer Learning', 'Data Augmentation'],
            github: 'https://github.com/devNavraj/advanced-computer-vision',
            category: 'academic'
        },
        {
            title: 'Medical Q&A Semantic Similarity',
            description: 'Built Siamese network and custom Transformer encoder from scratch for determining semantic relevance between medical questions and answers using contrastive loss and multi-head attention mechanisms.',
            tech: ['TensorFlow', 'Keras', 'BERT', 'Transformers', 'Multi-Head Attention', 'Siamese Networks'],
            github: 'https://github.com/devNavraj/AI-text-and-vision',
            category: 'academic'
        }
    ],

    // Notable Projects
    notableProjects: [
        {
            title: 'Neural Network from Scratch',
            description: 'Complete neural network implementation using only NumPy for MNIST digit classification, achieving 92.7% test accuracy. Implemented forward/backward propagation, mini-batch gradient descent, and multiple layer configurations.',
            tech: ['NumPy', 'Python', 'Neural Networks', 'Backpropagation'],
            github: 'https://github.com/devNavraj/neural-net-scratch',
            category: 'notable'
        },
        {
            title: 'Quora Duplicate Questions Detection',
            description: 'ML/DL comparison for duplicate question detection achieving 91.32% accuracy. Explored Word2Vec, TF-IDF features with Random Forest, and deep learning models with LSTM and GloVe embeddings.',
            tech: ['Word2Vec', 'TF-IDF', 'LSTM', 'GloVe', 'Random Forest', 'XGBoost', 'TensorFlow'],
            github: 'https://github.com/devNavraj/quora_duplicate_questions_detection',
            category: 'notable'
        },
        {
            title: 'Smart ChatBot (Seq2Seq)',
            description: 'Interactive chatbot using sequence-to-sequence architecture with LSTM, GRU, and Attention mechanisms trained on Cornell Movie Dialog Corpus. Compared performance across three RNN variants.',
            tech: ['TensorFlow', 'Seq2Seq', 'LSTM', 'GRU', 'Attention Mechanism', 'NLP'],
            github: 'https://github.com/devNavraj/Smart-ChatBot',
            category: 'notable'
        },
        {
            title: 'Data Science Portfolio',
            description: 'End-to-end ML projects demonstrating EDA, feature engineering, hyperparameter tuning, and model comparison. Includes student performance prediction, mobile price classification, and e-commerce review analysis.',
            tech: ['Pandas', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'GridSearchCV'],
            github: 'https://github.com/devNavraj/data-science-fundamentals',
            category: 'notable'
        },
        {
            title: 'Dice Face Detection (OpenCV)',
            description: 'Computer vision application for detecting and counting dice face values using Canny edge detection, contour analysis, and blob detection algorithms with OpenCV.',
            tech: ['OpenCV', 'Python', 'Computer Vision', 'Canny Edge Detection', 'Blob Detection'],
            github: 'https://github.com/devNavraj/Dice-Face-Value-Detection-and-Counting',
            category: 'notable'
        }
    ],

    // Skills organized by category
    skills: {
        languages: {
            title: 'Languages',
            icon: '<i class="fas fa-code"></i>',
            items: ['Python', 'Java', 'JavaScript', 'SQL (Oracle PL/SQL)', 'SQL (Microsoft T-SQL)']
        },
        aiFrameworks: {
            title: 'AI/ML Frameworks',
            icon: '<i class="fas fa-robot"></i>',
            items: [
                'PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers',
                'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
                'OpenCV', 'Stable Baselines 3', 'LangChain'
            ]
        },
        aiConcepts: {
            title: 'AI/ML Concepts',
            icon: '<i class="fas fa-brain"></i>',
            items: [
                'Deep Learning', 'Computer Vision (Classification, Segmentation)',
                'NLP (Transformers, Siamese Networks, RAG, LLM Fine-tuning)',
                'Reinforcement Learning (DQN, PPO)', 'Transfer Learning',
                'GANs', 'Prompt Engineering', 'Hyperparameter Tuning'
            ]
        },
        technologies: {
            title: 'Technologies',
            icon: '<i class="fas fa-tools"></i>',
            items: [
                'Flask', 'FastAPI', 'Django', 'Spring Boot', 'ROS2',
                'Docker', 'Git', 'GitHub', 'Bitbucket', 'JIRA', 'Confluence'
            ]
        },
        databases: {
            title: 'Databases & ETL',
            icon: '<i class="fas fa-database"></i>',
            items: [
                'Oracle', 'MySQL', 'PostgreSQL', 'Microsoft SQL Server',
                'ChromaDB', 'Redis', 'Oracle Data Integrator (ODI)',
                'Microsoft SSIS'
            ]
        }
    },

    // Experience Timeline
    timeline: [
        {
            type: 'education',
            title: 'Master of Information Technology (AI)',
            organization: 'Macquarie University',
            location: 'Sydney, NSW',
            date: 'Feb 2024 - Current',
            description: [
                'Current WAM: 82.083',
                'Relevant Courses: Advanced Computer Vision and Action, Advanced Natural Language Processing, Artificial Intelligence for Text and Vision, Data Science, Intelligent Machines Ethics and Law'
            ]
        },
        {
            type: 'work',
            title: 'AI/ML Engineer Intern - Document Fraud Detection',
            organization: 'Truuth',
            location: 'Sydney, Australia',
            date: 'Jun 2024 - Oct 2024',
            website: 'https://www.truuth.id/',
            description: [
                'Evaluated state-of-the-art document fraud detection model on diverse datasets containing real and synthetic images generated by modern AI models (Stable Diffusion, DALL-E, Imagen, Midjourney, Ideogram, Firefly)',
                'Conducted comprehensive analysis including misclassification patterns, threshold optimization, and model performance benchmarking against datasets from leading research papers',
                'Fine-tuned SOTA model for real document verification achieving improved accuracy on production data',
                'Designed and implemented custom preprocessing pipelines resulting in enhanced model performance across various image quality conditions',
                'Evaluated model robustness against forgery techniques (splicing, inpainting) for which the model was not originally trained, identifying edge cases and improvement opportunities'
            ]
        },
        {
            type: 'work',
            title: 'Software Engineer I',
            organization: 'COTIVITI Nepal - Intl Ops-R+D Leadership',
            location: 'Kathmandu, Nepal',
            date: 'Sep 2022 - Jan 2024',
            description: [
                'Executed data migration operations and wrote Oracle PL/SQL scripts for validating internal applications',
                'Designed PL/SQL scripts to automate ODI mapping migration and execute queries for seamless data transformation',
                'Configured, executed, and monitored Microsoft SSIS packages for enterprise data integration',
                'Contributed to consolidated SPA development using Java Spring Boot, Angular, Okta SSO, and OAuth 2.0 RBAC'
            ]
        },
        {
            type: 'work',
            title: 'Software Engineer Trainee',
            organization: 'COTIVITI Nepal',
            location: 'Kathmandu, Nepal',
            date: 'Jul 2022 - Sep 2022',
            description: [
                'Completed intensive 5-week training in enterprise software development (Java, Shell Scripting)',
                'Gained expertise in database management (Oracle SQL, PL/SQL), QA, and data integration (SSIS)',
                'Acquired domain knowledge in US Healthcare System, claims processing, and regulatory compliance (HIPAA)'
            ]
        },
        {
            type: 'work',
            title: 'Software Engineer Intern',
            organization: 'QUICKFOX Consulting',
            location: 'Kathmandu, Nepal',
            date: 'Feb 2022 - Jun 2022',
            description: [
                'Developed automation scripts using Python and Robotic Process Automation (RPA) framework',
                'Specialized in Optical Character Recognition (OCR) project for text extraction from images'
            ]
        },
        {
            type: 'work',
            title: 'Software Engineer Intern',
            organization: 'Leapfrog Technology Nepal',
            location: 'Kathmandu, Nepal',
            date: 'Dec 2021 - Jan 2022',
            description: [
                'Developed responsive websites and games using Figma, HTML, CSS, and vanilla JavaScript Canvas'
            ]
        },
        {
            type: 'education',
            title: 'Bachelor of Computer Engineering',
            organization: 'Kathmandu University - School of Engineering',
            location: 'Dhulikhel, Nepal',
            date: 'Aug 2017 - Mar 2022',
            description: [
                'CGPA: 3.79 / 4.00',
                'Relevant Courses: Artificial Intelligence, Machine Learning, Speech and Language Processing, Algorithms, Data Structures, Database System Management, System Analysis and Design'
            ]
        }
    ]
};

// Make CONFIG available globally in browser
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Export for use in Node.js modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
