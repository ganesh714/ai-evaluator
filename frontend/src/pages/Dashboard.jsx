import { useNavigate } from 'react-router-dom';
import {
    FaBrain, FaUserCircle, FaClipboardList, FaChartBar, FaCog, FaFolderOpen,
    FaBullseye, FaFileExport, FaBolt, FaReact, FaNodeJs, FaPython, FaAws,
    FaJava, FaDatabase, FaLeaf, FaFire, FaSearch, FaPlayCircle, FaTrophy,
    FaExclamationTriangle, FaArrowUp, FaCaretLeft, FaCaretRight
} from 'react-icons/fa';

const Dashboard = () => {
    const navigate = useNavigate();

    // Styles for the aiev.html filter fields
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

            {/* 2. NAVIGATION */}
            <div className="nav">
                <div className="nav-item active"><FaClipboardList style={{ marginRight: '6px' }} /> Candidates</div>
                <div className="nav-item"><FaChartBar style={{ marginRight: '6px' }} /> Analytics</div>
                <div className="nav-item"><FaCog style={{ marginRight: '6px' }} /> Settings</div>
                <div className="nav-item"><FaFolderOpen style={{ marginRight: '6px' }} /> Interviews</div>
            </div>

            {/* 3. STATS BAR */}
            <div className="stats-bar" style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)' }}>
                <div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaBullseye style={{ color: 'var(--primary-blue)' }} /> 247 Candidates • 38 New This Week
                    </div>
                    <div style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>
                        After applying filters: 4 matches
                    </div>
                </div>
                <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500', cursor: 'pointer' }}>
                    <FaFileExport style={{ color: '#64748b' }} /> Export ▼
                </div>
            </div>

            {/* 4. MAIN LAYOUT */}
            <div className="main-layout">

                {/* FILTERS SECTION (Right Side - from aiev.html) */}
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
                            <option value="Angular">Angular</option>
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
                    <div style={{ textAlign: 'center', marginTop: '12px', color: '#94a3b8', fontSize: '13px' }}>
                        4 candidates match
                    </div>
                </div>

                {/* CANDIDATES SECTION (Center) */}
                <div className="candidates-section">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>CANDIDATES</div>
                        <select style={{ padding: '8px 16px', border: '1px solid var(--border-light)', borderRadius: '8px', fontSize: '14px', background: 'white' }}>
                            <option>Sort: AI Score ▼</option>
                            <option>Experience: High to Low</option>
                            <option>Experience: Low to High</option>
                            <option>Name: A-Z</option>
                        </select>
                    </div>

                    {/* CARD 1: SARAH CHEN */}
                    <div className="candidate-card" style={{ borderLeft: '4px solid #22c55e' }} onClick={() => navigate('/candidate/101')}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-orange))', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>SC</div>
                                <div>
                                    <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', color: 'var(--text-main)' }}>Sarah Chen</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Senior Frontend Developer • 5 yrs</p>
                                </div>
                            </div>
                            <div style={{ padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaBrain /> AI: 8.7/10 <span style={{ color: '#16a34a', marginLeft: '4px' }}><FaArrowUp /> +12%</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaReact color="#61dafb" /> React <strong>9.2</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ color: '#3178c6', fontWeight: 'bold' }}>TS</span> TypeScript <strong>8.5</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaNodeJs color="#339933" /> Node.js <strong>7.1</strong></span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            <span><FaPlayCircle /> 3 interviews</span><span>• Last: Yesterday</span>
                        </div>
                        <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', fontSize: '13px', borderLeft: '3px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaPlayCircle style={{ color: 'var(--primary-blue)' }} /> "explained virtual DOM reconciliation and custom hooks in detail..."
                        </div>
                    </div>

                    {/* CARD 2: MICHAEL RODRIGUEZ */}
                    <div className="candidate-card" style={{ borderLeft: '4px solid #22c55e' }} onClick={() => navigate('/candidate/102')}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>MR</div>
                                <div>
                                    <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', color: 'var(--text-main)' }}>Michael Rodriguez</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Full Stack Engineer • 8 yrs</p>
                                </div>
                            </div>
                            <div style={{ padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaBrain /> AI: 9.1/10 <span style={{ marginLeft: '4px' }}><FaTrophy style={{ color: '#eab308' }} /> Top 5%</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaPython color="#3776AB" /> Python <strong>8.9</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaAws color="#FF9900" /> AWS <strong>8.2</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ color: '#092E20', fontWeight: 'bold' }}>dj</span> Django <strong>8.7</strong></span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            <span><FaPlayCircle /> 4 interviews</span><span>• Last: 2 days ago</span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#475569' }}>
                            <span>📊 Technical: 9.0</span><span>💬 Comm: 8.2</span><span>🧩 Problem: 9.1</span>
                        </div>
                    </div>

                    {/* CARD 3: ALEX FOSTER */}
                    <div className="candidate-card" style={{ borderLeft: '4px solid #22c55e' }} onClick={() => navigate('/candidate/103')}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #a855f7, #9333ea)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AF</div>
                                <div>
                                    <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', color: 'var(--text-main)' }}>Alex Foster</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>AI/ML Engineer • 4 yrs</p>
                                </div>
                            </div>
                            <div style={{ padding: '6px 12px', background: '#dcfce7', color: '#166534', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaBrain /> AI: 9.4/10 <span style={{ marginLeft: '4px', color: '#ef4444' }}><FaFire /> HOT</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaFire color="#ee4c2c" /> PyTorch <strong>9.0</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaBrain color="var(--primary-blue)" /> LLMs <strong>8.7</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaSearch color="#64748b" /> RAG <strong>8.9</strong></span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            <span><FaPlayCircle /> 3 interviews</span><span>• Last: Today</span>
                        </div>
                        <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '8px', fontSize: '13px', borderLeft: '3px solid var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaTrophy style={{ color: '#eab308' }} /> "Explained attention mechanism and transformer architecture in detail"
                        </div>
                    </div>

                    {/* CARD 4: PRIYA PATEL */}
                    <div className="candidate-card" style={{ borderLeft: '4px solid #eab308' }} onClick={() => navigate('/candidate/104')}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #eab308, #ca8a04)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>PP</div>
                                <div>
                                    <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', color: 'var(--text-main)' }}>Priya Patel</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Backend Engineer • 3 yrs</p>
                                </div>
                            </div>
                            <div style={{ padding: '6px 12px', background: '#fef9c3', color: '#854d0e', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <FaBrain /> AI: 7.2/10 <span style={{ marginLeft: '4px' }}><FaExclamationTriangle /> Needs deep dive</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaJava color="#5382a1" /> Java <strong>7.5</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaLeaf color="#6db33f" /> Spring <strong>6.8</strong></span>
                            <span style={{ padding: '4px 10px', background: '#f8fafc', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><FaDatabase color="#336791" /> SQL <strong>7.9</strong></span>
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                            <span><FaPlayCircle /> 2 interviews</span><span>• Last: 5 days ago</span>
                        </div>
                        <div style={{ background: '#fff7ed', padding: '10px 12px', borderRadius: '8px', fontSize: '13px', color: '#9a3412', borderLeft: '3px solid #f97316' }}>
                            "Good at CRUD operations, needs system design practice"
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '32px', color: '#64748b', fontSize: '14px' }}>
                        <span style={{ cursor: 'pointer' }}><FaCaretLeft size={18} /></span>
                        <span style={{ background: 'var(--primary-blue)', color: 'white', padding: '4px 10px', borderRadius: '6px', fontWeight: 'bold' }}>1</span>
                        <span style={{ cursor: 'pointer' }}>2</span>
                        <span style={{ cursor: 'pointer' }}>3</span>
                        <span>...</span>
                        <span style={{ cursor: 'pointer' }}>12</span>
                        <span style={{ cursor: 'pointer' }}><FaCaretRight size={18} /></span>
                        <span style={{ marginLeft: '16px' }}>1-4 of 247</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;