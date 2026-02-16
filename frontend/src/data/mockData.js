export const mockCandidates = [
    {
        id: "101",
        name: "Rajendra Mallina",
        role: "Senior Frontend Developer",
        experience: "8 yrs",
        location: "Hyderabad, Telangana",
        email: "rajendram@email.com",
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
                id: 1, round: "Technical Interview 1", date: "Mar 15, 2024", duration: "45 min",
                focus: "React fundamentals", score: 8.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Strong foundational knowledge. Explained closure, prototype chain confidently.",
                moments: [{ time: "02:15", seconds: 135, label: "Virtual DOM explanation" }, { time: "12:30", seconds: 750, label: "Custom hook implementation" }]
            },
            {
                id: 2, round: "Technical Interview 2", date: "Mar 22, 2024", duration: "60 min",
                focus: "Frontend Architecture", score: 8.5, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Designed a dashboard with lazy loading. Good knowledge of bundle optimization.",
                moments: [{ time: "05:50", seconds: 350, label: "Component breakdown" }, { time: "32:15", seconds: 1935, label: "Lazy loading strategy" }]
            },
            {
                id: 3, round: "Technical Interview 3", date: "Mar 29, 2024", duration: "75 min",
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
            quote: "Rajendra demonstrates strong React expertise with production experience. Would be a valuable addition to any frontend team."
        }
    },
    {
        id: "102",
        name: "Venkat",
        role: "Full Stack Engineer",
        experience: "5 yrs",
        location: "Bangalore, Karnataka",
        email: "venkat12@email.com",
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
                id: 1, round: "Technical Interview 1", date: "Mar 10, 2024", duration: "60 min",
                focus: "Python Internals & DB Design", score: 9.2, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Exceptional grasp of Python memory management. Schema design was normalized and scalable.",
                moments: [{ time: "10:15", seconds: 615, label: "GIL explanation" }, { time: "45:20", seconds: 2720, label: "Indexing strategy" }]
            },
            {
                id: 2, round: "Technical Interview 2", date: "Mar 18, 2024", duration: "60 min",
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
            quote: "Venkata is a top-tier backend engineer who can comfortably handle full-stack tasks. His system design skills are exceptional."
        }
    },
    {
        id: "103",
        name: "Siva Ganesh",
        role: "AI/ML Engineer",
        experience: "4 yrs",
        location: "Mumbai, Maharashtra",
        email: "siva.ganesh@email.com",
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
                id: 1, round: "Technical Interview 1", date: "Mar 28, 2024", duration: "45 min",
                focus: "Transformers & Backprop", score: 9.5, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Flawless explanation of attention mechanisms and gradient descent nuances.",
                moments: [{ time: "05:00", seconds: 300, label: "Self-attention math" }, { time: "22:15", seconds: 1335, label: "Vanishing gradient fix" }]
            },
            {
                id: 2, round: "Technical Interview 2", date: "Apr 02, 2024", duration: "60 min",
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
            quote: "Siva is a rare find with deep theoretical knowledge and practical LLM deployment skills."
        }
    },
    {
        id: "104",
        name: "Priya Reddy",
        role: "Backend Engineer",
        experience: "3 yrs",
        location: "Chennai, Tamil Nadu",
        email: "priya.reddy@email.com",
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
                id: 1, round: "Technical Interview 1", date: "Mar 20, 2024", duration: "50 min",
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
        name: "Vikram Singh",
        role: "DevOps Engineer",
        experience: "6 yrs",
        location: "Pune, Maharashtra",
        email: "vikram.singh@email.com",
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
                id: 1, round: "Technical Interview 1", date: "Apr 01, 2024", duration: "60 min",
                focus: "High Availability K8s", score: 9.0, video: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                summary: "Designed a multi-region K8s cluster with failover. Excellent knowledge of networking and ingress.",
                moments: [{ time: "10:30", seconds: 630, label: "Subnet planning" }, { time: "45:00", seconds: 2700, label: "Disaster recovery strategy" }]
            },
            {
                id: 2, round: "Technical Interview 2", date: "Apr 03, 2024", duration: "45 min",
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
            quote: "Vikram is a rock-solid infrastructure engineer who brings stability and automation expertise."
        }
    },
    {
        "id": "106",
        "name": "Ayaan Verma",
        "role": "DevOps Engineer",
        "experience": "9 yrs",
        "location": "Kolkata, West Bengal",
        "email": "ayaan.verma@email.com",
        "aiScore": 9.2,
        "trend": "Needs deep dive",
        "trendDirection": "up",
        "confidence": "78%",
        "topPercentile": "Top 13%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Terraform",
                "score": 9.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Bash",
                "score": 8.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Kubernetes",
                "score": 7.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "GitLab CI",
                "score": 7.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 9.3,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 7.7,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.9
                },
                {
                    "label": "Structure",
                    "score": 6.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.4
                },
                {
                    "label": "Confidence",
                    "score": 6.3
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.2/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Ayaan Verma shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "107",
        "name": "Vihaan Ahmed",
        "role": "AI/ML Engineer",
        "experience": "3 yrs",
        "location": "Chandigarh, Punjab",
        "email": "vihaan.ahmed@email.com",
        "aiScore": 6.1,
        "trend": "New",
        "trendDirection": "neutral",
        "confidence": "89%",
        "topPercentile": "Top 30%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Python",
                "score": 7.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 6.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PyTorch",
                "score": 6.6,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.5,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 9.0,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.4
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 7.9
                },
                {
                    "label": "Confidence",
                    "score": 7.9
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.1/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Vihaan Ahmed shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "108",
        "name": "Amaya Chopra",
        "role": "Backend Developer",
        "experience": "10 yrs",
        "location": "Jaipur, Rajasthan",
        "email": "amaya.chopra@email.com",
        "aiScore": 7.7,
        "trend": "Top 5%",
        "trendDirection": "up",
        "confidence": "78%",
        "topPercentile": "Top 10%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Go",
                "score": 6.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redis",
                "score": 7.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Java",
                "score": 8.5,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PostgreSQL",
                "score": 8.8,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Django",
                "score": 6.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 8.4,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.6,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 8.4,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 7.4,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.3
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 8.2
                },
                {
                    "label": "Confidence",
                    "score": 8.6
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.7/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Amaya Chopra shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "109",
        "name": "Aayush Kumar",
        "role": "Frontend Developer",
        "experience": "4 yrs",
        "location": "Noida, Uttar Pradesh",
        "email": "aayush.kumar@email.com",
        "aiScore": 7.4,
        "trend": "Needs deep dive",
        "trendDirection": "down",
        "confidence": "88%",
        "topPercentile": "Top 8%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Vue.js",
                "score": 6.3,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "React",
                "score": 9.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redux",
                "score": 8.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 7.7,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.7
                },
                {
                    "label": "Structure",
                    "score": 7.7
                },
                {
                    "label": "Vocabulary",
                    "score": 9.0
                },
                {
                    "label": "Confidence",
                    "score": 7.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Aayush Kumar shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "110",
        "name": "Aarav Nair",
        "role": "Backend Developer",
        "experience": "7 yrs",
        "location": "Chennai, Tamil Nadu",
        "email": "aarav.nair@email.com",
        "aiScore": 9.6,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "77%",
        "topPercentile": "Top 22%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Django",
                "score": 9.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Spring Boot",
                "score": 9.4,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redis",
                "score": 7.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 6.4,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 6.9,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.5
                },
                {
                    "label": "Structure",
                    "score": 8.9
                },
                {
                    "label": "Vocabulary",
                    "score": 7.1
                },
                {
                    "label": "Confidence",
                    "score": 8.6
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.6/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Aarav Nair shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "111",
        "name": "Sarthak Patel",
        "role": "AI/ML Engineer",
        "experience": "4 yrs",
        "location": "Chandigarh, Punjab",
        "email": "sarthak.patel@email.com",
        "aiScore": 8.5,
        "trend": "HOT",
        "trendDirection": "neutral",
        "confidence": "85%",
        "topPercentile": "Top 21%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "PyTorch",
                "score": 7.2,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "NumPy",
                "score": 7.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 7.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 9.5,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 6.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.8
                },
                {
                    "label": "Structure",
                    "score": 9.3
                },
                {
                    "label": "Vocabulary",
                    "score": 9.1
                },
                {
                    "label": "Confidence",
                    "score": 7.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.5/10",
            "level": "Senior",
            "confidence": "Medium",
            "quote": "Sarthak Patel shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "112",
        "name": "Isha Mishra",
        "role": "DevOps Engineer",
        "experience": "7 yrs",
        "location": "Thiruvananthapuram, Kerala",
        "email": "isha.mishra@email.com",
        "aiScore": 6.6,
        "trend": "Needs deep dive",
        "trendDirection": "neutral",
        "confidence": "79%",
        "topPercentile": "Top 35%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Linux",
                "score": 7.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 8.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Kubernetes",
                "score": 6.2,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 9.8,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 6.4,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 6.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.4
                },
                {
                    "label": "Structure",
                    "score": 8.3
                },
                {
                    "label": "Vocabulary",
                    "score": 6.6
                },
                {
                    "label": "Confidence",
                    "score": 6.8
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Isha Mishra shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "113",
        "name": "Pranav Malhotra",
        "role": "Full Stack Engineer",
        "experience": "8 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "pranav.malhotra@email.com",
        "aiScore": 6.1,
        "trend": "Steady",
        "trendDirection": "neutral",
        "confidence": "86%",
        "topPercentile": "Top 12%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Node.js",
                "score": 9.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MongoDB",
                "score": 8.0,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 7.9,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "React",
                "score": 6.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.6,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.8
                },
                {
                    "label": "Structure",
                    "score": 6.2
                },
                {
                    "label": "Vocabulary",
                    "score": 7.7
                },
                {
                    "label": "Confidence",
                    "score": 7.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.1/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Pranav Malhotra shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "114",
        "name": "Preeti Shetty",
        "role": "Backend Developer",
        "experience": "10 yrs",
        "location": "Noida, Uttar Pradesh",
        "email": "preeti.shetty@email.com",
        "aiScore": 7.0,
        "trend": "+15%",
        "trendDirection": "up",
        "confidence": "85%",
        "topPercentile": "Top 38%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Node.js",
                "score": 9.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 7.9,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Go",
                "score": 8.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 9.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.1
                },
                {
                    "label": "Structure",
                    "score": 8.7
                },
                {
                    "label": "Vocabulary",
                    "score": 7.7
                },
                {
                    "label": "Confidence",
                    "score": 6.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.0/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Preeti Shetty shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "115",
        "name": "Darsh Kumar",
        "role": "Frontend Developer",
        "experience": "4 yrs",
        "location": "Kochi, Kerala",
        "email": "darsh.kumar@email.com",
        "aiScore": 7.8,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "83%",
        "topPercentile": "Top 10%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Redux",
                "score": 7.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Angular",
                "score": 7.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 7.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 7.6,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 8.4,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 6.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.6
                },
                {
                    "label": "Structure",
                    "score": 7.0
                },
                {
                    "label": "Vocabulary",
                    "score": 8.2
                },
                {
                    "label": "Confidence",
                    "score": 6.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.8/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Darsh Kumar shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "116",
        "name": "Suman Roy",
        "role": "Frontend Developer",
        "experience": "5 yrs",
        "location": "Jaipur, Rajasthan",
        "email": "suman.roy@email.com",
        "aiScore": 8.7,
        "trend": "New",
        "trendDirection": "up",
        "confidence": "82%",
        "topPercentile": "Top 40%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Angular",
                "score": 8.8,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "JavaScript",
                "score": 8.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Tailwind CSS",
                "score": 6.3,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redux",
                "score": 9.0,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 8.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.1,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.8
                },
                {
                    "label": "Structure",
                    "score": 9.3
                },
                {
                    "label": "Vocabulary",
                    "score": 6.6
                },
                {
                    "label": "Confidence",
                    "score": 8.9
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.7/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Suman Roy shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "117",
        "name": "Riya Kapoor",
        "role": "AI/ML Engineer",
        "experience": "4 yrs",
        "location": "Thiruvananthapuram, Kerala",
        "email": "riya.kapoor@email.com",
        "aiScore": 6.8,
        "trend": "Needs deep dive",
        "trendDirection": "down",
        "confidence": "93%",
        "topPercentile": "Top 25%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "PyTorch",
                "score": 8.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "NumPy",
                "score": 8.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Pandas",
                "score": 6.8,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "NLP",
                "score": 6.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.2,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 6.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.8
                },
                {
                    "label": "Structure",
                    "score": 7.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.6
                },
                {
                    "label": "Confidence",
                    "score": 6.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.8/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Riya Kapoor shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "118",
        "name": "Priya Naik",
        "role": "DevOps Engineer",
        "experience": "4 yrs",
        "location": "Jaipur, Rajasthan",
        "email": "priya.naik@email.com",
        "aiScore": 6.4,
        "trend": "Top 10%",
        "trendDirection": "down",
        "confidence": "73%",
        "topPercentile": "Top 36%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "GitLab CI",
                "score": 9.5,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Jenkins",
                "score": 6.9,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Bash",
                "score": 7.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 9.4,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "AWS",
                "score": 6.1,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 9.8,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.2,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 6.7,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.8
                },
                {
                    "label": "Structure",
                    "score": 7.6
                },
                {
                    "label": "Vocabulary",
                    "score": 6.5
                },
                {
                    "label": "Confidence",
                    "score": 9.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Priya Naik shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "119",
        "name": "Rohit Ahmed",
        "role": "AI/ML Engineer",
        "experience": "8 yrs",
        "location": "Kochi, Kerala",
        "email": "rohit.ahmed@email.com",
        "aiScore": 9.8,
        "trend": "+10%",
        "trendDirection": "neutral",
        "confidence": "71%",
        "topPercentile": "Top 8%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "PyTorch",
                "score": 7.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MLOps",
                "score": 8.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 6.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "NumPy",
                "score": 7.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 9.3,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 6.2,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.7
                },
                {
                    "label": "Structure",
                    "score": 6.0
                },
                {
                    "label": "Vocabulary",
                    "score": 7.7
                },
                {
                    "label": "Confidence",
                    "score": 7.6
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.8/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Rohit Ahmed shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "120",
        "name": "Seema Patel",
        "role": "AI/ML Engineer",
        "experience": "4 yrs",
        "location": "Jaipur, Rajasthan",
        "email": "seema.patel@email.com",
        "aiScore": 6.6,
        "trend": "HOT",
        "trendDirection": "down",
        "confidence": "81%",
        "topPercentile": "Top 10%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "OpenCV",
                "score": 9.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TensorFlow",
                "score": 7.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MLOps",
                "score": 8.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PyTorch",
                "score": 7.7,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 6.0,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 7.5,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 6.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.5
                },
                {
                    "label": "Structure",
                    "score": 6.3
                },
                {
                    "label": "Vocabulary",
                    "score": 8.2
                },
                {
                    "label": "Confidence",
                    "score": 6.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Seema Patel shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "121",
        "name": "Sanjay Chopra",
        "role": "DevOps Engineer",
        "experience": "11 yrs",
        "location": "Jaipur, Rajasthan",
        "email": "sanjay.chopra@email.com",
        "aiScore": 8.2,
        "trend": "Top 5%",
        "trendDirection": "down",
        "confidence": "72%",
        "topPercentile": "Top 37%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Jenkins",
                "score": 9.7,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 7.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Kubernetes",
                "score": 6.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 6.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 8.3,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.0
                },
                {
                    "label": "Structure",
                    "score": 7.2
                },
                {
                    "label": "Vocabulary",
                    "score": 6.4
                },
                {
                    "label": "Confidence",
                    "score": 9.3
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.2/10",
            "level": "Senior",
            "confidence": "Medium",
            "quote": "Sanjay Chopra shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "122",
        "name": "Shruti Tripathi",
        "role": "Full Stack Engineer",
        "experience": "5 yrs",
        "location": "Noida, Uttar Pradesh",
        "email": "shruti.tripathi@email.com",
        "aiScore": 8.0,
        "trend": "Top 5%",
        "trendDirection": "neutral",
        "confidence": "71%",
        "topPercentile": "Top 15%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Python",
                "score": 9.2,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "GraphQL",
                "score": 8.8,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Node.js",
                "score": 7.5,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 7.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 6.0,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 9.5,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 6.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.1
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 7.3
                },
                {
                    "label": "Confidence",
                    "score": 7.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "8.0/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Shruti Tripathi shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "123",
        "name": "Kabir Singh",
        "role": "Full Stack Engineer",
        "experience": "3 yrs",
        "location": "Delhi, NCR",
        "email": "kabir.singh@email.com",
        "aiScore": 7.5,
        "trend": "HOT",
        "trendDirection": "neutral",
        "confidence": "79%",
        "topPercentile": "Top 19%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Python",
                "score": 7.5,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "AWS",
                "score": 8.4,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MongoDB",
                "score": 6.4,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 9.1,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.2
                },
                {
                    "label": "Structure",
                    "score": 7.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.3
                },
                {
                    "label": "Confidence",
                    "score": 8.5
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.5/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Kabir Singh shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "124",
        "name": "Sai Shah",
        "role": "DevOps Engineer",
        "experience": "5 yrs",
        "location": "Kolkata, West Bengal",
        "email": "sai.shah@email.com",
        "aiScore": 7.3,
        "trend": "Top 10%",
        "trendDirection": "neutral",
        "confidence": "74%",
        "topPercentile": "Top 6%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Bash",
                "score": 6.1,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Kubernetes",
                "score": 6.7,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 9.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 7.7,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.6
                },
                {
                    "label": "Structure",
                    "score": 6.4
                },
                {
                    "label": "Vocabulary",
                    "score": 7.0
                },
                {
                    "label": "Confidence",
                    "score": 7.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.3/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Sai Shah shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "125",
        "name": "Sarthak Khan",
        "role": "Full Stack Engineer",
        "experience": "9 yrs",
        "location": "Bangalore, Karnataka",
        "email": "sarthak.khan@email.com",
        "aiScore": 9.4,
        "trend": "Steady",
        "trendDirection": "down",
        "confidence": "80%",
        "topPercentile": "Top 23%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "MongoDB",
                "score": 7.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 6.6,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 9.3,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 8.9,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 6.1,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.4
                },
                {
                    "label": "Structure",
                    "score": 8.8
                },
                {
                    "label": "Vocabulary",
                    "score": 6.0
                },
                {
                    "label": "Confidence",
                    "score": 6.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.4/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Sarthak Khan shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "126",
        "name": "Aadit Ghosh",
        "role": "Frontend Developer",
        "experience": "9 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "aadit.ghosh@email.com",
        "aiScore": 8.7,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "78%",
        "topPercentile": "Top 17%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Vue.js",
                "score": 6.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "HTML5",
                "score": 6.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 6.8,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 8.9,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 7.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.4
                },
                {
                    "label": "Structure",
                    "score": 8.0
                },
                {
                    "label": "Vocabulary",
                    "score": 6.3
                },
                {
                    "label": "Confidence",
                    "score": 6.5
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.7/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Aadit Ghosh shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "127",
        "name": "Ramesh Mishra",
        "role": "DevOps Engineer",
        "experience": "6 yrs",
        "location": "Kochi, Kerala",
        "email": "ramesh.mishra@email.com",
        "aiScore": 6.8,
        "trend": "Top 10%",
        "trendDirection": "neutral",
        "confidence": "80%",
        "topPercentile": "Top 1%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Bash",
                "score": 6.7,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 9.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Ansible",
                "score": 8.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Prometheus",
                "score": 7.3,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Linux",
                "score": 7.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.4,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 9.5,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 8.4,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 6.3,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.6
                },
                {
                    "label": "Structure",
                    "score": 8.7
                },
                {
                    "label": "Vocabulary",
                    "score": 8.4
                },
                {
                    "label": "Confidence",
                    "score": 7.3
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.8/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Ramesh Mishra shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "128",
        "name": "Dhruv Dsouza",
        "role": "Frontend Developer",
        "experience": "3 yrs",
        "location": "Kochi, Kerala",
        "email": "dhruv.dsouza@email.com",
        "aiScore": 7.2,
        "trend": "+15%",
        "trendDirection": "up",
        "confidence": "74%",
        "topPercentile": "Top 4%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Vue.js",
                "score": 6.7,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Tailwind CSS",
                "score": 6.5,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Angular",
                "score": 7.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 9.6,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 6.4,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.4,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.1
                },
                {
                    "label": "Structure",
                    "score": 7.8
                },
                {
                    "label": "Vocabulary",
                    "score": 6.4
                },
                {
                    "label": "Confidence",
                    "score": 7.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.2/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Dhruv Dsouza shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "129",
        "name": "Saanvi Deshpande",
        "role": "DevOps Engineer",
        "experience": "4 yrs",
        "location": "Chennai, Tamil Nadu",
        "email": "saanvi.deshpande@email.com",
        "aiScore": 6.6,
        "trend": "+10%",
        "trendDirection": "neutral",
        "confidence": "73%",
        "topPercentile": "Top 8%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Kubernetes",
                "score": 8.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 8.1,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "GitLab CI",
                "score": 7.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Prometheus",
                "score": 7.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 6.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.4
                },
                {
                    "label": "Structure",
                    "score": 7.3
                },
                {
                    "label": "Vocabulary",
                    "score": 6.3
                },
                {
                    "label": "Confidence",
                    "score": 6.9
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Saanvi Deshpande shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "130",
        "name": "Monika Singh",
        "role": "AI/ML Engineer",
        "experience": "1 yrs",
        "location": "Pune, Maharashtra",
        "email": "monika.singh@email.com",
        "aiScore": 8.0,
        "trend": "+10%",
        "trendDirection": "neutral",
        "confidence": "88%",
        "topPercentile": "Top 7%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "LLMs",
                "score": 6.8,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 6.1,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "OpenCV",
                "score": 7.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 7.0,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Pandas",
                "score": 6.0,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 9.8,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.0,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.0,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.3
                },
                {
                    "label": "Structure",
                    "score": 7.1
                },
                {
                    "label": "Vocabulary",
                    "score": 7.9
                },
                {
                    "label": "Confidence",
                    "score": 8.8
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "8.0/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Monika Singh shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "131",
        "name": "Rekha Kulkarni",
        "role": "Frontend Developer",
        "experience": "11 yrs",
        "location": "Hyderabad, Telangana",
        "email": "rekha.kulkarni@email.com",
        "aiScore": 7.4,
        "trend": "Steady",
        "trendDirection": "neutral",
        "confidence": "76%",
        "topPercentile": "Top 16%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "JavaScript",
                "score": 9.3,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "CSS3",
                "score": 8.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Vue.js",
                "score": 7.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "React",
                "score": 7.9,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redux",
                "score": 6.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.3,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 9.6,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 9.4,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.0
                },
                {
                    "label": "Structure",
                    "score": 6.3
                },
                {
                    "label": "Vocabulary",
                    "score": 6.0
                },
                {
                    "label": "Confidence",
                    "score": 9.1
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Rekha Kulkarni shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "132",
        "name": "Pooja Kumar",
        "role": "Frontend Developer",
        "experience": "6 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "pooja.kumar@email.com",
        "aiScore": 7.2,
        "trend": "Top 5%",
        "trendDirection": "neutral",
        "confidence": "90%",
        "topPercentile": "Top 40%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "CSS3",
                "score": 9.7,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 9.3,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "React",
                "score": 9.2,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Webpack",
                "score": 8.1,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 8.9,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 7.6,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 8.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.2
                },
                {
                    "label": "Structure",
                    "score": 6.9
                },
                {
                    "label": "Vocabulary",
                    "score": 6.2
                },
                {
                    "label": "Confidence",
                    "score": 7.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.2/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Pooja Kumar shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "133",
        "name": "Pari Hegde",
        "role": "Frontend Developer",
        "experience": "9 yrs",
        "location": "Gurgaon, Haryana",
        "email": "pari.hegde@email.com",
        "aiScore": 6.7,
        "trend": "HOT",
        "trendDirection": "neutral",
        "confidence": "71%",
        "topPercentile": "Top 5%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "TypeScript",
                "score": 9.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Angular",
                "score": 7.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Tailwind CSS",
                "score": 7.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "JavaScript",
                "score": 6.5,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Vue.js",
                "score": 6.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.4,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.6,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 7.2,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 6.8,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.0
                },
                {
                    "label": "Structure",
                    "score": 7.5
                },
                {
                    "label": "Vocabulary",
                    "score": 6.0
                },
                {
                    "label": "Confidence",
                    "score": 8.9
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.7/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Pari Hegde shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "134",
        "name": "Amaya Sinha",
        "role": "Full Stack Engineer",
        "experience": "10 yrs",
        "location": "Gurgaon, Haryana",
        "email": "amaya.sinha@email.com",
        "aiScore": 9.3,
        "trend": "+10%",
        "trendDirection": "down",
        "confidence": "88%",
        "topPercentile": "Top 36%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "TypeScript",
                "score": 8.9,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 8.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Node.js",
                "score": 6.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 8.9,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 7.1,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.0
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 8.5
                },
                {
                    "label": "Confidence",
                    "score": 8.1
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.3/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Amaya Sinha shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "135",
        "name": "Amyra Chopra",
        "role": "AI/ML Engineer",
        "experience": "5 yrs",
        "location": "Delhi, NCR",
        "email": "amyra.chopra@email.com",
        "aiScore": 8.8,
        "trend": "Top 10%",
        "trendDirection": "up",
        "confidence": "79%",
        "topPercentile": "Top 40%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "TensorFlow",
                "score": 9.4,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PyTorch",
                "score": 9.7,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 9.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 8.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MLOps",
                "score": 7.9,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 7.9,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.6
                },
                {
                    "label": "Structure",
                    "score": 8.3
                },
                {
                    "label": "Vocabulary",
                    "score": 9.4
                },
                {
                    "label": "Confidence",
                    "score": 8.8
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.8/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Amyra Chopra shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "136",
        "name": "Kavya Mehta",
        "role": "Full Stack Engineer",
        "experience": "3 yrs",
        "location": "Chandigarh, Punjab",
        "email": "kavya.mehta@email.com",
        "aiScore": 7.4,
        "trend": "HOT",
        "trendDirection": "up",
        "confidence": "90%",
        "topPercentile": "Top 34%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "TypeScript",
                "score": 9.7,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MongoDB",
                "score": 9.0,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 7.8,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Problem Solving",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.8,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.9
                },
                {
                    "label": "Structure",
                    "score": 7.5
                },
                {
                    "label": "Vocabulary",
                    "score": 9.4
                },
                {
                    "label": "Confidence",
                    "score": 8.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Kavya Mehta shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "137",
        "name": "Dhruv Iyer",
        "role": "AI/ML Engineer",
        "experience": "8 yrs",
        "location": "Indore, Madhya Pradesh",
        "email": "dhruv.iyer@email.com",
        "aiScore": 7.3,
        "trend": "Top 5%",
        "trendDirection": "up",
        "confidence": "91%",
        "topPercentile": "Top 31%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "MLOps",
                "score": 7.4,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 9.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PyTorch",
                "score": 9.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 8.9,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.1
                },
                {
                    "label": "Structure",
                    "score": 7.2
                },
                {
                    "label": "Vocabulary",
                    "score": 6.6
                },
                {
                    "label": "Confidence",
                    "score": 6.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.3/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Dhruv Iyer shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "138",
        "name": "Shaurya Dubey",
        "role": "AI/ML Engineer",
        "experience": "9 yrs",
        "location": "Bangalore, Karnataka",
        "email": "shaurya.dubey@email.com",
        "aiScore": 8.0,
        "trend": "Needs deep dive",
        "trendDirection": "up",
        "confidence": "87%",
        "topPercentile": "Top 40%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "NumPy",
                "score": 6.3,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TensorFlow",
                "score": 8.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MLOps",
                "score": 6.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "LLMs",
                "score": 7.1,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 7.5,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 7.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.1
                },
                {
                    "label": "Structure",
                    "score": 6.3
                },
                {
                    "label": "Vocabulary",
                    "score": 7.0
                },
                {
                    "label": "Confidence",
                    "score": 9.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "8.0/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Shaurya Dubey shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "139",
        "name": "Dhruv Khan",
        "role": "DevOps Engineer",
        "experience": "9 yrs",
        "location": "Noida, Uttar Pradesh",
        "email": "dhruv.khan@email.com",
        "aiScore": 6.6,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "84%",
        "topPercentile": "Top 34%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Bash",
                "score": 8.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 9.0,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Linux",
                "score": 9.6,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Code Quality",
                "score": 9.8,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 9.0,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.6
                },
                {
                    "label": "Structure",
                    "score": 9.4
                },
                {
                    "label": "Vocabulary",
                    "score": 8.3
                },
                {
                    "label": "Confidence",
                    "score": 8.6
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Dhruv Khan shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "140",
        "name": "Isha Tripathi",
        "role": "Backend Developer",
        "experience": "5 yrs",
        "location": "Pune, Maharashtra",
        "email": "isha.tripathi@email.com",
        "aiScore": 7.1,
        "trend": "New",
        "trendDirection": "down",
        "confidence": "83%",
        "topPercentile": "Top 36%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Django",
                "score": 9.5,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Spring Boot",
                "score": 7.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redis",
                "score": 8.0,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MongoDB",
                "score": 8.9,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PostgreSQL",
                "score": 8.6,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 9.3,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 9.3,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 9.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.0
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 6.5
                },
                {
                    "label": "Confidence",
                    "score": 8.7
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.1/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Isha Tripathi shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "141",
        "name": "Aryan Reddy",
        "role": "Frontend Developer",
        "experience": "8 yrs",
        "location": "Kolkata, West Bengal",
        "email": "aryan.reddy@email.com",
        "aiScore": 7.4,
        "trend": "New",
        "trendDirection": "down",
        "confidence": "97%",
        "topPercentile": "Top 21%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "TypeScript",
                "score": 7.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "CSS3",
                "score": 7.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "HTML5",
                "score": 7.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "JavaScript",
                "score": 6.7,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Vue.js",
                "score": 9.7,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.5,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 8.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.6
                },
                {
                    "label": "Structure",
                    "score": 8.8
                },
                {
                    "label": "Vocabulary",
                    "score": 6.2
                },
                {
                    "label": "Confidence",
                    "score": 6.8
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Aryan Reddy shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "142",
        "name": "Riya Patel",
        "role": "DevOps Engineer",
        "experience": "3 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "riya.patel@email.com",
        "aiScore": 8.8,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "70%",
        "topPercentile": "Top 12%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Prometheus",
                "score": 6.5,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Linux",
                "score": 7.6,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 8.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Bash",
                "score": 6.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Ansible",
                "score": 7.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.7,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Best Practices",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 7.6,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.7
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 6.3
                },
                {
                    "label": "Confidence",
                    "score": 7.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.5,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.8/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Riya Patel shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "143",
        "name": "Riya Pawar",
        "role": "Full Stack Engineer",
        "experience": "12 yrs",
        "location": "Kolkata, West Bengal",
        "email": "riya.pawar@email.com",
        "aiScore": 7.4,
        "trend": "Top 5%",
        "trendDirection": "neutral",
        "confidence": "74%",
        "topPercentile": "Top 13%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "GraphQL",
                "score": 9.1,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Django",
                "score": 7.9,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MongoDB",
                "score": 8.3,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 7.0,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.2
                },
                {
                    "label": "Structure",
                    "score": 9.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.5
                },
                {
                    "label": "Confidence",
                    "score": 9.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.4/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Riya Pawar shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "144",
        "name": "Rohit Pandey",
        "role": "DevOps Engineer",
        "experience": "8 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "rohit.pandey@email.com",
        "aiScore": 7.6,
        "trend": "Steady",
        "trendDirection": "neutral",
        "confidence": "77%",
        "topPercentile": "Top 33%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Linux",
                "score": 8.5,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Prometheus",
                "score": 6.5,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "GitLab CI",
                "score": 9.7,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "AWS",
                "score": 6.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 7.8,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 9.6,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 8.6,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 7.3,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.4
                },
                {
                    "label": "Structure",
                    "score": 6.6
                },
                {
                    "label": "Vocabulary",
                    "score": 7.0
                },
                {
                    "label": "Confidence",
                    "score": 8.3
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Rohit Pandey shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "145",
        "name": "Sarthak Datta",
        "role": "Backend Developer",
        "experience": "11 yrs",
        "location": "Noida, Uttar Pradesh",
        "email": "sarthak.datta@email.com",
        "aiScore": 8.5,
        "trend": "New",
        "trendDirection": "neutral",
        "confidence": "87%",
        "topPercentile": "Top 6%",
        "interviewCount": 1,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "MongoDB",
                "score": 8.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 6.2,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Django",
                "score": 6.6,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Express",
                "score": 8.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 9.5,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 7.3,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.3
                },
                {
                    "label": "Structure",
                    "score": 7.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.4
                },
                {
                    "label": "Confidence",
                    "score": 6.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.6,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.5/10",
            "level": "Senior",
            "confidence": "Medium",
            "quote": "Sarthak Datta shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "146",
        "name": "Sai Dsouza",
        "role": "DevOps Engineer",
        "experience": "7 yrs",
        "location": "Kochi, Kerala",
        "email": "sai.dsouza@email.com",
        "aiScore": 7.6,
        "trend": "Steady",
        "trendDirection": "neutral",
        "confidence": "98%",
        "topPercentile": "Top 3%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Ansible",
                "score": 8.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Bash",
                "score": 9.8,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Kubernetes",
                "score": 7.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "AWS",
                "score": 7.6,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 8.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 6.9,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.4
                },
                {
                    "label": "Structure",
                    "score": 9.2
                },
                {
                    "label": "Vocabulary",
                    "score": 8.7
                },
                {
                    "label": "Confidence",
                    "score": 8.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Sai Dsouza shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "147",
        "name": "Aditya Yadav",
        "role": "Backend Developer",
        "experience": "7 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "aditya.yadav@email.com",
        "aiScore": 6.5,
        "trend": "Steady",
        "trendDirection": "up",
        "confidence": "70%",
        "topPercentile": "Top 32%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "MongoDB",
                "score": 9.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redis",
                "score": 7.8,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 7.5,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Spring Boot",
                "score": 7.8,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.6,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 9.1,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Best Practices",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 7.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.6
                },
                {
                    "label": "Structure",
                    "score": 8.6
                },
                {
                    "label": "Vocabulary",
                    "score": 8.8
                },
                {
                    "label": "Confidence",
                    "score": 8.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.8,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.5/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Aditya Yadav shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "148",
        "name": "Avni Singh",
        "role": "Full Stack Engineer",
        "experience": "11 yrs",
        "location": "Visakhapatnam, Andhra Pradesh",
        "email": "avni.singh@email.com",
        "aiScore": 6.7,
        "trend": "+10%",
        "trendDirection": "neutral",
        "confidence": "80%",
        "topPercentile": "Top 4%",
        "interviewCount": 5,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Django",
                "score": 8.7,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Docker",
                "score": 6.2,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Python",
                "score": 8.5,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 8.1,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 6.2,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 6.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.9
                },
                {
                    "label": "Structure",
                    "score": 6.6
                },
                {
                    "label": "Vocabulary",
                    "score": 8.5
                },
                {
                    "label": "Confidence",
                    "score": 7.2
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.7/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Avni Singh shows good potential for the Full Stack Engineer position."
        }
    },
    {
        "id": "149",
        "name": "Sanjay Bose",
        "role": "AI/ML Engineer",
        "experience": "9 yrs",
        "location": "Chennai, Tamil Nadu",
        "email": "sanjay.bose@email.com",
        "aiScore": 8.2,
        "trend": "+15%",
        "trendDirection": "up",
        "confidence": "90%",
        "topPercentile": "Top 8%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Python",
                "score": 7.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "MLOps",
                "score": 9.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "PyTorch",
                "score": 8.4,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Pandas",
                "score": 9.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Scikit-learn",
                "score": 8.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.2,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 9.4,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Optimization",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 7.8,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.9
                },
                {
                    "label": "Structure",
                    "score": 7.0
                },
                {
                    "label": "Vocabulary",
                    "score": 7.3
                },
                {
                    "label": "Confidence",
                    "score": 8.5
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "8.2/10",
            "level": "Senior",
            "confidence": "Medium",
            "quote": "Sanjay Bose shows good potential for the AI/ML Engineer position."
        }
    },
    {
        "id": "150",
        "name": "Raghav Gupta",
        "role": "DevOps Engineer",
        "experience": "3 yrs",
        "location": "Pune, Maharashtra",
        "email": "raghav.gupta@email.com",
        "aiScore": 6.2,
        "trend": "HOT",
        "trendDirection": "up",
        "confidence": "78%",
        "topPercentile": "Top 5%",
        "interviewCount": 4,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "GitLab CI",
                "score": 7.5,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Ansible",
                "score": 9.0,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Bash",
                "score": 6.5,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Prometheus",
                "score": 7.2,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Terraform",
                "score": 6.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 6.9,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Problem Solving",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "System Design",
                "score": 6.3,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 7.3,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 6.8,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.7
                },
                {
                    "label": "Structure",
                    "score": 7.0
                },
                {
                    "label": "Vocabulary",
                    "score": 7.0
                },
                {
                    "label": "Confidence",
                    "score": 7.5
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.3,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.2/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Raghav Gupta shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "151",
        "name": "Aarav Rao",
        "role": "Frontend Developer",
        "experience": "2 yrs",
        "location": "Thiruvananthapuram, Kerala",
        "email": "aarav.rao@email.com",
        "aiScore": 7.8,
        "trend": "+10%",
        "trendDirection": "neutral",
        "confidence": "95%",
        "topPercentile": "Top 3%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "JavaScript",
                "score": 7.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "CSS3",
                "score": 6.6,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 7.8,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 8.3,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 6.0,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.2,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 6.1,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Optimization",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 8.4,
            "details": [
                {
                    "label": "Clarity",
                    "score": 6.5
                },
                {
                    "label": "Structure",
                    "score": 8.5
                },
                {
                    "label": "Vocabulary",
                    "score": 6.1
                },
                {
                    "label": "Confidence",
                    "score": 7.5
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.9,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.8/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Aarav Rao shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "152",
        "name": "Kartik Dsouza",
        "role": "Backend Developer",
        "experience": "2 yrs",
        "location": "Chandigarh, Punjab",
        "email": "kartik.dsouza@email.com",
        "aiScore": 9.6,
        "trend": "+15%",
        "trendDirection": "down",
        "confidence": "83%",
        "topPercentile": "Top 28%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Express",
                "score": 7.7,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Django",
                "score": 9.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Spring Boot",
                "score": 9.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redis",
                "score": 7.4,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Node.js",
                "score": 6.5,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.5,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "System Design",
                "score": 7.4,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 8.0,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            }
        ],
        "communication": {
            "score": 9.3,
            "details": [
                {
                    "label": "Clarity",
                    "score": 9.0
                },
                {
                    "label": "Structure",
                    "score": 7.9
                },
                {
                    "label": "Vocabulary",
                    "score": 8.7
                },
                {
                    "label": "Confidence",
                    "score": 7.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "STRONG CONSIDER",
            "fitScore": "9.6/10",
            "level": "Senior",
            "confidence": "High",
            "quote": "Kartik Dsouza shows good potential for the Backend Developer position."
        }
    },
    {
        "id": "153",
        "name": "Priya Kulkarni",
        "role": "DevOps Engineer",
        "experience": "5 yrs",
        "location": "Chennai, Tamil Nadu",
        "email": "priya.kulkarni@email.com",
        "aiScore": 7.6,
        "trend": "Steady",
        "trendDirection": "down",
        "confidence": "78%",
        "topPercentile": "Top 18%",
        "interviewCount": 2,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Jenkins",
                "score": 7.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Ansible",
                "score": 7.9,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "AWS",
                "score": 8.6,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Linux",
                "score": 6.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.8,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 6.8,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 9.6,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Code Quality",
                "score": 6.4,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Best Practices",
                "score": 8.9,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            }
        ],
        "communication": {
            "score": 7.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.3
                },
                {
                    "label": "Structure",
                    "score": 8.7
                },
                {
                    "label": "Vocabulary",
                    "score": 6.0
                },
                {
                    "label": "Confidence",
                    "score": 9.1
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.6/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Priya Kulkarni shows good potential for the DevOps Engineer position."
        }
    },
    {
        "id": "154",
        "name": "Dev Nair",
        "role": "Frontend Developer",
        "experience": "3 yrs",
        "location": "Kochi, Kerala",
        "email": "dev.nair@email.com",
        "aiScore": 6.3,
        "trend": "Needs deep dive",
        "trendDirection": "up",
        "confidence": "78%",
        "topPercentile": "Top 12%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "Vue.js",
                "score": 6.1,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "JavaScript",
                "score": 8.3,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "TypeScript",
                "score": 6.9,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redux",
                "score": 9.4,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Angular",
                "score": 6.8,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 9.7,
                "dots": 10,
                "filled": 9
            },
            {
                "label": "Problem Solving",
                "score": 6.7,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "System Design",
                "score": 6.6,
                "dots": 10,
                "filled": 6
            },
            {
                "label": "Code Quality",
                "score": 8.1,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 8.8,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Optimization",
                "score": 9.0,
                "dots": 10,
                "filled": 9
            }
        ],
        "communication": {
            "score": 7.5,
            "details": [
                {
                    "label": "Clarity",
                    "score": 8.7
                },
                {
                    "label": "Structure",
                    "score": 7.1
                },
                {
                    "label": "Vocabulary",
                    "score": 8.4
                },
                {
                    "label": "Confidence",
                    "score": 6.0
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.1,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 8.2,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "6.3/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Dev Nair shows good potential for the Frontend Developer position."
        }
    },
    {
        "id": "155",
        "name": "Rekha Mishra",
        "role": "Frontend Developer",
        "experience": "9 yrs",
        "location": "Chandigarh, Punjab",
        "email": "rekha.mishra@email.com",
        "aiScore": 7.5,
        "trend": "HOT",
        "trendDirection": "neutral",
        "confidence": "86%",
        "topPercentile": "Top 27%",
        "interviewCount": 3,
        "lastInterview": "Recently",
        "skills": [
            {
                "name": "HTML5",
                "score": 7.4,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Vue.js",
                "score": 6.5,
                "level": "Advanced",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Angular",
                "score": 8.0,
                "level": "Beginner",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "Redux",
                "score": 6.7,
                "level": "Intermediate",
                "evidence": "Demonstrated through projects"
            },
            {
                "name": "JavaScript",
                "score": 6.9,
                "level": "Expert",
                "evidence": "Demonstrated through projects"
            }
        ],
        "technicalDepth": [
            {
                "label": "Conceptual Understanding",
                "score": 7.1,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Problem Solving",
                "score": 8.7,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "System Design",
                "score": 7.0,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Code Quality",
                "score": 8.5,
                "dots": 10,
                "filled": 8
            },
            {
                "label": "Best Practices",
                "score": 7.9,
                "dots": 10,
                "filled": 7
            },
            {
                "label": "Optimization",
                "score": 6.2,
                "dots": 10,
                "filled": 6
            }
        ],
        "communication": {
            "score": 7.2,
            "details": [
                {
                    "label": "Clarity",
                    "score": 7.3
                },
                {
                    "label": "Structure",
                    "score": 8.5
                },
                {
                    "label": "Vocabulary",
                    "score": 6.3
                },
                {
                    "label": "Confidence",
                    "score": 8.4
                }
            ]
        },
        "interviews": [
            {
                "id": 1,
                "round": "Round 1: Screening",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 7.4,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 2,
                "round": "Round 2: Technical",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 3,
                "round": "Round 3: System Design",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 9.0,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            },
            {
                "id": 4,
                "round": "Round 4: Managerial",
                "date": "Recent",
                "duration": "45-60 min",
                "focus": "General Assessment",
                "score": 6.7,
                "video": "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
                "summary": "Candidate performed well.",
                "moments": []
            }
        ],
        "aiAnalysis": {
            "strengths": [
                {
                    "title": "Core Skills",
                    "level": "Strong",
                    "desc": "Solid foundation in required technologies"
                }
            ],
            "weaknesses": [
                {
                    "title": "Niche Tools",
                    "level": "Intermediate",
                    "desc": "Could improve on specific tools"
                }
            ],
            "hiringRecommendation": "CONSIDER",
            "fitScore": "7.5/10",
            "level": "Mid-level",
            "confidence": "Medium",
            "quote": "Rekha Mishra shows good potential for the Frontend Developer position."
        }
    }
];