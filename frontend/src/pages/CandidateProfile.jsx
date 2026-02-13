import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaArrowLeft, FaBrain, FaUserCircle, FaClipboardCheck, FaShareAlt,
    FaCalendarAlt, FaDownload, FaMapMarkerAlt, FaEnvelope, FaChartLine,
    FaTrophy, FaCheckCircle, FaExclamationTriangle, FaPlayCircle,
    FaCode, FaChartBar, FaStar, FaFileAlt, FaCommentDots, FaRulerCombined,
    FaBook, FaDumbbell, FaVideo, FaReact, FaPuzzlePiece, FaMagic,
    FaVial, FaBuilding, FaWheelchair, FaBullseye, FaChevronDown, FaTimes
} from 'react-icons/fa';

const CandidateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // States
    const [activeTab, setActiveTab] = useState('skills');
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    // State to track the current video URL for each round (UPDATED WITH NEW LINK)
    const [videoUrls, setVideoUrls] = useState({
        1: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
        2: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG",
        3: "https://www.youtube.com/embed/mQ8HlG3Tse4?si=d2uuPpgEANVIVtmG"
    });

    const closeModal = () => setSelectedFeedback(null);

    // Function to jump video to a specific time (UPDATED WITH NEW LINK ID)
    const jumpToTime = (round, seconds) => {
        setVideoUrls(prev => ({
            ...prev,
            [round]: `https://www.youtube.com/embed/mQ8HlG3Tse4?start=${seconds}&autoplay=1`
        }));
    };

    return (
        <div className="container" style={{ position: 'relative' }}>

            {/* ================= FEEDBACK MODAL (POPUP) ================= */}
            {selectedFeedback && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                }}>
                    <div style={{ background: 'white', padding: '32px', borderRadius: '16px', maxWidth: '500px', width: '90%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontSize: '20px' }}>
                                <FaBrain color="var(--primary-blue)" /> AI Feedback Summary
                            </h3>
                            <button onClick={closeModal} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}>
                                <FaTimes />
                            </button>
                        </div>
                        <p style={{ color: '#334155', lineHeight: '1.6', fontSize: '15px', background: '#f8fafc', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--primary-blue)' }}>
                            {selectedFeedback}
                        </p>
                        <div style={{ marginTop: '24px', textAlign: 'right' }}>
                            <button onClick={closeModal} className="quick-action-btn" style={{ display: 'inline-flex', background: 'var(--primary-blue)', color: 'white', border: 'none' }}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 1. HEADER */}
            <div className="header">
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px' }}>
                    <FaBrain style={{ color: 'var(--primary-blue)' }} />
                    <span>AI Evolution</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '8px 16px', borderRadius: '40px', color: 'var(--text-main)', fontSize: '14px' }}>
                    <FaUserCircle size={18} /> Admin <FaChevronDown size={12} />
                </div>
            </div>

            {/* 2. BACK NAVIGATION */}
            <div className="back-nav">
                <div
                    onClick={() => navigate('/dashboard')}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-blue)', fontWeight: '500', cursor: 'pointer' }}
                >
                    <FaArrowLeft /> Back to Candidates
                </div>
            </div>

            {/* 3. PROFILE HEADER */}
            <div className="profile-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-orange))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        SC
                    </div>
                    <div>
                        <h1 style={{ fontSize: '28px', margin: '0 0 4px 0', color: 'var(--text-main)' }}>Sarah Chen</h1>
                        <p style={{ color: '#475569', margin: 0, fontSize: '16px' }}>Senior Frontend Developer • 5 years experience • MCS Stanford</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '8px', color: '#475569', fontSize: '14px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaMapMarkerAlt /> San Francisco</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaEnvelope /> sarah.chen@email.com</span>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--text-main)' }}>8.7<span style={{ fontSize: '14px', color: '#64748b' }}>/10</span></div>
                    <div style={{ padding: '4px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FaTrophy /> Top 12% of candidates
                    </div>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px', fontSize: '13px', color: '#64748b' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#16a34a', fontWeight: '600' }}><FaChartLine /> +12% trend</span>
                        <span>•</span>
                        <span>Confidence: 83%</span>
                    </div>
                </div>
            </div>

            {/* 4. TABS / QUICK ACTIONS */}
            <div className="quick-actions">
                <div
                    className="quick-action-btn"
                    style={{
                        background: activeTab === 'skills' ? 'var(--primary-blue)' : '#f8fafc',
                        color: activeTab === 'skills' ? 'white' : 'var(--text-main)',
                        borderColor: activeTab === 'skills' ? 'var(--primary-blue)' : 'var(--border-light)'
                    }}
                    onClick={() => setActiveTab('skills')}
                >
                    <FaBrain /> Skill Proficiency
                </div>
                <div
                    className="quick-action-btn"
                    style={{
                        background: activeTab === 'interviews' ? 'var(--primary-blue)' : '#f8fafc',
                        color: activeTab === 'interviews' ? 'white' : 'var(--text-main)',
                        borderColor: activeTab === 'interviews' ? 'var(--primary-blue)' : 'var(--border-light)'
                    }}
                    onClick={() => setActiveTab('interviews')}
                >
                    <FaVideo /> Interviews & AI Summary
                </div>
                <div className="quick-action-btn" onClick={() => alert("Backend Not Connected: Downloading Mock Resume...")}>
                    <FaDownload /> Download Resume
                </div>
            </div>

            {/* 5. MAIN GRID CONTENT */}
            <div className="profile-content">

                {/* ================= TAB 1: SKILLS & DEPTH ================= */}
                {activeTab === 'skills' && (
                    <>
                        <div className="section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', marginBottom: '20px' }}>
                                <FaBrain size={24} color="var(--primary-blue)" /> SKILL PROFICIENCY
                                <span style={{ fontSize: '12px', background: '#e0f2fe', padding: '4px 10px', borderRadius: '20px', marginLeft: '12px', color: 'var(--primary-blue)' }}>AI-Verified from 3 interviews</span>
                            </div>

                            {/* Skill 1 */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>React</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>9.2/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '92%' }}></div></div>
                                <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', color: '#475569' }}>Advanced</span>
                                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                    "Virtual DOM reconciliation, custom hooks, performance profiling with DevTools, and advanced patterns"
                                </div>
                            </div>

                            {/* Skill 2 */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>TypeScript</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>8.5/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '85%' }}></div></div>
                                <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', color: '#475569' }}>Advanced</span>
                                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                    "Generic types, utility types, tsconfig optimization, and type safety patterns"
                                </div>
                            </div>

                            {/* Skill 3 */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Node.js</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>7.1/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '71%' }}></div></div>
                                <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', color: '#475569' }}>Intermediate</span>
                                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                    "REST APIs, middleware, basic optimization, event loop understanding"
                                </div>
                            </div>

                            {/* Skill 4 */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>State Management</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>8.8/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '88%' }}></div></div>
                                <span style={{ fontSize: '12px', background: '#f1f5f9', padding: '2px 8px', borderRadius: '12px', color: '#475569' }}>Advanced</span>
                                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                    "Redux Toolkit, Zustand, context vs redux tradeoffs, state synchronization"
                                </div>
                            </div>

                            {/* Skill 5 */}
                            <div style={{ marginBottom: '20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Testing</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>6.5/10</span>
                                </div>
                                <div className="progress-bar">
                                    <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #f97316, #f59e0b)', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ fontSize: '12px', background: '#fff7ed', padding: '2px 8px', borderRadius: '12px', color: '#9a3412' }}>Needs Work</span>
                                <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                    "Jest basics, limited E2E experience, no TDD practice, needs more testing strategy"
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', marginBottom: '20px' }}>
                                <FaChartBar size={24} color="var(--primary-blue)" /> TECHNICAL DEPTH ANALYSIS
                            </div>

                            <div style={{ display: 'grid', gap: '16px' }}>
                                {[
                                    { label: 'Conceptual Understanding', score: '9.0', dots: 9 },
                                    { label: 'Problem Solving', score: '8.7', dots: 9 },
                                    { label: 'System Design', score: '7.2', dots: 7 },
                                    { label: 'Code Quality', score: '8.5', dots: 8 },
                                    { label: 'Best Practices', score: '8.0', dots: 8 },
                                    { label: 'Performance Optimization', score: '8.9', dots: 9 }
                                ].map(item => (
                                    <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#334155', fontSize: '14px' }}>{item.label}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{item.score}</span>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {[...Array(10)].map((_, i) => (
                                                    <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: i < item.dots ? 'var(--primary-blue)' : '#e2e8f0' }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Communication Score</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>8.2/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: '82%' }}></div></div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', fontSize: '13px', color: '#475569' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaCommentDots /> Clarity: 8.5</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaRulerCombined /> Structure: 8.0</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaBook /> Vocabulary: 8.3</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FaDumbbell /> Confidence: 8.1</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* ================= TAB 2: INTERVIEWS & AI SUMMARY ================= */}
                {activeTab === 'interviews' && (
                    <>
                        <div className="timeline">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', marginBottom: '20px' }}>
                                <FaVideo size={24} color="var(--primary-blue)" /> INTERVIEW TIMELINE & AI SUMMARIES
                            </div>

                            {/* INTERVIEW 1 */}
                            <div className="interview-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch' }}>
                                <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', backgroundColor: '#000' }}>
                                        <iframe
                                            src={videoUrls[1]}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            allowFullScreen
                                            allow="autoplay; encrypted-media"
                                            title="Technical Interview 1"
                                        ></iframe>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' }}>
                                        Duration: 45 min
                                    </div>
                                </div>

                                <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            📅 Mar 15, 2024 • Technical Interview 1
                                        </h3>
                                        <div style={{ color: '#475569', fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FaBullseye color="var(--primary-blue)" /> Focus: React fundamentals, JavaScript concepts
                                        </div>

                                        {/* Moment Tags (Click to Play) - Times converted to total seconds */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                            <span className="moment-tag" onClick={() => jumpToTime(1, 135)}> {/* 2 mins 15 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [02:15] "Virtual DOM is a lightweight..."
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(1, 750)}> {/* 12 mins 30 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [12:30] Custom hook for API caching
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(1, 1725)}> {/* 28 mins 45 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [28:45] Struggled with useCallback
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                                        <span style={{ padding: '6px 16px', background: '#f1f5f9', borderRadius: '20px', fontSize: '13px', fontWeight: '600', color: 'var(--text-main)' }}>
                                            📊 Round Score: 8.2/10
                                        </span>
                                        <span
                                            onClick={() => setSelectedFeedback("Strong foundational knowledge. Explained closure, prototype chain confidently. React hooks implementation clear. Needs work on useMemo optimization and useCallback vs useMemo differentiation.")}
                                            style={{ color: 'var(--primary-blue)', fontSize: '14px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', background: '#e0f2fe', padding: '6px 16px', borderRadius: '8px' }}
                                        >
                                            <FaCommentDots /> View Feedback
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* INTERVIEW 2 */}
                            <div className="interview-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch' }}>
                                <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', backgroundColor: '#000' }}>
                                        <iframe
                                            src={videoUrls[2]}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            allowFullScreen
                                            allow="autoplay; encrypted-media"
                                            title="Technical Interview 2"
                                        ></iframe>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' }}>Duration: 60 min</div>
                                </div>

                                <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            📅 Mar 22, 2024 • Technical Interview 2
                                        </h3>
                                        <div style={{ color: '#475569', fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FaBullseye color="var(--primary-blue)" /> Focus: Frontend architecture, performance optimization
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                            <span className="moment-tag" onClick={() => jumpToTime(2, 350)}> {/* 5 mins 50 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [05:50] Component breakdown strategy
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(2, 1935)}> {/* 32 mins 15 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [32:15] "We can use React.lazy..."
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(2, 2880)}> {/* 48 mins 00 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [48:00] Unclear on service workers
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                                        <span style={{ padding: '6px 16px', background: '#f1f5f9', borderRadius: '20px', fontSize: '13px', fontWeight: '600', color: 'var(--text-main)' }}>
                                            📊 Round Score: 8.5/10
                                        </span>
                                        <span
                                            onClick={() => setSelectedFeedback("Good understanding of component composition. Designed a dashboard with lazy loading, code splitting. Demonstrated knowledge of bundle optimization. Limited CDN/caching strategy knowledge. Could improve on large-scale state synchronization.")}
                                            style={{ color: 'var(--primary-blue)', fontSize: '14px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', background: '#e0f2fe', padding: '6px 16px', borderRadius: '8px' }}
                                        >
                                            <FaCommentDots /> View Feedback
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* INTERVIEW 3 */}
                            <div className="interview-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch', borderLeft: '4px solid var(--primary-blue)' }}>
                                <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', backgroundColor: '#000' }}>
                                        <iframe
                                            src={videoUrls[3]}
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                            allowFullScreen
                                            allow="autoplay; encrypted-media"
                                            title="Technical Interview 3"
                                        ></iframe>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' }}>Duration: 75 min</div>
                                </div>

                                <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            📅 Mar 29, 2024 • Technical Interview 3
                                        </h3>
                                        <div style={{ color: '#475569', fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <FaBullseye color="var(--primary-blue)" /> Focus: Build a search autocomplete component
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                            <span className="moment-tag" onClick={() => jumpToTime(3, 920)}> {/* 15 mins 20 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [15:20] Debounce implementation...
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(3, 2530)}> {/* 42 mins 10 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [42:10] "We should cache results..."
                                            </span>
                                            <span className="moment-tag" onClick={() => jumpToTime(3, 3780)}> {/* 63 mins 00 secs */}
                                                <FaPlayCircle color="var(--primary-blue)" /> [63:00] Wrote unit tests for the component
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                                        <span style={{ padding: '6px 16px', background: '#f1f5f9', borderRadius: '20px', fontSize: '13px', fontWeight: '600', color: 'var(--text-main)' }}>
                                            📊 Round Score: 9.1/10 <span style={{ color: '#16a34a', fontWeight: 'normal' }}>⬆️ +0.6</span>
                                        </span>
                                        <span
                                            onClick={() => setSelectedFeedback("Efficient implementation. Used debouncing, caching strategy. Clean component structure. Added loading states and error handling. Implemented keyboard navigation. Could improve accessibility (aria labels, screen reader support).")}
                                            style={{ color: 'var(--primary-blue)', fontSize: '14px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', background: '#e0f2fe', padding: '6px 16px', borderRadius: '8px' }}
                                        >
                                            <FaCommentDots /> View Feedback
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* AI SUMMARY CARD (Unchanged) */}
                        <div className="ai-summary" style={{ background: 'linear-gradient(135deg, #f8fafc, #ffffff)', border: '1px solid var(--border-light)', borderRadius: '16px', padding: '28px', marginTop: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <FaBrain size={28} color="var(--primary-blue)" />
                                <h2 style={{ fontSize: '22px', margin: 0, fontWeight: '700', color: 'var(--text-main)' }}>AI-Generated Candidate Summary</h2>
                                <span style={{ background: 'var(--primary-blue)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>AI EVOLUTION COMPLETE</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '16px', color: 'var(--text-main)' }}>
                                        <FaCheckCircle color="#22c55e" /> STRENGTHS
                                    </h3>
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', color: '#166534' }}>
                                        <FaReact size={20} />
                                        <div>
                                            <strong>React & Component Architecture - Expert level</strong>
                                            <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>Clear understanding of rendering optimization, custom hooks, and component composition patterns</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', color: '#166534' }}>
                                        <FaPuzzlePiece size={20} />
                                        <div>
                                            <strong>Problem Solving - Advanced</strong>
                                            <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>Methodical approach, considers edge cases, implements efficient solutions</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '16px', color: 'var(--text-main)' }}>
                                        <FaExclamationTriangle color="#eab308" /> DEVELOPMENT AREAS
                                    </h3>
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#fffbeb', borderRadius: '8px', color: '#854d0e' }}>
                                        <FaVial size={20} />
                                        <div>
                                            <strong>Testing - Needs deeper practice</strong>
                                            <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>Jest basics, limited E2E experience. Recommend TDD workshop and Cypress practice</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#fffbeb', borderRadius: '8px', color: '#854d0e' }}>
                                        <FaBuilding size={20} />
                                        <div>
                                            <strong>System Design - Large-scale architecture</strong>
                                            <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>Good at component level, needs practice with enterprise frontend architecture</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '28px', padding: '20px', background: '#f1f4f9', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                                    <span style={{ display: 'inline-block', padding: '8px 20px', background: '#dcfce7', color: '#166534', borderRadius: '40px', fontWeight: '600' }}>🎯 HIRING RECOMMENDATION: STRONG CONSIDER</span>
                                    <span style={{ color: '#475569' }}>Fit Score: 8.7/10 • Level: Senior • Confidence: High</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default CandidateProfile;