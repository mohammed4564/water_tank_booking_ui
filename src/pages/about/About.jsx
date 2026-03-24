// src/pages/About.jsx
import React from "react";
import AboutBanner from "./AboutBanner";
import OurStory from "./OurStory";
import MissionValues from "./MissionValues";
import CounterSection from "./CounterSection";
import LocationSection from "./LocationSection";

function About() {
    return (
        <div>
            <AboutBanner />
            <OurStory />
            <MissionValues />
            <CounterSection />
            <LocationSection />
        </div>
    );
}

export default About;