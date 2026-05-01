import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Chatbot from './pages/Chatbot';
import Login from './pages/Login';
import PortalGuide from './pages/PortalGuide';
import './index.css';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/ask-ai" element={<Chatbot />} />
                <Route path="/guide" element={<PortalGuide />} />
            </Routes>
            <Footer />
        </Router>
    );
}
