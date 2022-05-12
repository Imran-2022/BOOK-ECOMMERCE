import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../../shared/navigation/Navigation';
import "./AllBooksDetails.css"
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
const AllBooksDetails = () => {
    const navigate = useNavigate();
    const {details}=useParams()
    return (
        <div>
            <Navigation/>
           <div className="container">
           <p className="text-danger underline my-5" style={{cursor: 'pointer'}} onClick={() => navigate(-1)}><BiArrowBack/>Back to the previous</p>

            <p>Book Details OF {details}</p>
           </div>
        </div>
    );
};

export default AllBooksDetails;