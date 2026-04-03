export const siteConfig = {
  name: "Shashwat Tripathi",
  title: "Full Stack Engineer & Cloud Architect",
  description:
    "I architect cloud infrastructure, build full-stack systems, and engineer data pipelines. Over a decade of shipping production software across enterprise and startups.",
  email: "me@shashwat.io",
  url: "https://shashwat.io",
  links: {
    linkedin: "https://www.linkedin.com/in/shashwatindia",
    github: "https://github.com/goforgold",
    stackoverflow:
      "https://stackoverflow.com/users/1306394/shashwat",
  },
};

export const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Divisions Maintenance Group",
    period: "Nov 2023 — Present",
    description:
      "Building microservices with Spring Boot and .NET Core over gRPC. Engineering data pipelines with AWS Glue and Airflow, warehousing in Snowflake. Led migration from ArgoCD to Backstage for Kubernetes deployments.",
    technologies: [
      "Spring Boot",
      ".NET Core",
      "gRPC",
      "AWS Glue",
      "Airflow",
      "Snowflake",
      "Backstage",
      "Kubernetes",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Sabre",
    period: "Feb 2022 — Oct 2023",
    description:
      "Designed and automated multi-tenant infrastructure deployments. Built data pipelines with PySpark and Airflow. Set up build automation with Jenkins and Bazel, managed database schemas with Liquibase.",
    technologies: [
      "AWS Glue",
      "PySpark",
      "Airflow",
      "Jenkins",
      "Bazel",
      "Liquibase",
      ".NET Core",
      "Spring Boot",
    ],
  },
  {
    title: "Cloud & Software Architect",
    company: "Independent Contracts",
    period: "Jun 2019 — Dec 2022",
    description:
      "Consulted for multiple firms on cloud architecture, ETL pipeline design, and DevOps automation across AWS and GCP.",
    technologies: ["Terraform", "Jenkins", "Bazel", "Ansible", "AWS", "GCP"],
  },
  {
    title: "DevOps & Data Engineer",
    company: "Antuit India",
    period: "Jan 2018 — May 2019",
    description:
      "Built data pipelines with pandas and automated Hadoop cluster provisioning across Azure and AWS. Managed infrastructure with Terraform and Packer.",
    technologies: [
      "Python",
      "Pandas",
      "Chef",
      "Ansible",
      "Terraform",
      "Packer",
      "Azure",
      "AWS",
    ],
  },
  {
    title: "Solution Architect",
    company: "Singsys",
    period: "Jul 2012 — Jan 2018",
    description:
      "Grew from .NET Engineer to Solution Architect. Led a team of 20+, designed ERP systems, enforced coding standards, and established CI/CD pipelines. Spent time in Singapore leading a Singtel project.",
    technologies: [
      ".NET",
      "Angular",
      "Java",
      "Jenkins",
      "TeamCity",
      "AWS",
    ],
  },
];

export const projects = [
  {
    title: "Cloud-Native Microservices Platform",
    description:
      "Architected a microservices ecosystem using Spring Boot and .NET Core with Protocol Buffers over gRPC, feeding data into Snowflake for analytics.",
    problem:
      "Legacy monolithic services couldn't scale independently and data was siloed across multiple systems.",
    solution:
      "Decomposed into domain-driven microservices with gRPC for inter-service communication. Built ETL pipelines with AWS Glue and Airflow to centralize data in Snowflake.",
    impact:
      "Reduced deployment cycles, improved data accessibility for analytics, and enabled independent scaling of services.",
    technologies: [
      "Spring Boot",
      ".NET Core",
      "gRPC",
      "Protobuf",
      "AWS Glue",
      "Airflow",
      "Snowflake",
    ],
    company: "DMG",
  },
  {
    title: "Developer Platform Migration",
    description:
      "Led the migration from ArgoCD-based deployments to Backstage, creating a unified developer portal for Kubernetes workloads.",
    problem:
      "Development teams lacked a centralized platform for managing services, leading to inconsistent deployment practices.",
    solution:
      "Set up and configured Backstage as the developer portal, integrating it with Kubernetes for streamlined deployments and service catalog management.",
    impact:
      "Standardized deployment workflows, improved developer experience, and reduced onboarding time for new engineers.",
    technologies: ["Backstage", "Kubernetes", "ArgoCD", "Docker"],
    company: "DMG",
  },
  {
    title: "Multi-Tenant Infrastructure Automation",
    description:
      "Designed and automated deployment of infrastructure and services in an isolated multi-tenant architecture.",
    problem:
      "Manual infrastructure provisioning was error-prone and couldn't keep up with the demand for new tenant environments.",
    solution:
      "Built automation pipelines using Jenkins and Bazel for builds, Terraform for infrastructure, and Liquibase for database schema management across isolated tenants.",
    impact:
      "Reduced tenant provisioning time significantly and eliminated configuration drift across environments.",
    technologies: [
      "Jenkins",
      "Bazel",
      "Terraform",
      "Liquibase",
      "AWS",
      ".NET Core",
      "Spring Boot",
    ],
    company: "Sabre",
  },
  {
    title: "myIGNOU",
    description:
      "Built and maintain a web application and Android app serving IGNOU students with academic resources and tools.",
    problem:
      "IGNOU students lacked a centralized, user-friendly platform for accessing academic information.",
    solution:
      "Designed and developed a full-stack web application and companion Android app with CI/CD pipelines using CircleCI.",
    impact:
      "Live product serving thousands of students. Available on the Play Store with an active user base.",
    technologies: ["Web", "Android", "CircleCI", "Bitbucket Pipelines"],
    link: "https://www.myignou.com",
    company: "Personal",
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["C#", "Java", "Node.js", "Python", "Shell", "JavaScript"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
    ],
  },
  {
    name: "Frameworks",
    skills: ["Spring Boot", ".NET Core", "React", "Next.js"],
  },
  {
    name: "Data Engineering",
    skills: ["AWS Glue", "Airflow", "Snowflake", "PySpark", "Pandas"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    name: "CI/CD & DevOps",
    skills: ["Jenkins", "Bazel", "ArgoCD", "Backstage", "CircleCI"],
  },
];

export const achievements = [
  "Employee of the Year at Singsys (2016)",
  "Most Intelligent Person Award — peer-elected at Singsys (2016)",
  "Leadership Development Program at IIM Lucknow",
  "7,000+ reputation on StackOverflow with moderator rights",
  "High Impact Leadership Training by Shiv Khera",
];
