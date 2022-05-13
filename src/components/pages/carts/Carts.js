import React from 'react';
import Navigation from '../../shared/navigation/Navigation';
import "./Carts.css"
import { ImCross } from "react-icons/im";
import { FaMinus,FaPlus } from "react-icons/fa";

const Carts = () => {
    return (
        <div>
            <Navigation />
            <div className="profile">
                <div className="profile-in">
                    <div className="container">
                        <div className="profile-table">
                            <div>

                                <table>
                                    <thead>
                                        <tr >
                                            <th className="text-center p-2">#no</th>
                                            <th className="text-center p-2">Image</th>
                                            <th className="text-center p-2">name</th>
                                            <th className="text-center p-2">query</th>
                                            <th className="text-center p-2">delete</th>
                                        </tr>
                                    </thead>


                                    <tbody >
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">12</td>
                                            <td className="text-center">
                                                <img width="60px" height="40px" src="" alt="no images" />
                                            </td>
                                            <td className="text-start ps-5">title</td>
                                            <td className="text-center ">
                                                <FaPlus className="me-5"/>
                                                <FaMinus/>
                                            </td>
                                            <td className="btnmanage text-center" ><ImCross /></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className="text-end py-5 mb-5">
                            <h5 className="me-1">Cart Total : - $<span> 32235</span></h5>
                            <button className="btn btn-primary w-25 ">CheckOut</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Carts;