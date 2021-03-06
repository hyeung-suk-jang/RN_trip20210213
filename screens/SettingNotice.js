import React, {useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Header } from '../components/Header';
import { COLORS } from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingNotice = ({navigation}) => {

  const [isExpanded, setIsExpanded] = useState(false);

    return (
      <View style={styles.container}>
        <Header title="공지사항" 
        onBackPress={() => {
                navigation.goBack();
              }}
        />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginLeft: 20}}>
              <Text style={styles.settingText}>2020.08.01 업데이트</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.saperator} />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => console.log('pressed')}
              style={{marginLeft: 20}}>
              <Text style={styles.settingText}>2020.08.02 업데이트</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.saperator} />

          <TouchableOpacity 
            style={{flexDirection: 'row'}}
            onPress={() => {
              setIsExpanded(!isExpanded)
            }}
          >
              <View
                style={{marginLeft: 20}}>
                <Text style={styles.settingText}>2020.08.03 업데이트</Text>
              </View>
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1,
                  marginHorizontal : 16,
                }}>
                { isExpanded 
                  ? <Icon name="chevron-up" size={18} color={COLORS.GREY} />
                  : <Icon name="chevron-down" size={18} color={COLORS.GREY} />
                }
              </View>
          </TouchableOpacity>
          { isExpanded && 
            <View style={{ marginHorizontal : 16, marginVertical : 16 }}>
              <Text style={{ color : COLORS.GREY }}>
                Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
                Donec at mettis lacus. Duis sursus orci a convallis condimentum.
                Phasellus gravida felis leo.
              </Text>
          </View>
          }
          <View style={styles.saperator} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
  },
  settingText: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: COLORS.LIGHTBLACK,
    paddingVertical: 18,
  },
  saperator: {
    backgroundColor: COLORS.LIGHT,
    height: 0.5,
    marginLeft: 20,
  },
});

export default SettingNotice;
