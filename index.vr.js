import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  MediaPlayerState,
  VideoControl,
  Video,
  VideoPano
} from 'react-vr';

//import MyControl from './MyControl';


export default class test_vr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // init with muted, autoPlay
      playerState: new MediaPlayerState({autoPlay: true, muted: true}),
    };
  }

  render() {
    return (
      <View
        style={{
          transform:[{translate:[0,0,-4]}],
          layoutOrigin: [0.5, 0.5]
        }}
      >

      <VideoPano
        playerState={this.state.playerState}
        source={[
          asset('video.mp4', {format: 'mp4', layout: 'SPHERE'}),
        ]}
      />
        <VideoControl
         style={{height: 0.2, width: 4}}
         playerState={this.state.playerState} />

      </View>
    );
  }
};

AppRegistry.registerComponent('test_vr', () => test_vr);
