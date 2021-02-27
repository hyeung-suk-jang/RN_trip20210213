import React, { useState, useRef,useEffect } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, StatusBar } from 'react-native';
import TripItem from './TripItem';

const Tab_home = ({ navigation }) => {

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