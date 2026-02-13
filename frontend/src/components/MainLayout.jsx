import { useNavigate, useLocation } from 'react-router-dom';
import {
    FaBolt, FaChartPie, FaClipboardList, FaFileAlt, FaCog,
    FaSignOutAlt, FaBell, FaSearch, FaUserCircle, FaBars
} from 'react-icons/fa';

const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: '/dashboard', label: 'Candidates', icon: FaClipboardList },
        { id: '/analytics', label: 'Analytics', icon: FaChartPie },
        { id: '/interviews', label: 'Interviews', icon: FaFileAlt },
        { id: '/settings', label: 'Settings', icon: FaCog },
    ];

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)', fontFamily: "'Inter', sans-serif" }}>
            {/* Sidebar */}
            <div style={{
                width: 'var(--sidebar-width)',
                background: 'white',
                borderRight: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 20
            }}>
                {/* Logo Area */}
                <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '42px', height: '42px', borderRadius: '12px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontSize: '20px',
                        boxShadow: '0 4px 10px rgba(6, 182, 212, 0.4)'
                    }}>
                        <FaBolt />
                    </div>
                    <div>
                        <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', letterSpacing: '-0.5px' }}>AI Evolution</span>
                        <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--primary)', letterSpacing: '0.5px' }}>HR SUITE</div>
                    </div>
                </div>

                {/* Navigation */}
                <div style={{ padding: '24px 16px', flex: 1 }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-light)', marginBottom: '16px', paddingLeft: '12px', letterSpacing: '1px' }}>
                        MAIN MENU
                    </div>
                    {menuItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(item.id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '10px',
                                marginBottom: '6px',
                                cursor: 'pointer',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                background: location.pathname === item.id ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
                                color: location.pathname === item.id ? 'var(--primary)' : 'var(--text-medium)',
                                fontWeight: location.pathname === item.id ? '600' : '500',
                            }}
                            onMouseOver={(e) => {
                                if (location.pathname !== item.id) {
                                    e.currentTarget.style.background = '#f8fafc';
                                    e.currentTarget.style.color = 'var(--text-dark)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (location.pathname !== item.id) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-medium)';
                                }
                            }}
                        >
                            <item.icon style={{ fontSize: '18px', opacity: location.pathname === item.id ? 1 : 0.7 }} />
                            {item.label}
                            {location.pathname === item.id && <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>}
                        </div>
                    ))}
                </div>

                {/* User & Logout */}
                <div style={{ padding: '20px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', padding: '12px', background: '#f8fafc', borderRadius: '12px' }}>
                        <div style={{ position: 'relative' }}>
                            <FaUserCircle style={{ fontSize: '36px', color: '#cbd5e1' }} />
                            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', background: 'var(--success)', borderRadius: '50%', border: '2px solid white' }}></div>
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: 'var(--text-dark)', fontSize: '14px' }}>Admin User</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>HR Manager</div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        style={{
                            width: '100%',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: 'white',
                            border: '1px solid #fee2e2',
                            color: '#ef4444',
                            borderRadius: '10px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '13px',
                            transition: 'all 0.2s',
                            boxShadow: '0 2px 4px rgba(239, 68, 68, 0.05)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.borderColor = '#fca5a5'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#fee2e2'; }}
                    >
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, marginLeft: 'var(--sidebar-width)', display: 'flex', flexDirection: 'column' }}>
                {/* Top Header */}
                <div style={{
                    height: 'var(--header-height)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 32px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                }}>
                    {/* Search Bar */}
                    <div style={{ position: 'relative', width: '380px' }}>
                        <FaSearch style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)', fontSize: '14px' }} />
                        <input
                            type="text"
                            placeholder="Search candidates, skills, or job roles..."
                            style={{
                                width: '100%',
                                padding: '12px 16px 12px 44px',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                background: '#f8fafc',
                                outline: 'none',
                                fontSize: '14px',
                                transition: 'all 0.2s',
                                color: 'var(--text-dark)'
                            }}
                            onFocus={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'; }}
                            onBlur={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                        />
                    </div>

                    {/* Right Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button style={{
                            position: 'relative', background: 'white', border: '1px solid #e2e8f0',
                            width: '40px', height: '40px', borderRadius: '12px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', transition: 'all 0.2s'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                        >
                            <FaBell style={{ color: 'var(--text-medium)', fontSize: '16px' }} />
                            <span style={{
                                position: 'absolute', top: '-4px', right: '-4px',
                                background: 'var(--secondary)',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '2px 5px',
                                borderRadius: '10px',
                                border: '2px solid white'
                            }}>3</span>
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(245, 124, 0, 0.05))', borderRadius: '20px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.2)' }}></div>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-dark)' }}>System Operational</span>
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
