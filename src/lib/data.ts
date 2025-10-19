import type { Project, Skill, Leadership, Certificate, Blog, Role, AnalyticsData, CodeSample } from './types';

export const contentVisibility: Record<Role, string[]> = {
  'hr': ['Projects', 'Leadership', 'Certificates'],
  'data-professional': ['Projects', 'Code', 'Analytics', 'Certificates'],
  'hiring-manager': ['Projects', 'Analytics', 'Leadership', 'Certificates'],
  'stalker': ['Blog'],
};

export const heroData = {
  'hr': {
    title: "Evaluating Talent for Future Growth",
    subtitle: "Discover a candidate with a proven track record of skill, leadership, and certified expertise. This portfolio highlights key qualifications and professional achievements."
  },
  'data-professional': {
    title: "Exploring a Data-Driven Mindset",
    subtitle: "Dive deep into complex projects, analytical insights, and robust code. This portfolio is a testament to a passion for turning data into actionable intelligence."
  },
  'hiring-manager': {
    title: "Finding the Right Fit for Your Team",
    subtitle: "Assess a candidate's practical skills through detailed project walkthroughs, analytics dashboards, and leadership examples. See the impact I can bring to your organization."
  },
  'stalker': {
    title: "A Glimpse into a Professional's Journey",
    subtitle: "Welcome to my public-facing blog. Here you'll find my thoughts on technology, aviation, and continuous learning."
  }
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Flight-Deck Predictive Maintenance',
    description: 'An ML-powered system to predict aircraft component failures before they happen, reducing downtime and maintenance costs.',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'SQL', 'Tableau'],
    achievements: ['Reduced unscheduled maintenance by 18%', 'Achieved 94% prediction accuracy', 'Deployed as a microservice on AWS'],
    duration: '6 Months',
    teamSize: 4,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Air-Traffic Flow Optimization',
    description: 'A real-time analytics dashboard to monitor and optimize air traffic flow, leveraging ADS-B data streams.',
    tags: ['Kafka', 'Spark Streaming', 'React', 'D3.js', 'PostgreSQL'],
    achievements: ['Decreased average flight delays by 8% in simulated environments', 'Processed over 1 million data points per minute', 'Visualized data on a live interactive map'],
    duration: '9 Months',
    teamSize: 6,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Automated Pilot Logbook',
    description: 'A mobile application that automatically logs flight hours using GPS and aircraft data, simplifying record-keeping for pilots.',
    tags: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
    achievements: ['Acquired 500+ beta users within 3 months', 'Featured on a popular aviation blog', 'Automated over 10,000 log entries'],
    duration: '1 Year',
    teamSize: 2,
    liveUrl: '#',
    repoUrl: '#',
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
    title: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2023',
    skills: ['GCP', 'BigQuery', 'Dataflow', 'ETL'],
    url: '#',
  },
  {
    id: 2,
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2022',
    skills: ['TensorFlow', 'Deep Learning', 'NLP', 'Computer Vision'],
    url: '#',
  },
  {
    id: 3,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2021',
    skills: ['AWS', 'EC2', 'S3', 'VPC', 'IAM'],
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
