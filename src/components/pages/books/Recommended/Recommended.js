import React, { useEffect } from 'react';
import Navigation from '../../../shared/navigation/Navigation';
import "./Recommended.css"
import RecommendedBooks from './RecommendedBooks';
const Recommended = () => {
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
                <p>Recommended books</p>
            </div>
            <RecommendedBooks/>
        </div>
    );
};

export default Recommended;