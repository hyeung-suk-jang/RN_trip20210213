import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import { ShowNotification, CancleNotification } from './notification';
import PushNotification from 'react-native-push-notification';
import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';
import AwesomeAlert from 'react-native-awesome-alerts';


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

  const [currentLong, setCurrentLong] = useState(127.0309511);
  const [currentLat, setCurrentLat] = useState(37.5668106);
  const [locationStatus, setLocationStatus] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const [currentNotifTitle, setCurrentNotifTitle] = useState('');
  const [currentNotifDesc, setCurrentNotifDesc] = useState('');

  const getOneTimeLocation = () => {
    Toast.show('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLongitude = position.coords.longitude;
        const currentLatitude =  position.coords.latitude;
        console.log(currentLongitude,currentLatitude);
        Toast.show('Your Live Location : Latitude : '+currentLatitude+" Longitude : "+currentLongitude);
        setCurrentLong(currentLongitude);
        setCurrentLat(currentLatitude);
      },
      (error) => {
        Toast.show(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    const watchID = Geolocation.watchPosition(
      (position) => {
        console.log(position);
        const currentLongitude = position.coords.longitude;
        const currentLatitude =  position.coords.latitude;
        console.log(currentLongitude,currentLatitude);
        setCurrentLong(currentLongitude);
        setCurrentLat(currentLatitude);
      },
      (error) => {
        Toast.show(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const notifyUser = (title,description)=>{
    PushNotification.localNotification({
      title: currentNotifTitle,
      message: currentNotifDesc,
    });
    setIsAlert(true);
    setTimeout(() => setIsAlert(false), 3000);
  }

  return (
    <View style={ styles.container }>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        showsUserLocation={true}
        initialRegion={{
          latitude: currentLat,
          longitude: currentLong,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        <Marker coordinate={{latitude: currentLat , longitude: currentLong}} />
       </MapView>
       <View
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            padding: 16,
            flexDirection : 'row',
          }}
        >
          <TouchableOpacity 
            style={{ 
              backgroundColor : 'red', 
              padding : 8, 
              marginRight : 8, 
              fontSize : 14 
            }}
            onPress={() => {
              setCurrentNotifTitle('Notification TItle');
              setCurrentNotifDesc('Notification Description');
              notifyUser();
            }}
            >
            <Text style={{ color : 'white' }}>
            Notification
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{ 
              backgroundColor : 'red', 
              padding : 8, 
              fontSize : 14 
            }}
            onPress={getOneTimeLocation}
            >
            <Text style={{ color : 'white' }}>
            Live
            </Text>
          </TouchableOpacity>
      </View>
      { isAlert && 
        <AwesomeAlert
            show={isAlert}
            showProgress={false}
            title={currentNotifTitle}
            message={currentNotifDesc}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={true}
            showCancelButton={false}
            showConfirmButton={false}
        />
      }  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Tab_map;
