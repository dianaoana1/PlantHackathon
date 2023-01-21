import React, { Component } from 'react';
import { Image, View } from 'react-native';

class plantPictureOpening extends Component {
  render() {
    return (
      <View>
        <Image source={require('./path/to/image.jpg')} />
      </View>
    );
  }
}

export default plantPictureOpening;