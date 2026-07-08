import {
  Activity,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Bug,
  CloudCog,
  Code2,
  DatabaseZap,
  FileSearch,
  Fingerprint,
  Github,
  GraduationCap,
  HardDriveDownload,
  LockKeyhole,
  Mail,
  MapPin,
  MonitorCog,
  Network,
  Radar,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  ShieldHalf,
  Siren,
  Terminal,
  Trophy,
  UserRoundSearch,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Khubaib PP",
  title: "Cybersecurity Professional",
  location: "Thaliparamba, Kannur, Kerala, India",
  email: "khubaibvpp@gmail.com",
  mission:
    "Protect organizations from cyber threats through proactive security assessments, SOC monitoring, automation, and secure software development.",
  summary:
    "Dedicated and motivated cybersecurity professional with strong expertise in ethical hacking, vulnerability assessment, SOC operations, cloud security, digital forensics, SIEM, malware analysis, and security tool development. Passionate about identifying system vulnerabilities and helping organizations strengthen their cyber defenses against real-world threats.",
  highlights: [
    "Certified SOC Analyst",
    "Ethical Hacker",
    "Security Researcher",
    "Log Management",
    "Python Developer",
    "AI in Cybersecurity Enthusiast"
  ],
  roles: [
    "Cybersecurity Aspirant",
    "Penetration Tester",
    "Security Researcher",
    "Python Developer",
    "Security Enthusiast"
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/khub000", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khubaib-pp-5b34153a7",
      icon: BriefcaseBusiness
    },
    { label: "TryHackMe", href: "https://tryhackme.com/p/khubaibpp3", icon: Trophy },
    { label: "X", href: "https://x.com/q_ubaibpp", icon: Activity },
    { label: "Instagram", href: "https://www.instagram.com/q_ubaibpp", icon: Fingerprint }
  ]
};

export const navItems = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Experience",
  "Education",
  "Certifications",
  "Projects",
  "Blog",
  "Contact"
];

export const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", value: 92 },
      { name: "Bash", value: 78 },
      { name: "PowerShell", value: 74 },
      { name: "HTML", value: 84 },
      { name: "JavaScript", value: 80 },
      { name: "SQL", value: 78 }
    ]
  },
  {
    title: "Cybersecurity",
    icon: ShieldHalf,
    skills: [
      { name: "Penetration Testing", value: 88 },
      { name: "Network Security", value: 86 },
      { name: "Vulnerability Assessment", value: 90 },
      { name: "Malware Analysis", value: 76 },
      { name: "Digital Forensics", value: 80 },
      { name: "Web Application Security", value: 84 },
      { name: "Cloud Security", value: 72 },
      { name: "SOC Operations", value: 89 },
      { name: "Incident Response", value: 83 },
      { name: "Threat Hunting", value: 78 },
      { name: "Log Analysis", value: 91 }
    ]
  },
  {
    title: "Security Tools",
    icon: Terminal,
    skills: [
      { name: "Splunk", value: 86 },
      { name: "Wazuh", value: 84 },
      { name: "Microsoft Sentinel", value: 82 },
      { name: "Wireshark", value: 88 },
      { name: "Nmap", value: 92 },
      { name: "Metasploit", value: 80 },
      { name: "Burp Suite", value: 85 },
      { name: "Nessus", value: 82 },
      { name: "pfSense", value: 78 },
      { name: "Suricata", value: 80 }
    ]
  },
  {
    title: "Platforms",
    icon: MonitorCog,
    skills: [
      { name: "Linux", value: 90 },
      { name: "Windows Server", value: 79 },
      { name: "Kali Linux", value: 91 },
      { name: "macOS", value: 70 }
    ]
  },
  {
    title: "Additional",
    icon: BrainCircuit,
    skills: [
      { name: "AI/ML in Cybersecurity", value: 82 },
      { name: "Security Automation", value: 87 },
      { name: "Python Security Tools", value: 89 }
    ]
  }
];

