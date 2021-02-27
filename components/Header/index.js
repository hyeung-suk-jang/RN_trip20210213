import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet, StatusBar,
} from 'react-native';
import { COLORS } from '../../constant/colors';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Header = (props) => {
  return (
    <View style={Styles.mainContainer}>
      <StatusBar hidden = {true}/>
      <TouchableOpacity
        style={{marginLeft: 0, paddingLeft : 8, width : width * 0.2 }}
        onPress={props.onBackPress}
      >
        <Icon name="arrowleft" size={26} color={COLORS.GREY} />
      </TouchableOpacity>
      <View style={{ alignItems : 'center', flex : 1 , width : width * 0.8 }}>
        <Text style={[ Styles.textstyle]}>{props.title}</Text>
      </View>
    </View>
  );
};

export {Header};

const Styles = StyleSheet.create({
  mainContainer: {
    height: 0.1 * height,
    width: width,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    color: COLORS.LIGHTBLACK,
    fontSize: 18,
    textTransform: 'uppercase',
    marginLeft : -0.2 * width
  }
});
