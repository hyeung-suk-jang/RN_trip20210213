import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Header} from '../components/Header';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingLanguage = ({navigation}) => {
  const languages = [
    {
      language: 'KOREAN',
      isSelected: false,
    },
    {
      language: 'ENGLISH',
      isSelected: true,
    },
    {
      language: 'CHINESE',
      isSelected: false,
    },
  ];

  const [lanList, setLanList] = useState(languages);

  let renderLanguages;
  if (lanList && lanList.length > 0) {
    renderLanguages = lanList.map((item, key) => {
      return (
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={(ind) => {
              lanList[key].isSelected = !lanList[key].isSelected;
              setLanList(lanList);
            }}>
            <View style={{marginLeft: 20}}>
              <Text style={styles.settingText}>{item.language}</Text>
            </View>
            {item.isSelected && (
              <View
                style={{
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  flex: 1,
                  marginRight: 12,
                }}>
                <Icon name="check" size={18} color={COLORS.GREY} />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.saperator} />
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Header
        title="language"
        onBackPress={() => {
          navigation.navigate('Setting');
        }}
      />
      <ScrollView style={{marginTop: '2%', marginBottom: '2%'}}>
        {renderLanguages}
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

export default SettingLanguage;
