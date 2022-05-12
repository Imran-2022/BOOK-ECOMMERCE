import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { BsArrowUpRight } from 'react-icons/bs';
const Home2 = () => {
    
    return (
        <>
        <div className="home" style={{backgroundImage: 'linear-gradient(rgb(6 11 37 / 89%), rgb(4 9 30 / 92%)),url(images/share.jpg)'}}>
            <div className="container text-center">
            <p className="text-primary readingbooks h1 py-2">Why is reading books so important?</p>
            <blockquote  className="text-whitee readingbooksp h4 my-5" cite="https://www.oberlo.com/blog/benefits-of-reading-books">
            Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.
            </blockquote>
            <button className="btn btn-primary"><Link className="muted readingbooks" to="/shop">Buy your Favurite Books <BsArrowUpRight/> </Link></button>
            </div>
        </div>
        <div className="demo-weidth">

        </div>
       
        </>
    );
};

export default Home2;