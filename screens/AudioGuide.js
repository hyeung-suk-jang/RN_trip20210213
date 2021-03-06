import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Carousel from 'react-native-anchor-carousel';
import Slider from 'react-native-slider';
const {width, height} = Dimensions.get('window');

const AudioGuide = ({navigation}) => {
  const data = [
    {
      id : 1,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
    {
      id : 2,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
    {
      id : 3,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
    {
      id : 4,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
    {
      id : 5,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
    {
      id : 6,
      imgUrl : "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
    },
  ];

  const renderItem = (item, index) => {
        return (
            <View style={{ backgroundColor : COLORS.WHITE, borderRadius : 12 }}>
                <Image
                  style={{ height : 200, borderRadius : 16 }}
                  source={{
                    uri: "https://imgk.timesnownews.com/story/environment-iStock-489644415.jpg?tr=w-600,h-450",
                  }}
                />
            </View>
        );
    }

  return (
    <View style={styles.container}>
      <StatusBar
                backgroundColor='white'
                barStyle='dark-content'
            />

      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{paddingLeft : 8, width : width * 0.2}}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesignIcon name="arrowleft" size={30} color={COLORS.WHITE} />
        </TouchableOpacity>
        <View style={{ alignItems : 'center', flex : 1 , width : width * 0.8 }}>
          <Text style={styles.headerText}>오디오 가이드</Text>
        </View>  
      </View>

      <View
        style={{
          height: 0.32 * height,
          backgroundColor: COLORS.WHITE,
          marginVertical: 32,
        }}>
        {
          (data && data.length > 1) ? (
              <Carousel style={{ flex : 1 }}
                data={data}
                initialIndex={1}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20} 
                separatorWidth={10}
              />
          ) : (data.length == 1) ? (
              <View style={{ backgroundColor : COLORS.WHITE,alignItems : 'center', borderRadius : 12 }}>
                <Image
                  style={{ height : 200, width : 200, borderRadius : 16 }}
                  source={require('../assets/image/donggul.png')}
                />
              </View>
          ) : (
            <View style={{ backgroundColor : COLORS.WHITE }}>
                <EntypoIcon
                  name="camera"
                  size={70}
                  style={{marginTop: 36, alignSelf : 'center'}}
                  color={COLORS.LIGHT}
                />
                <Text style={{ color : COLORS.LIGHT, alignSelf : 'center',marginTop : 16, fontSize : 20 }}>Image 1</Text>
            </View>
          )
        }
          
      </View>

      <Text style={styles.audioTitle}>고씨동굴</Text>
      <Text style={styles.nameTextStyle}>1/3 오디오가이드</Text>
      <View style={{marginHorizontal: 32, marginTop: 16}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 12, color: COLORS.GREY}}>00:00</Text>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Text style={{fontSize: 12, color: COLORS.GREY}}>05:26</Text>
          </View>
        </View>
        <View style={{marginTop: -8}}>
          <Slider
            value={0.5}
            onValueChange={(value) => {
              console.log(value);
            }}
            trackStyle={{
              height: 10,
              borderRadius: 4,
              backgroundColor: COLORS.LIGHT,
            }}
            thumbStyle={{
              width: 18,
              height: 18,
              elevation : 5,
              shadowColor: COLORS.PRIMARY,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.6,
              backgroundColor : COLORS.WHITE,
            }}
            minimumTrackTintColor={COLORS.PRIMARY}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AudioGuideDetail');
          }}>
          <EntypoIcon
            name="menu"
            size={20}
            style={{marginLeft: 0}}
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.detailText}>고씨동굴</Text>
        <Text style={styles.sizeText}>02:35</Text>
        <TouchableOpacity>
          <Icon
            name="step-backward"
            size={20}
            style={{margin: 8}}
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesignIcon
            name="pausecircleo"
            size={42}
            style={{margin: 8}}
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="step-forward"
            size={20}
            style={{margin: 8}}
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
        <Text style={styles.sizeText}>05:40</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
  },
  headerContainer: {
    height: 0.16 * height,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    paddingTop: 8,
    alignItems : 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    color: COLORS.WHITE,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft : -0.2 * width,
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 0.16 * height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
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
    textAlign: 'center',
    color: COLORS.LIGHTBLACK,
    paddingTop: 8,
  },
  detailText: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginHorizontal: 8,
  },
  sizeText: {
    fontSize: 8,
    color: COLORS.WHITE,
    paddingHorizontal: 8,
  },
  audioTitle: {
    fontSize: 21,
    color: COLORS.BLACK,
    paddingTop: 12,
    textAlign: 'center',
  },
});

export default AudioGuide;
