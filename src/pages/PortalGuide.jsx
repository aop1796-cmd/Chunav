import React from 'react';
import form6Img from '../assets/form6.png';
import form7Img from '../assets/form7.png';
import form8Img from '../assets/form8.png';

export default function PortalGuide() {
    return (
        <div className="portal-guide-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="container">
                {/* Unified Gateway Section */}
                <div className="gateway-section fade-in visible" style={{ marginBottom: '80px' }}>
                    <div className="gateway-grid">
                        <div className="gateway-card desi-card left-card">
                            <div className="gateway-card-inner">
                                <div className="gateway-icon">🏛️</div>
                                <h3>Official Portal</h3>
                                <p>Direct, secure access to the Election Commission of India's services.</p>
                            </div>
                        </div>

                        <div className="gateway-center" style={{ textAlign: 'center' }}>
                            <h1 className="section-title" style={{ fontFamily: '"Rozha One", serif', fontSize: '3.5rem', color: 'var(--saffron)', margin: '0 auto 20px', paddingBottom: '0' }}>
                                Voter Services Hub
                            </h1>
                            <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', fontFamily: '"Yatra One", cursive' }}>
                                Your central gateway to the Election Commission of India. Access official services, register to vote, or learn how to navigate the portal below.
                            </p>
                            <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary gateway-btn">
                                Enter Official Voter Portal <span>→</span>
                            </a>
                        </div>

                        <div className="gateway-card desi-card right-card">
                            <div className="gateway-card-inner">
                                <div className="gateway-icon">🇮🇳</div>
                                <h3>Your Duty</h3>
                                <p>Every single vote is equal and shapes the future of the nation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="section-title fade-in visible" style={{ fontFamily: '"Rozha One", serif', fontSize: '2.5rem', color: 'var(--white)', marginTop: '80px', marginBottom: '40px' }}>
                    Portal Navigation Guide
                </h2>

                <div className="guide-section fade-in visible desi-card">
                    <div className="guide-content">
                        <h2 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '2.2rem', fontFamily: '"Rozha One", serif' }}>Form 6: New Voter Registration</h2>
                        <p className="guide-desc" style={{ marginBottom: '15px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>Purpose:</strong> Used by Indian citizens who are 18 years or older to register their names in the Electoral Roll for the first time.
                        </p>
                        <p className="guide-desc" style={{ marginBottom: '25px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>How to fill:</strong> Click the button below, login/signup on the portal, and select "New Voter Registration (Form 6)". You will need your passport-size photo, age proof (like Aadhaar or PAN), and address proof.
                        </p>
                        <a href="https://voters.eci.gov.in/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary desi-btn">
                            Apply via Form 6 <span>→</span>
                        </a>
                    </div>
                    <div className="guide-image desi-image-frame">
                        <img src={form6Img} alt="Form 6 Interface" />
                    </div>
                </div>

                <div className="guide-section reverse fade-in visible desi-card" style={{ marginTop: '50px' }}>
                    <div className="guide-image desi-image-frame">
                        <img src={form7Img} alt="Form 7 Interface" />
                    </div>
                    <div className="guide-content">
                        <h2 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '2.2rem', fontFamily: '"Rozha One", serif' }}>Form 7: Deletion or Objection</h2>
                        <p className="guide-desc" style={{ marginBottom: '15px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>Purpose:</strong> Used for objecting to the inclusion of a name in the electoral roll or seeking deletion of a name (due to shifting, death, etc.).
                        </p>
                        <p className="guide-desc" style={{ marginBottom: '25px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>How to fill:</strong> Access the portal, choose "Form 7", and provide details of the person whose name is to be deleted along with the reason (e.g., Death Certificate).
                        </p>
                        <a href="https://voters.eci.gov.in/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary desi-btn">
                            Apply via Form 7 <span>→</span>
                        </a>
                    </div>
                </div>

                <div className="guide-section fade-in visible desi-card" style={{ marginTop: '50px' }}>
                    <div className="guide-content">
                        <h2 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '2.2rem', fontFamily: '"Rozha One", serif' }}>Form 8: Correction or Shifting</h2>
                        <p className="guide-desc" style={{ marginBottom: '15px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>Purpose:</strong> Used for correction of entries in the electoral roll, shifting of residence, replacement of EPIC (Voter ID), or marking as a person with disabilities (PwD).
                        </p>
                        <p className="guide-desc" style={{ marginBottom: '25px', fontFamily: '"Yatra One", cursive', fontSize: '1.1rem' }}>
                            <strong style={{ color: 'var(--saffron)' }}>How to fill:</strong> Select "Form 8" on the portal. You can choose whether you are shifting within the same constituency or a different one, or correcting details like name, DOB, or photo.
                        </p>
                        <a href="https://voters.eci.gov.in/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary desi-btn">
                            Apply via Form 8 <span>→</span>
                        </a>
                    </div>
                    <div className="guide-image desi-image-frame">
                        <img src={form8Img} alt="Form 8 Interface" />
                    </div>
                </div>
            </div>
        </div>
    );
}
