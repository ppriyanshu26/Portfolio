// Skills Section Logo's
import androidLogo from './assets/tech_logo/android.png';
import androidsLogo from './assets/tech_logo/androidstudio.png';
import awsLogo from './assets/tech_logo/aws.png';
import cssLogo from './assets/tech_logo/css.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import flaskLogo from './assets/tech_logo/flask.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import jsLogo from './assets/tech_logo/javascript.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import oracleLogo from './assets/tech_logo/oracledb.png';
import pythonLogo from './assets/tech_logo/python.png';
import sqlLogo from './assets/tech_logo/sql.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import flutterLogo from './assets/tech_logo/flutter.png';
import DartLogo from './assets/tech_logo/dart.png';
import lambdaLogo from './assets/tech_logo/lambda.png';

// Education Section Logo's
import stmLogo from './assets/education_logo/stm.png';
import ggiaLogo from './assets/education_logo/ggia.png';
import vitLogo from './assets/education_logo/vit.png';
import neoLogo from './assets/education_logo/iamneo.png';
import ibmLogo from './assets/education_logo/ibm.jpg';
import iitkgpLogo from './assets/education_logo/iitkgp.png';
import googleLogo from './assets/education_logo/google.png';
import algoLogo from './assets/education_logo/algo.jpg';
import microsoftLogo from './assets/education_logo/microsoft.png';

// Project Section Logo's
import totpAppLogo from './assets/work_logo/totp.png';
import docAppLogo from './assets/work_logo/docdispatch.png';
import eComLogo from './assets/work_logo/eCom.png';
import passAppLogo from './assets/work_logo/pass.png';
import fraudAppLogo from './assets/work_logo/fraudApp.png';
import cipherAppLogo from './assets/work_logo/cipherWebsite.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Tkinter', logo: pythonLogo },
      { name: 'Android', logo: androidLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: jsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Oracle', logo: oracleLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'Lambda', logo: lambdaLogo },
      { name: 'Mongo', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'Dart', logo: DartLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Android Studio', logo: androidsLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Flutter', logo: flutterLogo },
    ],
  },
];
  
export const education = [
  {
    id: 0,
    img: vitLogo,
    school: "VIT Bhopal University, Sehore",
    date: "Sept 2022 - July 2026 (Expected)",
    grade: "8.75 CGPA",
    desc: "I completed my B.Tech in Computer Science and Engineering at VIT, with a strong foundation in programming, software development, and core computer science concepts. My coursework covers Data Structures, Algorithms, OOPs, DBMS, Web Development, and Software Engineering, along with participation in workshops and technical events that have strengthened my practical skills.",
    degree: "Bachelor of Technology - CSE",
  },
  {
    id: 1,
    img: ggiaLogo,
    school: "Gyan Ganga International Academy, Bhopal",
    date: "July 2022",
    grade: "85.8%",
    desc: "I completed my class 12 education from Gyan Ganga International Academy, Bhopal, in PCM stream with Informatics Practices.",
    degree: "XII Boards (CBSE)",
  },
  {
    id: 2,
    img: stmLogo,
    school: "St. Mary's Convent Sr. Sec. School, Bhopal",
    date: "July 2020",
    grade: "95.2%",
    desc: "I completed my class 10 education from St. Mary's Convent Sr. Sec. School, Bhopal.",
    degree: "X Boards (CBSE)",
  },
];

