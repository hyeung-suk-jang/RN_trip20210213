import React,{ useEffect,useState,useContext }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  Styled,
  TouchableOpacity
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/Home";
import Login from './screens/Login';
import FirebaseLogin from './screens/FirebaseLogin';
import FirebaseSignup from './screens/FirebaseSignup';
import Join from './screens/Join';
import SearchPW from './screens/SearchPW';
import Main from './screens/Main';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

import { AsyncStorage } from '@react-native-community/async-storage';
import Tab_home from './screens/Tab_home';
import Schedule from './screens/Tab_schedule';
import Map from './screens/Tab_map';
import Message from './screens/Tab_message';
import Chat from './screens/Chat';
import Setting from './screens/Tab_setting';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBarIcon from './screens/TabBarIcon'

import auth from '@react-native-firebase/auth';

const store = createStore(reducers, applyMiddleware(reduxThunk));
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    console.log(user,'///data');
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    setTimeout(function(){
      SplashScreen.hide();
    },3000);
  }, []);

  const SettingsStack = createStackNavigator();
  function ChatStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Message" component={Message} />
        <SettingsStack.Screen name="Chat" component={Chat} />
      </SettingsStack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user === null ?
          <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} options={{
                  headerTitle:'로그인',
                  headerStyle: {
                    backgroundColor: '#41BD40',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30,
                    alignSelf: 'center' ,
                  },
                  headerRight: () => (
                    <View></View>
                  ),
                  }}/> */}
              <Stack.Screen name="FirebaseLogin" component={FirebaseLogin} options={{
                  headerTitle:'로그인',
                  headerStyle: {
                    backgroundColor: '#41BD40',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30,
                    alignSelf: 'center' ,
                  },
                  headerRight: () => (
                    <View></View>
                  ),
                  }}/> 
         
                 <Stack.Screen name="FirebaseSignup" component={FirebaseSignup} options={{
                  headerTitle:'로그인',
                  headerStyle: {
                    backgroundColor: '#41BD40',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30,
                    alignSelf: 'center' ,
                  },
                  headerRight: () => (
                    <View></View>
                  ),
                  }}/>                 
            <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false,
                  }}/>
            <Stack.Screen name="SearchPW" component={SearchPW} options={{
                  headerTitle:'비밀번호 찾기',
                  headerStyle: {
                    backgroundColor: '#41BD40',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:30,
                    alignSelf: 'center' ,
                  },
                  headerRight: () => (
                    <View></View>
                  ),
                  }}/>
            <Stack.Screen name="Join" component={Join} 
                options={{
                  headerTitle:'회원가입',
                  headerStyle: {
                    backgroundColor: '#41BD40',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    alignSelf: 'center' ,
                  },
                  headerRight: () => (
                    <View></View>
                ),
                }}/>
             </Stack.Navigator>    
      : 
      <Tab.Navigator
          screenOptions={({route})=> ({
            tabBarIcon : ({focused,color}) => (
              TabBarIcon(route.name, color, focused)
            ),
            
          })
        }
        tabBarOptions= {{
          showLabel: false
      }} >
        <Tab.Screen name="Home" component={Tab_home} />
        <Tab.Screen name="Schedule" component={Schedule} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Message" component={ChatStackScreen} />
        <Tab.Screen name="Setting" component={Setting} /> 
      </Tab.Navigator>
    }
  </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'#41BD40',
    position:'relative',
    justifyContent:'center',
    flex:1,
    width:'100%'
  },
  backbtn:{
    fontSize:40,
    paddingBottom:15,
    color:'white'
  },
  titleTxt:{
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'white'
  }
});
export default App;
