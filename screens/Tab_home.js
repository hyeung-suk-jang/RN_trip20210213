import React, { useState, useRef,useEffect } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, StatusBar } from 'react-native';
import TripItem from './TripItem';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import * as firebase from 'firebase'
import {firebaseConfig} from '../config/config'
const Tab_home = ({ navigation }) => {

    useEffect(()=>{
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }
          getPushNotificationToken()
          },[])

          const getPushNotificationToken = async () => {
            try {
              const token = await messaging().getToken();
             
              console.log('Device Token is =>', token);
                //here 3 is user id to update device token again user id 3
              firebase
                .database()
                .ref('users/' + "3" + '/push_token')
                .set(token);
        
            } catch (error) {
              console.log(error);
            }
          };

    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='white'
            barStyle='dark-content'
        />
        <ScrollView>
            <TripItem 
                onItemClick={() => {
                    navigation.navigate("Schedule")
                }}
            />
            <TripItem />
            <TripItem />
            <TripItem />
            <TripItem />
        </ScrollView>
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
})

export default Tab_home;