import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TIMELINE_DATA = [
    {
        title: "Election Announcement",
        summary: "ECI announces dates, MCC begins.",
        details: "The Election Commission of India (ECI) announces the polling schedule. Immediately, the Model Code of Conduct (MCC) comes into force to ensure free and fair elections, preventing the ruling party from making announcements that could influence voters."
    },
    {
        title: "Voter Registration",
        summary: "EPIC card, voters.eci.gov.in.",
        details: "Citizens aged 18+ can register to vote via voters.eci.gov.in or forms. A valid Electoral Photo Identity Card (EPIC) or other approved ID is required. Electoral rolls are continuously updated before nominations begin."
    },
    {
        title: "Filing of Nominations",
        summary: "Security deposit ₹25,000, party symbols.",
        details: "Candidates file their nomination papers with the Returning Officer. A security deposit (₹25,000 for Lok Sabha for general category) is required. Candidates declare their assets, criminal records, and educational qualifications."
    },
    {
        title: "Scrutiny & Withdrawal",
        summary: "Eligibility check, final candidate list.",
        details: "The Returning Officer scrutinizes all nominations to ensure validity. Candidates are given a window to withdraw their nominations. After this, the final list of contesting candidates is published."
    },
    {
        title: "Election Campaign",
        summary: "Rallies, MCC enforcement, 48hr silence period.",
        details: "Political parties and candidates hold rallies and campaigns. The ECI monitors expenditures and MCC violations. Campaigning strictly stops 48 hours before the end of polling (silence period) to allow voters to think calmly."
    },
    {
        title: "Polling Day",
        summary: "7AM–6PM, ink finger, EVM + VVPAT.",
        details: "Voters cast their votes securely using Electronic Voting Machines (EVMs). A Voter Verifiable Paper Audit Trail (VVPAT) allows voters to verify their vote. Indelible ink is applied to the left index finger to prevent multiple voting."
    },
    {
        title: "Vote Counting & Results",
        summary: "FPTP system, round-by-round counting.",
        details: "Under heavy security, EVMs are opened on a scheduled day. Votes are counted round-by-round. India follows the First Past The Post (FPTP) system, where the candidate with the highest number of votes in a constituency wins."
    },
    {
        title: "Government Formation",
        summary: "272+ seats, PM sworn in, coalition if needed.",
        details: "A party or coalition needs a majority (272+ out of 543 seats) in the Lok Sabha to form the government. The President invites the leader of the majority party/coalition to be sworn in as the Prime Minister."
    }
];

export default function Home() {
    const [activeTimeline, setActiveTimeline] = useState(null);

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

    return (
        <div style={{ paddingTop: '80px' }}>
            <section id="home" className="hero" style={{ paddingTop: '0', minHeight: 'calc(100vh - 80px)' }}>
                <div className="container hero-content">
                    <h1 className="fade-in">Know Your Vote</h1>
                    <div className="tricolor-line"></div>
                    <p className="fade-in">India's most interactive election education platform.</p>
                    
                    <div className="hero-btns fade-in">
                        <a href="#timeline" className="btn btn-primary">Explore Timeline →</a>
                        <Link to="/quiz" className="btn btn-outline">Take the Quiz</Link>
                    </div>

                    <div className="floating-stats fade-in">
                        <div className="stat-badge">96.8Cr Voters</div>
                        <div className="stat-badge">543 Seats</div>
                        <div className="stat-badge">18+ Age to Vote</div>
                    </div>
                </div>
            </section>

            <section id="timeline" className="section-padding">
                <div className="container">
                    <h2 className="section-title fade-in">How Elections Work in India</h2>
                    
                    <div className="timeline fade-in">
                        {TIMELINE_DATA.map((item, index) => (
                            <div 
                                key={index}
                                className={`timeline-item glass-card ${activeTimeline === index ? 'active' : ''}`}
                                onClick={() => setActiveTimeline(activeTimeline === index ? null : index)}
                            >
                                <div className="timeline-dot">{index + 1}</div>
                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.summary} <span className="expand-icon">▼</span></p>
                                    <div className="timeline-details">{item.details}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="facts" className="section-padding">
                <div className="container">
                    <h2 className="section-title fade-in">India by the Numbers</h2>
                    <div className="facts-grid fade-in">
                        <div className="fact-card glass-card"><div className="fact-number">96.8Cr</div><div className="fact-label">Registered Voters (2024)</div></div>
                        <div className="fact-card glass-card"><div className="fact-number">543</div><div className="fact-label">Lok Sabha Seats</div></div>
                        <div className="fact-card glass-card"><div className="fact-number">18+</div><div className="fact-label">Voting Age</div></div>
                        <div className="fact-card glass-card"><div className="fact-number">7</div><div className="fact-label">Phases in 2024 General Election</div></div>
                        <div className="fact-card glass-card"><div className="fact-number">272</div><div className="fact-label">Seats needed for majority</div></div>
                        <div className="fact-card glass-card"><div className="fact-number">5 Years</div><div className="fact-label">Government term</div></div>
                    </div>
                </div>
            </section>

            <section id="bodies" className="section-padding">
                <div className="container">
                    <h2 className="section-title fade-in">Who Runs India's Elections?</h2>
                    <div className="bodies-grid fade-in">
                        <div className="body-card glass-card"><div className="body-icon">⚖️</div><h3>Election Commission of India</h3><p>Independent constitutional body, conducts all elections.</p></div>
                        <div className="body-card glass-card"><div className="body-icon">🏛️</div><h3>Returning Officer</h3><p>District Magistrate managing a constituency's election.</p></div>
                        <div className="body-card glass-card"><div className="body-icon">📋</div><h3>NOTA</h3><p>None of the Above, introduced 2013 by Supreme Court.</p></div>
                        <div className="body-card glass-card"><div className="body-icon">🗳️</div><h3>EVM & VVPAT</h3><p>Electronic Voting Machine with paper audit trail.</p></div>
                        <div className="body-card glass-card"><div className="body-icon">📰</div><h3>Model Code of Conduct</h3><p>ECI guidelines from announcement to results.</p></div>
                        <div className="body-card glass-card"><div className="body-icon">🪪</div><h3>EPIC Card</h3><p>Voter Photo ID required at polling booth.</p></div>
                    </div>
                </div>
            </section>

            <section id="why-vote" className="section-padding">
                <div className="container">
                    <h2 className="section-title fade-in">Why Your Vote Matters</h2>
                    <div className="bodies-grid fade-in">
                        <div className="body-card glass-card">
                            <div className="body-icon">🗳️</div>
                            <h3 style={{ fontSize: '1.2rem' }}>Your vote decides who makes laws for 1.4 billion Indians</h3>
                        </div>
                        <div className="body-card glass-card">
                            <div className="body-icon">📊</div>
                            <h3 style={{ fontSize: '1.2rem' }}>In 2019, some seats were won by less than 100 votes</h3>
                        </div>
                        <div className="body-card glass-card">
                            <div className="body-icon">💪</div>
                            <h3 style={{ fontSize: '1.2rem' }}>Every vote is equal — billionaire or farmer</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
