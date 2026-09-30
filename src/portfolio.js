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
      "🚀 Taking platforms from first environment to go-live: led ciATHENA's launch as sole DevOps engineer, 29 container apps across dev, QA and prod on Azure Container Apps"
    ),
    emoji(
      "🌐 Designing edge and networking: Azure Front Door + WAF serving 10,000+ requests/day, API Management, hub-and-spoke VNets with peering, NSGs and DNS zones"
    ),
    emoji(
      "🏗️ Codifying everything in Terraform: reusable modules provisioning 85+ resources per environment, so any stage can be rebuilt from code"
    ),
    emoji(
      "🔁 Building release pipelines in GitHub Actions and Azure DevOps: auto-deploy to dev, approval gates before QA and prod, 20+ apps shipped"
    ),
    emoji(
      "🛡️ Shifting security left: GitHub OIDC instead of static keys, SHA-pinned actions, BuildKit secrets, and Trivy, SonarQube, Gitleaks, Bandit and Safety in every pipeline"
    ),
    emoji(
      "🤖 Hosting AI workloads: agent services on Azure OpenAI and AWS Bedrock, autoscaled on Container Apps and ECS Fargate, credentials per stage in Key Vault"
    ),
    emoji(
      "📊 Keeping production healthy: Azure Managed Grafana, Log Analytics, CloudWatch and CloudTrail, with revision-based rollback when a release fails"
    ),
    emoji(
      "🔐 Owning identity and compliance: Microsoft Entra ID SSO (SAML) for apps and GitHub Enterprise, ISO 27001 evidence and SOC 2 preparation"
    ),
    emoji(
      "🎓 Sharing what I know: as GDSC Cloud Lead, taught 500+ students cloud through hands-on workshops"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // ponytail: Font Awesome 5.15.4 (public/index.html) has no Terraform/Ansible/Grafana brand icons, closest generic icons used
  softwareSkills: [
    {skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Terraform", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra"},
    {skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Azure DevOps", fontAwesomeClassname: "fas fa-infinity"},
    {skillName: "Jenkins", fontAwesomeClassname: "fab fa-jenkins"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "Bash", fontAwesomeClassname: "fas fa-terminal"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Nginx", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Networking", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "DevSecOps", fontAwesomeClassname: "fas fa-shield-alt"},
    {skillName: "Key Vault", fontAwesomeClassname: "fas fa-key"},
    {skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line"},
    {skillName: "Databases", fontAwesomeClassname: "fas fa-database"},
    {skillName: "LLM Hosting", fontAwesomeClassname: "fas fa-robot"}
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
      Stack: "☁️ Cloud Platforms (Azure & AWS)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "🏗️ Infrastructure as Code (Terraform, modular multi-environment)",
      progressPercentage: "80%"
    },
    {
      Stack: "🔁 CI/CD & Automation (GitHub Actions, Azure DevOps, Jenkins)",
      progressPercentage: "75%"
    },
    {
      Stack: "🛡️ DevSecOps (Trivy, SonarQube, Gitleaks, Bandit, GitHub OIDC)",
      progressPercentage: "75%"
    },
    {
      Stack: "🌐 Networking & Edge (Front Door, WAF, APIM, VNets, peering)",
      progressPercentage: "75%"
    },
    {
      Stack: "🐳 Containers & Orchestration (Docker, Kubernetes, ECS)",
      progressPercentage: "70%"
    },
    {
      Stack: "🤖 AI Platform Hosting (Azure OpenAI, AWS Bedrock, Key Vault)",
      progressPercentage: "70%"
    },
    {
      Stack: "🐧 Linux & Configuration (Ansible, Nginx)",
      progressPercentage: "70%"
    },
    {
      Stack:
        "📊 Monitoring & Observability (Grafana, Log Analytics, CloudWatch)",
      progressPercentage: "65%"
    },
    {
      Stack: "🔐 Identity & Compliance (Entra ID SSO/SAML, ISO 27001, SOC 2)",
      progressPercentage: "65%"
    },
    {
      Stack: "🐍 Programming & Scripting (Python, Bash, SQL, Java)",
      progressPercentage: "60%"
    },
    {
      Stack: "🗄️ Databases (PostgreSQL, Azure SQL, Cosmos DB, Redis)",
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

const github = repo => [
  {name: "View on GitHub", url: `https://github.com/harshit3355/${repo}`}
];

const bigProjects = {
  title: "Projects",
  subtitle: "INFRASTRUCTURE I HAVE BUILT IN THE OPEN",
  projects: [
    {
      projectName: emoji("🛡️ Policy Synapse"),
      projectDesc:
        "OPA/Rego · Gatekeeper · Terraform plan · Kubernetes · GitHub Actions. Checks that one governance rule means the same thing in CI, admission control, Terraform plans and at runtime, and fails the build when they diverge. Caught 708/708 injected policy drifts, where example-based tests caught 403.",
      footerLink: github("policy-synapse")
    },
    {
      projectName: emoji("🧭 TerraCog"),
      projectDesc:
        "Terraform · AWS CloudTrail · Python. Triages Terraform drift: links each drifted attribute to its CloudTrail actor and ticket, then recommends revert, codify, quarantine or page a human. Mean regret 0.5893 vs 2.75 for always-revert across 56 drift cases.",
      footerLink: github("terracog")
    },
    {
      projectName: emoji("🔗 Hephaestus Ledger"),
      projectDesc:
        "SLSA/in-toto · CycloneDX · OCI · GitHub OIDC · Terraform. Verifies that every live component of an AI deployment (image, SBOM, model config, infra, policy, identity) traces back to one approver-signed release. Found 19/19 injected provenance breaks vs 5/19 for a manual release manifest.",
      footerLink: github("hephaestus-ledger")
    },
    {
      projectName: emoji("🏗️ AWS ECS Platform Blueprint"),
      projectDesc:
        "Terraform · ECS Fargate · GitHub Actions · Prometheus. A three-tier AWS VPC across 2 Availability Zones with ECS Fargate and RDS PostgreSQL, built from 4 lifecycle-based Terraform modules with isolated staging and prod stacks. 3 GitHub Actions workflows (CI, Terraform, CD) test, scan and deploy to staging, then gate production on human approval; Prometheus, Grafana and CloudWatch alarms to SNS.",
      footerLink: github("aws-ecs-platform-blueprint")
    },
    {
      projectName: emoji("🏨 AWS ECS Terraform"),
      projectDesc:
        "Terraform · ECS Fargate · RDS PostgreSQL · ALB · GitHub Actions. Hotel-booking platform infrastructure (Internet → ALB → Fargate → RDS) with separate dev and prod environments, plus a local Postgres setup with migrations, seed data and self-checking backup/restore. Plans 57 resources for dev and 58 for prod.",
      footerLink: github("aws-ecs-terraform")
    },
    {
      projectName: emoji("⚖️ Titan Fleet"),
      projectDesc:
        "Python · SciPy LP · HPA-style autoscaling · Prometheus metrics. A cost- and SLO-aware router and autoscaler for LLM fleets mixing managed APIs (Azure OpenAI-like, Bedrock-like) with a self-hosted GPU pool. Total regret $1,314.65 vs $3,320.88 for static routing across 25 failure scenarios.",
      footerLink: github("titan-fleet")
    },
    {
      projectName: emoji("🔒 CI Pipeline Demo"),
      projectDesc:
        "CircleCI · Docker · Trivy · Ruff · Bandit · pip-audit · pytest. Gated CI for a Python service: linting, security scan, dependency audit and tests with an 80% coverage floor must pass before the image is built, smoke-tested, scanned and shipped with a CycloneDX SBOM.",
      footerLink: github("ci-pipeline-demo")
    },
    {
      projectName: emoji("💥 Chaos Witness"),
      projectDesc:
        "Python · HTTP fault-injection proxies · GitHub Actions. Generates chaos campaigns from an AI platform's assurance contract and judges each obligation from evidence the platform does not write itself. Caught 7/7 planted weaknesses vs 3/7 for HTTP-500-everywhere.",
      footerLink: github("chaos-witness")
    },
    {
      projectName: emoji("🩺 FaultWeaver"),
      projectDesc:
        "Python · AIOps / observability simulation. Gates automated root-cause fixes on independent telemetry evidence, running read-only probes or escalating when the evidence is thin. 11 unsafe remediations vs 29 for an ungated agent over 240 incidents.",
      footerLink: github("faultweaver")
    },
    {
      projectName: emoji("🪪 Aegis Nexus"),
      projectDesc:
        "Python · Ed25519/JWT · SPIFFE IDs · RFC 8693. Key-bound delegation chains for multi-cloud AI agents, where every hop can only narrow capabilities and lifetime. Leaked authority after a compromise: 7.06 weight-hours vs 242,782.01 for RFC 8693 token exchange.",
      footerLink: github("aegis-nexus")
    },
    {
      projectName: emoji("🌱 Carbon Oracle"),
      projectDesc:
        "Python · real GB grid carbon-intensity data. Places delay-tolerant AI jobs at the lowest-carbon region and start time under a probabilistic deadline bound. 8/800 deadline misses vs 101/800 without the bound.",
      footerLink: github("carbon-oracle")
    },
    {
      projectName: emoji("☸️ Wisecow Kubernetes TLS"),
      projectDesc:
        "Docker · Kubernetes · cert-manager. A containerized Bash HTTP server deployed to Kubernetes with 5 manifests, fronted by NGINX Ingress with Let's Encrypt TLS issued and auto-renewed by cert-manager, removing manual certificate rotation.",
      footerLink: github("wisecow-kubernetes-tls")
    },
    {
      projectName: emoji("🐧 Ansible Linux Lab"),
      projectDesc:
        "Ansible · Nginx · Linux. An idempotent Ansible role for Nginx with validated handlers, 10-host batch rollouts and health checks.",
      footerLink: github("ansible-linux-lab")
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
