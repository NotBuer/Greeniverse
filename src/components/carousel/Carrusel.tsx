import React from "react";
import './Carrusel.css';



function Carrusel() {
    return(
        <>
         <main id="teste"/>
        <h2 className="h2-cards">SOBRE OS FUNDADORES:</h2>
        <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="cardImage">
                                <img src="https://i.imgur.com/5UiwPPU.jpg" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="cardContent">
                            <h2 className="name">Uriel Pereira</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                        </div>

                    </div>

                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="https://i.imgur.com/undefined.jpeg" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Gabriela Peres</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>

                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="blob:https://imgur.com/2720e2ed-3132-467a-914c-c1c387876e11" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Kauane Farias</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                           
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="https://i.imgur.com/undefinedg.jpeg" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Thamyres Cavalcante</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                           
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="https://i.imgur.com/undefinedg.jpeg" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Murillo Gama</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                        
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="blob:https://imgur.com/e54660d3-9321-4561-8325-a3a594f18fed" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content"/>
                            <h2 className="name">Matheus Catel</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                          
                        </div>
                    </div>
                    <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="blob:https://imgur.com/09a1f837-1053-4873-bd62-f3b9c503a57a" alt="" className="card-img"/>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="name">Rodrigo França</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                        
                        </div>
                  
                        </div>
                    </div>
                </div>
                <div className="swiper-button-next swiper-navBtn"></div>
                <div className="swiper-button-prev swiper-navBtn"></div>
                <div className="swiper-pagination"></div>
        </>
    );
}

export default Carrusel;