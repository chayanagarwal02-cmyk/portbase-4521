import type { ProfileDataMap } from './types';

export const profileData: ProfileDataMap = {
  "Data Analyst": {
    "about": "Welcome to my career portfolio. I am passionate about leveraging data to drive meaningful impact and fostering a collaborative, growth-oriented team environment. This portfolio is designed to give you a comprehensive look at my skills, experience, and the professional value I bring.",
    "circles": [
      {
        "title": "Business Impact & Insight Generation",
        "value": 98,
        "key_metrics": [
          "Time-to-Insight (TTI)",
          "Actionable Insights Generated",
          "Business Problem Solving (ROI)",
          "Decision-Maker Utilization"
        ]
      },
      {
        "title": "Data Quality & Accuracy",
        "value": 95,
        "key_metrics": [
          "Data Accuracy Rate",
          "Data Quality Score"
        ]
      },
      {
        "title": "Analysis & Reporting Efficiency",
        "value": 91,
        "key_metrics": [
          "Timely Delivery of Reports (On-Time Rate)",
          "Data Processing Speed",
          "Visualization/Report Clarity"
        ]
      },
      {
        "title": "Team & Soft Skills",
        "value": 94,
        "key_metrics": [
          "Stakeholder Satisfaction",
          "Collaboration/Communication"
        ]
      }
    ],
    "metrics": [
      {
        "category": "Business Impact & Insight Generation",
        "indicator": "Time-to-Insight (TTI)",
        "format": "Hours (or Days)",
        "example_value": "24.5 Hours",
        "description": "The average time from initial request to delivering a validated, actionable insight."
      },
      {
        "category": "Business Impact & Insight Generation",
        "indicator": "Actionable Insights Generated",
        "format": "Count (e.g., Insights/Quarter)",
        "example_value": "18 Insights",
        "description": "Number of unique findings that directly resulted in a strategic business action (e.g., launching an A/B test, changing a price)."
      },
      {
        "category": "Business Impact & Insight Generation",
        "indicator": "Business Problem Solving (ROI)",
        "format": "$ (Currency) or %",
        "example_value": "+ $150,000",
        "description": "The measurable financial return (revenue or cost savings) resulting from the data project."
      },
      {
        "category": "Business Impact & Insight Generation",
        "indicator": "Decision-Maker Utilization",
        "format": "% or Count (Users)",
        "example_value": "95% Adoption",
        "description": "Percentage of key stakeholders who actively use the primary dashboard/report monthly."
      },
      {
        "category": "Data Quality & Accuracy",
        "indicator": "Data Accuracy Rate",
        "format": "%",
        "example_value": "99.81%",
        "description": "The percentage of data records used in the analysis that are validated as correct and complete."
      },
      {
        "category": "Data Quality & Accuracy",
        "indicator": "Data Quality Score",
        "format": "Score (out of 10 or 100)",
        "example_value": "9.2/10",
        "description": "A composite metric measuring data completeness, consistency, and timeliness."
      },
      {
        "category": "Analysis & Reporting Efficiency",
        "indicator": "Timely Delivery of Reports (On-Time Rate)",
        "format": "%",
        "example_value": "98% On Time",
        "description": "Percentage of recurring or scheduled reports that were delivered by the deadline."
      },
      {
        "category": "Analysis & Reporting Efficiency",
        "indicator": "Data Processing Speed",
        "format": "Seconds (or Minutes)",
        "example_value": "4.2 Seconds",
        "description": "The average query execution time or the dashboard refresh time."
      },
      {
        "category": "Analysis & Reporting Efficiency",
        "indicator": "Visualization/Report Clarity",
        "format": "Score (out of 5) or NPS Score",
        "example_value": "4.7/5 Stars",
        "description": "Average rating from stakeholders on the clarity and effectiveness of the visual presentation."
      },
      {
        "category": "Team & Soft Skills",
        "indicator": "Stakeholder Satisfaction",
        "format": "CSAT Score or NPS",
        "example_value": "85 CSAT",
        "description": "Score from a brief survey asking stakeholders about their satisfaction with the analysis and service."
      },
      {
        "category": "Team & Soft Skills",
        "indicator": "Collaboration/Communication",
        "format": "Score (out of 5) or Count",
        "example_value": "5 Projects Shared",
        "description": "Average score or count of cross-functional projects where the analyst was a critical contributor."
      }
    ]
  },
  "Data Scientist": {
    "about": "As a Data Scientist, my focus is on building robust, high-performing predictive models and ensuring their seamless deployment into production. This section showcases my work in MLOps, model validation, and driving quantifiable business lift through advanced machine learning.",
    "circles": [
      {
        "title": "Model Performance",
        "value": 97,
        "key_metrics": [
          "Model Accuracy (Classification)",
          "Root Mean Squared Error (RMSE) (Regression)",
          "Area Under the ROC Curve (AUC)"
        ]
      },
      {
        "title": "Production Readiness",
        "value": 93,
        "key_metrics": [
          "Time-to-Production (TTP)",
          "Inference Latency",
          "Model Drift Detected",
          "Retraining Frequency"
        ]
      },
      {
        "title": "Quantifiable Business Value",
        "value": 90,
        "key_metrics": [
          "Model-Attributed ROI",
          "Lift/Incremental Value",
          "Decision-Making Automation"
        ]
      }
    ],
    "metrics": [
      {
        "category": "Model Performance",
        "indicator": "Model Accuracy (Classification)",
        "format": "%",
        "example_value": "92.51%",
        "description": "The ratio of correct predictions to total predictions (Use Precision, Recall, or F1 Score for imbalanced classes)."
      },
      {
        "category": "Model Performance",
        "indicator": "Root Mean Squared Error (RMSE) (Regression)",
        "format": "Absolute Value (Same unit as the Target)",
        "example_value": "15 Units",
        "description": "The standard deviation of the residuals (prediction errors). Lower is better."
      },
      {
        "category": "Model Performance",
        "indicator": "Area Under the ROC Curve (AUC)",
        "format": "Score (0.5 to 1.0)",
        "example_value": "0.88 AUC",
        "description": "Measures the model's ability to distinguish between classes."
      },
      {
        "category": "Model Production & MLOps",
        "indicator": "Time-to-Production (TTP)",
        "format": "Days (or Weeks)",
        "example_value": "14 Days",
        "description": "The time from model finalization to live deployment in the production environment."
      },
      {
        "category": "Model Production & MLOps",
        "indicator": "Inference Latency",
        "format": "Milliseconds (ms)",
        "example_value": "50 ms",
        "description": "The time it takes for the model to generate a prediction (often P95 or P99)."
      },
      {
        "category": "Model Production & MLOps",
        "indicator": "Model Drift Detected",
        "format": "Count (or Alerts)",
        "example_value": "0 Alerts/Week",
        "description": "Number of times the automated monitoring detected a significant change in the input data or prediction distribution."
      },
      {
        "category": "Model Production & MLOps",
        "indicator": "Retraining Frequency",
        "format": "Count or Interval",
        "example_value": "1x Week",
        "description": "How often the model is automatically (or manually) retrained to incorporate new data."
      },
      {
        "category": "Business Impact & Value",
        "indicator": "Model-Attributed ROI",
        "format": "$ (Currency) or %",
        "example_value": "+ $500,000",
        "description": "The measurable financial return (revenue increase or cost savings) directly attributable to the model's predictions (e.g., from an A/B test)."
      },
      {
        "category": "Business Impact & Value",
        "indicator": "Lift/Incremental Value",
        "format": "%",
        "example_value": "15% Lift",
        "description": "The percentage improvement in the key business metric compared to the previous baseline (e.g., 15% increase in conversion rate)."
      },
      {
        "category": "Business Impact & Value",
        "indicator": "Decision-Making Automation",
        "format": "%",
        "example_value": "80% Automated",
        "description": "The percentage of decisions (e.g., product recommendations, fraud alerts) that are now fully automated by the model."
      }
    ]
  },
  "Data Engineer": {
    "about": "This section highlights my expertise in building and maintaining robust, scalable data pipelines. My focus is on ensuring data reliability, freshness, and efficiency, which are foundational to all downstream analytics and machine learning initiatives.",
    "circles": [
      {
        "title": "Pipeline Health & Reliability",
        "value": 99,
        "key_metrics": [
          "System/Pipeline Uptime",
          "Mean Time To Detect (MTTD)",
          "Mean Time To Resolution (MTTR)",
          "Number of Production Incidents"
        ]
      },
      {
        "title": "Data Quality & Freshness",
        "value": 96,
        "key_metrics": [
          "Data Latency (Data Freshness)",
          "Data Quality Error Rate",
          "Schema Evolution Time"
        ]
      },
      {
        "title": "Efficiency & Cost",
        "value": 92,
        "key_metrics": [
          "Data Processing Throughput",
          "Cost Per Pipeline Run",
          "Cloud/Compute Resource Utilization",
          "New Data Sources Integrated"
        ]
      }
    ],
    "metrics": [
      {
        "category": "Pipeline Health & Reliability",
        "indicator": "System/Pipeline Uptime",
        "format": "%",
        "example_value": "99.9%",
        "description": "The percentage of time that data pipelines and systems are fully operational and available."
      },
      {
        "category": "Pipeline Health & Reliability",
        "indicator": "Mean Time To Detect (MTTD)",
        "format": "Minutes (or Seconds)",
        "example_value": "5 Minutes",
        "description": "Average time taken from a pipeline failure occurring to the monitoring system raising an alert."
      },
      {
        "category": "Pipeline Health & Reliability",
        "indicator": "Mean Time To Resolution (MTTR)",
        "format": "Hours (or Minutes)",
        "example_value": "1.5 Hours",
        "description": "Average time taken to fix a pipeline failure once it has been detected."
      },
      {
        "category": "Pipeline Health & Reliability",
        "indicator": "Number of Production Incidents",
        "format": "Count (e.g., Incidents/Month)",
        "example_value": "2 Incidents",
        "description": "The total count of major failures or outages in the production environment."
      },
      {
        "category": "Data Quality & Freshness",
        "indicator": "Data Latency (Data Freshness)",
        "format": "Minutes (or Hours)",
        "example_value": "15 Minutes",
        "description": "The time elapsed since the data was last updated or processed (i.e., time between source event and availability)."
      },
      {
        "category": "Data Quality & Freshness",
        "indicator": "Data Quality Error Rate",
        "format": "% (of records or jobs)",
        "example_value": "0.11% Error Rate",
        "description": "Percentage of records or processing jobs that failed quality checks (e.g., null values, schema mismatch)."
      },
      {
        "category": "Data Quality & Freshness",
        "indicator": "Schema Evolution Time",
        "format": "Hours",
        "example_value": "2 Hours",
        "description": "The time required to integrate a new data source or make a change to an existing data schema."
      },
      {
        "category": "Efficiency & Cost",
        "indicator": "Data Processing Throughput",
        "format": "Records/Second or Gigabytes/Hour",
        "example_value": "50,000 R/Sec",
        "description": "The volume of data successfully processed per unit of time."
      },
      {
        "category": "Efficiency & Cost",
        "indicator": "Cost Per Pipeline Run",
        "format": "$ (Currency)",
        "example_value": "$ 0.52 / Run",
        "description": "The average computational and resource cost associated with executing a data pipeline."
      },
      {
        "category": "Efficiency & Cost",
        "indicator": "Cloud/Compute Resource Utilization",
        "format": "% (or Score)",
        "example_value": "75% Utilization",
        "description": "Efficiency of allocated cloud resources (e.g., compute clusters)."
      },
      {
        "category": "Efficiency & Cost",
        "indicator": "New Data Sources Integrated",
        "format": "Count (e.g., Sources/Quarter)",
        "example_value": "4 New Sources",
        "description": "The number of distinct data sources or APIs successfully brought into the data lake/warehouse."
      }
    ]
  }
}
