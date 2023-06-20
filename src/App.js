import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';
import PhotoSection from './components/PhotoSection';
import LandingPage from './components/LandingPage'

const App = () => {
    return (
        <Router>
            <div>
                <LandingPage />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/PhotoSection" element={<PhotoSection />} /> {/* Define the route for showcasing photos */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
