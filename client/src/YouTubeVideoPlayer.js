// YouTubeVideoPlayer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YouTubeVideoPlayer = ({ videoId }) => {
  const [videoTitle, setVideoTitle] = useState('');

  useEffect(() => {
    if (window.YT) {
      createPlayer();
      fetchVideoDetails();
    } else {
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

     
      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
        fetchVideoDetails();
      };
    }
  }, [videoId]);

  const createPlayer = () => {
    try {
      new window.YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    } catch (error) {
      console.error('Error creating YouTube player:', error);
    }
  };

  const onPlayerReady = (event) => {
    console.log('YouTube player is ready');
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    console.log('YouTube player state changed:', event.data);

  };

  const fetchVideoDetails = () => {
   
    const apiKey = 'AIzaSyBh4YYXUbSGotwDk62rx1swfvVXCE9D9aI';
    const videoUrl = 'https://www.googleapis.com/youtube/v3/videos';

    axios
      .get(videoUrl, {
        params: {
          part: 'snippet',
          id: videoId,
          key: apiKey,
        },
      })
      .then((response) => {
        const snippet = response.data.items[0].snippet;
        console.log('Video Title:', snippet.title);
        setVideoTitle(snippet.title);
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  };

  return (
    <div>
      <div id="player"></div>
    </div>  
  );
};

export default YouTubeVideoPlayer;
