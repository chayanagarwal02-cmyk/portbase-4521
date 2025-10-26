import type { Project, Skill, Leadership, Certificate, Blog, Role, AnalyticsData, CodeSample, PerformanceMetric, SkillOverview, Testimonial, TechStack } from './types';

export const contentVisibility: Record<Role, string[]> = {
  'hr': ['About Me', 'Team Projects', 'Leadership', 'Certifications', 'Contact'],
  'data-professional': ['Overview', 'Projects', 'Code', 'Analytics', 'Certifications'],
  'hiring-manager': ['Overview', 'Projects', 'Analytics', 'Leadership', 'Certifications', 'Contact'],
  'stalker': ['Blog', 'Gallery', 'Videos'],
  'cxo': [],
};

export const heroData: Record<Role, {title: string; subtitle: string; badges: {text: string, className: string}[], profiles?: { value: string, label: string }[]}> = {
  'hr': {
    title: "HR Professional View",
    subtitle: "Select a profile to view tailored information on culture, team dynamics, and professional growth.",
    badges: [
        { text: "Team Player", className: "bg-blue-900/50 text-blue-300 border-blue-700" },
        { text: "Effective Communicator", className: "bg-green-900/50 text-green-300 border-green-700"},
        { text: "Adaptable", className: "bg-purple-900/50 text-purple-300 border-purple-700"}
    ],
    profiles: [
        { value: 'data-analyst', label: 'Data Analyst' },
        { value: 'data-scientist', label: 'Data Scientist' },
        { value: 'data-engineer', label: 'Data Engineer' },
    ]
  },
  'data-professional': {
    title: "Data Professional Deep Dive",
    subtitle: "Select a profile for a technical exploration of projects, code, and analytics.",
    badges: [
      { text: "Python", className: "bg-yellow-900/50 text-yellow-300 border-yellow-700" },
      { text: "SQL", className: "bg-sky-900/50 text-sky-300 border-sky-700"},
      { text: "Cloud Certified", className: "bg-orange-900/50 text-orange-300 border-orange-700"}
    ],
    profiles: [
        { value: 'data-analyst', label: 'Data Analyst' },
        { value: 'data-scientist', label: 'Data Scientist' },
        { value: 'data-engineer', label: 'Data Engineer' },
    ]
  },
  'hiring-manager': {
    title: "Hiring Manager Assessment",
    subtitle: "Select a profile to assess practical skills, project impact, and leadership qualities.",
    badges: [
      { text: "Problem Solver", className: "bg-rose-900/50 text-rose-300 border-rose-700" },
      { text: "Results-Oriented", className: "bg-indigo-900/50 text-indigo-300 border-indigo-700"},
      { text: "Project Leadership", className: "bg-emerald-900/50 text-emerald-300 border-emerald-700"}
    ],
    profiles: [
        { value: 'data-analyst', label: 'Data Analyst' },
        { value: 'data-scientist', label: 'Data Scientist' },
        { value: 'data-engineer', label: 'Data Engineer' },
    ]
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
    title: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    year: 'Dec 2024',
    skills: ['Cloud Architecture', 'AWS', 'DevOps'],
    url: '#',
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional',
    issuer: 'Google',
    year: 'Oct 2024',
    skills: ['Data Analysis', 'SQL', 'Tableau'],
    url: '#',
  },
  {
    id: 3,
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University',
    year: 'Aug 2024',
    skills: ['ML', 'Python', 'TensorFlow'],
    url: '#',
  },
    {
    id: 4,
    title: 'Azure Data Engineer Associate',
    issuer: 'Microsoft',
    year: 'Jun 2024',
    skills: ['Azure', 'Data Engineering', 'ETL'],
    url: '#',
  },
  {
    id: 5,
    title: 'Python for Data Science',
    issuer: 'IBM',
    year: 'Apr 2024',
    skills: ['Python', 'Pandas', 'NumPy'],
    url: '#',
  },
  {
    id: 6,
    title: 'Advanced SQL for Data Scientists',
    issuer: 'DataCamp',
    year: 'Feb 2024',
    skills: ['SQL', 'PostgreSQL', 'Query Optimization'],
    url: '#',
  },
];

