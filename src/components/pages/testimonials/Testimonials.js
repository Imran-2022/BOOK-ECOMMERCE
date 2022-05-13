import React from 'react';
import "./Testimonials.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs';


const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <BsArrowLeft style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <BsArrowRight style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};

const Testimonials = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
            <div style={{ width: "50%", textAlign: "center" }}>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/4.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/5.jpg" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/6.jpg" />
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <img
                imgProps={{ style: { borderRadius: "50%" } }}
                alt="img-client"
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: ".1px solid #fff",
                    marginBottom: 20,
                }}
            />
            <p className="text-light">
                Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
                Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
                tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
                fringilla massa. Etiam hendrerit dolor eget rutrum
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
                Media Analyst
            </p>
        </div>
    );
};


export default Testimonials;