import React, { useEffect } from 'react';
import Navigation from '../../../shared/navigation/Navigation';
import "./Featured.css"
import FeaturedBooks from './FeaturedBooks';
const Featured = () => {
    useEffect(() => {
        // move to top of page while click on link react js
       setTimeout(() => {
        window.scrollTo(0, 0)
       }, 100);
    }, [])
    return (
        <div>
            <Navigation/>
            <div className="container h-60 d-flex justify-content-center align-items-center">
                <p>Featured books</p>
            </div>
            <FeaturedBooks/>
        </div>
    );
};

export default Featured;