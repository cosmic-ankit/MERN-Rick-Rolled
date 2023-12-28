
import React from 'react';
import YouTubeVideoPlayer from './YouTubeVideoPlayer';

const Home = () => {
    const videoId = 'BBJa32lCaaY';
    
    return (
       
        <>
{/* Front Page */}
<div className="front-page container-fluid text-center bg-dark text-light">
    <div className="container py-5">
        <h1 className="display-4 mb-4">You have been RICK ROLLED </h1>
    </div>
</div>

{/* Video Player */}
<div className="VideoPlayer container-fluid text-center bg-dark text-light py-4">
    <YouTubeVideoPlayer videoId={videoId} />
</div>
</>

    );
};

export default Home;