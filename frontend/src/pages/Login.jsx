import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaBrain, FaBolt, FaArrowRight } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Mock authentication
        navigate('/dashboard');
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0))', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(245, 124, 0, 0.05), rgba(245, 124, 0, 0))', zIndex: 0 }}></div>

            <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '48px',
                borderRadius: '24px',
                boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
                width: '100%',
                maxWidth: '420px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                zIndex: 1,
                position: 'relative'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '40px'
                }}>
                    <div style={{
                        width: '64px', height: '64px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '20px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontSize: '32px',
                        boxShadow: '0 8px 16px rgba(6, 182, 212, 0.3)'
                    }}>
                        <FaBolt />
                    </div>
                    <div>
                        <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-dark)', letterSpacing: '-0.5px' }}>AI Evolution</div>
                        <div style={{ fontSize: '14px', color: 'var(--text-light)', fontWeight: '500', marginTop: '4px' }}>HR Intelligence Suite</div>
                    </div>
                </div>

                <div style={{ marginBottom: '32px', textAlign: 'left' }}>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>Welcome Back</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>Enter your credentials to access the panel.</div>
                </div>

                <div style={{ textAlign: 'left', marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--text-medium)', letterSpacing: '0.3px' }}>
                        SELECT ROLE
                    </label>
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <FaUserShield style={{
                            position: 'absolute',
                            left: '16px',
                            color: 'var(--primary)',
                            zIndex: 1,
                            fontSize: '16px'
                        }} />
                        <select style={{
                            width: '100%',
                            padding: '14px 14px 14px 44px',
                            borderRadius: '12px',
                            border: '1px solid #e2e8f0',
                            appearance: 'none',
                            backgroundColor: '#f8fafc',
                            color: 'var(--text-dark)',
                            fontSize: '15px',
                            fontWeight: '600',
                            outline: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                            onFocus={(e) => { e.target.style.background = 'white'; e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(6, 182, 212, 0.1)'; }}
                            onBlur={(e) => { e.target.style.background = '#f8fafc'; e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                        >
                            <option>HR / Admin</option>
                        </select>
                        <div style={{ position: 'absolute', right: '16px', pointerEvents: 'none', color: 'var(--text-light)', fontSize: '12px' }}>▼</div>
                    </div>
                </div>

                <button
                    onClick={handleLogin}
                    className="btn btn-primary"
                    style={{
                        width: '100%',
                        padding: '14px',
                        fontSize: '16px',
                        justifyContent: 'center'
                    }}
                >
                    Login to Dashboard <FaArrowRight style={{ fontSize: '14px' }} />
                </button>

                <div style={{ marginTop: '24px', fontSize: '13px', color: 'var(--text-light)' }}>
                    Protected by <span style={{ color: 'var(--primary)', fontWeight: '600' }}>AI Guard™</span> security
                </div>
            </div>
        </div>
    );
};

export default Login;