export const services = [
  {
    title: "Penetration Testing",
    description: "Controlled offensive testing to uncover exploitable weaknesses before attackers do.",
    icon: Bug
  },
  {
    title: "Vulnerability Assessment",
    description: "Prioritized scanning, validation, and remediation guidance for real-world risk.",
    icon: ScanSearch
  },
  {
    title: "Security Auditing",
    description: "Review systems, policies, and controls against practical security expectations.",
    icon: FileSearch
  },
  {
    title: "SOC Monitoring & Incident Response",
    description: "Triage alerts, analyze logs, and support fast containment during incidents.",
    icon: Siren
  },
  {
    title: "Web Application Security Testing",
    description: "Assess authentication, input handling, session security, and common OWASP risks.",
    icon: LockKeyhole
  },
  {
    title: "Malware Analysis",
    description: "Investigate suspicious behavior, indicators, and defensive response paths.",
    icon: ShieldAlert
  },
  {
    title: "Network Security Assessment",
    description: "Map exposure, validate segmentation, and identify network-level attack paths.",
    icon: Network
  },
  {
    title: "SIEM Deployment & Log Analysis",
    description: "Tune event collection, dashboards, detections, and alert workflows.",
    icon: DatabaseZap
  },
  {
    title: "Cloud Security Assessment",
    description: "Review cloud posture, identity risk, exposed services, and logging coverage.",
    icon: CloudCog
  },
  {
    title: "Security Tool Development",
    description: "Build Python utilities for monitoring, automation, enrichment, and reporting.",
    icon: Wrench
  },
  {
    title: "Custom Cybersecurity Automation",
    description: "Reduce repeated manual work with scripts, workflows, and security integrations.",
    icon: HardDriveDownload
  },
  {
    title: "Cybersecurity Consulting",
    description: "Practical guidance for teams improving defenses, readiness, and security culture.",
    icon: UserRoundSearch
  }
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    company: "RedTeam Hacker Academy",
    period: "2025-2026",
    skills: ["Offensive Security", "Reconnaissance", "Exploitation", "Privilege Escalation", "Post-Exploitation"],
    achievements: ["Built practical offensive security workflows", "Practiced real-world attack simulation methodology"],
    items: [
      "Gaining hands-on experience in offensive security methodologies and real-world attack simulations.",
      "Developing skills in vulnerability identification and exploitation techniques across multiple platforms.",
      "Learning advanced penetration testing workflows using industry-standard tools and frameworks.",
      "Participating in structured training on threat modeling, reconnaissance, exploitation, privilege escalation, persistence, and post-exploitation techniques."
    ]
  },
  {
    role: "Ethical Hacking & Cyber Security Intern",
    company: "AISECT Ltd.",
    period: "2025",
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Cybersecurity Projects"],
    achievements: ["Strengthened practical cybersecurity knowledge", "Supported hands-on security assessment activities"],
    items: [
      "Assisted in vulnerability assessments.",
      "Performed ethical hacking activities.",
      "Worked on cybersecurity projects.",
      "Strengthened practical security knowledge."
    ]
  }
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "IZEE Business School",
    body: "Bangalore University",
    emphasis: "Bangalore University",
    period: "2022-2025",
    icon: GraduationCap
  },
  {
    title: "Certified IT Infrastructure & Cyber SOC Analyst (CICSA v3)",
    place: "REDTEAM Hacker Academy, Bangalore",
    body: "Completed an advanced cybersecurity training program covering IT Infrastructure and Offensive Security, including anonymity, malware analysis, exploitation techniques, wireless attacks, Linux for penetration testers, penetration testing planning, reconnaissance, exploitation, privilege escalation, post-exploitation, vulnerability assessment, web application security, and security device management.",
    period: "2025-2026",
    icon: ShieldCheck
  },
  {
    title: "Ethical Hacking & Cybersecurity Program",
    place: "IZEE Business School",
    body: "Hands-on training focused on offensive and defensive cybersecurity fundamentals.",
    period: "2022-2025",
    icon: ShieldCheck
  }
];

