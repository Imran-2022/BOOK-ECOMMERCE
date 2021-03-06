import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../shared/navigation/Navigation';
import "./SearchR.css"
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
const SearchR = () => {
    const navigate = useNavigate();
    const { abc } = useParams()
    const [searchReslt, setSearchResult] = useState(true)
    return (
        <div>
            <Navigation />
            <p className=" container text-danger underline my-5" style={{cursor: 'pointer'}} onClick={() => navigate(-1)}><BiArrowBack/>Back to the previous</p>
            <p className="mt-5 py-2 text-center">Found <span className="text-danger">1</span> product with keyword <span className="text-danger">{abc}</span></p>
            <div className="search-result container">
                {
                    searchReslt ?

                        <div className='d-flex justify-content-center align-items-center h-60'>
                            <p>this is search result</p>
                        </div>

                        :

                        <div className='d-flex justify-content-center align-items-center h-60'>
                            <p>No product found. !!!!</p>
                        </div>
                }

            </div>
        </div>
    );
};

export default SearchR;