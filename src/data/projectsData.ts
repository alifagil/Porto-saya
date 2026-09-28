export interface KeyLearningItem {
  title: string;
  description: string;
}

export interface PublicationLinks {
  demo?: string;
  github?: string;
  pitchDeck?: string;
  presentation?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  projectNumber: string;
  yearAccomplished: string;
  role: string;
  researchPaperTitle?: string;
  projectType: string;
  description: string;
  keyLearnings: KeyLearningItem[];
  links: PublicationLinks;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'reviewin',
    title: 'ReviewIN',
    shortDescription: 'From idea to web-based AI fraud detection & anti-bot review platform',
    image: '/image/projects/reviewinn.jpg',
    projectNumber: 'Case Study • AI Fraud Detection',
    yearAccomplished: 'June 2026',
    role: 'Lead AI Engineer',
    projectType: 'Collaborative Team Project (3 Members)',
    description:
      `**ReviewIN** is a web-based fraud detection platform designed to identify computer-generated (CG) and bot-generated reviews in e-commerce environments. The system combines NLP, machine learning, and web application engineering to detect suspicious review patterns and address the broader problem of rating manipulation.

The detection pipeline uses text preprocessing, TF-IDF N-gram feature extraction, and an optimized Logistic Regression model to classify reviews based on linguistic patterns. The system was initially designed with Selenium WebDriver to automatically collect product reviews from Amazon. However, Amazon's anti-bot mechanisms eventually detected and restricted the automated scraping process. To maintain the system's functionality, the platform was adapted to support prepared manual input, where raw review data is processed through a custom regex-based parser to isolate the actual product review text from ratings, metadata, and other non-review content before entering the NLP pipeline.

From a software engineering perspective, the application uses a Flask backend with robust exception handling and a fault-tolerant input flow, allowing the system to remain functional across different data collection scenarios. The project demonstrates an end-to-end approach spanning web automation, data extraction and preprocessing, machine learning, and reliable web application development.`,
    keyLearnings: [
      {
        title: 'Machine Learning & NLP',
        description:
          'Built a TF-IDF N-gram + Logistic Regression pipeline to classify suspicious review patterns.',
      },
      {
        title: 'Feature Engineering',
        description:
          'Used N-gram features to capture repetitive linguistic and stylistic patterns in bot-generated reviews.',
      },
      {
        title: 'Data Extraction',
        description:
          'Built a regex-based parser to isolate product review text from ratings, metadata, and irrelevant content.',
      },
      {
        title: 'System Robustness',
        description:
          'Designed a fault-tolerant Flask backend with exception handling and alternative input flows when scraping is restricted.',
      },
      {
        title: 'Model Evaluation',
        description:
          'Evaluated model behavior using Confusion Matrix and ROC-AUC alongside standard classification metrics.',
      },
    ],
    links: {
      demo: 'https://review-in-h9ng.vercel.app/',
      github: 'https://github.com/alifagil/ReviewIN',
      pitchDeck: 'https://canva.link/rl2jd88ol000zpw',
    },
  },
  {
    id: 'ecommerce-sentiment-engine',
    title: 'E-Commerce Sentiment Engine',
    shortDescription: 'Real-time NLP sentiment analysis & review intelligence for Shopee & Tokopedia',
    image: '/image/projects/fix-sentiment.jpg',
    projectNumber: 'Case Study • NLP Sentiment Engine',
    yearAccomplished: 'April 2026',
    role: 'Machine Learning Engineer',
    projectType: 'Collaborative Team Project (3 Members)',
    description:
      '**E-Commerce Sentiment Engine** is an NLP-based application designed to analyze large volumes of Indonesian e-commerce reviews and identify customer sentiment efficiently. The project explores and compares multiple machine learning approaches before implementing a complete sentiment analysis pipeline consisting of text preprocessing, TF-IDF feature extraction, and Linear Support Vector Machine (SVM) classification.\n\nTo make the system practical beyond a static dataset, custom parsers were developed for Shopee and Tokopedia review formats, allowing raw review data to be extracted, processed, and analyzed automatically. The project also applies data-driven model evaluation to compare different approaches and select a suitable classification method based on their performance.\n\nThe result is a practical sentiment analysis system that combines NLP, machine learning, data preprocessing, model evaluation, and platform-specific data extraction into an end-to-end application.',
    keyLearnings: [
      {
        title: 'NLP & Text Processing',
        description:
          'Built an end-to-end Indonesian sentiment analysis pipeline with preprocessing, normalization, and TF-IDF N-gram features.',
      },
      {
        title: 'Model Training & Evaluation',
        description:
          'Compared Logistic Regression, Naive Bayes, Random Forest, and Linear SVM to select the model based on evaluation results.',
      },
      {
        title: 'Sentiment Classification',
        description:
          'Implemented Linear SVM for multi-class sentiment classification, achieving **94.92% accuracy** on the evaluated dataset.',
      },
      {
        title: 'Data Extraction & Web Application',
        description:
          'Developed custom Shopee and Tokopedia parsers and integrated them into a Flask-based prediction application for automated review analysis.',
      },
      {
        title: 'Deployment & Visualization',
        description:
          'Built an interactive web interface with sentiment distribution visualizations and deployed the complete inference pipeline to the cloud.',
      },
    ],
    links: {
      demo: 'https://e-commerce-sentiment-engine-deployment-371oaikee-mistaa.vercel.app/',
      github: 'https://github.com/alifagil/E-Commerce-Sentiment-Engine-production',
      presentation: 'https://canva.link/3mbm6rrj0qqm1hj',
    },
  },
  {
    id: 'helmet-vision',
    title: 'Helmet Vision',
    shortDescription: 'Real-time motorcycle rider helmet detection using YOLOv5 & Computer Vision',
    image: '/image/projects/helmetfix.jpg',
    projectNumber: 'Case Study • Computer Vision Detection',
    yearAccomplished: 'June 2026',
    role: 'Front End',
    researchPaperTitle: 'Model Efficiency in Detecting Driver Drowsiness',
    projectType: 'Collaborative Project (2 Members)',
    description:
      'This project was developed to address the issue of motorcycle riders not wearing helmets, which remains one of the major causes of severe injuries in traffic accidents. After identifying the need for an automated and efficient monitoring system, we researched various computer vision approaches and selected the YOLOv5 object detection model due to its balance of accuracy and real-time performance. The solution was implemented through a Flask-based web application that allows users to upload images and automatically detect helmet usage. The system processes the input image, performs object detection using the trained model, and generates annotated results for easy interpretation. By combining deep learning technology with a user-friendly web interface, this project provides a practical and scalable solution for improving road safety monitoring while demonstrating a structured problem-solving process from problem identification, technology research, model selection, implementation, and deployment.',
    keyLearnings: [
      {
        title: 'Model Training & Validation',
        description: 'Trained and tested YOLOv5 models using dedicated helmet detection datasets.',
      },
      {
        title: 'Performance Evaluation',
        description: 'Assessed model accuracy and detection performance using evaluation metrics (mAP, Precision, Recall).',
      },
      {
        title: 'Flask Web Development',
        description: 'Built a responsive web interface for image upload and detection results visualization.',
      },
      {
        title: 'AI Model Integration',
        description: 'Integrated the trained YOLOv5 model into a lightweight Flask application for live inferencing.',
      },
      {
        title: 'Real-Time Detection Systems',
        description: 'Learned how AI can be applied for automated road safety monitoring and violation logging.',
      },
      {
        title: 'Git Version Control',
        description: 'Managed project versions and collaboration using Git & GitHub.',
      },
      {
        title: 'Team Collaboration',
        description: 'Worked effectively with team members throughout development lifecycle.',
      },
    ],
    links: {
      github: 'https://github.com/theaxisofresistance/helmetvision',
    },
  },
];
