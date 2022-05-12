import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navigation.css"
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
const Navigation = () => {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        window.scrollTo(0, 0)
        setExpanded(false)
    }
    return (
        <>
            {/* it's a sticky nv  */}
            {/* <p class="text-center py-1 mb-0 bg-secondary">hello, books lover !! welcome.</p> */}
            <Navbar expanded={expanded} expand="lg" className="nv" sticky="top">
                <Container>
                    <Link className="text-centerr nv-color icons " onClick={handleClick} to="/">BOOK-eCOMMERCE</Link>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className="toggle" aria-controls="basic-navbar-nav">
                        {expanded ? <ImCross /> : <AiOutlineBars />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Link onClick={handleClick} className="text-centerr nv-color" to="/home">Home</Link>
                            <Link onClick={handleClick} className="text-centerr nv-color" to="/books">Books</Link>
                            <Link onClick={handleClick} className=" nv-color text-centerrr" to="/carts"><span className="mc"><span className="ct">Carts</span><span className="cartsnm">1234</span></span></Link>
                            <Link onClick={handleClick} className="text-centerr nv-color" to="/contact">Contact</Link>
                            <Link onClick={handleClick} className="text-centerr nv-color" to="/sign-in">Sign-In</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;
