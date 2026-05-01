import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Load Google Translate Script
    useEffect(() => {
        // Prevent duplicate loads in React StrictMode
        if (document.getElementById('google-translate-script')) {
            return;
        }

        const addScript = document.createElement('script');
        addScript.id = 'google-translate-script';
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);

        window.googleTranslateElementInit = () => {
            const translateDiv = document.getElementById('google_translate_element');
            if (translateDiv) {
                translateDiv.innerHTML = ''; // Clear any existing widget to prevent duplicates
            }
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'hi,bn,te,mr,ta,ur,gu,kn,or,ml,pa,as,mai,sa,en',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    'google_translate_element'
                );
            }
        };
    }, []);

    const closeMenu = () => setMobileMenuOpen(false);

    // Function to handle anchor scrolling on the home page
    const getHomeLink = (hash) => {
        return location.pathname === '/' ? hash : `/${hash}`;
    };

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="container nav-container">
                <Link to="/" className="brand-logo" onClick={closeMenu}>
                    <img src={logoUrl} alt="Chunav Logo" style={{ height: '32px', marginRight: '10px', verticalAlign: 'middle', borderRadius: '50%' }} />
                    <span className="notranslate">Chunav</span>
                </Link>
                
                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/quiz" className="nav-link" onClick={closeMenu}>Quiz</Link>
                    <Link to="/guide" className="nav-link" onClick={closeMenu}>Voter Services Hub</Link>
                    <div id="google_translate_element" className="translate-widget" onClick={closeMenu}></div>
                    <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
                    <Link to="/ask-ai" className="btn-ask-ai" onClick={closeMenu}>Ask AI</Link>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}
