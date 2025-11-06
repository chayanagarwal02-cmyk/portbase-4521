
import type { Project, Skill, Leadership, Certificate, Blog, Role, AnalyticsData, CodeSample, PerformanceMetric, SkillOverview, Testimonial, TechStack, CategorizedSkills, Achievement, CareerItem } from './types';

export const contentVisibility: Record<Role, string[]> = {
  'hr': [],
  'data-professional': [],
  'hiring-manager': [],
  'stalker': ['Blog', 'Videos', 'Contact'],
  'cxo': [],
  'ai-universe': ['Overview', 'Projects', 'Analytics', 'Leadership', 'Certifications', 'Contact'],
};

export const heroData: Record<Role, {title: string; subtitle: string; badges: {text: string, className: string}[], profiles?: { value: string, label: string }[], profileBadges?: Record<string, {text: string, className: string}[]>}> = {
  'hr': {
    title: "",
    subtitle: "",
    badges: [],
  },
  'data-professional': {
    title: "",
    subtitle: "",
    badges: [],
  },
  'hiring-manager': {
    title: "",
    subtitle: "",
    badges: [],
  },
  'stalker': {
    title: "A Glimpse into a Professional's Journey",
    subtitle: "Welcome to my public-facing blog. Here you'll find my thoughts on technology, aviation, and continuous learning.",
    badges: []
  },
  'cxo': {
    title: "Machine Learning Advocate Profile",
    subtitle: "A strategic overview of how data-driven leadership and technical advocacy deliver business value, from product innovation to market presence.",
    badges: [
        { text: "Business-Oriented", className: "bg-red-900/50 text-red-300 border-red-700" },
        { text: "Results-Driven", className: "bg-teal-900/50 text-teal-300 border-teal-700"},
        { text: "Strategic Thinker", className: "bg-gray-700/50 text-gray-300 border-gray-600"}
    ],
  },
  'ai-universe': {
    title: "Welcome to the AI Universe",
    subtitle: "Explore AI-powered features, generative content, and interactive assistants built into this portfolio.",
    badges: [],
    profiles: [
      { value: 'ai-data-scientist', label: 'AI Data Scientist' },
      { value: 'data-scientist-a', label: 'Data Scientist - A' },
    ],
    profileBadges: {
        'ai-data-scientist': [
            { text: "Generative AI", className: "bg-blue-900/50 text-blue-300 border-blue-700" },
            { text: "MLOps", className: "bg-green-900/50 text-green-300 border-green-700"},
            { text: "LLMOps", className: "bg-purple-900/50 text-purple-300 border-purple-700"}
        ],
        'data-scientist-a': [
            { text: "MLOps", className: "bg-rose-900/50 text-rose-300 border-rose-700" },
            { text: "Deep Learning", className: "bg-indigo-900/50 text-indigo-300 border-indigo-700"},
            { text: "RecSys", className: "bg-emerald-900/50 text-emerald-300 border-emerald-700"},
            { text: "Time Series Analysis", className: "bg-amber-900/50 text-amber-300 border-amber-700"}
        ]
    }
  }
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        title: 'VP of Operations at SkyTech Airlines',
        quote: 'An exceptional data analyst who transformed our operations. The insights provided led to a 40% improvement in efficiency and significant cost savings.'
    },
    {
        id: 2,
        name: 'Alex Johnson',
        title: 'Project Manager, SkyHigh Ventures',
        quote: 'Working with them was a breeze. Their ability to translate complex data into actionable insights was instrumental to our project\'s success. A true team player.'
    },
    {
        id: 3,
        name: 'Samantha Carter',
        title: 'Lead Engineer, QuantumLeap Dynamics',
        quote: 'Their technical expertise is matched only by their communication skills. They have a unique talent for explaining intricate concepts clearly and concisely.'
    }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Aviation Data Analytics Platform',
    description: 'Built a real-time analytics dashboard for flight operations monitoring.',
    tags: ['Python', 'React', 'PostgreSQL', 'AWS'],
    achievements: ['Reduced unscheduled maintenance by 18%', 'Achieved 94% prediction accuracy', 'Deployed as a microservice on AWS'],
    duration: '6 Months',
    teamSize: 4,
    liveUrl: '#',
    repoUrl: '#',
    impact: '40% efficiency increase',
    visuals: {
      kpi: {
        label: "Prediction Accuracy",
        value: "94%",
      },
      chartData: [
        { name: "Before", value: 350 },
        { name: "After", value: 287 }
      ],
      chartDescription: "Unscheduled Maintenance Events"
    },
    testimonials: [testimonialsData[0]]
  },
  {
    id: 2,
    title: 'Predictive Maintenance System',
    description: 'ML-powered system to predict aircraft maintenance needs.',
    tags: ['Machine Learning', 'TensorFlow', 'Azure', 'PowerBI'],
    achievements: ['Decreased average flight delays by 8% in simulated environments', 'Processed over 1 million data points per minute', 'Visualized data on a live interactive map'],
    duration: '9 Months',
    teamSize: 6,
    liveUrl: '#',
    repoUrl: '#',
    impact: '$2M cost savings',
    visuals: {
      kpi: {
        label: "Cost Savings",
        value: "$2M+",
      },
      chartData: [
        { name: "Q1", value: 0.5 },
        { name: "Q2", value: 1.2 },
        { name: "Q3", value: 1.8 },
        { name: "Q4", value: 2.1 }
      ],
      chartDescription: "Cumulative Savings (in Millions)"
    },
    testimonials: [testimonialsData[1]]
  },
  {
    id: 3,
    title: 'Flight Route Optimization',
    description: 'Algorithm to optimize flight routes for fuel efficiency.',
    tags: ['Optimization', 'Python', 'Algorithms', 'GIS'],
    achievements: ['Acquired 500+ beta users within 3 months', 'Featured on a popular aviation blog', 'Automated over 10,000 log entries'],
    duration: '1 Year',
    teamSize: 2,
    liveUrl: '#',
    repoUrl: '#',
    impact: '15% fuel reduction',
    visuals: {
      kpi: {
        label: "Fuel Efficiency Gain",
        value: "15%",
      },
      chartData: [
        { name: "Baseline", value: 100 },
        { name: "Optimized", value: 85 }
      ],
      chartDescription: "Average Fuel Consumption per Flight"
    },
    testimonials: [testimonialsData[2]]
  },
];

