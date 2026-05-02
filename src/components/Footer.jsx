export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-logo">🗳️ <span className="notranslate">Chunav AI</span></div>
                <p className="footer-tagline">Every vote counts. Make yours informed.</p>
                <p className="footer-subtext">Built for awareness. Data sourced from <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--saffron)'}}>Election Commission of India</a>.</p>
            </div>
        </footer>
    );
}
