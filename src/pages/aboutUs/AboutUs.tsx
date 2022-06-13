import TextAboutUs from '../../components/textAboutUs/TextAboutUs'
import React from 'react'
import './AboutUs.css';
import Navbar from '../../components/statics/navbar/Navbar';

function AboutUs() {
    return (
        <>
            <main id='about_main'>

                <Navbar />
                <TextAboutUs />
            

            </main>

        </>
    );
}
export default AboutUs;