import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const AudioDetail = ({navigation}) => {
  const [isAudioDetail, setIsAudioDetail] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Image
        style={{width: '100%', height: '35%', backgroundColor: COLORS.WHITE}}
        source={{
          uri:
            'https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450',
        }}
      />
      <View
        style={{
          height: isAudioDetail ? '58%' : '75%',
          backgroundColor: COLORS.WHITE,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          marginTop: '-10%',
        }}>
        <ScrollView style={{flex: 1, marginTop: 24, paddingHorizontal: 16}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.headerText}>City 1</Text>
              <TouchableOpacity
                onPress={() => {
                  setIsAudioDetail(!isAudioDetail);
                }}
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1,
                  marginRight: 12,
                }}>
                <Icon name="headphones" size={28} color={COLORS.PRIMARY} />
              </TouchableOpacity>
            </View>
            <View style={styles.saperator} />

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.nameTextStyle}>address</Text>
                <Text style={styles.responseText}>
                  150,street,landmark,area,province
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map');
                }}
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1,
                  marginRight: 8,
                }}>
                <EntypoIcon
                  name="location-pin"
                  size={35}
                  color={COLORS.PRIMARY}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.saperator} />

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.nameTextStyle}>Tell number</Text>
                <Text style={styles.responseText}>010-0000-0000</Text>
              </View>
              <TouchableOpacity
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1,
                  marginRight: 8,
                }}>
                <FontAwesomeIcon
                  name="phone"
                  size={32}
                  color={COLORS.PRIMARY}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.saperator} />

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.nameTextStyle}>description</Text>
                <Text style={styles.responseText}>
                  whatever user want to keep
                </Text>
              </View>
            </View>
            <View style={styles.saperator} />

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.nameTextStyle}>description</Text>
                <Text style={[styles.responseText]}>
                  The Style has its 2 unique radius property which is used to
                  make only both top sides corners rounded. This type of
                  functionality we have seen in many applications and one of the
                  most popular social chatting platform Hike in India uses this.
                  So in this tutorial we would going to create a react native
                  app and set Border radius for only top left right rounded
                  corners Image View React Native The Style has its 2 unique
                  radius property which is used to make only both top sides
                  corners rounded. This type of functionality we have seen in
                  many applications and one of the most popular social chatting
                  platform Hike in India uses this. So in this tutorial we would
                  going to create a react native app and set Border radius for
                  only top left right rounded corners Image View React Native
                </Text>
              </View>
            </View>
            <View
              style={[styles.saperator, {marginBottom: isAudioDetail ? 8 : 50}]}
            />
          </View>
        </ScrollView>
      </View>
      {isAudioDetail && (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            height: '14%',
            backgroundColor: COLORS.PRIMARY,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}>
          <TouchableOpacity
            style={{flex: 0.1, alignItems: 'center'}}
            onPress={() => {
              setIsAudioDetail(false);
            }}>
            <AntDesignIcon name="close" size={20} color={COLORS.WHITE} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 0.1, alignItems: 'center'}}
            onPress={() => {
              navigation.navigate('AudioGuide');
            }}>
            <EntypoIcon
              name="menu"
              size={20}
              style={{marginLeft: 8}}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
          <Text style={[styles.detailText, {flex: 0.23, textAlign: 'center'}]}>
            City 1
          </Text>
          <Text style={[styles.sizeText, {flex: 0.11, textAlign: 'center'}]}>
            02:35
          </Text>
          <TouchableOpacity style={{flex: 0.11, alignItems: 'center'}}>
            <Icon name="step-backward" size={20} color={COLORS.WHITE} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.11, alignItems: 'center'}}>
            <FoundationIcon name="pause" size={30} color={COLORS.WHITE} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.11, alignItems: 'center'}}>
            <Icon name="step-forward" size={20} color={COLORS.WHITE} />
          </TouchableOpacity>
          <Text style={[styles.sizeText, {flex: 0.11, textAlign: 'center'}]}>
            05:40
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
  },
  headerText: {
    fontSize: 21,
    color: COLORS.BLACK,
    paddingVertical: 18,
  },
  saperator: {
    backgroundColor: COLORS.LIGHT,
    height: 0.5,
  },
  responseText: {
    fontSize: 14,
    color: COLORS.GREY,
    paddingVertical: 10,
  },
  nameTextStyle: {
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 14,
    color: COLORS.LIGHTBLACK,
  },
  detailText: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginHorizontal: 16,
  },
  sizeText: {
    fontSize: 8,
    color: COLORS.WHITE,
    paddingHorizontal: 8,
  },
});

export default AudioDetail;
