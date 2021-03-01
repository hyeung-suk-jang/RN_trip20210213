/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { View, Text, Image } from 'react-native';

import { MENU } from '../constant';

import style from '../style';


const getImage = (props) => {
    const { routeName, isFocused } = props;
    const assetImagePrefix = '../assets/image/';
    console.log(`${assetImagePrefix}onHomeIcon.png`)
    if (routeName === MENU.AUTHENTICATION.TAB.HOME) {
      return isFocused ? require(`${assetImagePrefix}onHomeIcon.png`) : require(`${assetImagePrefix}offHomeIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.SCHEDULE) {
      return isFocused
        ? require(`${assetImagePrefix}onScheduleIcon.png`)
        : require(`${assetImagePrefix}offScheduleIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.MAP) {
      return isFocused ? require(`${assetImagePrefix}onMapIcon.png`) : require(`${assetImagePrefix}offMapIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.MESSAGE) {
      return isFocused
        ? require(`${assetImagePrefix}onMessageIcon.png`)
        : require(`${assetImagePrefix}offMessageIcon.png`);
    }

    if (routeName === MENU.AUTHENTICATION.TAB.SETTING) {
      return isFocused
        ? require(`${assetImagePrefix}onSettingIcon.png`)
        : require(`${assetImagePrefix}offSettingIcon.png`);
    }

    return null;
  }

const  TabBarIcon = (routeName, color, isFocused) => {
  
    const props =  { routeName, color, isFocused } ;

    return (
      <View style={[style.icon, isFocused ? style.focusIcon : {}]}>
        <View style={[style.icon_box, isFocused ? style.focusTab : {}]}>
          <Image
            source={getImage(props)}
            style={[style.icon_img, isFocused ? style.focusTabImage : {}]}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  

}

export default TabBarIcon;
