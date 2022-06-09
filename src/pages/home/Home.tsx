import React from 'react';
import './Home.css';
import Navbar from '../../components/statics/navbar/Navbar';
import Banner from '../../components/statics/banner/Banner';
import Features from '../../components/statics/features/Features';

import Footer from '../../components/statics/footer/Footer';

function Home(){
    return(
        <>
        <Navbar />
        <Banner />
        <Features />


        </>
    );
}

export default Home;