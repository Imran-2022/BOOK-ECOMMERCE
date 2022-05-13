import React from 'react';
import Header from '../pages/header/Header';
import Navigation from '../shared/navigation/Navigation';
import "./Home.css"
import Home2 from "../home/home2/Home2"
import FeaturedBooks from '../pages/books/Featured/FeaturedBooks';
import { Link } from 'react-router-dom';
import RecommendedBooks from '../pages/books/Recommended/RecommendedBooks';
import Testimonials from '../pages/testimonials/Testimonials';
const Home = () => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Home2/>
            <div className="container d-flex justify-content-between align-items-center py-5">
                <p className="display-6">FeaturedBooks</p>
                <Link to="/featured">See ALL</Link>
            </div>
            <FeaturedBooks/>
            <div className="container d-flex justify-content-between align-items-center py-5">
                <p className="display-6">RecommendedBooks</p>
                <Link to="/recommended">See ALL</Link>
            </div>
            <RecommendedBooks/>
            <div className="container py-5">
                <p className="display-6">What Our client says ?</p>
            </div>
            <Testimonials/>
        </div>
    );
};

export default Home;