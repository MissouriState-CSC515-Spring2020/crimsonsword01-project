import React from 'react';
import YouTube from 'react-youtube';

// Share: https://youtu.be/bNNaZdtGZVc
// URL: https://www.youtube.com/watch?v=bNNaZdtGZVc

class Example extends React.Component {

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        //const { videoId } = this.props;
        return <YouTube videoId='bNNaZdtGZVc' opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

}
export default Example;