import React, { useState } from 'react';
import Navigation from '../../shared/navigation/Navigation';
import fakeBooks from '../../../../src/FakeData/Shop.json'
import "./Books.css"
import { Link } from 'react-router-dom';


const Books = () => {
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
                            </div>)
                        })
                    }
                </div>
               {
                   featured.length<17 && 
                   <div className="mt-4 text-center" style={{cursor:'pointer'}}>
                   <btn className='p-2 bg-danger color-light' onClick={()=>{setFeatured(fakeBooks)}}>show more</btn>
               </div>
               }

            </div>
        </div>
    );
};

export default Books;