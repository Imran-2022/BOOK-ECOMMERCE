import React from 'react';
import "./About.css"
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center pb-5 mb-4" >
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name"><br/> BOOK-eCOMMERCE
                                    </strong></h1>
                                    <p className="brand-name">the world largest Book shop</p>
                                    <h2 className="my-3">
                                        here you find any kind of books according to catagories.
                                    </h2>

                                    <div className="mt-3">
                                        <NavLink to={props.visit}

                                            className="btn-get-started">{props.btname} <BsArrowRight /></NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img vert-move">
                                    <img className="img-fluid animated " src={props.imagescr} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;