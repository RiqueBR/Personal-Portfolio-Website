import React, { Component } from 'react';
import Img from "gatsby-image";

import "./cover.css";

const Cover = ({coverImg}) => (
    <div className="cover-wrapper">
    <div className="background-image">
       <Img className="hero-image"
            title="Cover Image"
            alt="White background with yellow design on the bottom"
            sizes={coverImg.sizes}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
            }} 
       /> 
    </div>

    <div className="hero-banner">
        <h2>HELLO, MY NAME IS</h2>
        <h1>Henrique Batista</h1>
    </div>
    </div>
)

export default Cover;