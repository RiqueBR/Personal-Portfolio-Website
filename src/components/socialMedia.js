import React from 'react';
// import mediaList from "../data/socialMedia.json"

import linkedinLogo from "../images/icons/linkedin.svg"
import githubLogo from "../images/icons/github.svg"
import emailLogo from "../images/icons/email.svg"
import flickrLogo from "../images/icons/flickr.svg"


const SocialMedia = () => (
    

        <div>
            <h1>Lorem Ipsum</h1>
            <div className="icon-container">
                <a href="https://www.linkedin.com/henrique-batista/">
                    <img src={linkedinLogo} alt="external link to my linkedin account" >       
                    </img>
                </a>   
                <a href="https://github.com/RiqueBR">
                    <img src={githubLogo} alt="external link to my github account" >       
                    </img>
                </a>   
                <a href="mailto:h.p.batista@outlook.com">
                    <img src={emailLogo} alt="Send me an email to my personal account" >       
                    </img>
                </a>   
                <a href="https://www.google.com">
                    <img src={flickrLogo} alt="external link to my flicker account" >       
                    </img>
                </a>   
               
               
               {/* { mediaList.map(icon => (
                  
                    <img key={icon.src} src={icon.src}
                        alt={`External link to my ${icon.name} account`} 
                        className="img-responsive" 
                        height="30px"
                        width="30px"    
                        />))} */}

            </div>
        </div>
    );

export default SocialMedia;
