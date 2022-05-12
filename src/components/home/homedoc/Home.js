import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    
    return (
        <>
        <div className="home" style={{backgroundImage: 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url(Images/cover.jpg)'}}>
            <div className="container">
            <p className="text-primary h1">Why is reading books so important?</p>
            <blockquote  className="text-whitee h4 py-4" cite="https://www.oberlo.com/blog/benefits-of-reading-books">
            Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.
            </blockquote>
            <button className="btn btn-primary"><Link className="muted" to="/books">Chose your fabourite book</Link></button>
            </div>
        </div>
        <div className="demo-weidth">

        </div>
       
        </>
    );
};

export default Home;