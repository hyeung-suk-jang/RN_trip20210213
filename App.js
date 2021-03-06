import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  Styled,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import FirebaseLogin from './screens/FirebaseLogin';
import FirebaseSignup from './screens/FirebaseSignup';
import Join from './screens/Join';
import SearchPW from './screens/SearchPW';
import Main from './screens/Main';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import {AsyncStorage} from '@react-native-community/async-storage';

// tab - home
import Tab_home from './screens/Tab_home';

// tab - schedule
import Tab_schedule from './screens/Tab_schedule';
import AudioDetail from './screens/AudioDetail';
import AudioGuide from './screens/AudioGuide';
import AudioGuideDetail from './screens/AudioGuideDetail';

// tab - map
import Map from './screens/Tab_map';

// tab - chat
import Message from './screens/Tab_message';
import Chat from './screens/Chat';
import ChatProfile from './screens/ChatProfile';

// tab - setting
import Setting from './screens/Tab_setting';
import SettingNotice from './screens/SettingNotice';
import SettingTermsOfServices from './screens/SettingTermsOfServices';
import SettingLanguage from './screens/SettingLanguage';
import SettingReport from './screens/SettingReport';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBarIcon from './screens/TabBarIcon';

import messaging from '@react-native-firebase/messaging';
import Test from './screens/Test'

import Toast from 'react-native-simple-toast';

import auth from '@react-native-firebase/auth';

const store = createStore(reducers, applyMiddleware(reduxThunk));
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    console.log(user, '///data');
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    setTimeout(function () {
      SplashScreen.hide();
    }, 100);
  }, []);
  useEffect(() => {
    //when app is open
     messaging().onMessage(async remoteMessage => {
      Toast.showWithGravity('A new  message arrived!', Toast.LONG, Toast.TOP);
      // Alert.alert('A new  message arrived!', JSON.stringify(remoteMessage));
    })

    //notification when app is quit or on background
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    })
},[])

  function TabNavigationData() {
    return (
    <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color}) =>
                TabBarIcon(route.name, color, focused),
            })}
            tabBarOptions={{
              showLabel: false,
            }}>
            <Tab.Screen name="Home" component={Tab_home} />
            <Tab.Screen name="Schedule" component={AudioStackScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Setting" component={SettingStackScreen} />
            </Tab.Navigator>
    )
  }

  const HomeStack = createStackNavigator();

  const AudioStack = createStackNavigator();
  const AudioStackScreen = () => { 
        return(
         <AudioStack.Navigator>
          <AudioStack.Screen name="Schedule" component={Tab_schedule} 
            options={{
                headerShown: false
              }}
          />
          <AudioStack.Screen name="AudioDetail" component={AudioDetail} 
            options={{
              headerShown: false
            }}
          />

          <AudioStack.Screen name="AudioGuide" component={AudioGuide} 
            options={{
              headerShown: false
            }}
          />

          <AudioStack.Screen name="AudioGuideDetail" component={AudioGuideDetail} 
            options={{
              headerShown: false
            }}
          />

         </AudioStack.Navigator>
      )
   }

  const SettingStack = createStackNavigator();
  const SettingStackScreen = () => { 
        return(
         <SettingStack.Navigator>
         <SettingStack.Screen name="Setting" component={Setting} 
          options={{
          headerShown: false
        }}
         />
          <SettingStack.Screen name="SettingNotice" component={SettingNotice}
         options={{
          headerShown: false
        }}
        />
        <SettingStack.Screen
          name="SettingLanguage"
          component={SettingLanguage}
          options={{
          headerShown: false
        }}
        />
        <SettingStack.Screen
          name="SettingTermsOfServices"
          component={SettingTermsOfServices}
          options={{
          headerShown: false
        }}
        />
      
        <SettingStack.Screen name="SettingReport" component={SettingReport}
          options={{
            headerShown: false
          }}
        />
         </SettingStack.Navigator>
      )
   }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user === null ? (
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
                  }}/> 
              <Stack.Screen
                name="AudioDetail"
                component={AudioDetail}
                options={{
                  headerShown: false,
                }}
            />*/}

            <Stack.Screen
              name="FirebaseLogin"
              component={FirebaseLogin}
              options={{
                headerTitle: '로그인',
                headerStyle: {
                  backgroundColor: '#41BD40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,
                  alignSelf: 'center',
                },
                headerRight: () => <View></View>,
              }}
            />

            <Stack.Screen
              name="FirebaseSignup"
              component={FirebaseSignup}
              options={{
                headerTitle: '로그인',
                headerStyle: {
                  backgroundColor: '#41BD40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,
                  alignSelf: 'center',
                },
                headerRight: () => <View></View>,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SearchPW"
              component={SearchPW}
              options={{
                headerTitle: '비밀번호 찾기',
                headerStyle: {
                  backgroundColor: '#41BD40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,
                  alignSelf: 'center',
                },
                headerRight: () => <View></View>,
              }}
            />
            <Stack.Screen
              name="Join"
              component={Join}
              options={{
                headerTitle: '회원가입',
                headerStyle: {
                  backgroundColor: '#41BD40',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignSelf: 'center',
                },
                headerRight: () => <View></View>,
              }}
            />
            
          </Stack.Navigator>
        ) : (
          
        <HomeStack.Navigator>

        <HomeStack.Screen name="tabNavigation" component={TabNavigationData}
          options={{
          headerShown: false
        }} />
        

        <HomeStack.Screen name="Chat" component={Chat} 
           options={{
            headerShown: false
          }}
        />

        <HomeStack.Screen name="ChatProfile" component={ChatProfile} 
           options={{
            headerShown: false
          }}
        />

      </HomeStack.Navigator>
    ) }
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#41BD40',
    position: 'relative',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  backbtn: {
    fontSize: 40,
    paddingBottom: 15,
    color: 'white',
  },
  titleTxt: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default App;