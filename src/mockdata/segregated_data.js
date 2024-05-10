
const careersWithEducation = [
    {
        "id": 1,
        "title": "Investment Banker",
        "description": "Facilitates mergers and acquisitions, raises capital for corporations, advises on corporate strategy, and provides financial services to clients such as underwriting securities.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 2,
        "title": "Financial Advisor/Planner",
        "description": "Helps individuals and organizations with financial planning, investment strategies, retirement planning, and wealth management.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 3,
        "title": "Accountant",
        "description": "Prepares and examines financial records, ensures accuracy and compliance with laws and regulations, and provides advice on tax strategies and financial management.",
        "comments": [],
        "education": {
            "bachelor": ["Accounting", "Finance", "Business Administration"],
            "master": ["Accounting"]
        }
    },
    {
        "id": 4,
        "title": "Auditor",
        "description": "Reviews financial statements, records, and operations to ensure accuracy, legality, and adherence to standards and regulations.",
        "comments": [],
        "education": {
            "bachelor": ["Accounting", "Finance", "Business Administration"],
            "master": ["Accounting"]
        }
    },
    {
        "id": 5,
        "title": "Risk Manager",
        "description": "Identifies, assesses, and manages potential risks that could impact an organization's financial health and operations.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Economics", "Mathematics", "Statistics"],
            "master": ["Finance", "Economics", "Risk Management"]
        }
    },
    {
        "id": 6,
        "title": "Actuary",
        "description": "Applies mathematical and statistical methods to assess and manage risk primarily in the insurance and pension industries, forecasting future events and determining pricing and policy structures.",
        "comments": [],
        "education": {
            "bachelor": ["Actuarial Science", "Mathematics", "Statistics", "Economics"],
            "master": ["Actuarial Science", "Statistics", "Mathematics"]
        }
    },
    {
        "id": 7,
        "title": "Financial Compliance Officer",
        "description": "Ensures that financial institutions comply with regulations and laws governing their industry, reducing the risk of legal penalties and financial losses.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Business Administration", "Law"],
            "master": ["Finance", "Law", "Business Administration"]
        }
    },
    {
        "id": 8,
        "title": "Credit Analyst",
        "description": "Evaluates the creditworthiness of individuals or businesses applying for loans or credit, assessing their financial stability and ability to repay debts.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 9,
        "title": "Loan Officer",
        "description": "Assesses and approves loans for individuals or businesses based on their creditworthiness, financial situation, and loan terms.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 10,
        "title": "Financial Controller",
        "description": "Oversees financial reporting, accounting processes, and internal controls within an organization to ensure accuracy, compliance, and efficiency.",
        "comments": [],
        "education": {
            "bachelor": ["Accounting", "Finance", "Business Administration"],
            "master": ["Accounting", "Finance", "Business Administration"]
        }
    },
    {
        "id": 11,
        "title": "Treasury Analyst",
        "description": "Manages an organization's financial assets, including cash flow, investments, and risk management strategies.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 12,
        "title": "Private Equity Analyst",
        "description": "Conducts financial analysis and due diligence on potential investments for private equity firms, evaluating companies for acquisition or investment opportunities.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 13,
        "title": "Hedge Fund Manager",
        "description": "Manages investment portfolios for hedge funds, employing various strategies to generate returns for investors while managing risk.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Economics", "Accounting"],
            "master": ["Finance", "Economics"]
        }
    },
    {
        "id": 14,
        "title": "Derivatives Analyst/Trader",
        "description": "Analyzes and trades financial derivatives such as options, futures, and swaps, utilizing complex mathematical models and market insights.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Mathematics", "Economics", "Statistics"],
            "master": ["Finance", "Mathematics", "Economics"]
        }
    },
    {
        "id": 15,
        "title": "Quantitative Analyst (Quant)",
        "description": "Develops and applies mathematical and statistical models to financial markets and instruments to inform investment decisions and risk management strategies.",
        "comments": [],
        "education": {
            "bachelor": ["Mathematics", "Statistics", "Physics", "Computer Science"],
            "master": ["Mathematics", "Statistics", "Financial Engineering"]
        }
    },
    {
        "id": 16,
        "title": "Compliance Manager",
        "description": "Develops and implements policies and procedures to ensure compliance with laws, regulations, and industry standards within an organization.",
        "comments": [],
        "education": {
            "bachelor": ["Law", "Finance", "Business Administration"],
            "master": ["Law", "Finance", "Business Administration"]
        }
    },
    {
        "id": 17,
        "title": "Financial Software Developer",
        "description": "Designs, develops, and maintains software applications and systems used in financial institutions for trading, risk management, and analysis.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Software Engineering", "Finance"],
            "master": ["Computer Science", "Software Engineering", "Finance"]
        }
    },
    {
        "id": 18,
        "title": "Financial Economist",
        "description": "Applies economic theories and principles to analyze financial markets, investments, and policies, providing insights into economic trends and forecasts.",
        "comments": [],
        "education": {
            "bachelor": ["Economics", "Finance", "Mathematics", "Statistics"],
            "master": ["Economics", "Finance", "Mathematics", "Statistics"]
        }
    },
    {
        "id": 19,
        "title": "Investment Research Analyst",
        "description": "Conducts research and analysis on financial markets, industries, and companies to provide investment recommendations and insights to clients or portfolio managers.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Economics", "Accounting", "Mathematics"],
            "master": ["Finance", "Economics", "Accounting"]
        }
    },
    {
        "id": 20,
        "title": "Wealth Manager/Private Banker",
        "description": "Provides personalized financial advice and investment management services to high-net-worth individuals and families.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 21,
        "title": "Financial Consultant",
        "description": "Offers expert advice on financial management, investment strategies, and risk mitigation to individuals, businesses, or organizations.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 22,
        "title": "Corporate Finance Analyst",
        "description": "Analyzes financial data, conducts valuation assessments, and provides strategic recommendations to corporations for decision-making on capital investments, mergers, and acquisitions.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 23,
        "title": "Financial Operations Manager",
        "description": "Oversees the day-to-day financial operations of an organization, including budgeting, forecasting, and financial reporting.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 24,
        "title": "Insurance Underwriter",
        "description": "Evaluates insurance applications, determines coverage and premiums based on risk assessment, and helps manage the financial performance of insurance portfolios.",
        "comments": [],
        "education": {
            "bachelor": ["Insurance", "Risk Management", "Finance"],
            "master": ["Insurance", "Risk Management", "Finance"]
        }
    },
    {
        "id": 25,
        "title": "Financial Educator/Trainer",
        "description": "Provides education and training on financial literacy, investment strategies, and personal finance management to individuals, groups, or organizations.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Accounting", "Economics", "Business Administration"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 26,
        "title": "Venture Capitalist",
        "description": "Invests in early-stage companies with high growth potential in exchange for equity, providing capital and strategic guidance to help them grow and succeed.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Business Administration", "Economics"],
            "master": ["Finance", "Business Administration", "Economics"]
        }
    },
    {
        "id": 27,
        "title": "Financial Technology (FinTech) Specialist",
        "description": "Develops and implements technology solutions and innovations to improve financial services, including payments, lending, and investment platforms.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Finance", "Software Engineering"],
            "master": ["Computer Science", "Finance", "Software Engineering"]
        }
    },
    {
        "id": 28,
        "title": "Sustainability/ESG Analyst",
        "description": "Assesses environmental, social, and governance (ESG) factors in investment decision-making, evaluating companies' sustainability practices and performance.",
        "comments": [],
        "education": {
            "bachelor": ["Environmental Science", "Sustainability Studies", "Finance", "Economics"],
            "master": ["Environmental Science", "Sustainability Studies", "Finance", "Economics"]
        }
    },
    {
        "id": 29,
        "title": "Forensic Accountant",
        "description": "Investigates financial records and transactions to uncover fraud, embezzlement, or other financial crimes, often providing expert testimony in legal proceedings.",
        "comments": [],
        "education": {
            "bachelor": ["Accounting", "Finance", "Criminal Justice", "Forensic Accounting"],
            "master": ["Accounting", "Finance", "Criminal Justice"]
        }
    },
    {
        "id": 30,
        "title": "Real Estate Investment Analyst",
        "description": "Analyzes real estate markets and investment opportunities, conducts financial modeling, and evaluates property acquisitions or developments.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Real Estate", "Economics"],
            "master": ["Finance", "Real Estate", "Economics"]
        }
    },
    {
        "id": 31,
        "title": "Financial Regulator",
        "description": "Enforces laws and regulations governing financial institutions and markets to protect investors, maintain market integrity, and ensure financial stability.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Economics", "Law", "Business Administration"],
            "master": ["Finance", "Economics", "Law", "Business Administration"]
        }
    },
    {
        "id": 32,
        "title": "Software Developer",
        "description": "Designs, develops, tests, and maintains software applications, programs, and systems to meet specific user requirements and business objectives.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Software Engineering", "Information Technology"],
            "master": ["Computer Science", "Software Engineering", "Information Technology"]
        }
    },
    {
        "id": 33,
        "title": "Frontend Developer",
        "description": "Builds user-facing interfaces and experiences for websites and web applications using HTML, CSS, and JavaScript, focusing on visual design and user interaction.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Web Development", "Software Engineering"],
            "master": ["Computer Science", "Web Development", "Software Engineering"]
        }
    },
    {
        "id": 34,
        "title": "Backend Developer",
        "description": "Develops server-side logic and functionality for web applications, databases, and APIs using programming languages such as Python, Java, or Node.js.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Software Engineering"],
            "master": ["Computer Science", "Software Engineering"]
        }
    },
    {
        "id": 35,
        "title": "Full-stack Developer",
        "description": "Works on both the frontend and backend of web applications, handling all aspects of development from user interface design to server-side logic and database integration.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Software Engineering", "Web Development"],
            "master": ["Computer Science", "Software Engineering", "Web Development"]
        }
    },
    {
        "id": 36,
        "title": "Mobile App Developer",
        "description": "Creates mobile applications for iOS or Android platforms, designing, developing, and testing software for smartphones, tablets, and other mobile devices.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Software Engineering", "Mobile App Development"],
            "master": ["Computer Science", "Software Engineering", "Mobile App Development"]
        }
    },
    {
        "id": 37,
        "title": "Game Developer",
        "description": "Designs, develops, and tests video games for various platforms, including consoles, PCs, and mobile devices, using game engines and programming languages such as Unity or Unreal Engine.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Game Development", "Software Engineering"],
            "master": ["Computer Science", "Game Development", "Software Engineering"]
        }
    },
    {
        "id": 38,
        "title": "Web Developer",
        "description": "Builds and maintains websites and web applications, implementing client-side and server-side technologies to deliver content and functionality to users.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Web Development", "Software Engineering"],
            "master": ["Computer Science", "Web Development", "Software Engineering"]
        }
    },
    {
        "id": 39,
        "title": "Database Administrator",
        "description": "Manages and maintains databases, ensuring data integrity, security, and availability, and optimizing database performance and efficiency.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Database Management"],
            "master": ["Computer Science", "Information Technology", "Database Management"]
        }
    },
    {
        "id": 40,
        "title": "Systems Administrator",
        "description": "Configures, maintains, and troubleshoots computer systems and servers, including hardware, operating systems, and software applications, to ensure reliable and secure operation.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Computer Science", "Network Administration"],
            "master": ["Information Technology", "Computer Science", "Network Administration"]
        }
    },
    {
        "id": 41,
        "title": "Network Administrator",
        "description": "Manages and maintains network infrastructure, including servers, routers, switches, firewalls, and other network devices, to ensure connectivity, security, and performance.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Computer Science", "Network Administration"],
            "master": ["Information Technology", "Computer Science", "Network Administration"]
        }
    },
    {
        "id": 42,
        "title": "Systems Analyst",
        "description": "Analyzes business requirements and user needs to design and implement information systems and solutions that meet organizational objectives and improve efficiency.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Systems", "Business Administration"],
            "master": ["Computer Science", "Information Systems", "Business Administration"]
        }
    },
    {
        "id": 43,
        "title": "Business Analyst",
        "description": "Identifies business needs, opportunities, and problems, and recommends solutions and strategies to improve processes, products, and services using technology.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Computer Science", "Information Systems"],
            "master": ["Business Administration", "Computer Science", "Information Systems"]
        }
    },
    {
        "id": 44,
        "title": "IT Support Specialist",
        "description": "Provides technical assistance and support to end-users and clients experiencing hardware, software, or network issues, troubleshooting problems and resolving technical issues.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Computer Science", "Technical Support"],
            "master": ["Information Technology", "Computer Science", "Technical Support"]
        }
    },
    {
        "id": 45,
        "title": "Help Desk Technician",
        "description": "Provides frontline technical support and assistance to end-users via phone, email, or chat, troubleshooting and resolving technical issues and escalating complex problems as needed.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Computer Science", "Technical Support"],
            "master": ["Information Technology", "Computer Science", "Technical Support"]
        }
    },
    {
        "id": 46,
        "title": "Technical Support Engineer",
        "description": "Provides advanced technical support and troubleshooting for complex hardware, software, and network issues, diagnosing problems and providing solutions to ensure system reliability and performance.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Computer Science", "Technical Support"],
            "master": ["Information Technology", "Computer Science", "Technical Support"]
        }
    },
    {
        "id": 47,
        "title": "Cybersecurity Analyst",
        "description": "Monitors, detects, and responds to security threats and incidents, analyzing security logs and data to identify vulnerabilities and protect against cyber attacks and breaches.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"]
        }
    },
    {
        "id": 48,
        "title": "Penetration Tester",
        "description": "Conducts security assessments and tests on systems, networks, and applications to identify and exploit vulnerabilities, helping organizations improve their security posture.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"]
        }
    },
    {
        "id": 49,
        "title": "Security Engineer",
        "description": "Designs, implements, and manages security systems and protocols to protect computer networks, systems, and data from unauthorized access, damage, or breaches.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"]
        }
    },
    {
        "id": 50,
        "title": "Data Scientist",
        "description": "Applies statistical analysis, machine learning, and data mining techniques to interpret and analyze large datasets, extracting insights and informing strategic business decisions.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Statistics", "Mathematics", "Data Science"],
            "master": ["Computer Science", "Statistics", "Mathematics", "Data Science"]
        }
    },
    {
        "id": 51,
        "title": "Security Engineer",
        "description": "Designs, implements, and manages security controls and measures to protect systems, networks, and data against unauthorized access, breaches, and cyber threats.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"]
        }
    },
    {
        "id": 52,
        "title": "Security Architect",
        "description": "Designs and develops secure architectures and solutions for systems, networks, and applications, incorporating security principles and best practices to protect against threats.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"]
        }
    },
    {
        "id": 53,
        "title": "Compliance Analyst",
        "description": "Ensures organizational compliance with industry regulations, standards, and frameworks, conducting audits and assessments and recommending corrective actions to address compliance gaps.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Finance", "Accounting"],
            "master": ["Compliance Management"],
            "diploma": ["Compliance Management"]
        }
    },
    {
        "id": 54,
        "title": "Risk Analyst",
        "description": "Identifies, assesses, and manages risks to information assets and systems, analyzing threats and vulnerabilities and implementing risk mitigation strategies and controls.",
        "comments": [],
        "education": {
            "bachelor": ["Finance", "Economics", "Mathematics"],
            "master": ["Risk Management"],
            "diploma": ["Risk Management"]
        }
    },
    {
        "id": 55,
        "title": "Ethical Hacker",
        "description": "Conducts authorized penetration tests and security assessments to identify and exploit vulnerabilities in systems, networks, and applications, helping organizations improve their security defenses.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"],
            "diploma": ["Ethical Hacking"]
        }
    },
    {
        "id": 56,
        "title": "Malware Analyst",
        "description": "Analyzes and reverse-engineers malware samples to understand their behavior and characteristics, developing countermeasures and solutions to detect and mitigate malware threats.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Security", "Cybersecurity"],
            "master": ["Computer Science", "Information Security", "Cybersecurity"],
            "diploma": ["Malware Analysis"]
        }
    },
    {
        "id": 57,
        "title": "Cryptographer",
        "description": "Designs and develops cryptographic algorithms, protocols, and systems to secure data and communications, ensuring confidentiality, integrity, and authenticity.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Mathematics", "Cryptography"],
            "master": ["Computer Science", "Mathematics", "Cryptography"]
        }
    },
    {
        "id": 58,
        "title": "Data Scientist",
        "description": "Analyzes and interprets complex data sets to extract insights, patterns, and trends, using statistical analysis, machine learning, and data mining techniques to inform business decisions and strategies.",
        "comments": [],
        "education": {
            "bachelor": ["Statistics", "Computer Science", "Mathematics"],
            "master": ["Statistics", "Computer Science", "Mathematics"]
        }
    },
    {
        "id": 59,
        "title": "Data Analyst",
        "description": "Collects, cleans, and analyzes data to identify trends, patterns, and insights that support business objectives and decision-making processes.",
        "comments": [],
        "education": {
            "bachelor": ["Statistics", "Economics", "Mathematics"],
            "master": ["Statistics", "Economics", "Mathematics"],
            "diploma": ["Data Analysis"]
        }
    },
    {
        "id": 60,
        "title": "Data Engineer",
        "description": "Designs, builds, and maintains data pipelines and infrastructure to collect, process, and store large volumes of structured and unstructured data for analysis and reporting.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Database Management"],
            "master": ["Computer Science", "Information Technology", "Database Management"],
            "diploma": ["Data Engineering"]
        }
    },
    {
        "id": 61,
        "title": "Business Intelligence Analyst",
        "description": "Creates and maintains business intelligence solutions and reports to analyze and visualize data, providing insights and recommendations to support strategic decision-making.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Management Information Systems", "Data Analytics"],
            "master": ["Business Administration", "Management Information Systems", "Data Analytics"],
            "diploma": ["Business Intelligence"]
        }
    },
    {
        "id": 62,
        "title": "Machine Learning Engineer",
        "description": "Develops and deploys machine learning models and algorithms to solve complex problems and automate decision-making processes, using data-driven approaches and techniques.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Statistics", "Mathematics"],
            "master": ["Computer Science", "Statistics", "Mathematics"]
        }
    },
    {
        "id": 63,
        "title": "Artificial Intelligence Engineer",
        "description": "Designs, develops, and implements artificial intelligence solutions and systems to perform tasks that typically require human intelligence, such as natural language processing or computer vision.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Mathematics", "Cognitive Science"],
            "master": ["Computer Science", "Mathematics", "Cognitive Science"]
        }
    },
    {
        "id": 64,
        "title": "Cloud Engineer",
        "description": "Designs, deploys, and manages cloud-based infrastructure and services, such as virtual servers, storage, and networking, using cloud platforms like AWS, Azure, or Google Cloud.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Cloud Computing"],
            "master": ["Computer Science", "Information Technology", "Cloud Computing"],
            "diploma": ["Cloud Engineering"]
        }
    },
    {
        "id": 65,
        "title": "Cloud Architect",
        "description": "Designs and implements cloud architectures and solutions to meet business requirements and objectives, ensuring scalability, reliability, and security in cloud environments.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Cloud Computing"],
            "master": ["Computer Science", "Information Technology", "Cloud Computing"],
            "diploma": ["Cloud Architecture"]
        }
    },
    {
        "id": 66,
        "title": "Cloud Consultant",
        "description": "Advises organizations on cloud adoption and migration strategies, assesses cloud readiness, and designs cloud architectures and solutions to optimize performance and cost.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Information Technology", "Cloud Computing"],
            "diploma": ["Cloud Consulting"]
        }
    },
    {
        "id": 67,
        "title": "DevOps Engineer",
        "description": "Implements and manages DevOps practices and tools to automate software development, deployment, and operations processes, improving efficiency, reliability, and collaboration.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology"],
            "master": ["Computer Science", "Information Technology"]
        }
    },
    {
        "id": 68,
        "title": "Site Reliability Engineer (SRE)",
        "description": "Ensures the reliability, availability, and performance of software systems and services through automation, monitoring, and continuous improvement practices.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology"],
            "master": ["Computer Science", "Information Technology"]
        }
    },
    {
        "id": 69,
        "title": "Automation Engineer",
        "description": "Designs, develops, and maintains automated solutions and workflows to streamline and optimize IT operations, infrastructure provisioning, and software deployment.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology"],
            "diploma": ["Automation Engineering"]
        }
    },
    {
        "id": 70,
        "title": "IT Project Manager",
        "description": "Plans, executes, and manages IT projects from initiation to completion, coordinating resources, schedules, and budgets to deliver projects on time and within scope.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Business Administration"],
            "master": ["Information Technology", "Business Administration"]
        }
    },
    {
        "id": 71,
        "title": "Scrum Master",
        "description": "Facilitates and supports Agile development teams in implementing Scrum practices and principles, fostering collaboration, communication, and continuous improvement.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Business Administration"],
            "diploma": ["Scrum Master Certification"]
        }
    },
    {
        "id": 72,
        "title": "Agile Coach",
        "description": "Guides organizations in adopting Agile methodologies and practices, providing coaching, training, and support to teams and stakeholders to improve Agile maturity and effectiveness.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology", "Business Administration"],
            "diploma": ["Agile Coaching Certification"]
        }
    },
    {
        "id": 73,
        "title": "IT Consultant",
        "description": "Provides expert advice and guidance on IT strategy, technology solutions, and digital transformation initiatives, helping organizations leverage technology to achieve business objectives.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Business Administration"],
            "master": ["Information Technology", "Business Administration"]
        }
    },
    {
        "id": 74,
        "title": "Solutions Architect",
        "description": "Designs and develops end-to-end solutions and architectures to address business requirements and challenges, integrating hardware, software, and services to deliver value.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Technology"],
            "master": ["Computer Science", "Information Technology"]
        }
    },
    {
        "id": 75,
        "title": "Technical Writer",
        "description": "Creates documentation and instructional materials for technical products, systems, and processes, including user manuals, guides, specifications, and tutorials.",
        "comments": [],
        "education": {
            "bachelor": ["English", "Technical Writing", "Communications"],
            "diploma": ["Technical Writing"]
        }
    },
    {
        "id": 76,
        "title": "UI/UX Designer",
        "description": "Designs user interfaces and experiences for digital products and applications, focusing on usability, accessibility, and visual design to enhance user satisfaction and engagement.",
        "comments": [],
        "education": {
            "bachelor": ["Graphic Design", "Web Design", "Human-Computer Interaction"],
            "diploma": ["UI/UX Design"]
        }
    },
    {
        "id": 77,
        "title": "UI/UX Developer",
        "description": "Implements frontend designs and user interfaces for web and mobile applications, using HTML, CSS, and JavaScript frameworks to create intuitive and responsive user experiences.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Web Development", "Information Technology"],
            "diploma": ["UI/UX Development"]
        }
    },
    {
        "id": 78,
        "title": "Interaction Designer",
        "description": "Designs and prototypes interactive experiences and interfaces for digital products and applications, focusing on user engagement, usability, and interaction flow to enhance the overall user experience.",
        "comments": [],
        "education": {
            "bachelor": ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
            "diploma": ["Interaction Design"]
        }
    },
    {
        "id": 79,
        "title": "Information Architect",
        "description": "Organizes and structures information and content within digital products and systems, creating intuitive navigation, categorization, and labeling to improve usability and findability.",
        "comments": [],
        "education": {
            "bachelor": ["Library Science", "Information Science", "Computer Science"],
            "diploma": ["Information Architecture"]
        }
    },
    {
        "id": 80,
        "title": "Content Strategist",
        "description": "Develops and executes content strategies for digital products, websites, and marketing campaigns, defining content goals, themes, and messaging to attract and engage target audiences.",
        "comments": [],
        "education": {
            "bachelor": ["Marketing", "Communications", "Journalism"],
            "diploma": ["Content Strategy"]
        }
    },
    {
        "id": 81,
        "title": "Technical Illustrator",
        "description": "Creates visual illustrations and diagrams to communicate complex technical concepts and information, using graphic design tools and techniques to enhance understanding and clarity.",
        "comments": [],
        "education": {
            "bachelor": ["Fine Arts", "Graphic Design", "Illustration"],
            "diploma": ["Technical Illustration"]
        }
    },
    {
        "id": 82,
        "title": "Video Game Designer",
        "description": "Designs and develops gameplay mechanics, levels, characters, and narratives for video games, balancing player experience, challenge, and entertainment to create compelling gaming experiences.",
        "comments": [],
        "education": {
            "bachelor": ["Game Design", "Computer Science", "Digital Arts"],
            "diploma": ["Game Design"]
        }
    },
    {
        "id": 83,
        "title": "Video Game Tester",
        "description": "Conducts testing and quality assurance on video games to identify bugs, glitches, and issues, ensuring gameplay mechanics, graphics, and performance meet quality standards and player expectations.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Game Development", "Quality Assurance"],
            "diploma": ["Game Testing"]
        }
    },
    {
        "id": 84,
        "title": "IT Trainer",
        "description": "Designs and delivers training programs and materials to educate users and employees on IT systems, applications, and best practices, facilitating skill development and adoption of technology.",
        "comments": [],
        "education": {
            "bachelor": ["Education", "Information Technology", "Computer Science"],
            "diploma": ["Training and Development"]
        }
    },
    {
        "id": 85,
        "title": "IT Auditor",
        "description": "Evaluates and assesses IT systems, processes, and controls to ensure compliance with regulatory requirements, industry standards, and internal policies, identifying risks and recommending corrective actions.",
        "comments": [],
        "education": {
            "bachelor": ["Accounting", "Information Systems", "Computer Science"],
            "master": ["Accounting", "Information Systems", "Computer Science"]
        }
    },
    {
        "id": 86,
        "title": "IT Compliance Officer",
        "description": "Develops and implements IT compliance programs and initiatives to ensure adherence to legal and regulatory requirements, such as data privacy, security, and accessibility standards.",
        "comments": [],
        "education": {
            "bachelor": ["Law", "Information Security", "Computer Science"],
            "master": ["Law", "Information Security", "Computer Science"]
        }
    },
    {
        "id": 87,
        "title": "IT Procurement Specialist",
        "description": "Manages the procurement and acquisition of IT hardware, software, and services, negotiating contracts, licenses, and agreements with vendors to ensure cost-effective and efficient IT purchases.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Supply Chain Management", "Information Technology"],
            "diploma": ["Procurement Management"]
        }
    },
    {
        "id": 88,
        "title": "IT Sales Representative",
        "description": "Sells IT products, services, and solutions to clients and customers, identifying business needs, presenting solutions, and negotiating contracts to meet sales targets and objectives.",
        "comments": [],
        "education": {
            "bachelor": ["Sales", "Marketing", "Information Technology"],
            "diploma": ["Sales Management"]
        }
    },
    {
        "id": 89,
        "title": "IT Recruiter",
        "description": "Sources, screens, and recruits candidates for IT positions within an organization, conducting interviews, evaluating skills and qualifications, and facilitating the hiring process to build a talented IT workforce.",
        "comments": [],
        "education": {
            "bachelor": ["Human Resources", "Information Technology", "Psychology"],
            "diploma": ["Recruitment and Staffing"]
        }
    },
    {
        "id": 90,
        "title": "IT Director/Manager",
        "description": "Oversees and manages IT operations, projects, and staff within an organization, setting strategic goals, allocating resources, and ensuring the effective and efficient use of technology to support business objectives.",
        "comments": [],
        "education": {
            "bachelor": ["Information Technology", "Business Administration"],
            "master": ["Information Technology", "Business Administration"]
        }
    },
    {
        "id": 91,
        "title": "Chief Technology Officer (CTO)",
        "description": "Leads the technology strategy and vision for an organization, identifying emerging technologies, evaluating opportunities, and guiding the development and implementation of innovative solutions.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Engineering", "Business Administration"],
            "master": ["Computer Science", "Engineering", "Business Administration"]
        }
    },
    {
        "id": 92,
        "title": "Chief Information Officer (CIO)",
        "description": "Sets the overall direction and strategy for information technology within an organization, aligning IT initiatives with business goals, managing IT budgets, and ensuring the security and reliability of IT systems and services.",
        "comments": [],
        "education": {
            "bachelor": ["Computer Science", "Information Systems", "Business Administration"],
            "master": ["Computer Science", "Information Systems", "Business Administration"]
        }
    },
    {
        "id": 93,
        "title": "Project Coordinator",
        "description": "Assists project managers in organizing and controlling project activities, including scheduling meetings, tracking progress, and communicating with stakeholders.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Management"]
        }
    },
    {
        "id": 94,
        "title": "Project Administrator",
        "description": "Provides administrative support to project teams, including maintaining documentation, managing budgets, and coordinating resources.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Administration"]
        }
    },
    {
        "id": 95,
        "title": "Project Assistant",
        "description": "Supports project managers and teams with various administrative tasks, such as data entry, scheduling, and documentation.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Assistance"]
        }
    },
    {
        "id": 96,
        "title": "Project Scheduler",
        "description": "Develops and maintains project schedules, coordinates timelines, and ensures that tasks are completed on time and within budget.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Scheduling"]
        }
    },
    {
        "id": 97,
        "title": "Project Planner",
        "description": "Develops detailed project plans, defines project scope, identifies resources needed, and creates timelines to guide project execution.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Planning"]
        }
    },
    {
        "id": 98,
        "title": "Project Expediter",
        "description": "Facilitates communication and coordination between project team members, stakeholders, and vendors to ensure smooth project execution and delivery.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Coordination"]
        }
    },
    {
        "id": 99,
        "title": "Junior Project Manager",
        "description": "Assists senior project managers in planning, executing, and monitoring projects, typically with a focus on specific project tasks or deliverables.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "diploma": ["Project Management"]
        }
    },
    {
        "id": 100,
        "title": "Project Manager",
        "description": "Leads and manages projects from initiation to closure, including defining project objectives, allocating resources, managing budgets, and ensuring delivery within scope, time, and quality constraints.",
        "comments": [],
        "education": {
            "bachelor": ["Business Administration", "Project Management", "Information Technology"],
            "master": ["Business Administration", "Project Management", "Information Technology"]
        }
    }
];


module.exports = { careersWithEducation }
