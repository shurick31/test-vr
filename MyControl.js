import React, { Component } from 'react';
import { View, Text, VrButton, StyleSheet } from 'react-vr';
import VideoControl from 'VideoControl';

export default class MyControl extends VideoControl {
  constructor(props) {
    super(props);
    this.state = {
      playStatus: props.playerState.playStatus,
      muted: props.playerState.muted,
      playerState: props.playerState
    }
    this.togglePlayer = this.togglePlayer.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
  }

  togglePlayer() {
    this._onPlayButtonClick();
    this.setState({playStatus: this.state.playStatus === 'playing' ? 'paused':'playing',});
  }

  toggleMute() {
    this._onMuteButtonClick();
    this.setState({muted: !this.state.muted});
  }

  render() {

    return (
      <View style={{
                  height: 0.2,
                  width: 4,
                  layoutOrigin: [0.5, 5, 0],
                  transform: [{translate: [0, 2, -2 ]}],
                  zIndex: 9999
                }}>
          <View>
            <VrButton onClick={this.togglePlayer}>
              <Text style={{ zIndex: 9999, fontSize:0.9 }}>
                { this.state.playStatus.charAt(0).toUpperCase() + this.state.playStatus.slice(1) }
              </Text>
            </VrButton>
          </View>
          <View>
            <VrButton onClick={this.toggleMute}>
              <Text style={{ zIndex: 9999, fontSize:0.9 }}>
                { this.state.muted ? 'Unmute':'Mute' }
              </Text>
            </VrButton>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 10,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 2,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});
