import React from 'react';
import "./SignUp.css"
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <>
            <div>
                <div style={{ height: '60vh' }} className="w-75 h-91 m-auto row justify-content-center align-content-center">
                    <Form className="w-50">
                    <div className="mb-55">
                    <Link  className='me-2' to="/home">Home</Link>/<Link className='ms-2'   to="/sign-up">SignUp</Link>
                    </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <div className="d-flex justify-content-between mt-1">
                            <Link className="text-link" to="/sign-in">Already Sign-up ?</Link>
                            <Link className="text-link" to="/sign-in">Sign In</Link>
                        </div>
                        <p className="text-center">OR</p>
                        <p className="w-100 btn btn-outline-primary">Login with google</p>
                    </Form>

                </div>
            </div>
        </>
    );
};

export default SignUp;