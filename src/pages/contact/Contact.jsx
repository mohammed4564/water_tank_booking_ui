// src/pages/Contact.jsx
import React from "react";
import ContactBanner from "./ContactBanner";
import ContactInfoSection from "./ContactInfoSection";
import BusinessHours from "./BusinessHours";
import SendMessageSection from "../../components/SendMessageSection";

function Contact() {
    return (
        <div>
            <ContactBanner />
            <ContactInfoSection />
            <BusinessHours />
            <SendMessageSection />

        </div>
    );
}

export default Contact;