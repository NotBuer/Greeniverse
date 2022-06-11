import TextAboutUs from '../../components/textAboutUs/TextAboutUs'
import React from 'react'
import './AboutUs.css';
import Carrusel from '../../components/carousel/Carrusel';
import Navbar from '../../components/statics/navbar/Navbar';

function AboutUs() {
    return (
        <>
            <main id='about_main'>

                <Navbar />
                <TextAboutUs />
                <Carrusel />

            </main>

        </>
    );
}
export default AboutUs;