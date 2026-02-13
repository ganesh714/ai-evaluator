import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaBrain } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO [Backend]: Add actual authentication logic here later
        navigate('/dashboard');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-main)',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{
                backgroundColor: 'var(--bg-card)',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center',
                borderTop: '4px solid var(--primary-blue)'
            }}>

                {/* Logo Area */}
                <div style={{ marginBottom: '30px' }}>
                    <FaBrain style={{ fontSize: '48px', color: 'var(--primary-blue)', marginBottom: '10px' }} />
                    <h1 style={{
                        color: 'var(--color-brand-navy)',
                        margin: '0',
                        fontSize: '24px',
                        fontWeight: '700'
                    }}>
                        AI Evolution
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '5px' }}>
                        Revolutionizing Recruitment
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{ textAlign: 'left' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-main)', marginBottom: '8px' }}>
                            Select Role
                        </label>
                        <div style={{ position: 'relative' }}>
                            <FaUserShield style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                            <select style={{
                                width: '100%',
                                padding: '10px 10px 10px 35px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-light)',
                                fontSize: '15px',
                                appearance: 'none',
                                backgroundColor: '#fff',
                                cursor: 'pointer'
                            }}>
                                <option value="hr">HR Filter Candidates</option>
                                <option value="admin">System Admin</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: 'var(--primary-blue)',
                            color: 'white',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s',
                            marginTop: '10px'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-blue)'}
                    >
                        Access Dashboard
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;