export const certifications = [
  {
    id: 0,
    title: "Career Essentials in Cybersecurity",
    issuer: "Microsoft (LinkedIn Learning)",
    issued: "May 2026",
    credentialId: "838b1d6b4003bc099c6591eeb9297600b1ba3941e57305ae6d909923beac1109",
    description:
      "Completed the Career Essentials in Cybersecurity, covering foundational cybersecurity concepts, and mitigation strategies to prepare for entry-level cybersecurity roles.",
    image: microsoftLogo,
    tags: ["Cybersecurity", "Threats", "Vulnerabilities", "Mitigation", "Security Tools"],
    certificateLink: "https://www.linkedin.com/learning/certificates/838b1d6b4003bc099c6591eeb9297600b1ba3941e57305ae6d909923beac1109/?trk=share_certificate",
  },
  {
    id: 1,
    title: "Certificate of Completion",
    issuer: "AlgoExpert",
    issued: "Apr 2026",
    credentialId: "123d590f74",
    description:
      "Completed the AlgoExpert Data Structures and Algorithms course, mastering 160+ coding problems across 15+ topics, with a focus on efficient algorithm design.",
    image: algoLogo,
    tags: ["Arrays", "Strings", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
    certificateLink: "https://certificate.algoexpert.io/AE-123d590f74",
  },
  {
    id: 2,
    title: "Marketing Analytics",
    issuer: "IIT Kharagpur (SWAYAM)",
    issued: "May 2025",
    credentialId: "NPTEL25MG45S1142801834",
    description:
      "Learned to analyze marketing data using tools like Excel and R, covering topics such as customer segmentation, campaign analysis, and marketing mix modeling.",
    image: iitkgpLogo,
    tags: ["Marketing Analytics", "Customer Segmentation", "Campaign Analysis", "R", "Excel"],
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/110/noc25-mg45/Course/NPTEL25MG45S114280183404713551.pdf",
  },
  {
    id: 3,
    title: "Data Science",
    issuer: "iamneo - An NIIT Venture",
    issued: "Apr 2025",
    credentialId: "30d27C72cN6dO70P8",
    description:
      "Comprehensive training in data analysis, visualization, and machine learning using Python. Covered libraries like Pandas, Matplotlib, Seaborn, and Scikit-learn.",
    image: neoLogo,
    tags: ["Python", "Pandas", "Data Cleaning", "Data Visualization", "Statistics", "NLP"],
    certificateLink: "https://drive.google.com/file/d/13OnJ0YanOgAibcNiZ2WBm113PqxVS4Ie/view?usp=sharing",
  },
  {
    id: 4,
    title: "Cyber Security Analyst",
    issuer: "IBM",
    issued: "Apr 2025",
    credentialId: "c193fe199bc94fb79aa6c794c9fa4cbe",
    description:
      "Focused on cybersecurity fundamentals with hands-on experience with tools like KALI Linux and learned to apply NIST frameworks for effective security management.",
    image: ibmLogo,
    tags: ["Cyber Security", "Events", "Anomaly Detection", "SOC", "KALI", "NIST"],
    certificateLink: "https://courses.ibmcep.cognitiveclass.ai/certificates/c193fe199bc94fb79aa6c794c9fa4cbe",
  },
  {
    id: 5,
    title: "Cloud Computing",
    issuer: "IIT Kharagpur (SWAYAM)",
    issued: "May 2024",
    credentialId: "NPTEL24CS17S352900107",
    description:
      "Gained a comprehensive understanding of cloud computing concepts, including virtualization, load balancing, auto-scaling, and cloud service models (IaaS, PaaS, SaaS).",
    image: iitkgpLogo,
    tags: ["Cloud", "Load Balancing", "Auto-scaling", "Virtualization", "AWS", "Azure"],
    certificateLink: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S35290010730645933.pdf",
  },
  {
    id: 6,
    title: " The Bits and Bytes of Computer Networking",
    issuer: "Google (Coursera)",
    issued: "Dec 2023",
    credentialId: "S5WH7S2FUYZJ",
    description:
      "Learned the fundamentals of computer networking, including protocols, IP addressing, and network security, with practical insights into real-world applications.",
    image: googleLogo,
    tags: ["Networking", "Protocols", "IP Addressing", "Network Security"],
    certificateLink: "https://coursera.org/share/c120239ab839b7634be8d3c9f5a4025c",
  },
];

export const projects = [
  {
    id: 0,
    title: "CipherAuth",
    description:
      "Architected a Flutter-based cross-platform TOTP Authenticator. Optimized for usability across Android and Windows. Integrated a local sync feature to securely sync encrypted credentials with other devices on the same network and with the same password.",
    image: totpAppLogo,
    tags: ["Flutter", "AES-GCM", "Hashing", "QR Generator", "QR Scanner", "Local Sync", "Cross-Platform"],
    github: "https://github.com/ppriyanshu26/CipherAuth-Flutter",
    webapp: "https://cipherauth.ppriyanshu26.online",
  },
  {
    id: 1,
    title: "DocDispatch",
    description:
      "Contributing as an Android and Backend Developer in a collaborative team for DocDispatch, an Android-based medical support platform. I worked on OTP-based authentication and role-based dashboards to streamline data management.",
    image: docAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React JS", "ML", "Android", "API", "SQL"],
    github: "https://github.com/ppriyanshu26/DocDispatch",
    webapp: "",
  },
  {
    id: 2,
    title: "WinFill",
    description:
      "A Windows-only password manager built with Python and Tkinter that stores credentials locally on-device using AES-GCM encryption. It listens for a global hotkey and opens a popup showing saved credentials, with one-click autofill support for both web browsers and native Windows applications.",
    image: passAppLogo,
    tags: ["Python", "Tkinter", "Password Manager","AES-GCM", "Hashing"],
    github: "https://github.com/ppriyanshu26/WinFill",
    webapp: "",
  },
  {
    id: 3,
    title: "Cipher Website",
    description:
      "A simple Flask powered website for the generating ciphertext and decrypting back to plaintext using AES-GCM mechanism to ensure integrity.",
    image: cipherAppLogo,
    tags: ["HTML", "CSS", "JS", "Python", "Flask", "AES-GCM"],
    github: "https://github.com/ppriyanshu26/Cipher",
    webapp: "https://cipher.ppriyanshu26.online",
  },
  {
    id: 4,
    title: "Fraud App Detection",
    description:
      "Collaboratively built an Android + Flask-based fraud app detection system. I developed the Flask API to handle heavy ML operations, enabling 1,000+ daily reports with 92% accuracy, while also engineering Android-side XML parsing and UI visualizations.",
    image: fraudAppLogo,
    tags: ["Android", "Java", "XML", "API", "Flask", "ML", "Scikit-Learn"],
    github: "https://github.com/ppriyanshu26/FraudApp",
    webapp: "",
  },
  {
    id: 5,
    title: "eCommerce Product Recommender",
    description:
      "An intelligent product recommendation system that leverages machine learning and AI to provide personalized shopping experiences. The system uses TF-IDF-based content filtering combined with OpenAI's GPT to generate explanations for each recommendation.",
    image: eComLogo,
    tags: ["API", "Flask", "JSON", "MongoDB", "ReactJS", "Scikit-Learn", "OpenAI"],
    github: "https://github.com/ppriyanshu26/eCommerce-Product-Recommender",
    webapp: "https://drive.google.com/file/d/1qvbiTN1WXfnh4INcK6GCqYfLnW0UbkZk/view?usp=sharing",
  },
];  
