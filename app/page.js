

"use client"
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MissionVision from "./components/MissionVision";
import ServicesOverview from "./components/ServicesOverview";
import WhyChooseUs from "./components/ChooseUs";
import OurProcess from "./components/OurProcess";
import ClientTestimonials from "./components/ClientTestimonals";
import CallToAction from "./components/CallToAction";
import CountriesWeWorkWith from "./components/Countries";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ContactModal from "./components/ContactModal";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showFormFromChat, setShowFormFromChat] = useState(false);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const modalTimer = setTimeout(() => {
            setShowModal(true);
        }, 10000);

        const handleOpenFormFromChat = () => {
            setShowFormFromChat(true);
        };

        window.addEventListener('openContactForm', handleOpenFormFromChat);

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(modalTimer);
            window.removeEventListener('openContactForm', handleOpenFormFromChat);
        };
    }, []);

    const closeModal = () => {
        setShowModal(false);
        setShowFormFromChat(false);
    };

    return (
        <>
            {isLoading && <LoadingScreen />}
            
            <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
                <Navbar />
                <HeroSection />
                <MissionVision />
                <ServicesOverview />
                <WhyChooseUs />
                <OurProcess />
                <ClientTestimonials />
                <CallToAction />
                <CountriesWeWorkWith />
                {/* <Footer/> */}
            </div>

            <ContactModal isOpen={showModal} onClose={closeModal} />
            <ContactModal isOpen={showFormFromChat} onClose={closeModal} />
            <ChatWidget />
        </>
    );
}