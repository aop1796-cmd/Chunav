import { useState, useRef, useEffect } from 'react';

const ENV_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_API_KEY_HERE";

export default function Chatbot() {
    const [apiKey, setApiKey] = useState(ENV_API_KEY !== "YOUR_API_KEY_HERE" ? ENV_API_KEY : "");
    const [chatMessages, setChatMessages] = useState([
        { text: "Namaste! I'm Chetna 🪔 your personal election guide. Ask me anything about India's elections!", isUser: false }
    ]);
    const [chatInput, setChatInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

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

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages, isTyping]);

    const sendMessageToAI = async (userMessage) => {
        if (!userMessage.trim()) return;

        const newMessages = [...chatMessages, { text: userMessage, isUser: true }];
        setChatMessages(newMessages);
        setChatInput('');

        if (!apiKey || apiKey.trim() === "") {
            setTimeout(() => {
                setChatMessages(prev => [...prev, { text: "⚠️ Please enter your Gemini API Key in the field below to chat with me.", isUser: false }]);
            }, 500);
            return;
        }

        setIsTyping(true);

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey.trim()}`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        { role: "user", parts: [{ text: "System prompt: You are a friendly assistant helping Indian citizens understand India's election process. Answer clearly and concisely in 2-4 sentences. Focus only on Indian elections.\n\nUser Question: " + userMessage }] }
                    ]
                })
            });

            const data = await response.json();
            setIsTyping(false);

            if (data.error) {
                setChatMessages(prev => [...prev, { text: `API Error: ${data.error.message}`, isUser: false }]);
            } else if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                setChatMessages(prev => [...prev, { text: data.candidates[0].content.parts[0].text, isUser: false }]);
            } else {
                setChatMessages(prev => [...prev, { text: "Received an unexpected response format from the API.", isUser: false }]);
            }

        } catch (error) {
            setIsTyping(false);
            setChatMessages(prev => [...prev, { text: `Network Error: Failed to connect to the API. ${error.message}`, isUser: false }]);
        }
    };

    return (
        <div style={{ paddingTop: '100px', minHeight: 'calc(100vh - 150px)' }}>
            <section id="ask-ai" className="section-padding" style={{ paddingTop: '0' }}>
                <div className="container fade-in visible">
                    <h2 className="section-title">Ask Anything About Elections</h2>
                    <div className="chat-container glass-card" style={{ padding: "0" }}>
                        <div className="chat-header">
                            <div className="bot-avatar">C</div>
                            <div className="chat-title"><h3>Chetna</h3><p>Online</p></div>
                        </div>
                        <div className="chat-messages">
                            {chatMessages.map((msg, i) => (
                                <div key={i} className={`message ${msg.isUser ? 'user' : 'bot'}`}>{msg.text}</div>
                            ))}
                            {isTyping && (
                                <div className="typing-indicator" style={{ display: "block" }}>
                                    <div className="dots"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="quick-questions">
                            {["What is ECI?", "How to register to vote?", "What is NOTA?", "How does EVM work?", "What is MCC?", "What is VVPAT?"].map((q, i) => (
                                <button key={i} className="qq-btn" onClick={() => sendMessageToAI(q)}>{q}</button>
                            ))}
                        </div>
                        <div className="chat-input-area">
                            <input 
                                type="text" 
                                className="chat-input" 
                                placeholder="Type your question here..." 
                                value={chatInput}
                                onChange={e => setChatInput(e.target.value)}
                                onKeyPress={e => e.key === 'Enter' && sendMessageToAI(chatInput)}
                            />
                            <button className="chat-send-btn" onClick={() => sendMessageToAI(chatInput)}>➤</button>
                        </div>
                    </div>
                    {(!apiKey || apiKey.trim() === "") && (
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p className="api-key-warning" style={{ marginBottom: '10px' }}>To use Chetna, please enter your Gemini API Key:</p>
                            <input 
                                type="password" 
                                placeholder="Paste your Gemini API Key here..." 
                                value={apiKey} 
                                onChange={(e) => setApiKey(e.target.value)}
                                style={{
                                    padding: '10px 15px', borderRadius: '5px', border: '1px solid var(--card-border)', 
                                    background: 'var(--card-bg)', color: 'var(--white)', width: '100%', maxWidth: '400px'
                                }}
                            />
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
