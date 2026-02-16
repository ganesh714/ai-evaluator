export const mockCandidates = [
    {
        id: "101",
        name: "Sarah Chen",
        role: "Senior Frontend Developer",
        experience: "5 yrs",
        location: "San Francisco, CA",
        email: "sarah.chen@email.com",
        aiScore: 8.7,
        trend: "+12%",
        trendDirection: "up",
        confidence: "83%",
        topPercentile: "Top 12%",
        interviewCount: 3,
        lastInterview: "Yesterday",
        skills: [
            { name: "React", score: 9.2, level: "Advanced", evidence: "Virtual DOM, custom hooks, performance profiling" },
            { name: "TypeScript", score: 8.5, level: "Advanced", evidence: "Generic types, utility types, strict mode" },
            { name: "Node.js", score: 7.1, level: "Intermediate", evidence: "REST APIs, Express middleware" },
            { name: "State Mgmt", score: 8.8, level: "Advanced", evidence: "Redux Toolkit, Context API, Zustand" },
            { name: "Testing", score: 6.5, level: "Needs Work", evidence: "Jest basics, limited E2E experience" }
        ],
        technicalDepth: [
            { label: "Conceptual Understanding", score: 9.0, dots: 10, filled: 9 },
            { label: "Problem Solving", score: 8.7, dots: 10, filled: 8 },
            { label: "System Design", score: 7.2, dots: 10, filled: 7 },
            { label: "Code Quality", score: 8.5, dots: 10, filled: 8 },
            { label: "Best Practices", score: 8.0, dots: 10, filled: 8 },
            { label: "Optimization", score: 8.9, dots: 10, filled: 9 }
        ],
        communication: {
            score: 8.2,
            details: [
                { label: "Clarity", score: 8.5 },
                { label: "Structure", score: 8.0 },
                { label: "Vocabulary", score: 8.3 },
                { label: "Confidence", score: 8.1 }
            ]
        },
        interviews: [
            {
                id: 1, round: "Round 1: Technical Screening", date: "Mar 15, 2024", duration: "45 min",
                focus: "React fundamentals", score: 8.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Strong foundational knowledge. Explained closure, prototype chain confidently.",
                moments: [{ time: "02:15", seconds: 135, label: "Virtual DOM explanation" }, { time: "12:30", seconds: 750, label: "Custom hook implementation" }]
            },
            {
                id: 2, round: "Round 2: System Design", date: "Mar 22, 2024", duration: "60 min",
                focus: "Frontend Architecture", score: 8.5, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Designed a dashboard with lazy loading. Good knowledge of bundle optimization.",
                moments: [{ time: "05:50", seconds: 350, label: "Component breakdown" }, { time: "32:15", seconds: 1935, label: "Lazy loading strategy" }]
            },
            {
                id: 3, round: "Round 3: Live Coding", date: "Mar 29, 2024", duration: "75 min",
                focus: "Search Autocomplete", score: 9.1, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Efficient implementation with debouncing. Clean component structure.",
                moments: [{ time: "15:20", seconds: 920, label: "Debounce logic" }, { time: "42:10", seconds: 2530, label: "Caching results" }]
            }
        ],
        aiAnalysis: {
            strengths: [
                { title: "React Architecture", level: "Expert", desc: "Deep understanding of reconciliation and hooks" },
                { title: "Problem Solving", level: "Advanced", desc: "Methodical approach to complex UI logic" }
            ],
            weaknesses: [
                { title: "Testing", level: "Intermediate", desc: "Needs more experience with TDD and E2E tools" }
            ],
            hiringRecommendation: "STRONG CONSIDER",
            fitScore: "8.7/10",
            level: "Senior",
            confidence: "High",
            quote: "Sarah demonstrates strong React expertise with production experience. Would be a valuable addition to any frontend team."
        }
    },
    {
        id: "102",
        name: "Michael Rodriguez",
        role: "Full Stack Engineer",
        experience: "8 yrs",
        location: "Austin, TX",
        email: "m.rodriguez@email.com",
        aiScore: 9.1,
        trend: "Top 5%",
        trendDirection: "neutral",
        confidence: "90%",
        topPercentile: "Top 5%",
        interviewCount: 4,
        lastInterview: "2 days ago",
        skills: [
            { name: "Python", score: 9.4, level: "Expert", evidence: "AsyncIO, Metaclasses, PyTest fixtures" },
            { name: "AWS", score: 8.9, level: "Advanced", evidence: "Lambda, DynamoDB, CloudFormation" },
            { name: "Django", score: 8.7, level: "Advanced", evidence: "ORM optimization, middleware, signals" },
            { name: "React", score: 7.5, level: "Intermediate", evidence: "Functional components, basic hooks" },
            { name: "Docker", score: 8.8, level: "Advanced", evidence: "Multi-stage builds, compose, networking" }
        ],
        technicalDepth: [
            { label: "Conceptual Understanding", score: 9.2, dots: 10, filled: 9 },
            { label: "Problem Solving", score: 9.1, dots: 10, filled: 9 },
            { label: "System Design", score: 8.5, dots: 10, filled: 8 },
            { label: "Code Quality", score: 8.8, dots: 10, filled: 9 },
            { label: "Best Practices", score: 9.0, dots: 10, filled: 9 },
            { label: "Optimization", score: 8.4, dots: 10, filled: 8 }
        ],
        communication: {
            score: 8.2,
            details: [
                { label: "Clarity", score: 8.0 },
                { label: "Structure", score: 8.5 },
                { label: "Vocabulary", score: 8.0 },
                { label: "Confidence", score: 8.3 }
            ]
        },
        interviews: [
            {
                id: 1, round: "Round 1: Backend Deep Dive", date: "Mar 10, 2024", duration: "60 min",
                focus: "Python Internals & DB Design", score: 9.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Exceptional grasp of Python memory management. Schema design was normalized and scalable.",
                moments: [{ time: "10:15", seconds: 615, label: "GIL explanation" }, { time: "45:20", seconds: 2720, label: "Indexing strategy" }]
            },
            {
                id: 2, round: "Round 2: System Design", date: "Mar 18, 2024", duration: "60 min",
                focus: "Scalable Event System", score: 8.8, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Proposed a solid event-driven architecture using SQS and Lambda. Handled failure scenarios well.",
                moments: [{ time: "08:30", seconds: 510, label: "Microservices split" }, { time: "35:45", seconds: 2145, label: "Idempotency handling" }]
            }
        ],
        aiAnalysis: {
            strengths: [
                { title: "Backend Architecture", level: "Expert", desc: "Deep knowledge of distributed systems and Python" },
                { title: "Cloud Native", level: "Advanced", desc: "Production experience with serverless patterns" }
            ],
            weaknesses: [
                { title: "Frontend Polish", level: "Intermediate", desc: "Functional React skills but lacks advanced UI patterns" }
            ],
            hiringRecommendation: "MUST HIRE",
            fitScore: "9.1/10",
            level: "Staff Engineer",
            confidence: "Very High",
            quote: "Michael is a top-tier backend engineer who can comfortably handle full-stack tasks. His system design skills are exceptional."
        }
    },
    {
        id: "103",
        name: "Alex Foster",
        role: "AI/ML Engineer",
        experience: "4 yrs",
        location: "New York, NY",
        email: "alex.foster@email.com",
        aiScore: 9.4,
        trend: "HOT",
        trendDirection: "up",
        confidence: "88%",
        topPercentile: "Top 2%",
        interviewCount: 3,
        lastInterview: "Today",
        skills: [
            { name: "PyTorch", score: 9.0, level: "Expert", evidence: "Custom autograd functions, distributed training" },
            { name: "LLMs", score: 8.7, level: "Advanced", evidence: "LoRA fine-tuning, LangChain, vector DBs" },
            { name: "Computer Vision", score: 8.5, level: "Advanced", evidence: "YOLO v8, segmentation pipelines" },
            { name: "FastAPI", score: 8.2, level: "Advanced", evidence: "Async inference endpoints, Pydantic" },
            { name: "MLOps", score: 7.8, level: "Intermediate", evidence: "MLflow, DVC, basic CI/CD for ML" }
        ],
        technicalDepth: [
            { label: "Conceptual Understanding", score: 9.5, dots: 10, filled: 9 },
            { label: "Problem Solving", score: 9.3, dots: 10, filled: 9 },
            { label: "System Design", score: 8.8, dots: 10, filled: 9 },
            { label: "Code Quality", score: 9.1, dots: 10, filled: 9 },
            { label: "Best Practices", score: 8.9, dots: 10, filled: 9 },
            { label: "Optimization", score: 9.2, dots: 10, filled: 9 }
        ],
        communication: {
            score: 7.8,
            details: [
                { label: "Clarity", score: 7.5 },
                { label: "Structure", score: 8.0 },
                { label: "Vocabulary", score: 8.5 },
                { label: "Confidence", score: 7.2 }
            ]
        },
        interviews: [
            {
                id: 1, round: "Round 1: ML Theory", date: "Mar 28, 2024", duration: "45 min",
                focus: "Transformers & Backprop", score: 9.5, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Flawless explanation of attention mechanisms and gradient descent nuances.",
                moments: [{ time: "05:00", seconds: 300, label: "Self-attention math" }, { time: "22:15", seconds: 1335, label: "Vanishing gradient fix" }]
            },
            {
                id: 2, round: "Round 2: Practical Application", date: "Apr 02, 2024", duration: "60 min",
                focus: "RAG Pipeline", score: 9.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Built a retrieval pipeline live. Chose correct chunking strategies and embedding models.",
                moments: [{ time: "12:10", seconds: 730, label: "Vector DB selection" }, { time: "40:50", seconds: 2450, label: "Handling hallucinations" }]
            }
        ],
        aiAnalysis: {
            strengths: [
                { title: "LLM Expertise", level: "Expert", desc: "Current on latest architectures (Mistral, Llama)" },
                { title: "Math Foundation", level: "Expert", desc: "Strong statistics and linear algebra background" }
            ],
            weaknesses: [
                { title: "Communication", level: "Intermediate", desc: "Can get too technical, needs to summarize for stakeholders" }
            ],
            hiringRecommendation: "STRONG CONSIDER",
            fitScore: "9.4/10",
            level: "Senior ML Engineer",
            confidence: "High",
            quote: "Alex is a rare find with deep theoretical knowledge and practical LLM deployment skills."
        }
    },
    {
        id: "104",
        name: "Priya Patel",
        role: "Backend Engineer",
        experience: "3 yrs",
        location: "Chicago, IL",
        email: "priya.p@email.com",
        aiScore: 7.2,
        trend: "Needs deep dive",
        trendDirection: "down",
        confidence: "75%",
        topPercentile: "Top 40%",
        interviewCount: 2,
        lastInterview: "5 days ago",
        skills: [
            { name: "Java", score: 7.5, level: "Intermediate", evidence: "Streams API, Spring Boot basics" },
            { name: "SQL", score: 7.9, level: "Advanced", evidence: "Complex joins, window functions, stored procs" },
            { name: "Microservices", score: 6.5, level: "Beginner", evidence: "Theoretical knowledge, limited practical use" },
            { name: "Kafka", score: 6.0, level: "Beginner", evidence: "Basic consumer/producer concepts" },
            { name: "Git", score: 8.0, level: "Advanced", evidence: "Rebase, cherry-pick, conventional commits" }
        ],
        technicalDepth: [
            { label: "Conceptual Understanding", score: 7.5, dots: 10, filled: 7 },
            { label: "Problem Solving", score: 7.0, dots: 10, filled: 7 },
            { label: "System Design", score: 6.2, dots: 10, filled: 6 },
            { label: "Code Quality", score: 7.8, dots: 10, filled: 8 },
            { label: "Best Practices", score: 7.5, dots: 10, filled: 7 },
            { label: "Optimization", score: 6.9, dots: 10, filled: 7 }
        ],
        communication: {
            score: 7.9,
            details: [
                { label: "Clarity", score: 8.0 },
                { label: "Structure", score: 7.5 },
                { label: "Vocabulary", score: 7.8 },
                { label: "Confidence", score: 8.2 }
            ]
        },
        interviews: [
            {
                id: 1, round: "Round 1: Java Coding", date: "Mar 20, 2024", duration: "50 min",
                focus: "DS & Algorithms", score: 7.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Solved the problem but solution was O(n^2). Struggled to optimize to O(n). Good clean code though.",
                moments: [{ time: "15:00", seconds: 900, label: "Brute force solution" }, { time: "35:20", seconds: 2120, label: "Optimization attempt" }]
            }
        ],
        aiAnalysis: {
            strengths: [
                { title: "Database Skills", level: "Strong", desc: "Writes efficient complex queries" },
                { title: "Code Hygiene", level: "Strong", desc: "Very readable and well-commented code" }
            ],
            weaknesses: [
                { title: "System Design", level: "Junior", desc: "Struggles with distributed system concepts" },
                { title: "DSA Optimization", level: "Intermediate", desc: "Can solve, but not always optimally" }
            ],
            hiringRecommendation: "CONSIDER",
            fitScore: "7.2/10",
            level: "Mid-level",
            confidence: "Medium",
            quote: "Priya is a solid Java developer for standard CRUD apps but needs mentorship for high-scale systems."
        }
    },
    {
        id: "105",
        name: "David Kim",
        role: "DevOps Engineer",
        experience: "6 yrs",
        location: "Seattle, WA",
        email: "david.kim@email.com",
        aiScore: 8.9,
        trend: "Steady",
        trendDirection: "neutral",
        confidence: "92%",
        topPercentile: "Top 8%",
        interviewCount: 3,
        lastInterview: "Yesterday",
        skills: [
            { name: "Kubernetes", score: 9.3, level: "Expert", evidence: "Custom controllers, Helm charts, Istio" },
            { name: "Terraform", score: 9.0, level: "Expert", evidence: "Module design, state management, drift detection" },
            { name: "CI/CD", score: 8.8, level: "Advanced", evidence: "GitHub Actions, Jenkins pipelines, ArgoCD" },
            { name: "Go", score: 7.5, level: "Intermediate", evidence: "Scripting tools, basic CLI apps" },
            { name: "Security", score: 8.5, level: "Advanced", evidence: "IAM policies, secret management, scanning" }
        ],
        technicalDepth: [
            { label: "Conceptual Understanding", score: 9.1, dots: 10, filled: 9 },
            { label: "Problem Solving", score: 9.3, dots: 10, filled: 9 },
            { label: "System Design", score: 8.7, dots: 10, filled: 9 },
            { label: "Code Quality", score: 8.2, dots: 10, filled: 8 },
            { label: "Best Practices", score: 9.2, dots: 10, filled: 9 },
            { label: "Optimization", score: 8.8, dots: 10, filled: 9 }
        ],
        communication: {
            score: 7.5,
            details: [
                { label: "Clarity", score: 7.2 },
                { label: "Structure", score: 7.8 },
                { label: "Vocabulary", score: 7.5 },
                { label: "Confidence", score: 7.5 }
            ]
        },
        interviews: [
            {
                id: 1, round: "Round 1: Infrastructure Design", date: "Apr 01, 2024", duration: "60 min",
                focus: "High Availability K8s", score: 9.0, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Designed a multi-region K8s cluster with failover. Excellent knowledge of networking and ingress.",
                moments: [{ time: "10:30", seconds: 630, label: "Subnet planning" }, { time: "45:00", seconds: 2700, label: "Disaster recovery strategy" }]
            },
            {
                id: 2, round: "Round 2: Incident Response", date: "Apr 03, 2024", duration: "45 min",
                focus: "Debug Production Outage", score: 8.8, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Systematic debugging approach. Checked metrics first, then logs. Identified root cause (OOMKill) quickly.",
                moments: [{ time: "05:00", seconds: 300, label: "Checking Prometheus metrics" }, { time: "25:15", seconds: 1515, label: "Fixing resource limits" }]
            }
        ],
        aiAnalysis: {
            strengths: [
                { title: "Kubernetes", level: "Expert", desc: "Deep operational knowledge of K8s internals" },
                { title: "IaC", level: "Expert", desc: "Writes clean, reusable Terraform code" }
            ],
            weaknesses: [
                { title: "Coding", level: "Intermediate", desc: "Scripting is strong, but application dev skills are average" }
            ],
            hiringRecommendation: "HIRE",
            fitScore: "8.9/10",
            level: "Senior DevOps",
            confidence: "High",
            quote: "David is a rock-solid infrastructure engineer who brings stability and automation expertise."
        }
    }
];