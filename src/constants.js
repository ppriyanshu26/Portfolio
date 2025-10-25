// Skills Section Logo's
import androidLogo from './assets/tech_logo/android.png';
import androidsLogo from './assets/tech_logo/androidstudio.png';
import awsLogo from './assets/tech_logo/aws.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import flaskLogo from './assets/tech_logo/flask.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import jsLogo from './assets/tech_logo/javascript.png';
import kotlinLogo from './assets/tech_logo/kotlin.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import oracleLogo from './assets/tech_logo/oracledb.png';
import pythonLogo from './assets/tech_logo/python.png';
import sqlLogo from './assets/tech_logo/sql.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Education Section Logo's
import stmLogo from './assets/education_logo/stm.png';
import ggiaLogo from './assets/education_logo/ggia.png';
import vitLogo from './assets/education_logo/vit.png';

// Project Section Logo's
import totpAppLogo from './assets/work_logo/totp.png';
import mobileAppLogo from './assets/work_logo/mobile.png';
import eComLogo from './assets/work_logo/eCom.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'Tkinter', logo: pythonLogo },
      { name: 'Android', logo: androidLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'OracleDB', logo: oracleLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'Kotlin', logo: kotlinLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Android Studio', logo: androidsLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'AWS', logo: awsLogo },
      
    ],
  },
];
  
export const education = [
  {
    id: 0,
    img: vitLogo,
    school: "VIT Bhopal University, Sehore",
    date: "Oct 2022 - July 2026 (Expected)",
    grade: "8.67 CGPA (6th Sem)",
    desc: "Currently in my final year of B.Tech in Computer Science and Engineering at VIT, with a strong foundation in programming, software development, and core computer science concepts. My coursework covers Data Structures, Algorithms, OOPs, DBMS, Web Development, and Software Engineering, along with participation in workshops and technical events that have strengthened my practical skills.",
    degree: "Bachelor of Technology - CSE",
  },
  {
    id: 1,
    img: ggiaLogo,
    school: "Gyan Ganga International Academy, Bhopal",
    date: "March 2022",
    grade: "85.8%",
    desc: "I completed my class 12 education from Gyan Ganga International Academy, Bhopal, in PCM stream with Informatics Practices.",
    degree: "XII Boards (CBSE)",
  },
  {
    id: 2,
    img: stmLogo,
    school: "St. Mary's Convent Sr. Sec. School, Bhopal",
    date: "March 2020",
    grade: "95.2%",
    desc: "I completed my class 10 education from St. Mary's Convent Sr. Sec. School, Bhopal.",
    degree: "X Boards (CBSE)",
  },
];

export const projects = [
  {
    id: 0,
    title: "DocDispatch",
    description:
      "Contributing as an Android and Backend Developer in a collaborative team for DocDispatch, an Android-based medical support platform. I work on OTP-based authentication, scalable backend architecture, and role-based dashboards to streamline patient–provider interactions and healthcare data management.",
    image: mobileAppLogo,
    tags: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React JS", "ML", "Android", "API", "SQL"],
    github: "https://github.com/yashpreeto7/DocDispatch",
    webapp: "",
  },
  {
    id: 1,
    title: "TOTP Desktop Authenticator",
    description:
      "Independently developed a Tkinter-based desktop TOTP Authenticator, integrating AES-256 encrypted secret storage and dual-factor decryption for enhanced security. Optimized for usability, it reduces authentication time by 50% while significantly strengthening resilience against brute-force attacks.",
    image: totpAppLogo,
    tags: ["Python", "Tkinter", "AES", "Hashing", "Access Token", "TOTP Authenticator", "QR Generator", "QR Scanner", "Credential Manager"],
    github: "https://github.com/ppriyanshu26/AuthPublic",
    webapp: "https://drive.google.com/file/d/1ebZfiX-PvqSI_XzsmAcSP-zig7Pa5hsd/view?usp=sharing",
  },
  {
    id: 2,
    title: "Fraud App Detection",
    description:
      "Collaboratively built an Android + Flask-based fraud app detection system. I developed the Flask API to handle heavy ML operations, enabling 1,000+ daily reports with 92% accuracy, while also engineering Android-side XML parsing and UI visualizations.",
    image: mobileAppLogo,
    tags: ["Android", "Java", "Manifest XML", "API"],
    github: "https://github.com/ppriyanshu26/FraudApp",
    webapp: "",
  },
  {
    id: 3,
    title: "eCommerce Product Recommender",
    description:
      "A modern, intelligent product recommendation system that leverages machine learning and AI to provide personalized shopping experiences. The system analyzes user behavior (views, cart additions, purchases) and uses TF-IDF-based content filtering combined with OpenAI's GPT to generate contextual, human-friendly explanations for each recommendation.",
    image: eComLogo,
    tags: ["API", "Flask", "JSON", "MongoDB", "ReactJS", "Scikit-Learn", "OpenAI"],
    github: "https://github.com/ppriyanshu26/eCommerce-Product-Recommender",
    webapp: "https://drive.google.com/file/d/1qvbiTN1WXfnh4INcK6GCqYfLnW0UbkZk/view?usp=sharing",
  },
];  