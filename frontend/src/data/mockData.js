export const mockCandidates = [
    {
        id: "101",
        name: "Sarah Chen",
        role: "Senior Frontend Developer",
        experience: "5 yrs",
        location: "San Francisco",
        email: "sarah.chen@email.com",
        aiScore: 8.7,
        trend: "+12%",
        trendDirection: "up",
        confidence: "83%",
        topPercentile: "Top 12%",
        interviewCount: 3,
        lastInterview: "Yesterday",
        skills: [
            {
                name: "React",
                score: 9.2,
                level: "Advanced",
                evidence: "Virtual DOM reconciliation, custom hooks, performance profiling with DevTools, and advanced patterns"
            },
            {
                name: "TypeScript",
                score: 8.5,
                level: "Advanced",
                evidence: "Generic types, utility types, tsconfig optimization, and type safety patterns"
            },
            {
                name: "Node.js",
                score: 7.1,
                level: "Intermediate",
                evidence: "REST APIs, middleware, basic optimization, event loop understanding"
            },
            {
                name: "State Management",
                score: 8.8,
                level: "Advanced",
                evidence: "Redux Toolkit, Zustand, context vs redux tradeoffs, state synchronization"
            },
            {
                name: "Testing",
                score: 6.5,
                level: "Needs Work",
                evidence: "Jest basics, limited E2E experience, no TDD practice, needs more testing strategy"
            }
        ],
        technicalDepth: {
            conceptual: { score: 9.0, dots: 10, filled: 9 },
            problemSolving: { score: 8.7, dots: 10, filled: 8 },
            systemDesign: { score: 7.2, dots: 10, filled: 7 },
            codeQuality: { score: 8.5, dots: 10, filled: 8 },
            bestPractices: { score: 8.0, dots: 10, filled: 8 },
            optimization: { score: 8.9, dots: 10, filled: 9 }
        },
        communication: {
            score: 8.2,
            details: {
                clarity: 8.5,
                structure: 8.0,
                vocabulary: 8.3,
                confidence: 8.1
            }
        },
        interviews: [
            {
                round: "Round 1: Technical Screening",
                date: "Mar 15, 2024",
                duration: "45 min",
                focus: "React fundamentals, JavaScript concepts",
                summary: "Strong foundational knowledge. Explained closure, prototype chain confidently. React hooks implementation clear. Needs work on useMemo optimization and useCallback vs useMemo differentiation.",
                score: 8.2,
                moments: [
                    { time: "02:15", label: "Virtual DOM is a lightweight representation.." },
                    { time: "12:30", label: "Custom hook for API caching implementation" },
                    { time: "28:45", label: "Struggled with useCallback vs useMemo" }
                ]
            },
            {
                round: "Round 2: System Design",
                date: "Mar 22, 2024",
                duration: "60 min",
                focus: "Frontend architecture, performance optimization",
                summary: "Good understanding of component composition. Designed a dashboard with lazy loading, code splitting. Demonstrated knowledge of bundle optimization. Limited CDN/caching strategy knowledge. Could improve on large-scale state synchronization.",
                score: 8.5,
                moments: [
                    { time: "05:50", label: "Component breakdown strategy" },
                    { time: "32:15", label: "We can use React.lazy and Suspense..." },
                    { time: "48:00", label: "Unclear on service workers for offline" }
                ]
            },
            {
                round: "Round 3: Live Coding",
                date: "Mar 29, 2024",
                duration: "75 min",
                focus: "Build a search autocomplete component",
                summary: "Efficient implementation. Used debouncing, caching strategy. Clean component structure. Added loading states and error handling. Implemented keyboard navigation. Could improve accessibility (aria labels, screen reader support).",
                score: 9.1,
                moments: [
                    { time: "15:20", label: "Debounce implementation from scratch" },
                    { time: "42:10", label: "We should cache results to avoid..." },
                    { time: "63:00", label: "Wrote unit tests for the component" }
                ]
            }
        ],
        aiAnalysis: {
            strengths: [
                { type: "react", title: "React & Component Architecture", level: "Expert level", desc: "Clear understanding of rendering optimization, custom hooks, and component composition patterns" },
                { type: "puzzle", title: "Problem Solving", level: "Advanced", desc: "Methodical approach, considers edge cases, implements efficient solutions" },
                { type: "code", title: "Code Quality", level: "Strong", desc: "Clean, readable code with consistent patterns and naming conventions" }
            ],
            weaknesses: [
                { type: "test", title: "Testing", level: "Needs deeper practice", desc: "Jest basics, limited E2E experience. Recommend TDD workshop and Cypress practice" },
                { type: "system", title: "System Design", level: "Large-scale architecture", desc: "Good at component level, needs practice with enterprise frontend architecture" },
                { type: "access", title: "Accessibility", level: "Basic awareness", desc: "Knows importance, needs implementation experience with ARIA labels and screen readers" }
            ],
            hiringRecommendation: "STRONG CONSIDER",
            fitScore: "8.7/10",
            level: "Senior",
            confidence: "High",
            quote: "Sarah demonstrates strong React expertise with production experience. She thinks systematically about performance and user experience. Would be a valuable addition to any frontend team. Recommend upskilling in testing and accessibility practices to reach Staff Engineer level."
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
            { name: "Python", score: 8.9, level: "Advanced", evidence: "Asynchronous programming, decorators, generators" },
            { name: "AWS", score: 8.2, level: "Advanced", evidence: "Lambda, API Gateway, DynamoDB patterns" },
            { name: "Django", score: 8.7, level: "Advanced", evidence: "ORM optimization, middleware customization" }
        ],
        technicalDepth: {
            conceptual: { score: 9.2, dots: 10, filled: 9 },
            problemSolving: { score: 9.1, dots: 10, filled: 9 },
            systemDesign: { score: 8.5, dots: 10, filled: 8 },
            codeQuality: { score: 8.8, dots: 10, filled: 9 },
            bestPractices: { score: 9.0, dots: 10, filled: 9 },
            optimization: { score: 8.4, dots: 10, filled: 8 }
        },
        communication: {
            score: 8.2,
            details: {
                clarity: 8.0,
                structure: 8.5,
                vocabulary: 8.0,
                confidence: 8.3
            }
        },
        interviews: [],
        aiAnalysis: {
            strengths: [],
            weaknesses: [],
            hiringRecommendation: "MUST HIRE",
            fitScore: "9.1/10",
            level: "Staff",
            confidence: "Very High",
            quote: "Michael is a top-tier full stack engineer with deep knowledge of cloud-native architectures."
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
            { name: "PyTorch", score: 9.0, level: "Expert", evidence: "Custom datasets, distributed training" },
            { name: "LLMs", score: 8.7, level: "Advanced", evidence: "Fine-tuning Llama 2, prompt engineering" },
            { name: "RAG", score: 8.9, level: "Advanced", evidence: "Vector DB integration, retrieval optimization" }
        ],
        technicalDepth: {
            conceptual: { score: 9.5, dots: 10, filled: 9 },
            problemSolving: { score: 9.3, dots: 10, filled: 9 },
            systemDesign: { score: 8.8, dots: 10, filled: 9 },
            codeQuality: { score: 9.1, dots: 10, filled: 9 },
            bestPractices: { score: 8.9, dots: 10, filled: 9 },
            optimization: { score: 9.2, dots: 10, filled: 9 }
        },
        communication: {
            score: 7.8,
            details: {
                clarity: 7.5,
                structure: 8.0,
                vocabulary: 8.5,
                confidence: 7.2
            }
        },
        interviews: [],
        aiAnalysis: {
            strengths: [],
            weaknesses: [],
            hiringRecommendation: "STRONG CONSIDER",
            fitScore: "9.4/10",
            level: "Senior",
            confidence: "High",
            quote: "Alex has exceptional theoretical knowledge and practical experience with modern LLM stacks."
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
            { name: "Java", score: 7.5, level: "Intermediate", evidence: "Core Java, Collections framework" },
            { name: "Spring", score: 6.8, level: "Intermediate", evidence: "Spring Boot basics, dependency injection" },
            { name: "SQL", score: 7.9, level: "Advanced", evidence: "Complex joins, indexing strategies" }
        ],
        technicalDepth: {
            conceptual: { score: 7.5, dots: 10, filled: 7 },
            problemSolving: { score: 7.0, dots: 10, filled: 7 },
            systemDesign: { score: 6.2, dots: 10, filled: 6 },
            codeQuality: { score: 7.8, dots: 10, filled: 8 },
            bestPractices: { score: 7.5, dots: 10, filled: 7 },
            optimization: { score: 6.9, dots: 10, filled: 7 }
        },
        communication: {
            score: 7.9,
            details: {
                clarity: 8.0,
                structure: 7.5,
                vocabulary: 7.8,
                confidence: 8.2
            }
        },
        interviews: [],
        aiAnalysis: {
            strengths: [],
            weaknesses: [],
            hiringRecommendation: "CONSIDER",
            fitScore: "7.2/10",
            level: "Mid-level",
            confidence: "Medium",
            quote: "Priya shows good potential but needs more experience with distributed systems and architectural patterns."
        }
    }
];