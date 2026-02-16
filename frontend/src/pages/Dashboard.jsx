import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import {
    FaBrain, FaUserCircle, FaClipboardList, FaChartBar, FaCog, FaFolderOpen,
    FaBullseye, FaFileExport, FaBolt, FaReact, FaNodeJs, FaPython, FaAws,
    FaJava, FaDatabase, FaLeaf, FaFire, FaSearch, FaPlayCircle, FaTrophy,
    FaExclamationTriangle, FaArrowUp, FaArrowDown, FaMinus, FaCaretLeft, FaCaretRight,
    FaDocker, FaServer, FaCode
} from 'react-icons/fa';
import { mockCandidates } from '../data/mockData';

const Dashboard = () => {
    const navigate = useNavigate();

    // --- 1. DYNAMIC DATA EXTRACTION ---
    // Extract all unique skills from the candidate list automatically
    const allSkills = useMemo(() => {
        const skillsSet = new Set();
        mockCandidates.forEach(candidate => {
            candidate.skills.forEach(skill => {
                skillsSet.add(skill.name);
            });
        });
        return Array.from(skillsSet).sort();
    }, []);

    // Extract all unique degrees for the Education filter (Optional bonus)
    const allDegrees = useMemo(() => {
        const degreesSet = new Set();
        mockCandidates.forEach(candidate => {
            if (candidate.education && candidate.education.length > 0) {
                // Extract just the degree name (e.g., "B.Tech", "M.Tech")
                // Assumes format like "B.Tech in CS" -> takes "B.Tech" if you split, 
                // or just takes the whole string if you prefer. 
                // For now, let's just grab the whole degree title provided in data.
                degreesSet.add(candidate.education[0].degree);
            }
        });
        return Array.from(degreesSet).sort();
    }, []);

    // --- 2. FILTER STATE ---
    const [filters, setFilters] = useState({
        skill: '',
        experience: '',
        education: '',
        minScore: '',
        minInterviews: ''
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // --- 3. FILTERING LOGIC ---
    const filteredCandidates = mockCandidates.filter(candidate => {
        // Skill Filter (Checks if any of the candidate's skills match the selected skill)
        if (filters.skill) {
            const hasSkill = candidate.skills.some(s =>
                s.name.toLowerCase() === filters.skill.toLowerCase()
            );
            if (!hasSkill) return false;
        }

        // Experience Filter (Parses "5 yrs" to 5 and compares)
        if (filters.experience) {
            const expNum = parseInt(candidate.experience);
            if (isNaN(expNum) || expNum < parseInt(filters.experience)) return false;
        }

        // Education Filter
        if (filters.education) {
            const degree = candidate.education?.[0]?.degree || "";
            if (!degree.toLowerCase().includes(filters.education.toLowerCase())) return false;
        }

        // AI Score Filter
        if (filters.minScore && candidate.aiScore < parseFloat(filters.minScore)) {
            return false;
        }

        // Interview Count Filter
        if (filters.minInterviews && candidate.interviewCount < parseInt(filters.minInterviews)) {
            return false;
        }

        return true;
    });

    // Reset to page 1 whenever filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);


    // --- 4. PAGINATION ---
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCandidates = filteredCandidates.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    // Handle Filter Inputs
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const resetFilters = () => {
        setFilters({
            skill: '',
            experience: '',
            education: '',
            minScore: '',
            minInterviews: ''
        });
    };

    // --- ICONS & STYLES ---
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
        return <FaCode color="#64748b" />;
    };

    const getTrendIcon = (direction) => {
        if (direction === 'up') return <FaArrowUp />;
        if (direction === 'down') return <FaArrowDown />;
        return <FaMinus />;
    };

    const getTrendColor = (direction) => {
        if (direction === 'up') return '#16a34a';
        if (direction === 'down') return '#dc2626';
        return '#64748b';
    };

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
            <div className="header">
                <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px' }}>
                    <FaBrain style={{ color: 'var(--primary-blue)' }} />
                    <span>AI Evolution</span>
                </div>
                <div className="admin-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaUserCircle /> Admin ▼
                </div>
            </div>

            <div className="stats-bar" style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaBullseye style={{ color: 'var(--primary-blue)' }} /> {filteredCandidates.length} Candidates Found
                    </div>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                        Showing {filteredCandidates.length > 0 ? indexOfFirstItem + 1 : 0}-{Math.min(indexOfLastItem, filteredCandidates.length)} of {filteredCandidates.length}
                    </div>
                </div>
                <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', cursor: 'pointer' }}>
                    <FaFileExport style={{ color: '#64748b' }} /> Export ▼
                </div>
            </div>

            <div className="main-layout">
                {/* FILTERS SECTION */}
                <div className="filters-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                        <h3 style={{ margin: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                            <FaBolt style={{ color: 'var(--primary-blue)' }} /> FILTERS
                        </h3>
                        <span onClick={resetFilters} style={{ fontSize: '14px', color: 'var(--primary-blue)', cursor: 'pointer', fontWeight: '500' }}>Reset</span>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Skill</label>
                        <select name="skill" value={filters.skill} onChange={handleFilterChange} style={inputStyle}>
                            <option value="">All Skills</option>
                            {/* Dynamically Map all Unique Skills */}
                            {allSkills.map((skill, index) => (
                                <option key={index} value={skill}>{skill}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Experience (Years)</label>
                        <input name="experience" value={filters.experience} onChange={handleFilterChange} type="number" placeholder="Min Experience" style={inputStyle} min="0" />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>Education</label>
                        <select name="education" value={filters.education} onChange={handleFilterChange} style={inputStyle}>
                            <option value="">All Degrees</option>
                            {/* Dynamically Map all Unique Degrees */}
                            {allDegrees.map((degree, index) => (
                                <option key={index} value={degree}>{degree}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={labelStyle}>AI Skill Depth &gt;</label>
                        <input name="minScore" value={filters.minScore} onChange={handleFilterChange} type="number" placeholder="Min Score (0-10)" min="0" max="10" step="0.1" style={inputStyle} />
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <label style={labelStyle}>Interviews Attended &gt;=</label>
                        <input name="minInterviews" value={filters.minInterviews} onChange={handleFilterChange} type="number" placeholder="Min Interviews" min="0" style={inputStyle} />
                    </div>

                    <button className="apply-filters-btn" style={{ transition: 'background-color 0.2s', width: '100%', padding: '12px', backgroundColor: 'var(--primary-blue)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-blue-hover)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-blue)'}>
                        APPLY FILTERS
                    </button>
                </div>

                {/* CANDIDATES LIST */}
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

                    {currentCandidates.length > 0 ? (
                        currentCandidates.map((candidate) => (
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

                                <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', fontSize: '13px', borderLeft: '3px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', color: '#475569' }}>
                                    {candidate.aiAnalysis.quote ? `"${candidate.aiAnalysis.quote.substring(0, 80)}..."` : "AI Summary available in profile."}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                            <FaSearch size={32} style={{ marginBottom: '10px', opacity: 0.5 }} />
                            <p>No candidates match your filters.</p>
                            <button onClick={resetFilters} style={{ background: 'none', border: '1px solid var(--primary-blue)', color: 'var(--primary-blue)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', marginTop: '10px' }}>Clear Filters</button>
                        </div>
                    )}

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px', color: '#64748b', fontSize: '14px' }}>
                            <button onClick={prevPage} disabled={currentPage === 1} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', border: 'none', background: 'transparent', opacity: currentPage === 1 ? 0.5 : 1 }}>
                                <FaCaretLeft size={18} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(num => num === 1 || num === totalPages || (num >= currentPage - 1 && num <= currentPage + 1))
                                .reduce((acc, num, index, array) => {
                                    if (index > 0 && array[index - 1] !== num - 1) acc.push(-1);
                                    acc.push(num);
                                    return acc;
                                }, [])
                                .map((num, idx) => (
                                    num === -1 ? <span key={`sep-${idx}`}>...</span> :
                                        <span key={num} onClick={() => paginate(num)} style={{ background: currentPage === num ? 'var(--primary-blue)' : 'transparent', color: currentPage === num ? 'white' : 'inherit', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                                            {num}
                                        </span>
                                ))
                            }

                            <button onClick={nextPage} disabled={currentPage === totalPages} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', border: 'none', background: 'transparent', opacity: currentPage === totalPages ? 0.5 : 1 }}>
                                <FaCaretRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;