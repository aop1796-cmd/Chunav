import { useState, useEffect } from 'react';

const QUIZ_DATA = [
    {
        question: "What is the minimum voting age in India?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        answer: 1,
        explanation: "The 61st Constitutional Amendment Act (1988) lowered the voting age for elections to the Lok Sabha and Legislative Assemblies from 21 years to 18 years."
    },
    {
        question: "How many elected seats are there in the Lok Sabha?",
        options: ["543", "545", "550", "250"],
        answer: 0,
        explanation: "There are 543 elected seats in the Lok Sabha. (The provision for 2 Anglo-Indian nominated seats was abolished in 2020)."
    },
    {
        question: "What does NOTA stand for?",
        options: ["None of The Above", "No Other Terms Allowed", "National Option To Abstain", "Non Official Trending Area"],
        answer: 0,
        explanation: "NOTA stands for 'None of the Above'. It allows voters to officially register a vote of rejection for all candidates in the election."
    },
    {
        question: "What is the Model Code of Conduct (MCC)?",
        options: ["A law passed by Parliament", "ECI guidelines for elections", "Rules for news channels only", "A tax code for political parties"],
        answer: 1,
        explanation: "The MCC is a set of guidelines issued by the Election Commission of India for conduct of political parties and candidates during elections, ensuring free and fair polling."
    },
    {
        question: "Which voting system does India use for Lok Sabha elections?",
        options: ["Proportional Representation", "Ranked Choice", "First Past The Post", "Two-Round System"],
        answer: 2,
        explanation: "India uses the 'First Past The Post' system for Lok Sabha and Assembly elections, where the candidate with the highest number of votes in a constituency wins."
    },
    {
        question: "What does EVM stand for?",
        options: ["Election Voting Mechanism", "Electronic Voting Machine", "Electoral Vote Monitor", "Easy Vote Maker"],
        answer: 1,
        explanation: "EVM stands for Electronic Voting Machine, which replaced traditional paper ballots in India to make voting and counting faster and more secure."
    },
    {
        question: "Which body conducts general elections in India?",
        options: ["Supreme Court of India", "Parliament of India", "Election Commission of India", "Ministry of Home Affairs"],
        answer: 2,
        explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India."
    }
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizFinished, setQuizFinished] = useState(false);

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

    const handleQuizSelect = (idx) => {
        if (hasAnswered) return;
        setHasAnswered(true);
        setSelectedOption(idx);
        if (idx === QUIZ_DATA[currentQuestion].answer) {
            setScore(s => s + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion < QUIZ_DATA.length - 1) {
            setCurrentQuestion(c => c + 1);
            setHasAnswered(false);
            setSelectedOption(null);
        } else {
            setQuizFinished(true);
        }
    };

    const retakeQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setHasAnswered(false);
        setSelectedOption(null);
        setQuizFinished(false);
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 150px)' }}>
            <section id="quiz" className="section-padding" style={{ paddingTop: '0' }}>
                <div className="container quiz-container glass-card fade-in visible">
                    <h2 className="section-title" style={{ marginBottom: "20px" }}>Test Your Knowledge</h2>
                    
                    {!quizFinished ? (
                        <div>
                            <div className="quiz-progress">
                                <div className="quiz-progress-bar" style={{ width: `${(currentQuestion / QUIZ_DATA.length) * 100}%` }}></div>
                            </div>
                            <div className="quiz-question-box">
                                <p style={{ color: "var(--saffron)", fontWeight: "bold", marginBottom: "10px" }}>Question {currentQuestion + 1} of {QUIZ_DATA.length}</p>
                                <h3 className="quiz-question">{QUIZ_DATA[currentQuestion].question}</h3>
                                
                                <div className="quiz-options">
                                    {QUIZ_DATA[currentQuestion].options.map((opt, idx) => {
                                        let btnClass = "quiz-option";
                                        if (hasAnswered) {
                                            if (idx === QUIZ_DATA[currentQuestion].answer) btnClass += " correct";
                                            else if (idx === selectedOption) btnClass += " wrong";
                                        }
                                        return (
                                            <button 
                                                key={idx} 
                                                className={btnClass} 
                                                onClick={() => handleQuizSelect(idx)}
                                                disabled={hasAnswered}
                                            >
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>

                                {hasAnswered && (
                                    <>
                                        <div className="quiz-explanation" style={{ display: "block" }}>
                                            <strong>Explanation:</strong> {QUIZ_DATA[currentQuestion].explanation}
                                        </div>
                                        <button className="btn btn-primary quiz-next-btn" style={{ display: "inline-block" }} onClick={handleNextQuestion}>
                                            {currentQuestion === QUIZ_DATA.length - 1 ? 'See Results' : 'Next Question'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="quiz-result" style={{ display: "block" }}>
                            <div className="quiz-score-circle">{Math.round((score / QUIZ_DATA.length) * 100)}%</div>
                            <h3 className="quiz-feedback">
                                {score === QUIZ_DATA.length ? "Perfect Score! 🌟" : score >= 4 ? "Great Job! 👍" : "Good Effort! 📚"}
                            </h3>
                            <p style={{ marginBottom: "30px", color: "rgba(255,255,255,0.7)" }}>You answered {score} out of {QUIZ_DATA.length} questions correctly.</p>
                            <button className="btn btn-outline" onClick={retakeQuiz}>Retake Quiz</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
