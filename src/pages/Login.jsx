import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Since we are demonstrating the UI, we'll just navigate to Home on "login"
        navigate('/');
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container fade-in visible" style={{ maxWidth: '400px' }}>
                <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🗳️</div>
                    <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '5px' }}>Welcome to Chunav</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>Sign in to continue</p>
                    
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <input 
                                type="email" 
                                className="chat-input" 
                                placeholder="Email Address" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                className="chat-input" 
                                placeholder="Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', fontSize: '1.1rem' }}>
                            Sign In
                        </button>
                    </form>
                    
                    <div style={{ marginTop: '25px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                        <p>Don't have an account? <a href="#" style={{ color: 'var(--saffron)', textDecoration: 'none', fontWeight: 'bold' }}>Register Here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
