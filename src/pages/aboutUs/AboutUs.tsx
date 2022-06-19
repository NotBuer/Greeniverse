import TextAboutUs from '../../components/textAboutUs/TextAboutUs';
import React from 'react';
import './AboutUs.css';
import Navbar from '../../components/statics/navbar/Navbar';
import CardsFounders from '../../components/cardFounders/CardFounders';

function AboutUs() {
    return (
        <>
            <main id='about_main'>

                <Navbar />
                <TextAboutUs />
                <section className='cardsFounders'>
                <CardsFounders />
                </section>
            </main>

        </>
    );
}
export default AboutUs;