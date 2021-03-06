import React, { useState, useRef } from 'react';
import { View,ScrollView, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import DetailSchedule from './DetailSchedule';
import {Header} from '../components/Header';

const Tab_schedule = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Header title="상세 투어일정" 
        onBackPress={() => {
                navigation.goBack();
              }}
      />
        <ScrollView>
            <DetailSchedule
                name='todo_image1.png'
                onItemClick={() => {
                    navigation.navigate('AudioDetail');
                }}
            />
            <DetailSchedule
                name='todo_image2.png'
                onItemClick={() => {
                    navigation.navigate("AudioDetail")
                }}
            />
            <DetailSchedule
                name='todo_image3.png'
                onItemClick={() => {
                    navigation.navigate("AudioDetail")
                }}
            />
            <DetailSchedule
                name='todo_image4.png'
                onItemClick={() => {
                    navigation.navigate("AudioDetail")
                }}
            />
            <DetailSchedule
                name='todo_image5.png'
                onItemClick={() => {
                    navigation.navigate("AudioDetail")
                }}
            />
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    fontFamily: 'THEBluewindRegular',
    alignItems:'center',
  },
});
export default Tab_schedule;