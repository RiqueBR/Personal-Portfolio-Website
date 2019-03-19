import React from 'react';
import mediaList from "../data/socialMedia.json"

const SocialMedia = () => (
    

        <div>
            <h1>Lorem Ipsum</h1>
            <div className="icon-container">
               { mediaList.map(icon => (
                  
                    <img key={icon.src} src={icon.src}
                        alt={`External link to my ${icon.name} account`} 
                        className="img-responsive" 
                        height="30px"
                        width="30px"    
                        />
               ))}
            </div>
        </div>
    );

export default SocialMedia;


