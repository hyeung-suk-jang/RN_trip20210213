import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Alert,
  Switch,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from '../components/Header';
import {COLORS} from '../constant/colors';

const Tab_setting = ({navigation}) => {
  
  const [isMarketingAgreement, setIsMarketingAgreement] = useState(false);
  const [isPushNotification, setIsPushNotification] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="settings" 
        onBackPress={() => {
                navigation.goBack();
              }}
      />
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SettingNotice');
            }}
            style={{marginLeft: 20}}>
            <Text style={styles.settingText}>notice</Text>
          </TouchableOpacity>
          <View style={styles.saperator} />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SettingLanguage');
            }}
            style={{marginLeft: 20}}>
            <Text style={styles.settingText}>language</Text>
          </TouchableOpacity>
          <View style={styles.saperator} />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SettingTermsOfServices');
            }}
            style={{marginLeft: 20}}>
            <Text style={styles.settingText}>terms of service</Text>
          </TouchableOpacity>
          <View style={styles.saperator} />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setIsMarketingAgreement(!isMarketingAgreement)
              }}
              style={{marginLeft: 20}}>
              <Text style={styles.settingText}>margketing agreement</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Switch
                trackColor={{false: COLORS.SWITCHBACK, true: COLORS.SWITCHBACK}}
                thumbColor={isMarketingAgreement ? COLORS.SWITCHON : COLORS.SWITCHOFF}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsMarketingAgreement(!isMarketingAgreement)
                }}
                value={isMarketingAgreement}
              />
            </View>
          </View>
          <View style={styles.saperator} />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setIsPushNotification(!isPushNotification)
              }}
              style={{marginLeft: 20}}>
              <Text style={styles.settingText}>push notice</Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Switch
                trackColor={{false: COLORS.SWITCHBACK, true: COLORS.SWITCHBACK}}
                thumbColor={isPushNotification ? COLORS.SWITCHON : COLORS.SWITCHOFF}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsPushNotification(!isPushNotification)
                }}
                value={isPushNotification}
              />
            </View>
          </View>
          <View style={styles.saperator} />

          <TouchableOpacity
            onPress={() => console.log('pressed')}
            style={{marginLeft: 20}}>
            <Text style={styles.settingText}>logout</Text>
          </TouchableOpacity>
          <View style={styles.saperator} />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SettingReport');
            }}
            style={{marginLeft: 20}}>
            <Text style={styles.settingText}>report inconvinience</Text>
          </TouchableOpacity>
          <View style={styles.saperator} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
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

export default Tab_setting;
