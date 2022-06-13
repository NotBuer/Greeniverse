import React from "react";
import './Carrusel.css';



function Carrusel() {
    return (
        <>
            <main id="teste" />
            <h2 className="h2-cards">SOBRE OS FUNDADORES:</h2>
            <div className="slide-container swiper">
                <div className="slide-content">
                    <div className="card-wrapper swiper-wrapper">
                        <div className="card swiper-slide">
                            <div className="image-content">
                                <span className="overlay"></span>

                                <div className="cardImage">
                                    <img src="" alt="" className="card-img" />
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
                                    <img src="" alt="" className="card-img" />
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
                                    <img src="" alt="" className="card-img" />
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
                                    <img src="" alt="" className="card-img" />
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
                                    <img src="" alt="" className="card-img" />
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
                                    <img src="" alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content" />
                            <h2 className="name">Matheus Catel</h2>
                            <p className="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="card swiper-slide">
                        <div className="image-content">
                            <span className="overlay"></span>

                            <div className="card-image">
                                <img src="" alt="" className="card-img" />
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