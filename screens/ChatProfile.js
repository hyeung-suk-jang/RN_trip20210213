import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {Header} from '../components/Header';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Avatar } from 'react-native-elements';

const ChatProfile = ({ navigation }) => {

    const url = "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450"

    return (
        <View style={styles.container}>
            <Header 
              title="driver info"
              onBackPress={() => {
                navigation.goBack();
              }}
           />
            <ScrollView style={{ flex : 1, marginBottom : 32 }}>
                <View style={{ flex : 1 }}>
                     <View style={[styles.viewContainer,styles.boxWithShadow]}>
                        <Avatar
                            rounded
                            source={
                            url
                                ? {
                                    uri: url,
                                }
                                : null
                            }
                            size={95}
                            containerStyle={{
                                backgroundColor: url ? '#fff' : '#EFEFF7',
                                marginTop : responsiveHeight(7),
                            }}
                        />
                        <Text style={{
                            fontSize : 20,
                            fontWeight : 'bold',
                            marginTop : responsiveHeight(3),
                        }}>
                        KIM (640304, Woman)
                        </Text>
                        <Text style={{
                            fontSize : 14,
                            fontWeight : 'bold',
                            marginTop : responsiveHeight(1),
                            color : COLORS.GREY,
                        }}>
                        License : 11-17-174133-01
                        </Text>
                    </View>
                    <View style={[styles.viewContainer2]}>
                        <Text style={styles.nameTextStyle}>name</Text>
                        <Text style={styles.responseText}>Kim</Text>
                        <View style={styles.saperator} />

                        <Text style={styles.nameTextStyle}>birth/gender</Text>
                        <Text style={styles.responseText}>880202-2</Text>
                        <View style={styles.saperator} />
                        
                        <View style={{ flexDirection : 'row',flex : 1 }}>

                          <View style={{ flex : 0.75 }}>
                            <Text style={styles.nameTextStyle}>tel number</Text>
                            <Text style={styles.responseText}>010-0000-0000</Text>
                            <View style={styles.saperator} />
                          </View>

                          <View style={{ flex : 0.25, flexDirection : 'row', alignItems : 'center' }}>
                            <TouchableOpacity
                              onPress={() => console.log('pressed')}
                            >
                              <Icon style={{ padding : 8 }} name="phone" size={28} color={COLORS.PRIMARY} />
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => console.log('pressed')}
                            >
                              <IIcon style={{ padding : 8 }} name="md-chatbubble-ellipses" size={28} color={COLORS.PRIMARY} />
                            </TouchableOpacity>
                          </View>
                        </View>
                        
             
                        <Text style={styles.nameTextStyle}>introduce123</Text>
                        <Text style={styles.responseText}>Lovely women</Text>
                        <View style={styles.saperator} />

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
  },
  viewContainer: {
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
    alignSelf: 'center',
    alignItems : 'center',
    borderRadius : 12,
    height : responsiveHeight(45),
    width : '90%',
    marginTop : 32,
    marginHorizontal : 32,
  },
  viewContainer2 : {
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop : 16,
    backgroundColor : COLORS.WHITE,
    width : '90%',
    marginHorizontal : 32,
  },
  belowContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius : 12,
    height : responsiveHeight(45),
    width : responsiveWidth(88),
  },
  responseText: {
    fontSize: 16,
    color: COLORS.LIGHTBLACK,
  },
  nameTextStyle: {
    fontWeight: '500',
    fontSize: 14,
    paddingVertical: 14,
    color: COLORS.GREY,
  },
  boxWithShadow: {
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    elevation: 70,
  },
  saperator: {
    backgroundColor: COLORS.LIGHT,
    height: 0.5,
    marginTop : 14
  },
});

export default ChatProfile;