export const blogData: Blog[] = [
    {
        id: 1,
        title: 'Navigating the Clouds: A Guide to Cloud Agnostic Infrastructure',
        excerpt: 'In an era where digital transformation is paramount, the debate between cloud-native and cloud-agnostic strategies has never been more relevant...',
        date: 'Oct 15, 2023',
        tags: ['Cloud', 'DevOps', 'Strategy']
    },
    {
        id: 2,
        title: 'The Art of Data Storytelling with D3.js',
        excerpt: 'Data is just numbers until you give it a voice. In this post, we explore how D3.js can be used to create compelling narratives from complex datasets...',
        date: 'Sep 02, 2023',
        tags: ['Data Visualization', 'JavaScript', 'D3.js']
    },
    {
        id: 3,
        title: 'A Deep Dive into React Server Components',
        excerpt: 'React Server Components are changing the way we think about building web applications. Let\'s break down what they are, and why they matter...',
        date: 'Aug 21, 2023',
        tags: ['React', 'Web Development', 'Performance']
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

export const codeSamples: CodeSample[] = [
    {
        id: 'etl',
        title: 'ETL Pipeline',
        code: `import pandas as pd

def extract_data(source_path):
    """Extracts data from a CSV source."""
    return pd.read_csv(source_path)

def transform_data(df):
    """Applies transformations to the dataframe."""
    df['normalized_value'] = df['value'] / df['value'].max()
    df.dropna(inplace=True)
    return df

def load_data(df, target_path):
    """Loads transformed data to a parquet file."""
    df.to_parquet(target_path, index=False)

# --- Main execution ---
raw_df = extract_data('data/raw/flights.csv')
transformed_df = transform_data(raw_df)
load_data(transformed_df, 'data/processed/flights.parquet')
`
    },
    {
        id: 'ml',
        title: 'ML Model',
        code: `from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Assuming X and y are pre-loaded feature and target data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"Model Accuracy: {accuracy:.2f}")
`
    },
    {
        id: 'sql',
        title: 'SQL Query',
        code: `WITH MonthlyFlightCounts AS (
    SELECT
        strftime('%Y-%m', departure_time) AS month,
        origin_airport_id,
        COUNT(*) AS flight_count
    FROM
        flights
    WHERE
        departure_time >= '2023-01-01'
    GROUP BY
        1, 2
)
SELECT
    m.month,
    a.airport_name,
    m.flight_count
FROM
    MonthlyFlightCounts m
JOIN
    airports a ON m.origin_airport_id = a.airport_id
ORDER BY
    m.month, m.flight_count DESC;
`
    }
];

export const hrPerformanceMetrics: PerformanceMetric[] = [
    { name: "Team Player", value: 95, color: "hsl(var(--chart-1))" },
    { name: "Communication", value: 88, color: "hsl(var(--chart-2))" },
    { name: "Adaptability", value: 92, color: "hsl(var(--chart-3))" },
];

export const dataProfessionalPerformanceMetrics: PerformanceMetric[] = [
    { name: "Problem Solving", value: 98, color: "hsl(var(--chart-4))" },
    { name: "Analytical Skills", value: 95, color: "hsl(var(--chart-5))" },
    { name: "Attention to Detail", value: 91, color: "hsl(var(--chart-1))" },
];

export const skillsOverview: SkillOverview[] = [
    { subject: "Python", value: 90 },
    { subject: "SQL", value: 85 },
    { subject: "Cloud", value: 80 },
    { subject: "Data Viz", value: 78 },
    { subject: "ETL", value: 88 },
    { subject: "ML/AI", value: 72 },
]

export const techStackData: TechStack[] = [
    { name: 'Python', proficiency: 90, icon: 'Code' },
    { name: 'SQL/PostgreSQL', proficiency: 85, icon: 'Database' },
    { name: 'AWS/Azure', proficiency: 80, icon: 'Cloud' },
    { name: 'Machine Learning', proficiency: 88, icon: 'Cpu' },
    { name: 'Data Visualization', proficiency: 75, icon: 'BarChart2' },
    { name: 'ETL Pipelines', proficiency: 82, icon: 'Zap' },
];

    

    

    

    
