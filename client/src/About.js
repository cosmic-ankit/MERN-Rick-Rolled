// About.js
import React from 'react';

const About = () => {
    return (
        <div className="front-page container-fluid text-center bg-dark text-light  vh-100">
            <div className="container h-100 ">
                <h1 className="display-4 mb-4 ">About Rick Rolling</h1>
                <p>
                    Rickrolling is a bait-and-switch prank that involves providing a hyperlink
                    that leads to the music video for Rick Astley's 1987 hit song "Never Gonna
                    Give You Up". The URL can be masked or obfuscated in some manner so that
                    users cannot determine the true destination of the link without clicking.
                </p>
                <p>
                    The meme gained widespread popularity in the mid-2000s and is often used as
                    an internet meme and a form of online hazing. It has been featured in various
                    online communities and is a classic example of internet trolling.
                </p>
            </div>
        </div>
    );
};

export default About;
