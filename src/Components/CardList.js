import React from 'react';
import Slider from "react-slick";
import AddCard from './AddCard';
import { Card,Button, CardImg } from "react-bootstrap"

import Panel from './Account';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../App.css"
import AddAccount from './AddAccount';
import MyCard from './Card';

const CardList = ({title,cards}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    centerMode: true,
    centerPadding: '34.8rem',
    width : "100%"
  };
  return (
    <div style={{paddingBottom : "3rem"}}>
        <h1 style={{textAlign :"center"}}> {title}</h1>
        <br/>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <MyCard flag = {true} data={card}/>
          </div>
        ))}
        <AddCard/>
      </Slider>
    </div>
  );
};

export default CardList;
