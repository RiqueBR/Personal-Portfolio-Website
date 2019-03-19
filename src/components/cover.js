import React, { Component } from 'react';
import Img from "gatsby-image";

const Cover = ({coverImg}) => (
    <div className="landing-page">
       <Img title="Cover Image"
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
)

export default Cover;