import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/authentication/signUp/SignUp';
import SignIn from './components/authentication/singIn/SignIn';
import Home from './components/home/Home';
import Books from './components/pages/books/Books';
import Carts from './components/pages/carts/Carts';
import Contact from './components/pages/contact/Contact';
import Nomatch from './components/pages/Nomatch/Nomatch';
const Main = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Nomatch />} />
            </Routes>
        </>
    );
};

export default Main;