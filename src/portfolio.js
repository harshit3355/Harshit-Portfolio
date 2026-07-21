/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshit Nagila",
  title: "Hi all, I'm Harshit",
  subTitle: emoji(
    "A DevOps Engineer 🚀 who turns manual, fragile deployments into secure, automated pipelines. Over 2+ years across Azure and AWS, I've cut provisioning effort with Terraform, doubled deployment velocity with GitHub Actions, and shipped Zero Trust GenAI infrastructure to production."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RvIE3Y-Lc9-8keitcfrdiUj4ihcjBoND/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/harshit3355",
  linkedin: "https://www.linkedin.com/in/harshit555/",
  gmail: "harshitnagila3355@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@harshitnagila555",
  // leetcode: "https://leetcode.com/harshitnagila555/",
  stackoverflow: "https://stackoverflow.com/users/23177952/harshit-nagila",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PROFICIENT DEVOPS ENGINEER FOCUSED ON CLOUD INFRASTRUCTURE AND AUTOMATION",
  skills: [
    emoji(
      "⚡ Designing Zero-Trust cloud architectures with private networking, NAT gateways, and secure outbound access (Azure Front Door, Private Endpoints)"
    ),
    emoji(
      "⚡ Building scalable cloud infrastructure on Azure & AWS using Terraform, Container Apps, ECS Fargate and managed databases"
    ),
    emoji(
      "⚡ Automating CI/CD pipelines using GitHub Actions & Jenkins with multi-environment deployment strategies (Dev → Staging → Prod)"
    ),
    emoji(
      "⚡ Containerizing and orchestrating workloads using Docker and cloud-native services with security & compliance best practices"
    ),
    emoji(
      "⚡ Implementing observability & centralized monitoring using Azure Managed Grafana, Log Analytics & AWS CloudTrail"
    ),
    emoji(
      "⚡ Translating platform patterns across multi-cloud environments (AWS → Azure) for cloud-agnostic deployments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "faf fa-code"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GitHub Actions",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "Ansible",
    //   fontAwesomeClassname: "fab fa-ansible"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal University",
      logo: require("./assets/images/manipal-university-jaipur-logo.png"),
      subHeader: "Masters in Computer Applications",
      duration: "July 2024 - August 2026"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/Cu.png"),
      subHeader: "Bachelor in Computer Applications",
      duration: "July 2021 - July 2024"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Platforms (Azure & AWS)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Infrastructure as Code (Terraform)",
      progressPercentage: "80%"
    },
    {
      Stack: "CI/CD & Automation (GitHub Actions, Jenkins)",
      progressPercentage: "75%"
    },
    {
      Stack: "Containers & Orchestration (Docker, ECS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Monitoring & Observability (Grafana, CloudTrail)",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming & Scripting (Python, Bash)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "CustomerInsights.AI",
      companylogo: require("./assets/images/CI_AI_asset.png"),
      date: "June 2024 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Designed and implemented a Zero-Trust GenAI cloud platform using Azure Container Apps and Azure Front Door Premium, ensuring all AI workloads remained private via Private Endpoints.",
        "Built and maintained modular Terraform code to provision enterprise cloud infrastructure including VNets, Container Environments, and database clusters, enabling consistent and repeatable deployments.",
        "Engineered CI/CD pipelines using GitHub Actions to automate deployments across Dev, Staging, and Production environments, improving release reliability and reducing manual effort.",
        "Designed centralized observability using Azure Managed Grafana backed by Azure Log Analytics, enabling real-time monitoring and faster issue resolution.",
        "Implemented secure outbound connectivity using NAT Gateway to consume external APIs (Google Gemini) while maintaining strict internal network isolation.",
        "Translated complex AWS architectures (ECS Fargate, CloudFront, Bedrock) into Azure-native implementations, demonstrating cloud-agnostic architectural expertise."
      ]
    },
    {
      role: "DevOps Engineer Intern",
      company: "Pearl Thoughts",
      companylogo: require("./assets/images/pearl_1.avif"),
      date: "Jul 2024 – Jul 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed and deployed applications using Strapi with fully automated CI/CD pipelines via GitHub Actions.",
        "Provisioned cloud infrastructure dynamically using Terraform and deployed containerized workloads using Docker on AWS ECS Fargate.",
        "Automated testing and deployment workflows to improve delivery speed and deployment consistency.",
        "Gained hands-on experience with production-grade DevOps practices in a cloud-native environment."
      ]
    },
    {
      role: "Cloud Lead",
      company: "GDSC CU",
      companylogo: require("./assets/images/GDSC.png"),
      date: "Sep 2023 – Mar 2025",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Explored the new in tech with a community of 2000+ passionate students.",
        "Instructed over 500 students on evolving trends in cloud technologies. I have also coordinated several workshops to familiarize students with various cloud providers and their respective services, providing them hands-on experience.",
        "Organized Hack-O-Octo, a 36-hr offline hackathon (the one where all the teams and us included absolutely loved the judges!)"
      ]
    },
    {
      role: "Associate Data Entry Engineer",
      company: "Skill India Digital Hub",
      companylogo: require("./assets/images/SIDH.png"),
      date: "Apr 2023 – Dec 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Analyzed data entry workflows and streamlined processes, eliminating redundant tasks."
      ]
    },
    {
      role: "Java Programmer",
      company: "Siyaraa Evolutions",
      companylogo: require("./assets/images/Siyara.png"),
      date: "Jun 2023 – Jun 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Orchestrated the development of three minor projects within a month."
      ]
    },
    {
      role: "ETL Developer",
      company: "iNeuron.ai",
      companylogo: require("./assets/images/ineuron-ai.jpg"),
      date: "Jul 2022 – Sep 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Enhanced data accuracy by 40% and streamlined data workflow.",
        "Performed ETL over Amazon Sales Data."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Doing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@harshitnagila555/mastering-kubernetes-as-a-devops-engineer-my-practical-guide-561fdcb8ec48",
      title: "🚀 Mastering Kubernetes as a DevOps Engineer — My Practical Guide",
      description:
        "From writing SQL and debugging production pipelines to managing Kubernetes clusters — here’s how I see the modern DevOps journey as a technical engineer."
    },
    {
      url: "https://medium.com/@harshitnagila555/how-to-take-control-of-your-kubernetes-costs-monitor-right-size-govern-87ba9b129a05",
      title: "💸 How to Take Control of Your Kubernetes Costs: Monitor, Right-Size & Govern",
      description:
        "Kubernetes cost optimization is not just about deleting unused resources — it’s about building a sustainable cost culture. Here’s how I approach it."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8445371903",
  email_address: "harshitnagila3355@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
