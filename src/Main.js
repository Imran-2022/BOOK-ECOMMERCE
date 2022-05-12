import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/authentication/signUp/SignUp';
import SignIn from './components/authentication/singIn/SignIn';
import Home from './components/home/Home';
import AllBooksDetails from './components/pages/books/allBooksDetails/AllBooksDetails';
import Books from './components/pages/books/Books';
import Featured from './components/pages/books/Featured/Featured';
import Recommended from './components/pages/books/Recommended/Recommended';
import Carts from './components/pages/carts/Carts';
import Nomatch from './components/pages/Nomatch/Nomatch';
import SearchR from './components/pages/search/SearchR';
const Main = () => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Books />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/featured" element={<Featured />} />
                <Route path="/recommended" element={<Recommended/>} />
                <Route path="/books/:details" element={<AllBooksDetails/>} />
                <Route path="/search/:abc" element={<SearchR/>} />
                <Route path="*" element={<Nomatch />} />
            </Routes>
        </>
    );
};

export default Main;