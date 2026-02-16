import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    FaBrain, FaUserCircle, FaClipboardList, FaChartBar, FaCog, FaFolderOpen,
    FaBullseye, FaFileExport, FaBolt, FaReact, FaNodeJs, FaPython, FaAws,
    FaJava, FaDatabase, FaLeaf, FaFire, FaSearch, FaPlayCircle, FaTrophy,
    FaExclamationTriangle, FaArrowUp, FaArrowDown, FaMinus, FaCaretLeft, FaCaretRight,
    FaDocker, FaServer, FaCode // <--- Added FaCode here
} from 'react-icons/fa';
import { mockCandidates } from '../data/mockData';

const Dashboard = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate indices
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCandidates = mockCandidates.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(mockCandidates.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    // Helper to determine skill icon
    const getSkillIcon = (skillName) => {
        const name = skillName.toLowerCase();
        if (name.includes('react')) return <FaReact color="#61dafb" />;
        if (name.includes('node')) return <FaNodeJs color="#339933" />;
        if (name.includes('python') || name.includes('pytorch')) return <FaPython color="#3776AB" />;
        if (name.includes('java')) return <FaJava color="#5382a1" />;
        if (name.includes('aws')) return <FaAws color="#FF9900" />;
        if (name.includes('sql') || name.includes('database')) return <FaDatabase color="#336791" />;
        if (name.includes('spring')) return <FaLeaf color="#6db33f" />;
        if (name.includes('docker') || name.includes('kubernetes')) return <FaDocker color="#2496ED" />;
        return <FaCode color="#64748b" />; // Default icon now works
    };

    // Helper for trend icon
    const getTrendIcon = (direction) => {
        if (direction === 'up') return <FaArrowUp />;
        if (direction === 'down') return <FaArrowDown />;
        return <FaMinus />;
    };

    const getTrendColor = (direction) => {
        if (direction === 'up') return '#16a34a'; // Green
        if (direction === 'down') return '#dc2626'; // Red
        return '#64748b'; // Grey
    };

    // Styles for the filter inputs
    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid var(--border-light)',
        fontSize: '14px',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: 'var(--text-main)',
        outline: 'none'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        color: '#64748b',
        fontWeight: 'bold',
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    return (
        <div className="container">
            {/* 1. HEADER */}
            <div className="header">
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px' }}>
                    <FaBrain style={{ color: 'var(--primary-blue)' }} />
                    <span>AI Evolution</span>
                </div>
                <div className="admin-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaUserCircle /> Admin ▼
                </div>
            </div>


            {/* 3. STATS BAR */}
            <div className="stats-bar" style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaBullseye style={{ color: 'var(--primary-blue)' }} /> {mockCandidates.length} Candidates • 5 New This Week
                    </div>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, mockCandidates.length)} of {mockCandidates.length} active candidates
                    </div>
                </div>
                <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', cursor: 'pointer' }}>
                    <FaFileExport style={{ color: '#64748b' }} /> Export ▼
                </div>
            </div>

            {/* 4. MAIN LAYOUT */}
            <div className="main-layout">

                {/* FILTERS SECTION (Right Side) */}
                <div className="filters-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ margin: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                            <FaBolt style={{ color: 'var(--primary-blue)' }} /> FILTERS
                        </h3>
                        <span style={{ fontSize: '14px', color: 'var(--primary-blue)', cursor: 'pointer', fontWeight: '500' }}>Reset</span>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Skill</label>
                        <select style={inputStyle}>
                            <option value="">Select a skill</option>
                            <option value="Java">Java</option>
                            <option value="React">React</option>
                            <option value="Python">Python</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Experience (Years)</label>
                        <input type="number" placeholder="Min Experience" style={inputStyle} min="0" />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Education</label>
                        <select style={inputStyle}>
                            <option value="">Select degree</option>
                            <option value="B.Tech">B.Tech</option>
                            <option value="M.Tech">M.Tech</option>
                            <option value="MCA">MCA</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>AI Skill Depth &gt;</label>
                        <input type="number" placeholder="Min Score (0-10)" min="0" max="10" step="0.1" style={inputStyle} />
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <label style={labelStyle}>Interviews Attended &gt;=</label>
                        <input type="number" placeholder="Min Interviews" min="0" style={inputStyle} />
                    </div>

                    <button className="apply-filters-btn" style={{ transition: 'background-color 0.2s', width: '100%', padding: '12px', backgroundColor: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-blue-hover)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-blue)'}>
                        APPLY FILTERS
                    </button>
                </div>

                {/* CANDIDATES SECTION (Center) */}
                <div className="candidates-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>CANDIDATES LIST</div>
                        <select style={{ padding: '8px 16px', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '14px', background: 'white' }}>
                            <option>Sort: AI Score ▼</option>
                            <option>Experience: High to Low</option>
                            <option>Experience: Low to High</option>
                            <option>Name: A-Z</option>
                        </select>
                    </div>

                    {/* DYNAMIC CARD GENERATION */}
                    {currentCandidates.map((candidate) => (
                        <div
                            key={candidate.id}
                            className="candidate-card"
                            style={{ borderLeft: `4px solid ${candidate.aiScore >= 9.0 ? '#22c55e' : candidate.aiScore >= 8.0 ? 'var(--primary-blue)' : '#eab308'}` }}
                            onClick={() => navigate(`/candidate/${candidate.id}`)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-orange))', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                        {candidate.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', color: 'var(--text-main)' }}>{candidate.name}</h4>
                                        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{candidate.role} • {candidate.experience}</p>
                                    </div>
                                </div>
                                <div style={{ padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FaBrain /> AI: {candidate.aiScore}/10
                                    <span style={{ color: getTrendColor(candidate.trendDirection), marginLeft: '4px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                        {getTrendIcon(candidate.trendDirection)} {candidate.trend}
                                    </span>
                                </div>
                            </div>

                            {/* Top 3 Skills Tags */}
                            <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                                {candidate.skills.slice(0, 3).map((skill, index) => (
                                    <span key={index} style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        {getSkillIcon(skill.name)} {skill.name} <strong>{skill.score}</strong>
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                                <span><FaPlayCircle /> {candidate.interviewCount} interviews</span><span>• Last: {candidate.lastInterview}</span>
                            </div>

                            {/* Quote or Summary Snippet */}
                            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', fontSize: '13px', borderLeft: '3px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
                                {candidate.aiAnalysis.quote ? `"${candidate.aiAnalysis.quote.substring(0, 80)}..."` : "AI Summary available in profile."}
                            </div>
                        </div>
                    ))}

                    {/* PAGINATION */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px', color: '#64748b', fontSize: '14px' }}>
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            style={{
                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                border: 'none',
                                background: 'transparent',
                                opacity: currentPage === 1 ? 0.5 : 1,
                                display: 'flex', alignItems: 'center'
                            }}
                        >
                            <FaCaretLeft size={18} />
                        </button>

                        {/* Page Numbers - displaying window of pages if many */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(num => num === 1 || num === totalPages || (num >= currentPage - 1 && num <= currentPage + 1))
                            .reduce((acc, num, index, array) => {
                                if (index > 0 && array[index - 1] !== num - 1) {
                                    acc.push(-1); // Separator
                                }
                                acc.push(num);
                                return acc;
                            }, [])
                            .map((num, idx) => (
                                num === -1 ? <span key={`sep-${idx}`}>...</span> :
                                    <span
                                        key={num}
                                        onClick={() => paginate(num)}
                                        style={{
                                            background: currentPage === num ? 'var(--primary-blue)' : 'transparent',
                                            color: currentPage === num ? 'white' : 'inherit',
                                            padding: '4px 10px',
                                            borderRadius: '6px',
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {num}
                                    </span>
                            ))
                        }

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            style={{
                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                border: 'none',
                                background: 'transparent',
                                opacity: currentPage === totalPages ? 0.5 : 1,
                                display: 'flex', alignItems: 'center'
                            }}
                        >
                            <FaCaretRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;