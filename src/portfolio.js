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
    "A DevOps & Cloud Infrastructure Engineer 🚀 with 3+ years building and operating cloud systems on Azure and AWS. I took an LLM-powered analytics platform from first environment to launch: 29 container apps, 85+ Terraform-managed resources per environment, approval-gated CI/CD, DevSecOps controls, SSO and continuous monitoring."
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
  subTitle:
    "DEVOPS & CLOUD INFRASTRUCTURE ENGINEER · AZURE · AWS · TERRAFORM · DEVSECOPS · AI PLATFORM INFRASTRUCTURE",
  skills: [
    emoji(
      "⚡ Running production workloads on Azure Container Apps, App Service and AWS ECS Fargate, fronted by Azure Front Door, WAF and API Management"
    ),
    emoji(
      "⚡ Writing reusable, multi-environment Terraform modules so every environment can be recreated from code"
    ),
    emoji(
      "⚡ Building approval-gated CI/CD in GitHub Actions and Azure DevOps (Dev → QA → Prod) with GitHub OIDC and SHA-pinned actions"
    ),
    emoji(
      "⚡ Baking DevSecOps into pipelines: Docker multi-stage builds with Trivy, SonarQube, Gitleaks, Bandit and Safety"
    ),
    emoji(
      "⚡ Hosting AI workloads: agent services on managed LLM APIs (Azure OpenAI, AWS Bedrock) with autoscaling and Key Vault secrets"
    ),
    emoji(
      "⚡ Monitoring and incident response with Azure Managed Grafana, Log Analytics, CloudWatch and CloudTrail, plus revision-based rollback"
    ),
    emoji(
      "⚡ Identity and compliance: Microsoft Entra ID SSO (SAML), ISO 27001 evidence and SOC 2 preparation"
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
      fontAwesomeClassname: "fas fa-code"
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
    }
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
      subHeader: "Master of Computer Applications (part-time)",
      duration: "July 2024 - July 2026",
      desc: "CGPA 9.01"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/Cu.png"),
      subHeader: "Bachelor in Computer Applications",
      duration: "July 2021 - July 2024",
      desc: "CGPA 8.53"
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
      Stack: "CI/CD & Automation (GitHub Actions, Azure DevOps, Jenkins)",
      progressPercentage: "75%"
    },
    {
      Stack: "Containers & Orchestration (Docker, Kubernetes, ECS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Monitoring & Observability (Grafana, Log Analytics, CloudWatch)",
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
      role: "Associate DevOps Engineer",
      company: "CustomerInsights.AI",
      companylogo: require("./assets/images/CI_AI_asset.png"),
      date: "Aug 2024 – Present",
      descBullets: [
        "Led the end-to-end build-out and go-live of ciATHENA, an agentic AI analytics application for life-sciences clients, as the sole DevOps engineer during the initial phases.",
        "Fronted ciATHENA with Azure Front Door and Azure WAF, routing web and WebSocket traffic straight to the app for 10,000+ requests per day from 250+ distinct users (Front Door metrics); exposed backend APIs via Azure API Management and piloted Azure Application Gateway in a proof of concept.",
        "Stood up 3 environments (development, QA and production) on Azure Container Apps hosting 29 container apps, including 2 ciATHENA versions and supporting tools, with development and QA scale rules that start frontends in about 10 seconds while backends stay always-on; contributed AWS deployment work on a separate Amazon ECS Fargate stack.",
        "Authored reusable Terraform modules provisioning 85+ resources per environment, so each of the 3 environments can be recreated consistently from code rather than configured by hand.",
        "Deployed 20+ side applications built in Node.js, Python and React to production on Azure App Service, alongside Logic Apps and Container Apps jobs, provisioning their infrastructure and CI/CD through GitHub Actions.",
        "Designed a 3-stage release flow in GitHub Actions and Azure DevOps, with automatic deployment to development and approval gates before QA and production, and hardened its supply chain with GitHub OIDC instead of static keys, BuildKit secrets and SHA-pinned actions.",
        "Standardized builds and security checks for every application shipped so far, ciATHENA included: Docker multi-stage builds and Docker Compose, with Trivy, SonarQube, Gitleaks, Bandit, Flake8 and Safety in the pipelines.",
        "MLOps enablement: integrated the agent services with managed LLM APIs (Azure OpenAI, AWS Bedrock) and deployed them on Azure Container Apps and ECS Fargate with autoscaling rules and per-stage API credentials in Azure Key Vault.",
        "Monitored production and resolved incidents with Azure Managed Grafana, Azure Log Analytics, AWS CloudWatch and CloudTrail, backed by automatic revision-based rollback in Azure Container Apps that keeps the last healthy revision serving traffic when a release fails.",
        "Enabled Microsoft Entra ID SSO for both ciATHENA and GitHub Enterprise (SAML); compiled ISO 27001 evidence and contributed to SOC 2 preparation."
      ]
    },
    {
      role: "DevOps Engineer Intern",
      company: "Pearl Thoughts",
      companylogo: require("./assets/images/pearl_1.avif"),
      date: "Jul 2024",
      descBullets: [
        "Engineered a multi-region Azure hub-and-spoke network: VNets, VNet peering, route tables with route propagation, network security groups, DNS zones and resource groups.",
        "Provisioned virtual machines, enabled Log Analytics workspaces and VNet flow logs, and applied consistent tags throughout the Azure estate."
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
      date: "Jun 2023",
      descBullets: [
        "Packaged and shipped Java programs, maintaining dependencies and publishing artifacts to Nexus, with CI on 2 tools (GitHub Actions, CircleCI) and SonarQube code analysis.",
        "Released small apps to AWS Elastic Beanstalk and Azure, tracking logs in AWS CloudWatch and Azure Log Analytics."
      ]
    },
    {
      role: "ETL Developer",
      company: "iNeuron.ai",
      companylogo: require("./assets/images/ineuron-ai.jpg"),
      date: "Jul 2022 – Sep 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Collaborated with the team on an event-driven AWS pipeline linking 5 components: S3 uploads triggered Lambda validation, EventBridge routed events, CloudWatch logged and alarmed, and SNS alerted the team.",
        "Activated Amazon Macie and configured IAM access roles for the workflow."
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
  subtitle: "INFRASTRUCTURE I HAVE BUILT IN THE OPEN",
  projects: [
    {
      projectName: "AWS ECS Platform Blueprint",
      projectDesc:
        "Terraform · ECS Fargate · GitHub Actions · Prometheus. A three-tier AWS VPC across 2 Availability Zones with ECS Fargate and RDS PostgreSQL, built from 4 lifecycle-based Terraform modules with isolated staging and prod stacks. 3 GitHub Actions workflows (CI, Terraform, CD) test, scan and deploy to staging, then gate production on human approval; Prometheus, Grafana and CloudWatch alarms to SNS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/harshit3355/aws-ecs-platform-blueprint"
        }
      ]
    },
    {
      projectName: "Wisecow Kubernetes TLS",
      projectDesc:
        "Docker · Kubernetes · cert-manager. A containerized Bash HTTP server deployed to Kubernetes with 5 manifests, fronted by NGINX Ingress with Let's Encrypt TLS issued and auto-renewed by cert-manager, removing manual certificate rotation.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/harshit3355/wisecow-kubernetes-tls"
        }
      ]
    },
    {
      projectName: "Ansible Linux Lab",
      projectDesc:
        "Ansible · Nginx · Linux. An idempotent Ansible role for Nginx with validated handlers, 10-host batch rollouts and health checks.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/harshit3355/ansible-linux-lab"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Awards 🏆 "),
  subtitle: "Certifications and recognition I have earned along the way",

  achievementsCards: [
    {
      title: "AWS Certified CloudOps Engineer – Associate",
      subtitle: "Amazon Web Services · Sep 2026",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/7b90c6a8-dfcb-4171-ab7c-8d6fbc4b7e18/linked_in_profile"
        }
      ]
    },
    {
      title: "HashiCorp Certified: Terraform Associate (004)",
      subtitle: "HashiCorp",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/741e0fc4-9acb-42c5-9562-7482f69ad33e/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Amazon Web Services",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/dbe80cbb-a56a-45bb-81c7-c2765607b45e/linked_in_profile"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      subtitle: "Microsoft",
      footerLink: [
        {
          name: "Verify",
          url: "https://learn.microsoft.com/en-us/users/harshitnagila-3394/credentials/b8b55c8c66d9c35e"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      subtitle: "Oracle",
      footerLink: [
        {
          name: "Verify",
          url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C027BDDB1C28453473829BAF2D84B8D4F0143DC59DE8819500A2C37ED4790458"
        }
      ]
    },
    {
      title: "Google Cloud Cybersecurity Professional",
      subtitle: "Google",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.coursera.org/account/accomplishments/specialization/V0QVD7LS7G6A"
        }
      ]
    },
    {
      title: "DevOps for Enterprise Agility",
      subtitle: "IBM",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/2fd9e098-aee1-4b6b-b84c-290574834dd1/public_url"
        }
      ]
    },
    {
      title: "Employee of the Quarter & Star Performer",
      subtitle:
        "CustomerInsights.AI · Employee of the Quarter (Q1 2025) and Star Performer (Mar 2025) for ciATHENA's launch.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      title:
        "🚀 Mastering Kubernetes as a DevOps Engineer — My Practical Guide",
      description:
        "From writing SQL and debugging production pipelines to managing Kubernetes clusters — here’s how I see the modern DevOps journey as a technical engineer."
    },
    {
      url: "https://medium.com/@harshitnagila555/how-to-take-control-of-your-kubernetes-costs-monitor-right-size-govern-87ba9b129a05",
      title:
        "💸 How to Take Control of Your Kubernetes Costs: Monitor, Right-Size & Govern",
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
