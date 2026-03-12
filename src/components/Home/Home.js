import React from 'react';
import Navbar from "../NavBar/navbar";
import Intro from "../Intro/intro";
import About from "../About/about";
import Works from "../Works/works";
import Achievements from "../Achievements/achievements";
import Certificates from "../Certificates/certificates";
import Clubs from "../Clubs/clubs";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import Contact from "../Contact/contact";

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Intro />
            <ScrollReveal>
                <About />
            </ScrollReveal>
            <ScrollReveal>
                <Works />
            </ScrollReveal>
            <ScrollReveal>
                <Achievements />
            </ScrollReveal>
            <ScrollReveal>
                <Certificates />
            </ScrollReveal>
            <ScrollReveal>
                <Clubs />
            </ScrollReveal>
            <ScrollReveal>
                <Contact />
            </ScrollReveal>
        </div>
    );
}

export default Home;
