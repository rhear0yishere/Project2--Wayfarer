import React, { Component } from 'react'
import {VideoCover} from 'react-video-cover';


class backgroundmovie extends Component {
    render() {
      const videoOptions = {
        src: 'https://www.youtube.com/watch?v=kYlRUFbQlY8',
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          if (this.videoRef && this.videoRef.paused) {
            this.videoRef.play();
          } else if (this.videoRef) {
            this.videoRef.pause();
          }
        },
        title: 'click to play/pause',
      };
      return (
        <div style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden',
        }}>
          <VideoCover videoOptions={{src: 'https://www.youtube.com/watch?v=kYlRUFbQlY8'}} />
        </div>
      );
    }
  }

  export default backgroundmovie