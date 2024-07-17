import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ServicesComponent from "./ServicesComponent";
import carousel from './assets/carousel-bg-1.jpg'
import carousel from './assets/carousel-bg-2.jpg'

const ServicesComponent = () => {
    return (
        <>
         <Header />
 <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Quality Servicing</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <Link className="text-secondary border-bottom" to="">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Expert Workers</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <Link className="text-secondary border-bottom" to="">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Modern Equipment</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <Link className="text-secondary border-bottom" to="">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
        </>
    )

}
export default ServicesComponent;

