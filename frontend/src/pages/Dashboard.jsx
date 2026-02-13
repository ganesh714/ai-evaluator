import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockCandidates } from '../data/mockData';
import MainLayout from '../components/MainLayout';
import {
    FaBolt,
    FaStar,
    FaFilter,
    FaPlay,
    FaSortAmountDown
} from 'react-icons/fa';

// Helper component for skill sliders
const SkillSlider = ({ name, active, onChange }) => (
    <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
            <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>{name}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['9-10', '7-8', '5-6', '<5'].map((range) => (
                <span
                    key={range}
                    onClick={() => onChange(range === active ? null : range)}
                    style={{
                        padding: '6px 12px',
                        background: active === range ? 'var(--primary)' : 'white',
                        color: active === range ? 'white' : 'var(--text-medium)',
                        border: active === range ? '1px solid var(--primary)' : '1px solid #e2e8f0',
                        borderRadius: '20px',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    {range}
                </span>
            ))}
        </div>
    </div>
);

const Dashboard = () => {
    const navigate = useNavigate();

    // State for filters
    const [filters, setFilters] = useState({
        minScore: 0,
        status: [],
        experience: [],
        education: [],
        interviewCount: [],
        aiVerified: [],
        skills: {}
    });

    const toggleFilter = (category, value) => {
        setFilters(prev => {
            const current = prev[category];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const setSkillFilter = (skill, range) => {
        setFilters(prev => ({
            ...prev,
            skills: { ...prev.skills, [skill]: range }
        }));
    };

    // Extract all unique skills from candidates
    const allSkills = useMemo(() => {
        const skills = new Set();
        mockCandidates.forEach(c => {
            c.skills?.forEach(s => skills.add(s.name));
        });
        return Array.from(skills).sort();
    }, []);

    // Helper to check skill score against range
    const checkSkillRange = (score, range) => {
        if (!range) return true;
        if (range === '9-10') return score >= 9;
        if (range === '7-8') return score >= 7 && score < 9;
        if (range === '5-6') return score >= 5 && score < 7;
        if (range === '<5') return score < 5;
        return false;
    };

    // Derived state: Filtered Candidates
    const filteredCandidates = useMemo(() => {
        return mockCandidates.filter(candidate => {
            // Score Filter
            if (filters.minScore > 0 && candidate.aiScore <= filters.minScore) return false;

            // Experience Filter (Simple string matching)
            if (filters.experience.length > 0 && !filters.experience.includes(candidate.experience)) {
                const expYear = parseInt(candidate.experience);
                const matchesExp = filters.experience.some(range => {
                    if (range === '0-2 yrs') return expYear <= 2;
                    if (range === '3-5 yrs') return expYear >= 3 && expYear <= 5;
                    if (range === '6-10 yrs') return expYear >= 6 && expYear <= 10;
                    if (range === '10+ yrs') return expYear > 10;
                    return false;
                });
                if (!matchesExp) return false;
            }

            // Interview Count Filter
            if (filters.interviewCount.length > 0) {
                const matchesCount = filters.interviewCount.some(range => {
                    if (range === '1') return candidate.interviewCount === 1;
                    if (range === '2-3') return candidate.interviewCount >= 2 && candidate.interviewCount <= 3;
                    if (range === '4+') return candidate.interviewCount >= 4;
                    return false;
                });
                if (!matchesCount) return false;
            }

            // AI Verified (Top Percentile)
            if (filters.aiVerified.length > 0) {
                const percentile = parseInt(candidate.topPercentile.replace(/[^0-9]/g, ''));
                const matchesTier = filters.aiVerified.some(tier => {
                    const tierVal = parseInt(tier.replace(/[^0-9]/g, ''));
                    return percentile <= tierVal;
                });
                if (!matchesTier) return false;
            }

            // Skills Filter
            const skillFilters = Object.entries(filters.skills || {}).filter(([_, range]) => range);
            if (skillFilters.length > 0) {
                const matchesSkills = skillFilters.every(([skillName, range]) => {
                    const candidateSkill = candidate.skills?.find(s => s.name === skillName);
                    return candidateSkill && checkSkillRange(candidateSkill.score, range);
                });
                if (!matchesSkills) return false;
            }

            return true;
        });
    }, [filters, allSkills]);

    // Counts for badges
    const getCount = (filterFn) => mockCandidates.filter(filterFn).length;

    return (
        <MainLayout>
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                {/* Stats Bar */}
                <div style={{ paddingBottom: '24px', borderBottom: '1px solid #eef2f6', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--text-dark)' }}>
                            Dashboard Overview
                        </div>
                        <div style={{ color: 'var(--text-light)', fontSize: '14px', marginTop: '4px' }}>
                            🎯 {mockCandidates.length} Candidates • {mockCandidates.filter(c => c.experience === '3 yrs').length} New This Week • {filteredCandidates.length} Showing
                        </div>
                    </div>
                </div>

                {/* Main Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '24px' }}>
                    {/* Candidates Section */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <div style={{ fontWeight: '600', color: 'var(--text-medium)' }}>CANDIDATES ({filteredCandidates.length})</div>
                            <div style={{
                                padding: '8px 16px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '14px',
                                color: 'var(--text-medium)',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }}>
                                <FaSortAmountDown /> Sort: AI Score
                            </div>
                        </div>

                        {filteredCandidates.map((candidate) => (
                            <div
                                key={candidate.id}
                                onClick={() => navigate(`/candidate/${candidate.id}`)}
                                className="card"
                                style={{
                                    padding: '20px',
                                    marginBottom: '16px',
                                    borderLeft: `4px solid ${candidate.aiScore >= 8 ? 'var(--primary)' : candidate.aiScore >= 7 ? 'var(--secondary)' : 'var(--danger)'}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    background: 'white'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <div style={{
                                            width: '48px', height: '48px', borderRadius: '12px',
                                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                            color: 'white', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', fontWeight: 'bold', fontSize: '18px'
                                        }}>
                                            {candidate.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: 'var(--text-dark)' }}>{candidate.name}</h4>
                                            <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--text-light)' }}>{candidate.role} • {candidate.experience}</p>
                                        </div>
                                    </div>
                                    <div style={{
                                        padding: '6px 12px',
                                        background: candidate.aiScore >= 8 ? 'rgba(6, 182, 212, 0.1)' : 'rgba(245, 124, 0, 0.1)',
                                        color: candidate.aiScore >= 8 ? 'var(--primary)' : 'var(--secondary)',
                                        borderRadius: '20px', fontSize: '14px', fontWeight: 'bold',
                                        display: 'flex', alignItems: 'center', gap: '6px'
                                    }}>
                                        <FaStar /> AI Score: {candidate.aiScore}/10
                                        <span style={{ color: candidate.trendDirection === 'up' ? 'var(--success)' : 'var(--text-light)', marginLeft: '4px', fontSize: '12px' }}>
                                            {candidate.trendDirection === 'up' ? '📈' : ''} {candidate.trend}
                                        </span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '16px 0' }}>
                                    {candidate.skills.slice(0, 3).map((skill, idx) => (
                                        <span key={idx} style={{
                                            padding: '6px 12px', background: 'var(--bg-color)', borderRadius: '6px',
                                            fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px',
                                            color: 'var(--text-medium)', fontWeight: '500'
                                        }}>
                                            <FaBolt style={{ color: 'var(--primary)', fontSize: '12px' }} /> {skill.name}
                                            <span style={{ fontWeight: 'bold', color: 'var(--text-dark)' }}>{skill.score}</span>
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                                    <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-light)' }}>
                                        <span>🎥 {candidate.interviewCount} interviews</span>
                                        <span>• Last: {candidate.lastInterview}</span>
                                    </div>

                                    {candidate.topPercentile && (
                                        <div style={{
                                            fontSize: '13px', color: 'var(--primary)', fontWeight: '600',
                                            display: 'flex', alignItems: 'center', gap: '6px'
                                        }}>
                                            <FaPlay /> Top performer in system design...
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filters Section */}
                    <div style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: 'var(--card-radius)',
                        boxShadow: 'var(--card-shadow)',
                        height: 'fit-content'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', margin: 0, color: 'var(--text-dark)' }}>
                                <FaFilter /> FILTERS
                            </h3>
                            <div
                                style={{ color: 'var(--primary)', fontSize: '14px', cursor: 'pointer', fontWeight: '600' }}
                                onClick={() => setFilters({ minScore: 0, status: [], experience: [], education: [], interviewCount: [], aiVerified: [], skills: {} })}
                            >
                                Reset
                            </div>
                        </div>

                        {/* Quick Filters */}
                        <div style={{ marginBottom: '28px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-light)', marginBottom: '12px', letterSpacing: '0.5px' }}>QUICK</div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontSize: '14px', color: 'var(--text-medium)' }}>
                                <input
                                    type="checkbox"
                                    checked={filters.minScore === 8}
                                    onChange={(e) => setFilters(prev => ({ ...prev, minScore: e.target.checked ? 8 : 0 }))}
                                    style={{ marginRight: '10px', accentColor: 'var(--primary)' }}
                                />
                                AI Score {'>'} 8 <span style={{ marginLeft: 'auto', background: 'var(--bg-color)', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>
                                    {getCount(c => c.aiScore > 8)}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontSize: '14px', color: 'var(--text-medium)' }}>
                                <input
                                    type="checkbox"
                                    checked={filters.minScore === 6}
                                    onChange={(e) => setFilters(prev => ({ ...prev, minScore: e.target.checked ? 6 : 0 }))}
                                    style={{ marginRight: '10px', accentColor: 'var(--primary)' }}
                                />
                                AI Score {'>'} 6 <span style={{ marginLeft: 'auto', background: 'var(--bg-color)', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>
                                    {getCount(c => c.aiScore > 6)}
                                </span>
                            </div>
                        </div>

                        {/* Experience */}
                        <div style={{ marginBottom: '28px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-light)', marginBottom: '12px', letterSpacing: '0.5px' }}>EXPERIENCE</div>
                            {['0-2 yrs', '3-5 yrs', '6-10 yrs', '10+ yrs'].map((exp) => (
                                <div key={exp} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontSize: '14px', color: 'var(--text-medium)' }}>
                                    <input
                                        type="checkbox"
                                        checked={filters.experience.includes(exp)}
                                        onChange={() => toggleFilter('experience', exp)}
                                        style={{ marginRight: '10px', accentColor: 'var(--primary)' }}
                                    />
                                    {exp}
                                </div>
                            ))}
                        </div>

                        {/* Skill Strength */}
                        <div style={{ marginBottom: '28px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--text-light)', marginBottom: '12px', letterSpacing: '0.5px' }}>SKILL STRENGTH</div>
                            {allSkills.map(skill => (
                                <SkillSlider
                                    key={skill}
                                    name={skill}
                                    active={filters.skills[skill]}
                                    onChange={(range) => setSkillFilter(skill, range)}
                                />
                            ))}
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                            APPLY FILTERS
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;