export const aiProjectsData: Project[] = [
  {
    id: 101,
    title: 'High-Fidelity Digital Twin for Autonomous Predictive Maintenance (Jet Engine RUL)',
    description: 'Developed a physics-informed neural network (PINN) to create a digital twin of a jet engine, predicting Remaining Useful Life (RUL) with high accuracy.',
    tags: ['PyTorch', 'Digital Twin', 'PINN', 'MLOps', 'Kubernetes', 'GCP'],
    achievements: [
      'Improved RUL prediction accuracy by 25% over traditional ML models.',
      'Reduced false positives in maintenance alerts by 40%.',
      'Published findings in the Journal of Aerospace Engineering.'
    ],
    duration: '9 Months',
    teamSize: 5,
    liveUrl: '#',
    repoUrl: '#',
    impact: 'Est. $5M/year savings',
    visuals: {
      kpi: {
        label: "RUL Accuracy",
        value: "98.2%",
      },
      chartData: [
        { name: "LSTM", value: 78 },
        { name: "Transformer", value: 85 },
        { name: "PINN", value: 98.2 }
      ],
      chartDescription: "Model Accuracy Comparison"
    }
  },
  {
    id: 102,
    title: 'Verifiable, Adversarial-Robust Autonomous Swarm Drone Mission Planner',
    description: 'Designed a decentralized mission planning system for drone swarms using multi-agent reinforcement learning (MARL) with formal verification methods to ensure robustness against adversarial attacks.',
    tags: ['MARL', 'AI Agents', 'Formal Verification', 'RAG', 'Python', 'Docker'],
    achievements: [
      'Achieved 99.9% mission success rate in simulated adversarial environments.',
      'Enabled real-time, decentralized replanning for up to 100 drones.',
      'Presented at the International Conference on Autonomous Agents.'
    ],
    duration: '12 Months',
    teamSize: 8,
    liveUrl: '#',
    repoUrl: '#',
    impact: '99.9% mission success',
    visuals: {
      kpi: {
        label: "Adversarial Robustness",
        value: "99.9%",
      },
      chartData: [
        { name: "Centralized", value: 65 },
        { name: "Decentralized", value: 88 },
        { name: "Decentralized+Robust", value: 99.9 }
      ],
      chartDescription: "Mission Success Rate Under Attack"
    }
  },
  {
    id: 103,
    title: 'Generative AI System for Topology Optimization of Flight-Ready Parts',
    description: 'Created a generative adversarial network (GAN) to produce novel, lightweight, and structurally sound designs for aircraft components, optimized for 3D printing.',
    tags: ['Generative AI', 'GANs', 'TensorFlow', 'Topology Optimization', 'Hugging Face', 'Streamlit'],
    achievements: [
      'Reduced average component weight by 30% while maintaining structural integrity.',
      'Shortened design-to-prototype cycle from 4 weeks to 3 days.',
      'Integrated with a Streamlit app for interactive design exploration by engineers.'
    ],
    duration: '7 Months',
    teamSize: 3,
    liveUrl: '#',
    repoUrl: '#',
    impact: '30% weight reduction',
    visuals: {
      kpi: {
        label: "Weight Reduction",
        value: "30%",
      },
      chartData: [
        { name: "Original", value: 100 },
        { name: "Gen 1", value: 82 },
        { name: "Gen 2 (Final)", value: 70 }
      ],
      chartDescription: "Component Weight (as % of original)"
    }
  },
]

