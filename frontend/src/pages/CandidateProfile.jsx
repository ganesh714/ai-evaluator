import { useParams, useNavigate } from 'react-router-dom';
import { mockCandidates } from '../data/mockData';
import MainLayout from '../components/MainLayout';
import {
    FaArrowLeft,
    FaCalendarAlt,
    FaShareAlt,
    FaDownload,
    FaClipboard,
    FaBrain,
    FaVideo,
    FaBolt,
    FaCheckCircle,
    FaExclamationTriangle,
    FaMedal
} from 'react-icons/fa';

const CandidateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const candidate = mockCandidates.find(c => c.id === id);

    if (!candidate) return <div>Candidate not found</div>;

    const getIcon = (type) => {
        switch (type) {
            case 'react': return <span style={{ fontSize: '20px' }}>⚛️</span>;
            case 'puzzle': return <span style={{ fontSize: '20px' }}>🧩</span>;
            case 'code': return <span style={{ fontSize: '20px' }}>✨</span>;
            case 'test': return <span style={{ fontSize: '20px' }}>🧪</span>;
            case 'system': return <span style={{ fontSize: '20px' }}>🏗️</span>;
            case 'access': return <span style={{ fontSize: '20px' }}>♿</span>;
            default: return <FaBolt />;
        }
    };

    return (
        <MainLayout>
            <div className="container" style={{ maxWidth: '1200px', background: 'white', borderRadius: '24px', boxShadow: 'var(--card-shadow)', overflow: 'hidden' }}>
                {/* Back Nav */}
                <div style={{ padding: '20px 32px', borderBottom: '1px solid #eef2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button onClick={() => navigate('/dashboard')} style={{ background: 'none', border: 'none', color: 'var(--text-medium)', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '8px', transition: 'background 0.2s' }} onMouseOver={(e) => e.target.style.background = 'var(--bg-color)'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
                        <FaArrowLeft /> Back to Candidates
                    </button>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn btn-outline"><FaClipboard /> Shortlist</button>
                        <button className="btn btn-outline"><FaShareAlt /> Share</button>
                        <button className="btn btn-primary"><FaCalendarAlt /> Schedule Interview</button>
                    </div>
                </div>

                {/* Profile Header */}
                <div style={{ padding: '32px', background: 'linear-gradient(to right, var(--bg-color), #ffffff)', borderBottom: '1px solid #eef2f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold' }}>
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h1 style={{ margin: 0, fontSize: '32px', fontWeight: '800', color: 'var(--text-dark)' }}>{candidate.name}</h1>
                            <p style={{ margin: '8px 0 0', color: 'var(--text-medium)', fontSize: '16px', fontWeight: '500' }}>{candidate.role} • {candidate.experience} experience • {candidate.location}</p>
                            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', color: 'var(--text-light)', fontSize: '14px' }}>
                                <span>📧 {candidate.email}</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)', lineHeight: '1' }}>{candidate.aiScore} <span style={{ fontSize: '18px', color: 'var(--text-light)', fontWeight: '500' }}>/10</span></div>
                        <div style={{ padding: '6px 16px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--primary)', borderRadius: '30px', fontSize: '14px', fontWeight: 'bold', marginTop: '12px', display: 'inline-block' }}>
                            🏆 {candidate.topPercentile}
                        </div>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px', fontSize: '13px', color: 'var(--text-light)', justifyContent: 'flex-end', fontWeight: '500' }}>
                            <span style={{ color: 'var(--success)' }}>📈 {candidate.trend} trend</span>
                            <span>•</span>
                            <span>Confidence: {candidate.confidence}</span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={{ padding: '20px 32px', borderBottom: '1px solid #eef2f6', display: 'flex', gap: '12px' }}>
                    <button className="btn btn-outline"><FaCalendarAlt /> Schedule Interview</button>
                    <button className="btn btn-outline"><FaMedal /> Shortlist</button>
                    <button className="btn btn-outline"><FaDownload /> Download Report</button>
                </div>

                {/* Main Content */}
                <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    {/* Skill Proficiency */}
                    <div className="card" style={{ padding: '24px', boxShadow: 'none', border: '1px solid #eef2f6', borderRadius: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-dark)' }}>
                            <FaBrain style={{ color: 'var(--primary)' }} /> SKILL PROFICIENCY
                            <span style={{ fontSize: '12px', background: 'var(--bg-color)', padding: '4px 12px', borderRadius: '20px', marginLeft: 'auto', color: 'var(--primary)', fontWeight: '600' }}>
                                AI-Verified
                            </span>
                        </div>

                        {candidate.skills.map((skill, idx) => (
                            <div key={idx} style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{skill.name}</span>
                                    <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{skill.score}/10</span>
                                </div>
                                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', marginBottom: '8px' }}>
                                    <div style={{ height: '100%', width: `${skill.score * 10}%`, background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '4px' }}></div>
                                </div>
                                <span style={{ fontSize: '11px', color: 'var(--text-medium)', background: '#f1f5f9', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>{skill.level}</span>
                                <div style={{ fontSize: '13px', color: 'var(--text-light)', background: '#f8fafc', padding: '12px', borderRadius: '8px', marginTop: '8px', borderLeft: '3px solid var(--primary)', fontStyle: 'italic' }}>
                                    "{skill.evidence}"
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technical Depth */}
                    <div className="card" style={{ padding: '24px', boxShadow: 'none', border: '1px solid #eef2f6', borderRadius: '16px' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-dark)' }}>
                            📊 TECHNICAL DEPTH ANALYSIS
                        </div>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            {Object.entries(candidate.technicalDepth).map(([key, val]) => (
                                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ textTransform: 'capitalize', color: 'var(--text-medium)', fontSize: '15px', fontWeight: '500' }}>
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{val.score}</span>
                                        <div style={{ display: 'flex', gap: '4px' }}>
                                            {[...Array(10)].map((_, i) => (
                                                <div key={i} style={{
                                                    width: '8px', height: '8px', borderRadius: '50%',
                                                    background: i < val.filled ? 'var(--secondary)' : '#e2e8f0'
                                                }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '32px', padding: '20px', background: 'var(--bg-color)', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Communication Score</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--secondary)' }}>{candidate.communication.score}/10</span>
                            </div>
                            <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                                <div style={{ height: '100%', width: `${candidate.communication.score * 10}%`, background: 'var(--secondary)', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Interview Timeline */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)' }}>
                            <FaVideo style={{ color: 'var(--primary)' }} /> INTERVIEW TIMELINE & AI SUMMARIES
                        </div>

                        {candidate.interviews.map((int, i) => (
                            <div key={i} style={{ border: '1px solid #eef2f6', borderRadius: '16px', padding: '24px', marginBottom: '20px', background: 'white', boxShadow: 'var(--card-shadow)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
                                    <span style={{ fontWeight: 'bold', color: 'var(--text-dark)', fontSize: '18px' }}>📅 {int.date} • {int.round}</span>
                                    <span style={{ color: 'var(--primary)', background: 'var(--bg-color)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>{int.duration}</span>
                                </div>
                                <div style={{ color: 'var(--text-medium)', fontSize: '15px', marginBottom: '16px', fontWeight: '500' }}>
                                    🎯 Focus: {int.focus}
                                </div>
                                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', margin: '16px 0', fontSize: '15px', lineHeight: '1.7', color: 'var(--text-medium)', borderLeft: '4px solid #e2e8f0' }}>
                                    <strong>AI Summary:</strong> {int.summary}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '12px 0' }}>
                                    {int.moments.map((m, idx) => (
                                        <span key={idx} style={{
                                            background: 'white', border: '1px solid #e2e8f0', padding: '8px 16px',
                                            borderRadius: '20px', fontSize: '13px', display: 'flex', alignItems: 'center',
                                            gap: '8px', cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s'
                                        }}
                                            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = 'var(--text-medium)'; }}
                                        >
                                            🎬 <strong>[{m.time}]</strong> "{m.label}"
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* AI Summary Card */}
                    {candidate.aiAnalysis && (
                        <div style={{ gridColumn: 'span 2', background: 'linear-gradient(135deg, #ecfeff, #fff)', border: '1px solid var(--primary)', borderRadius: '20px', padding: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' }}>
                                    <FaBrain />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-dark)', margin: 0 }}>AI-Generated Candidate Summary</h2>
                                    <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600', marginTop: '4px' }}>AI EVOLUTION COMPLETE</div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', marginBottom: '20px', color: 'var(--text-dark)' }}>
                                        <FaCheckCircle style={{ color: 'var(--success)' }} /> STRENGTHS
                                    </h3>
                                    {candidate.aiAnalysis.strengths.map((s, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px', padding: '16px', background: 'rgba(34, 197, 94, 0.05)', borderRadius: '12px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                                            <div style={{ marginTop: '2px' }}>{getIcon(s.type)}</div>
                                            <div>
                                                <strong style={{ fontSize: '15px', color: '#166534' }}>{s.title}</strong>
                                                <span style={{ fontSize: '12px', marginLeft: '8px', background: 'white', padding: '2px 8px', borderRadius: '4px', color: '#166534', border: '1px solid #166534' }}>{s.level}</span>
                                                <p style={{ fontSize: '14px', margin: '6px 0 0', color: '#14532d', lineHeight: '1.5' }}>{s.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', marginBottom: '20px', color: 'var(--text-dark)' }}>
                                        <FaExclamationTriangle style={{ color: 'var(--warning)' }} /> DEVELOPMENT AREAS
                                    </h3>
                                    {candidate.aiAnalysis.weaknesses.map((w, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px', padding: '16px', background: '#fffbeb', borderRadius: '12px', border: '1px solid #fcd34d' }}>
                                            <div style={{ marginTop: '2px' }}>{getIcon(w.type)}</div>
                                            <div>
                                                <strong style={{ fontSize: '15px', color: '#854d0e' }}>{w.title}</strong>
                                                <span style={{ fontSize: '12px', marginLeft: '8px', background: 'white', padding: '2px 8px', borderRadius: '4px', color: '#854d0e', border: '1px solid #854d0e' }}>{w.level}</span>
                                                <p style={{ fontSize: '14px', margin: '6px 0 0', color: '#713f12', lineHeight: '1.5' }}>{w.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default CandidateProfile;