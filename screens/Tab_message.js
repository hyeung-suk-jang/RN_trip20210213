import React, { useState, useRef, useEffect } from 'react';
import { View, Text ,Alert,TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import {Badge, Avatar, Input} from 'react-native-elements';
import Close from '../assets/close';
import SearchIcon from '../assets/search';
import auth from '@react-native-firebase/auth';

const Tab_message = ({ navigation }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
      if (user === null) {
        auth().onAuthStateChanged(onAuthStateChanged)
      }
  });

  function onAuthStateChanged(user) {
    console.log(user.uid,'///user-uuid');
    setUser(user);
  }

  const userList = [
    // {
    //   "_id":"1",
    //   "name" : "김택시 (다음일정 : 1건)",
    //   "message" : "Class aptent taciti sociosqu…",
    //   "avatar" : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    //   "online" : true,
    //   "totalMsg" : 8
    // },
    // {"_id":"2",
    //   "name" : "정보알리미",
    //   "message" : "Class aptent taciti sociosqu…",
    //   "online" : true,
    //   "totalMsg" : 2
    // },
    // {
    //   "_id":"3",
    //   "name" : "Baby G",
    //   "message" : "Class aptent taciti sociosqu…",
    //   "avatar" : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    //   "online" : false,
    //   "totalMsg" : 0
    // },
    {
      "_id":"4",
      "name" : "Test1",
      "message" : "Class aptent taciti sociosqu…",
      "avatar" : "https://placeimg.com/140/140/any",
      "online" : false,
      "totalMsg" : 0
    }
  ];

  let renderCards;
  if (userList.length > 0) {
    renderCards = userList.map((data, key) => {
      return (
          <TouchableOpacity style={styles.mainContainer} 
            onPress={() => {
                //console.log(data.name);
                 navigation.navigate("Chat",{userData:data})
            }}
          >
            <View style={{width: '20%', flexDirection: 'column', justifyContent : 'center'}}>
              <Avatar
                rounded
                source={
                  data.avatar
                    ? {
                        uri: data.avatar,
                      }
                    : null
                }
                size={60}
                containerStyle={{
                  backgroundColor: data.avatar ? '#fff' : '#EFEFF7',
                }}
              />
              <Badge
                  badgeStyle={{
                    height:14,
                    width: 14,
                    borderRadius : 8,
                    backgroundColor : data.online ? "#14C16B" : "#EFEFF7"
                  }}
                  containerStyle={{
                    position: 'absolute',
                    bottom: 40,
                    right: 6,
                  }}
              />
            </View>

            <View style={{width: '60%'}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.nameTaxtStyle}>{data.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '2%',
                }}>
                <Text numberOfLines={1}>{data.message}</Text>
              </View>
            </View>

            <View style={{width: '20%', alignItems: 'center', marginTop : 4 }}>
                <Text style={{ fontSize : 10 }}>10:00AM</Text>
                { data.totalMsg !== 0 && 
                  <View>
                    <Avatar
                      rounded
                      title={data.totalMsg}
                      size={20}
                      containerStyle={{
                        backgroundColor: '#14C16B',
                        marginTop : 4,
                      }}
                    />
                  </View>  
                }
            </View>
          </TouchableOpacity>
      );
    });
  }

  return (
      <View style={styles.container}>

        <View style={styles.mainContainer2}>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainerStyle}>
                    <Input
                        inputContainerStyle={styles.searchInputContainer}
                        inputStyle={styles.inputStyle}
                        placeholder="Search"
                        placeholderTextColor="#636772">
                      </Input>
                </View>
                <View style={styles.searchIconContainer}>
                    <SearchIcon height="100%" width="100%" color="#636772" />
                </View>
            </View>
        </View>

        <ScrollView style={{marginTop: '2%', marginBottom: '2%'}}>
          {renderCards}
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
    backgroundColor:'#FFF'
  },
  mainContainer: {
    paddingVertical : 8,
    paddingLeft : 12,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  nameTaxtStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#14C16B',
  },
  mainContainer2: {
        width: '94%',
        height: 48,
        marginTop: '5%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection: 'row',
        shadowOpacity: 0.1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 11,
        elevation: 10,
    },
    searchIconContainer: {
        height: '50%',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    inputContainerStyle: {
        height: '100%',
        flex: 6,
        alignItems: 'center',
    },
    searchInputContainer: {
        borderWidth: 0,
        width: '100%',
        height: '75%',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderBottomColor: 'transparent',
        justifyContent: 'center',
    },
    inputStyle: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: 18,
        color: '#636772',
        fontWeight: '400',
    },
});

export default Tab_message;