export const leadershipData: Leadership[] = [
  {
    id: 1,
    title: 'Lead Data Scientist',
    organization: 'Aero-Analytics Inc.',
    year: '2021-Present',
    description: 'Led a team of 5 data scientists in developing predictive models for the aviation industry. Mentored junior members and managed project roadmaps.',
    type: 'Leadership',
  },
  {
    id: 2,
    title: 'Innovator of the Year Award',
    organization: 'Aero-Analytics Inc.',
    year: '2022',
    description: 'Awarded for the development of the Flight-Deck Predictive Maintenance system, recognizing its significant impact on operational efficiency.',
    type: 'Accolade',
  },
  {
    id: 3,
    title: 'Project Lead - Flow Optimization',
    organization: 'Internal Project',
    year: '2020',
    description: 'Successfully managed the Air-Traffic Flow Optimization project from conception to deployment, coordinating between engineering and product teams.',
    type: 'Leadership',
  },
];

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Google Cloud Certified - Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2024',
    skills: ['Data Pipelines', 'BigQuery', 'ML Models', 'Cloud Storage'],
    url: 'https://www.credential.net/1ee42782-5555-46b5-9509-32357999849c',
  },
  {
    id: 2,
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    year: '2023',
    skills: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    url: 'https://www.credential.net/1ee42782-5555-46b5-9509-32357999849c',
  },
  {
    id: 3,
    title: 'IBM Data Science Professional Certificate',
    issuer: 'Coursera',
    year: '2023',
    skills: ['Python', 'SQL', 'Data Analysis', 'Machine Learning', 'Data Visualization'],
    url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
  },
];

export const blogData: Blog[] = [
  {
    id: 1,
    title: "The Trajectory of Urban Air Mobility",
    excerpt: "Uber Elevate, launched in 2016 with its seminal white paper, aimed to revolutionize urban transportation by introducing aerial ridesharing using electric Vertical Take-off and Landing (eVTOL) aircraft. The initiative’s vision was to create a multimodal transportation product seamlessly integrating ground and intra-city flight, promising significant time savings, reduced urban congestion, and environmentally sustainable mobility. This ambitious endeavor played a pivotal role in propelling the concept of Urban Air Mobility (UAM) from a futuristic idea to a serious aerospace sector, attracting substantial investment and fostering collaboration across regulators, civic leaders, real estate developers, and technology companies.",
    date: "June 18, 2025",
    tags: ["understanding of UAM Systems", "Business Analysis", "market viability and cost modeling", "Logistics and Pilot Program Planning"],
    url: "https://medium.com/@chayan.agarwal01/the-trajectory-of-urban-air-mobility-99ffcb89113f",
    imageId: "uam-blog-post",
  }
];

export const analyticsData: AnalyticsData = {
    quarterlyImpact: [
        { quarter: 'Q1', impact: 400 },
        { quarter: 'Q2', impact: 300 },
        { quarter: 'Q3', impact: 500 },
        { quarter: 'Q4', impact: 800 },
    ],
    techDistribution: [
        { name: 'Python', value: 40 },
        { name: 'JavaScript', value: 25 },
        { name: 'SQL', value: 20 },
        { name: 'Cloud', value: 15 },
    ],
    weeklyActivity: [
        { day: 'Mon', commits: 4 },
        { day: 'Tue', commits: 6 },
        { day: 'Wed', commits: 8 },
        { day: 'Thu', commits: 5 },
        { day: 'Fri', commits: 10 },
        { day: 'Sat', commits: 2 },
        { day: 'Sun', commits: 1 },
    ],
    skillGrowth: [
        { month: 'Jan', Python: 60, SQL: 70 },
        { month: 'Mar', Python: 65, SQL: 72 },
        { month: 'Jun', Python: 75, SQL: 78 },
        { month: 'Sep', Python: 85, SQL: 82 },
        { month: 'Dec', Python: 90, SQL: 85 },
    ]
};

