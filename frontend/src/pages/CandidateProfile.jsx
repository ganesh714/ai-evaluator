import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaArrowLeft, FaBrain, FaUserCircle, FaClipboardCheck, FaShareAlt,
    FaCalendarAlt, FaDownload, FaMapMarkerAlt, FaEnvelope, FaChartLine,
    FaTrophy, FaCheckCircle, FaExclamationTriangle, FaPlayCircle,
    FaCode, FaChartBar, FaStar, FaFileAlt, FaCommentDots, FaRulerCombined,
    FaBook, FaDumbbell, FaVideo, FaReact, FaPuzzlePiece, FaMagic,
    FaVial, FaBuilding, FaWheelchair, FaBullseye, FaChevronDown, FaTimes
} from 'react-icons/fa';
import { mockCandidates } from '../data/mockData';

const CandidateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the candidate from the data file
    const candidate = mockCandidates.find(c => c.id === id);

    // States
    const [activeTab, setActiveTab] = useState('skills');
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    // State to track current video URLs (initialized empty, populated in useEffect)
    const [videoState, setVideoState] = useState({});

    // Initialize video state when candidate loads
    useEffect(() => {
        if (candidate && candidate.interviews) {
            const initialVideos = {};
            candidate.interviews.forEach(interview => {
                initialVideos[interview.id] = interview.video;
            });
            setVideoState(initialVideos);
        }
    }, [candidate]);

    if (!candidate) {
        return <div style={{ padding: '40px', textAlign: 'center' }}>Candidate not found</div>;
    }

    const closeModal = () => setSelectedFeedback(null);

    // Function to jump video to a specific time
    const jumpToTime = (interviewId, seconds) => {
        // Get the base video URL from the candidate data to ensure we don't lose it
        const baseVideo = candidate.interviews.find(i => i.id === interviewId)?.video;
        if (baseVideo) {
            setVideoState(prev => ({
                ...prev,
                [interviewId]: `${baseVideo.split('?')[0]}?start=${seconds}&autoplay=1`
            }));
        }
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
                {/* <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="quick-action-btn" style={{ background: 'white' }}><FaClipboardCheck /> Shortlist</button>
                    <button className="quick-action-btn" style={{ background: 'white' }}><FaShareAlt /> Share</button>
                    <button className="quick-action-btn" style={{ background: 'var(--primary-blue)', color: 'white', border: 'none' }}>
                        <FaCalendarAlt /> Schedule Interview
                    </button>
                    <button className="quick-action-btn" style={{ background: 'white', padding: '10px' }}><FaChevronDown /></button>
                </div> */}
            </div>

            {/* 3. PROFILE HEADER */}
            <div className="profile-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-orange))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                        <h1 style={{ fontSize: '28px', margin: '0 0 4px 0', color: 'var(--text-main)' }}>{candidate.name}</h1>
                        <p style={{ color: '#475569', margin: 0, fontSize: '16px' }}>{candidate.role} • {candidate.experience} • {candidate.location}</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '8px', color: '#475569', fontSize: '14px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaMapMarkerAlt /> {candidate.location}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><FaEnvelope /> {candidate.email}</span>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--text-main)' }}>
                        {candidate.aiScore}<span style={{ fontSize: '14px', color: '#64748b' }}>/10</span>
                    </div>
                    <div style={{ padding: '4px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <FaTrophy /> {candidate.topPercentile}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '8px', fontSize: '13px', color: '#64748b' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: candidate.trendDirection === 'up' ? '#16a34a' : '#64748b', fontWeight: '600' }}>
                            <FaChartLine /> {candidate.trend}
                        </span>
                        <span>•</span>
                        <span>Confidence: {candidate.confidence}</span>
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
                <div className="quick-action-btn" onClick={() => alert(`Backend Not Connected: Downloading Resume for ${candidate.name}...`)}>
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
                                <span style={{ fontSize: '12px', background: '#e0f2fe', padding: '4px 10px', borderRadius: '20px', marginLeft: '12px', color: 'var(--primary-blue)' }}>
                                    AI-Verified from {candidate.interviewCount} interviews
                                </span>
                            </div>

                            {/* Dynamic Skills Mapping */}
                            {candidate.skills.map((skill, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{skill.name}</span>
                                        <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>{skill.score}/10</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${skill.score * 10}%`, background: skill.score < 7 ? 'linear-gradient(90deg, #f97316, #f59e0b)' : 'var(--primary-blue)' }}></div>
                                    </div>
                                    <span style={{ fontSize: '12px', background: skill.score < 7 ? '#fff7ed' : '#f1f5f9', padding: '2px 8px', borderRadius: '12px', color: skill.score < 7 ? '#9a3412' : '#475569' }}>
                                        {skill.level}
                                    </span>
                                    <div style={{ fontSize: '13px', color: '#64748b', background: '#f8fafc', padding: '10px', borderRadius: '8px', marginTop: '6px', borderLeft: '3px solid var(--primary-blue)' }}>
                                        "{skill.evidence}"
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="section">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', marginBottom: '20px' }}>
                                <FaChartBar size={24} color="var(--primary-blue)" /> TECHNICAL DEPTH ANALYSIS
                            </div>

                            <div style={{ display: 'grid', gap: '16px' }}>
                                {Array.isArray(candidate.technicalDepth) ? candidate.technicalDepth.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#334155', fontSize: '14px' }}>{item.label}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{item.score}</span>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {[...Array(10)].map((_, dotIndex) => (
                                                    <div key={dotIndex} style={{ width: '12px', height: '12px', borderRadius: '50%', background: dotIndex < item.filled ? 'var(--primary-blue)' : '#e2e8f0' }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )) : <div>Data structure error in Technical Depth</div>}
                            </div>

                            <div style={{ marginTop: '24px', padding: '16px', background: '#f8fafc', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>Communication Score</span>
                                    <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>{candidate.communication.score}/10</span>
                                </div>
                                <div className="progress-bar"><div className="progress-fill" style={{ width: `${candidate.communication.score * 10}%` }}></div></div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', fontSize: '13px', color: '#475569' }}>
                                    {candidate.communication.details.map((detail, i) => (
                                        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            {i === 0 && <FaCommentDots />} {i === 1 && <FaRulerCombined />} {i === 2 && <FaBook />} {i === 3 && <FaDumbbell />}
                                            {detail.label}: {detail.score}
                                        </span>
                                    ))}
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

                            {candidate.interviews.map((interview, index) => (
                                <div key={interview.id} className="interview-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch', marginBottom: '24px', borderLeft: index === candidate.interviews.length - 1 ? '4px solid var(--primary-blue)' : '1px solid var(--border-light)' }}>

                                    {/* Left: Video */}
                                    <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
                                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', backgroundColor: '#000' }}>
                                            <iframe
                                                src={videoState[interview.id] || interview.video}
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                                allowFullScreen
                                                allow="autoplay; encrypted-media"
                                                title={interview.round}
                                            ></iframe>
                                        </div>
                                        <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '600' }}>
                                            Duration: {interview.duration}
                                        </div>
                                    </div>

                                    {/* Right: Content */}
                                    <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                📅 {interview.date} • {interview.round}
                                            </h3>
                                            <div style={{ color: '#475569', fontSize: '14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <FaBullseye color="var(--primary-blue)" /> Focus: {interview.focus}
                                            </div>

                                            {/* Dynamic Moment Tags */}
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                                                {interview.moments.map((moment, mIndex) => (
                                                    <span key={mIndex} className="moment-tag" onClick={() => jumpToTime(interview.id, moment.seconds)}>
                                                        <FaPlayCircle color="var(--primary-blue)" /> [{moment.time}] {moment.label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                                            <span style={{ padding: '6px 16px', background: '#f1f5f9', borderRadius: '20px', fontSize: '13px', fontWeight: '600', color: 'var(--text-main)' }}>
                                                📊 Round Score: {interview.score}/10
                                            </span>
                                            <span
                                                onClick={() => setSelectedFeedback(interview.summary)}
                                                style={{ color: 'var(--primary-blue)', fontSize: '14px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', background: '#e0f2fe', padding: '6px 16px', borderRadius: '8px' }}
                                            >
                                                <FaCommentDots /> View Feedback
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* AI SUMMARY CARD */}
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
                                    {candidate.aiAnalysis.strengths.map((s, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', color: '#166534' }}>
                                            <FaCheckCircle size={20} />
                                            <div>
                                                <strong>{s.title} - {s.level}</strong>
                                                <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '16px', color: 'var(--text-main)' }}>
                                        <FaExclamationTriangle color="#eab308" /> DEVELOPMENT AREAS
                                    </h3>
                                    {candidate.aiAnalysis.weaknesses.map((w, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', padding: '12px', background: '#fffbeb', borderRadius: '8px', color: '#854d0e' }}>
                                            <FaExclamationTriangle size={20} />
                                            <div>
                                                <strong>{w.title} - {w.level}</strong>
                                                <p style={{ fontSize: '13px', margin: '4px 0 0 0' }}>{w.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: '28px', padding: '20px', background: '#f1f4f9', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                                    <span style={{ display: 'inline-block', padding: '8px 20px', background: '#dcfce7', color: '#166534', borderRadius: '40px', fontWeight: '600' }}>🎯 HIRING RECOMMENDATION: {candidate.aiAnalysis.hiringRecommendation}</span>
                                    <span style={{ color: '#475569' }}>Fit Score: {candidate.aiAnalysis.fitScore} • Level: {candidate.aiAnalysis.level} • Confidence: {candidate.aiAnalysis.confidence}</span>
                                </div>
                                <div style={{ marginTop: '16px', color: '#334155' }}>
                                    <strong>Next Steps:</strong> System design deep dive or team fit interview recommended
                                </div>
                            </div>

                            <div style={{ padding: '20px', background: '#f1f4f9', borderRadius: '12px', borderLeft: '4px solid var(--primary-blue)', marginTop: '20px', fontSize: '16px', lineHeight: '1.6', color: '#1e293b' }}>
                                <span style={{ fontSize: '20px', color: 'var(--primary-blue)' }}>"</span>
                                {candidate.aiAnalysis.quote}
                                <span style={{ fontSize: '20px', color: 'var(--primary-blue)' }}>"</span>
                                <div style={{ marginTop: '12px', color: '#64748b', fontSize: '13px' }}>— AI Evolution Verdict • {candidate.interviewCount} interviews analyzed • {candidate.confidence} confidence</div>
                            </div>

                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default CandidateProfile;