export const certifications = [
  {
    title: "Certified IT Infrastructure & Cyber SOC Analyst (CICSA v3)",
    issuer: "RedTeam Hacker Academy",
    issueDate: "June 18, 2026",
    credentialId: "RTXSTU1865018986",
    category: "Professional Certifications",
    skills: [
      "Cyber SOC",
      "Offensive Security",
      "Network Security",
      "Patch Management",
      "Vulnerability Management",
      "Penetration Testing",
      "Attacking Tools",
      "Security Devices"
    ],
    thumbnail: "https://i.postimg.cc/QCbKS4yx/Red-Team-Certified-IT-Infrastructure-and-Cyber-SOC-260630-182241.jpg",
    verifyUrl: "https://i.postimg.cc/QCbKS4yx/Red-Team-Certified-IT-Infrastructure-and-Cyber-SOC-260630-182241.jpg",
    logoText: "RHA",
    official: true,
    featured: true
  },
  {
    title: "EC-Council Certified SOC Analyst (CSA)",
    issuer: "EC-Council",
    issueDate: "2026",
    credentialId: "ECC3894712560",
    category: "Professional Certifications",
    skills: [
      "SOC Operations",
      "SIEM",
      "Threat Detection",
      "Incident Response",
      "Log Analysis",
      "Forensic Investigation",
      "Malware Analysis",
      "Cloud Environment Security"
    ],
    thumbnail: "https://i.postimg.cc/HxNQXPFM/CSA-1.jpg",
    verifyUrl: "https://i.postimg.cc/HxNQXPFM/CSA-1.jpg",
    logoText: "EC",
    official: true
  },
  {
    title: "Managing Threat Intelligence with Cortex XSOAR",
    issuer: "Google Cloud (Coursera)",
    issueDate: "February 9, 2026",
    credentialId: "440761KC87R6",
    category: "Threat Intelligence",
    skills: [
      "Cortex XSOAR",
      "Threat Intelligence",
      "Security Automation",
      "Incident Response",
      "SOAR",
      "Security Operations"
    ],
    thumbnail: "https://i.postimg.cc/43p0XLws/Couursera-XSOAR-260703-002732.jpg",
    verifyUrl: "https://coursera.org/verify/440761KC87R6",
    logoText: "GC",
    official: true
  },
  {
    title: "Secure Access with Azure Active Directory",
    issuer: "Microsoft (Coursera)",
    issueDate: "February 27, 2026",
    credentialId: "JI7RVZRUZ75L",
    category: "Cloud Security",
    skills: [
      "Azure Active Directory",
      "Microsoft Entra ID",
      "Identity & Access Management",
      "Authentication",
      "Authorization",
      "Conditional Access"
    ],
    thumbnail: "https://i.postimg.cc/7LSRqsX4/Coursera-AZURE-260703-002900.jpg",
    verifyUrl: "https://coursera.org/verify/JI7RVZRUZ75L",
    logoText: "MS",
    official: true
  },
  {
    title: "Metasploit for Beginners: Ethical Penetration Testing",
    issuer: "Coursera",
    issueDate: "January 30, 2026",
    credentialId: "YYYL3LBT87XRY",
    category: "Penetration Testing",
    skills: [
      "Metasploit Framework",
      "Ethical Hacking",
      "Penetration Testing",
      "Exploitation",
      "Vulnerability Assessment"
    ],
    thumbnail: "https://i.postimg.cc/JhjFR6KR/Coursera-Metasploit1-260703-002802.jpg",
    verifyUrl: "https://coursera.org/verify/YYYL3LBT87XRY",
    logoText: "MSF",
    official: true
  },
  {
    title: "Wireshark for Beginners: Capture Packets",
    issuer: "Coursera",
    issueDate: "January 29, 2026",
    credentialId: "L7K7R7ID0NW5",
    category: "Networking",
    skills: ["Wireshark", "Packet Capture", "Network Analysis", "TCP/IP", "Network Troubleshooting"],
    thumbnail: "https://i.postimg.cc/9fykc81W/Coursera-Wire-Shark1-260703-002830.jpg",
    verifyUrl: "https://coursera.org/verify/L7K7R7ID0NW5",
    logoText: "WS",
    official: true
  },
  {
    title: "IBM Cybersecurity Analyst Professional Certificate",
    issuer: "IBM (Coursera)",
    issueDate: "February 2026",
    credentialId: "N2OH04RIYMDI",
    category: "SOC & SIEM",
    skills: [
      "Security Operations Center (SOC)",
      "SIEM",
      "Incident Response",
      "Network Security",
      "Threat Intelligence",
      "Digital Forensics",
      "Malware Analysis",
      "Vulnerability Assessment"
    ],
    thumbnail: "https://i.postimg.cc/pVwWybqF/IBM-Cybersecurity-Analyst.jpg",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/N2OH04RIYMDI",
    logoText: "IBM",
    official: true
  },
  {
    title: "CompTIA CySA+ (CS0-003) Specialization",
    issuer: "Packt (Coursera)",
    issueDate: "February 2026",
    credentialId: "5FFL1LJ72898",
    category: "SOC & SIEM",
    skills: [
      "Security Operations",
      "Threat Detection & Response",
      "Vulnerability Management",
      "Security Monitoring",
      "Risk Assessment",
      "Incident Response"
    ],
    thumbnail: "https://i.postimg.cc/8kJk1PBb/Comp-TIA-Cy-SA-(CS0-003).jpg",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/5FFL1LJ72898",
    logoText: "CY",
    official: true
  },
  {
    title: "Splunk Search Expert Specialization",
    issuer: "Splunk Inc. (Coursera)",
    issueDate: "February 2026",
    credentialId: "0QNSRRIZJP9P",
    category: "SOC & SIEM",
    skills: ["SPL", "Log Analysis", "SIEM Operations", "Dashboards & Reports", "Threat Hunting", "SOC Analytics"],
    thumbnail: "https://i.postimg.cc/J7D714c3/Splunk-Search-Expert.jpg",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/0QNSRRIZJP9P",
    logoText: "SP",
    official: true
  },
  {
    title: "Cyber Security: Essentials for AI Specialization",
    issuer: "Macquarie University (Coursera)",
    issueDate: "February 2026",
    credentialId: "HGETK6CGY6DC",
    category: "Cloud Security",
    skills: ["AI Security", "Secure AI Systems", "Cyber Risk Management", "Privacy & Data Protection", "Ethical AI", "Emerging Threats"],
    thumbnail: "https://i.postimg.cc/59Y9xNqp/MACOUARIE-University.jpg",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/HGETK6CGY6DC",
    logoText: "AI",
    official: true
  },
  {
    title: "TryHackMe - Pre Security",
    issuer: "TryHackMe",
    issueDate: "February 2026",
    expiration: "June 2029",
    credentialId: "THM-BSWURNEAN4",
    category: "Networking",
    skills: ["Networking Fundamentals", "Linux Basics", "Windows Fundamentals", "Web Technologies", "Cybersecurity Fundamentals", "Security Principles"],
    thumbnail: "https://i.postimg.cc/t427sv1q/THM-BSWURNEAN4-260630-200913.jpg",
    verifyUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-BSWURNEAN4.pdf",
    logoText: "THM",
    official: true
  },
  {
    title: "Ethical Hacking & Cyber Security Internship",
    issuer: "AISECT Ltd.",
    issueDate: "2025",
    category: "Penetration Testing",
    skills: ["Ethical Hacking", "Vulnerability Assessment", "Cybersecurity Projects", "Security Fundamentals"],
    thumbnail: "https://i.postimg.cc/XqfdmKsk/Ethical-Hacking-Certificates-250513-192734-17-(2).jpg",
    verifyUrl: "https://i.postimg.cc/XqfdmKsk/Ethical-Hacking-Certificates-250513-192734-17-(2).jpg",
    logoText: "AI",
    official: true
  },
  {
    title: "SGSU-NSDC Skill Development Certification",
    issuer: "Scope Global Skills University",
    issueDate: "2025",
    category: "Learning & Labs",
    skills: ["Skill Development", "Professional Readiness", "Technical Learning"],
    thumbnail: "/certificates/certificate-placeholder.svg",
    verifyUrl: "/certificates/skill-development.html",
    logoText: "NSDC",
    official: true
  },
  {
    title: "Digital 101 Journey",
    issuer: "FutureSkills Prime (NASSCOM)",
    issueDate: "March 6, 2024",
    category: "Learning & Labs",
    skills: ["Digital Literacy", "Emerging Technologies"],
    thumbnail: "https://i.postimg.cc/prxqWfDk/KHUBAIBPP-khubaibvpp-gmailcom-4454551-(1)-260629-213353.jpg",
    verifyUrl: "https://i.postimg.cc/prxqWfDk/KHUBAIBPP-khubaibvpp-gmailcom-4454551-(1)-260629-213353.jpg",
    logoText: "FS",
    official: true
  }
];

