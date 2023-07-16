import React from 'react'
import { Box, Typography } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = ({ className, style, onClick }) => {
    return (
        <Typography className="right-arrow" style={{ ...style, display: 'block' }} onClick={onClick}>
        <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = ({ className, style, onClick }) => {
    return (
        <Typography className="left-arrow" style={{ ...style, display: 'block' }} onClick={onClick}>
        <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false
                }
            },
            {
                breakpoint: 920,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((item) =>(
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {
                    isBodyParts ? 
                    <BodyPart item={item} bodyPart={bodyPart}
                    setBodyPart={setBodyPart} className='box' /> 
                    : 
                    <ExerciseCard exercise={item} />}
                </Box>
            ))}
        </Slider>
    )
}

export default HorizontalScrollBar