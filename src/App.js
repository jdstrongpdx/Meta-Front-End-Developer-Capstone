import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Bookings from "./pages/Bookings";


// App function for the website including routing. Due to design requirements of the project, MainPage directly
// loads the Bookings page - a multipart form for restaurant table reservation.
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