export const projects = [
  {
    title: "AI-Powered Data Loss Prevention (DLP) Tool",
    description:
      "Python-based AI-powered Data Loss Prevention system for real-time monitoring of files, USB devices, and network traffic using machine learning.",
    features: [
      "File Monitoring",
      "USB Monitoring",
      "Network Monitoring",
      "Machine Learning Classification",
      "Log Management",
      "File Quarantine",
      "Security Automation"
    ],
    technologies: ["Python", "Scapy", "Machine Learning", "Watchdog", "CustomTkinter", "Cryptography"],
    href: "https://github.com/khub000/AI-Powered-DLP-Tool",
    cta: "GitHub Repository",
    icon: BrainCircuit
  },
  {
    title: "SafeLine WAF Home Lab",
    description:
      "Designed a secure web application testing lab using Kali Linux, Apache, MariaDB, DVWA, and SafeLine WAF.",
    features: [
      "Reverse Proxy",
      "SQL Injection Simulation",
      "Real-Time Detection",
      "WAF Monitoring",
      "Attack Logging"
    ],
    technologies: ["Kali Linux", "Apache", "MariaDB", "DVWA", "SafeLine WAF"],
    href: "https://github.com/khub000/SafeLine-WAF-Home-Lab",
    cta: "GitHub Repository",
    icon: Radar
  },
  {
    title: "Splunk SIEM SOC Lab - Incident Detection & Threat Hunting",
    description:
      "Built a Security Operations Center (SOC) lab using Splunk Enterprise for centralized log collection, threat detection, and incident investigation. Simulated brute-force, ransomware, SQL injection, XSS, Broken Access Control, and Remote Code Execution (RCE) attacks with custom SPL queries for real-time detection and threat hunting.",
    features: [
      "Centralized Log Collection",
      "Incident Investigation",
      "Brute-Force Detection",
      "Ransomware Simulation",
      "SQL Injection Detection",
      "XSS Detection",
      "RCE Threat Hunting"
    ],
    technologies: ["Splunk Enterprise", "SPL", "Windows Security Logs", "IIS Logs", "SIEM", "Threat Hunting"],
    href: "https://github.com/khub000/Splunk-SIEM-SOC-Lab",
    cta: "GitHub Repository",
    icon: Siren
  }
];

export const blogPosts = [
  "SOC Tips",
  "Penetration Testing",
  "Malware Analysis",
  "Web Security",
  "Cloud Security",
  "Python Automation"
];

export const contactDetails = [
  { label: "Email", value: "khubaibvpp@gmail.com", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", value: "Thaliparamba, Kannur, Kerala", href: "#contact", icon: MapPin },
  ...profile.socials.map((social) => ({ ...social, value: social.label }))
];


