import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import TripLogPage from "./Components/TripLogPage/TripLogPage";

export default (
    <Router>
        <Routes>
            <Route exact path="/" element={ <MainPage />} />
            <Route exact path="/about" element={ <AboutPage />} />
            <Route exact path="/contact" element={ <ContactPage />} />
            <Route exact path="/trips" element={ <TripLogPage />} />
        </Routes>
    </Router>
);