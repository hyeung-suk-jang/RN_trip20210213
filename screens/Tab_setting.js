import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

const Tab_setting = ({ navigation }) => {
    return (
        <View style={styles.container}>
           <Text>Tab_setting</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    fontFamily: 'THEBluewindRegular',
    alignItems:'center',
    backgroundColor:'#41BD40'
  },
});
export default Tab_setting;