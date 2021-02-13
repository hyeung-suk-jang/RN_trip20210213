import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

//구글맵
//안드로이드 :  AIzaSyCh1rhthVxqh8jnn2y5Qd-HqDHhQPYbc7E
//아이폰 : AIzaSyC80LBUWsfcR4m_2EQo3mqLdhQS_E7BSQ4
//https://agilog.tistory.com/1
//https://agilog.tistory.com/2

//https://github.com/MarkMarincek/reactNative-googleMaps
//https://github.com/coolveer/googleMapsIntrifation-ReactNative-
//https://github.com/immaxx88/ReactNativeApp-with-GoogleMaps

//로컬푸시
//https://dev-yakuza.posstree.com/ko/react-native/react-native-push-notification/
//npm install --save react-native-push-notification
//https://coding-dahee.tistory.com/131

// audio
//https://github.com/react-native-audio-toolkit/react-native-audio-toolkit
//https://www.npmjs.com/package/react-native-audio
//https://github.com/jsierles/react-native-audio

// audio ui
// https://github.com/zmxv/react-native-sound
// https://www.npmjs.com/package/react-native-sound
// https://github.com/getstream/react-native-audio-player
// https://uireactnative.com/media/react-native-module-for-playing-sound-clips.html

// firebase push chatting

// 설정 : push 수신 제어. -

// In the map :

const Tab_map = ({navigation}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      initialRegion={{
        	
        latitude: 37.5668106,
        longitude: 127.0309511,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      }}>
      <Marker coordinate={{latitude:37.5668106 , longitude: 127.0309511}} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'THEBluewindRegular',
    alignItems: 'center',
    backgroundColor: '#41BD40',
  },
});
export default Tab_map;
