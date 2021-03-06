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
        source={require('../assets/image/Overlay.png')}
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
              <Text style={styles.headerText}>김삿갓유적지</Text>
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
                <Text style={styles.nameTextStyle}>주소</Text>
                <Text style={styles.responseText}>
                영월군 김삿갓면 김삿갓로 216-22
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
                <Text style={styles.nameTextStyle}>전화번호</Text>
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
                <Text style={styles.nameTextStyle}>한줄설명</Text>
                <Text style={styles.responseText}>
                강원도 영월군 난고 김병연(金炳淵)의 유적지
                </Text>
              </View>
            </View>
            <View style={styles.saperator} />

            <View style={{flexDirection: 'row'}}>
              <View>
                <Text style={styles.nameTextStyle}>상세설명</Text>
                <Text style={[styles.responseText]}>
                강원도 영월군 하동면 와석리 노루목에 조성된 난고 김병연(金炳淵)의 유적지. 
                별호인 김삿갓으로 불리는 난고 김병연(1807~1863)을 기념하는 유적지와 부대시설이 조성되어 있다. 
                김삿갓 연구자료를 전시하고 있는 난고문학
                강원도 영월군 하동면 와석리 노루목에 조성된 난고 김병연(金炳淵)의 유적지. 
                별호인 김삿갓으로 불리는 난고 김병연(1807~1863)을 기념하는 유적지와 부대시설이 조성되어 있다. 
                김삿갓 연구자료를 전시하고 있는 난고문학
                강원도 영월군 하동면 와석리 노루목에 조성된 난고 김병연(金炳淵)의 유적지. 
                별호인 김삿갓으로 불리는 난고 김병연(1807~1863)을 기념하는 유적지와 부대시설이 조성되어 있다. 
                김삿갓 연구자료를 전시하고 있는 난고문학
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
          <Text style={[styles.detailText, {flex: 0.28, textAlign: 'center'}]}>
          김삿갓유적지
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
    fontSize: 16,
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
