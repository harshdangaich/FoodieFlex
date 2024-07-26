import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{height: "100vh"}}>
                <div className="carousel-inner h-100" id='carousel'>
                    <div className="carousel-caption d-flex flex-column justify-content-center" style={{ zIndex: "9", top: "0", bottom: "0" }}>
                        <h1 className="display-4 fw-bold text-white mb-4">Delicious Food, Delivered to You</h1>
                        <form className="d-flex justify-content-center w-75 mx-auto">
                            <input className="form-control me-2 py-3" type="search" placeholder="Search for cuisine or dish..." aria-label="Search" />
                            <button className="btn btn-success px-4" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active h-100">
                        <img src="/images/burger.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Pizza" />
                    </div>
                    <div className="carousel-item h-100">
                        <img src="/images/pastry.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Burger" />
                    </div>
                    <div className="carousel-item h-100">
                        <img src="/images/sushi.jpg" className="d-block w-100 h-100" style={{ objectFit: "cover", filter: "brightness(50%)" }} alt="Sushi" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}