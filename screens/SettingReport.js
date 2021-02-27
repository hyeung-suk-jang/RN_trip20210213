import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Header} from '../components/Header';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SettingReport = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="report inconvenience"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAwareScrollView>
        <View style={{marginHorizontal: 16}}>
          <View>
            <Text style={styles.settingText}>Questions</Text>
            <TextInput
              style={{
                marginTop: 12,
                height: responsiveHeight(34),
                textAlignVertical: 'top',
                padding: 8,
                borderColor: COLORS.GREY,
                borderWidth: 1,
              }}
              multiline={true}
            />
          </View>

          <View style={{marginTop: 12}}>
            <Text style={styles.settingText}>Reply Email</Text>
            <TextInput
              style={{
                marginTop: 12,
                height: responsiveHeight(7),
                textAlignVertical: 'top',
                padding: 8,
                borderColor: COLORS.GREY,
                borderWidth: 1,
              }}
              multiline={true}
            />
          </View>

          <View style={{marginTop: 12}}>
            <Text style={styles.settingText}>Attachmnet</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 12,
                borderColor: COLORS.GREY,
                borderWidth: 1,
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  height: responsiveHeight(7),
                  textAlignVertical: 'top',
                  padding: 8,
                  width: '90%',
                }}
                multiline={false}
              />
              <Icon name="attachment" size={20} color={COLORS.GREY} />
            </View>
          </View>

          <View style={{marginVertical: 12}}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: COLORS.PRIMARY,
                borderRadius: 12,
              }}
              onPress={() => {
                console.log('pressed');
              }}>
              <Text
                style={{
                  paddingVertical: 16,
                  color: COLORS.WHITE,
                  fontWeight: 'bold',
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    fontSize: 13,
    color: COLORS.GREY,
  },
});

export default SettingReport;
