import React, { useState, useRef } from 'react';
import { 
    View,
    ScrollView, 
    Text,
    Alert,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';
import {COLORS} from '../constant/colors';
const { width, height } = Dimensions.get('window');
import {Header} from '../components/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const AudioGuideDetail = ({ navigation }) => {

const data = [
    {
      title: 'City1',
      subtitle: 'chapter1',
      isRunning : false,
      time : '02:45',
    },
    {
      title: 'City2',
      subtitle: 'chapter2',
      isRunning : true,
      time : '02:45',
    },
    {
      title: 'City3',
      subtitle: 'chapter3',
      isRunning : false,
      time : '02:45',
    },
    {
      title: 'City4',
      subtitle: 'chapter4',
      isRunning : false,
      time : '02:45',
    },
    {
      title: 'City1',
      subtitle: 'chapter1',
      isRunning : false,
      time : '02:45',
    },
    {
      title: 'City2',
      subtitle: 'chapter2',
      isRunning : true,
      time : '02:45',
    },
    {
      title: 'City3',
      subtitle: 'chapter3',
      isRunning : false,
      time : '02:45',
    },
    {
      title: 'City4',
      subtitle: 'chapter4',
      isRunning : false,
      time : '02:45',
    },
  ];

    const renderLanguages = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                initialNumToRender={7}
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({item, index}) => {
                return (
                    <View>
                    <View 
                        style={{flexDirection: 'row' ,paddingVertical : 6, flex : 1}}
                    >
                            <TouchableOpacity style={{ flex : 0.15, padding : 8,alignItems : 'center' }}>
                                <AntDesignIcon name="playcircleo" size={28}  color={COLORS.PRIMARY} />
                            </TouchableOpacity>
                            <View style={{flexDirection: 'column' ,paddingVertical : 4, flex : 0.5}}>
                                <Text style={ styles.audioTitleText }>{item.title}</Text>
                                <Text style={ styles.responseText }>{item.subtitle}</Text>
                            </View>
                            <Text style={[styles.audioTitleText,{ flex : 0.2, alignSelf : 'center', color: COLORS.GREY }]}>{item.time}</Text>  
                            <TouchableOpacity style={{ flex : 0.15, justifyContent : 'center' }}>
                                { item.isRunning 
                                    ? <AntDesignIcon name="check" style={{ alignSelf : 'center' }} size={15}  color={COLORS.GREY} />
                                    : <AntDesignIcon name="close" style={{ alignSelf : 'center' }} size={15}  color={COLORS.GREY} />
                                }
                                
                            </TouchableOpacity>               
                    </View>
                    <View style={styles.saperator} />
                    </View>
                );
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Header 
                title="city1 audio guide" 
                onBackPress={() => {
                    navigation.goBack();
                }}
            /> 
            <View style={{ height : height * 0.54 }}>
                {renderLanguages()}
            </View>
                    
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection : 'row', flex : 1, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ alignItems : 'center',flex : 0.2, }}><Text style={styles.sizeText}>02:35</Text></View>
                    <TouchableOpacity style={{ flex : 0.2, alignItems : 'center'}}>
                        <Icon name="step-backward" size={20} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex : 0.2, alignItems : 'center' }}>
                        <AntDesignIcon name="pausecircleo" size={42}  color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex : 0.2, alignItems : 'center' }}>
                        <Icon name="step-forward" size={20} color={COLORS.WHITE} />
                    </TouchableOpacity>
                    <View style={{ alignItems : 'center',flex : 0.2, }}><Text style={styles.sizeText}>05:40</Text></View>
                </View> 
                <View style={{ marginBottom : 16, marginTop : -16}}>  
                <Text style={ styles.audioTitle }>City1</Text>
                <Text style={ styles.nameTextStyle }>chapter 2</Text>
                </View>
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
  detailText: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontWeight : 'bold',
    paddingHorizontal : 12,
    marginHorizontal : 8,
  },
  sizeText: {
    fontSize: 10,
    color: COLORS.WHITE,
    paddingHorizontal : 16,
  },
   nameTextStyle: {
    fontWeight: '500',
    fontSize: 14,
    textAlign : 'center',
    color: COLORS.WHITE,
    paddingTop : 8
  },
  audioTitle : {
    fontSize: 21,
    color: COLORS.WHITE,
    textAlign : 'center',
    fontWeight : 'bold',
  },
  bottomContainer : {
    flexDirection: 'column',
    height: 0.33 * height,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.PRIMARY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
  },  
  saperator: {
    backgroundColor: COLORS.LIGHT,
    height: 0.5,
    marginLeft: 20,
  },
  audioTItleText: {
    fontWeight: '500',
    fontSize: 14,
    textAlign : 'center',
    color: COLORS.BLACK,
  },  
   responseText: {
    fontSize: 14,
    color: COLORS.GREY,
  },
});


export default AudioGuideDetail;