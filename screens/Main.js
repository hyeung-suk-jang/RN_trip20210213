import React, { useState, useRef } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Tab_home from './Tab_home';
import Schedule from './Tab_schedule';
import Map from './Tab_map';
import Message from './Tab_message';
import Setting from './Tab_setting';
import TabBarIcon from './TabBarIcon'
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();

const Main = ({ navigation }) =>  {

  

  

  return (
    <Tab.Navigator
        screenOptions={({route})=> ({
          tabBarIcon : ({focused,color}) => (
            TabBarIcon(route.name, color, focused)
          ) 
        })}
      >
      <Tab.Screen name="Home" component={Tab_home} />
      <Tab.Screen name="Schedule" component={Schedule} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
  );
}
export default Main;
