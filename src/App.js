import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Bookings from "./pages/Bookings";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