export const techStackData: TechStack[] = [
    { name: 'SQL', proficiency: 85, icon: 'Database' },
    { name: 'Data Visualization', proficiency: 75, icon: 'BarChart2' },
    { name: 'Spreadsheets', proficiency: 80, icon: 'FileCode' },
    { name: 'Prob & Stats', proficiency: 80, icon: 'BarChart' },
    { name: 'Data Cleaning & Wrangling', proficiency: 82, icon: 'Zap' },
    { name: 'Python', proficiency: 90, icon: 'Code' },
    { name: 'PostgreSQL', proficiency: 95, icon: 'Database' },
    { name: 'BigQuery', proficiency: 85, icon: 'Cloud' },
    { name: 'Snowflake', proficiency: 75, icon: 'Cloud' },
    { name: 'Airflow/Prefect', proficiency: 92, icon: 'Briefcase' },
    { name: 'dbt', proficiency: 88, icon: 'Rocket' },
    { name: 'Spark', proficiency: 80, icon: 'Cpu' },
];

export const aiDataScientistTechStack: TechStack[] = [
    { name: 'LangChain', proficiency: 90, icon: 'Code' },
    { name: 'Langfuse', proficiency: 85, icon: 'Code' },
    { name: 'OpenAl API', proficiency: 88, icon: 'Code' },
    { name: 'AutoGen', proficiency: 82, icon: 'Code' },
    { name: 'LlamaIndex', proficiency: 80, icon: 'Code' },
    { name: 'GPT-4', proficiency: 95, icon: 'Cpu' },
    { name: 'RAG', proficiency: 89, icon: 'Code' },
    { name: 'AI Agents', proficiency: 85, icon: 'Cpu' },
    { name: 'Gemini CLI', proficiency: 92, icon: 'Code' },
    { name: 'PyTorch', proficiency: 91, icon: 'Cpu' },
    { name: 'TensorFlow', proficiency: 90, icon: 'Cpu' },
    { name: 'MLflow', proficiency: 87, icon: 'Rocket' },
    { name: 'Docker', proficiency: 86, icon: 'Rocket' },
    { name: 'Hugging Face TRL/PEFT', proficiency: 84, icon: 'Cpu' },
    { name: 'Kubernetes', proficiency: 83, icon: 'Cloud' },
    { name: 'Terraform', proficiency: 80, icon: 'Cloud' },
    { name: 'GCP', proficiency: 90, icon: 'Cloud' },
    { name: 'AWS', proficiency: 88, icon: 'Cloud' },
    { name: 'Streamlit', proficiency: 85, icon: 'BarChart2' },
]

export const achievements: Achievement[] = [
    { iconName: 'Award', color: 'text-yellow-400 bg-yellow-900/50', tooltip: 'Innovator of the Year' },
    { iconName: 'Star', color: 'text-orange-400 bg-orange-900/50', tooltip: 'Top Performer Award' },
    { iconName: 'CultNinja', color: 'text-rose-400 bg-rose-900/50', tooltip: 'Cult Ninja Award' },
    { iconName: 'Rocket', color: 'text-blue-400 bg-blue-900/50', tooltip: 'Project Launch Excellence' },
    { iconName: 'Captain', color: 'text-amber-400 bg-amber-900/50', tooltip: "Captain of the Month - Scaler CC x BLR Community (Sept' 25)" },
];

export const careerJourney: CareerItem[] = [
    { year: '2023 - 2024', role: 'Data Operations Analyst', company: 'Amazon Development Center (India) Pvt. Ltd.', description: 'Analyzed large-scale data to enhance operational efficiency and support strategic decisions.'},
    { year: '2022 - 2023', role: 'Operations Analyst', company: 'Highway Delite', description: 'Monitored operational metrics and provided data-driven recommendations for process improvements.'},
];

export const virtualInternships: CareerItem[] = [
    { year: 'June 2025 - August 2025', role: 'Data Analytics Consultant', company: 'Quantium (via The Forage)', description: 'Completed a simulated project involving data analysis and strategic recommendations for a retail client.'}
];

export * from './types';
