import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeFeature from '../../../../../src/FakeData/RecommendedBooks.json'
const RecommendedBooks = () => {
    const locations= window.location.pathname;
    const [featured, setFeatured] = useState(locations==='/recommended'?fakeFeature:fakeFeature.slice(0,5))
    return (
        <div className='container h-60 mb-5 px-5'>
        <div className="product-display-grid">
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
    </div>
    );
};

export default RecommendedBooks;