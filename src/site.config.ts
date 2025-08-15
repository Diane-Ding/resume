import { TimelineItem } from "@/components/ui/timeline";

const siteConfig = {
  author: "Diane Ding",
  title: "Diane Ding Portfolio",
  description: "",
  tagline: "",
  resume: {
    filename: "Diane-Ding.pdf",
    label: "Download My Resume"
  },
      workExperience: [
      {
        title: "Software Development Engineer",
        company: "Remitly",
        location: "Vancouver, Canada",
        startDate: "2025 May",
        endDate: "Present",
        description: "Building impactful technology solutions for international money transfers. Working on scalable backend systems and improving user experience for millions of customers worldwide.",
        technologies: ["TypeScript", "React", "Go", "AWS", "DynamoDB"]
      },
      {
        title: "Software Development Engineer",
        company: "Amazon",
        location: "Vancouver, Canada",
        startDate: "2023 August",
        endDate: "2025 April",
        description: "Designed a logging library with AWS that cut debugging time by 50% and improved observability. Standardized deployments with AWS CDK, enhanced system performance, and resolved critical issues in a large-scale Ruby monolith.",
        technologies: ["AWS", "Cloudfront", "DevOps", "React", "TypeScript"]
      },
      {
        title: "Quality Assurance Engineer Intern",
        company: "Dolby Laboratories",
        location: "Shenzhen, China",
        startDate: "May 2021",
        endDate: "Sep 2021",
        description: "Created and executed automation test plans, cases, and scripts to verify collaborative products, reducing testing time and identifying critical defects.",
        technologies: ["MATLAB", "Python", "C++", "SQL"]
      }
    ] as TimelineItem[],
  // Add more fields as needed (socials, contact, etc)
};

export default siteConfig; 