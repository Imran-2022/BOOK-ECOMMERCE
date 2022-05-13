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
            <Navigation />
            <Header />
            <Home2 />
            <div className="container d-flex justify-content-between align-items-center py-5">
                <p className="display-6">FeaturedBooks</p>
                <Link to="/featured">See ALL</Link>
            </div>
            <FeaturedBooks />
            <div className="container d-flex justify-content-between align-items-center py-5">
                <p className="display-6">RecommendedBooks</p>
                <Link to="/recommended">See ALL</Link>
            </div>
            <RecommendedBooks />
            <div className="p-4  bg-primary authorsays " style={{backgroundImage: 'linear-gradient(rgba(6, 11, 37, 0.89), rgba(4, 9, 30, 0.92)), url(https://alifeofproductivity.com/wp-content/uploads/2016/09/bookRZ.jpg)'}}>
                <div className="container pb-5">
                    <h1>Here's what <span>Authors</span> say:</h1>
                </div>
                <Testimonials />
            </div>
        </div>
    );
};

export default Home;