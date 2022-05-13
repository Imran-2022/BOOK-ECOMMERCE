import React, { useState } from 'react';
import Navigation from '../../shared/navigation/Navigation';
import fakeBooks from '../../../../src/FakeData/Shop.json'
import "./Books.css"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import {increment} from "../../redux/actions"

const Books = () => {
    const counter = useSelector(state => state.counter)
    const dispatch=useDispatch()
    const [featured, setFeatured] = useState(fakeBooks.slice(0, 16))
    return (
        <div>
            <Navigation />
            <div className='container h-60 my-5'>
                <div className="product-display-gridd">
                    {
                        featured.map((dt, idx) => {
                            const { book, image, id, price, author } = dt;
                            return (<div key={idx} >
                                <Link className="Link" to={`/books/${id}`}>
                                    <div className="product-display" role="presentation">
                                        <div className="product-display-img">
                                            <img alt="" className="product-card-img is-img-loaded" src={image} />
                                        </div>
                                        <div className="product-display-details">
                                            <div className="d-flex justify-content-around pt-3">
                                                <p>{book}</p>
                                                <p>{price}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Link>
                                <Button className="w-100 btn btn-primary" onClick={(e)=>{
                                    dispatch(increment(1))
                                    e.target.innerText="added"
                                    e.target.classList.add("disabled")
                                    // console.log(e.target.classList)
                                }}>add to cart</Button>
                            </div>)
                        })
                    }
                </div>
               {
                   featured.length<17 && 
                   <div className="mt-4 text-center vert-move" style={{cursor:'pointer'}}>
                   <button className='p-2 btn btn-warning color-light animated ' onClick={()=>{setFeatured(fakeBooks)}}>show more books</button>
               </div>
               }

            </div>
        </div>
    );
};

export default Books;