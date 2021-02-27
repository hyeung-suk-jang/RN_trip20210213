import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import {COLORS} from '../constant/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingTermsOfServices = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title='terms of service'
            onBackPress={() => {
                navigation.goBack();
              }}/>
            <View style={[styles.viewContainer,styles.boxWithShadow]}>
                <Text style={[styles.termsText,styles.boxWithShadow]}>latest version : 10 / 07 / 2020</Text>
            </View>
            <ScrollView style={{ marginVertical : 20 }}>
                <View style={{ marginHorizontal : 16 }}>
                    <Text style={{ color : COLORS.GREY }}>
                    Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
                    Donec at mettis lacus. Duis sursus orci a convallis condimentum.
                    Phasellus gravida felis leo.
                    </Text>
                    <View style={{ color : COLORS.GREY, marginTop : 16, flexDirection : 'row' }}>
                        <Icon name="circle" size={13} color={COLORS.PRIMARY} />
                        <Text style={{ marginLeft : 8, marginTop : -4, color : COLORS.GREY }}>
                        Donec molecstie ultricies dolor, nec feugiat tellus laoreet ac praesent 
                        eu quam.
                        </Text>
                    </View>
                    <View style={{ marginTop : 16, flexDirection : 'row' }}>
                        <Icon name="circle" size={13} color={COLORS.PRIMARY} />
                        <Text style={{ marginLeft : 8, marginTop : -4, color : COLORS.GREY }}>
                        Maecenas pharetra ligula sed consequat imperdiet. Integer rhoncus 
                        sed nisl vitae.
                        </Text>
                    </View>
                    <View style={{ marginTop : 16, flexDirection : 'row' }}>
                        <Icon name="circle" size={13} color={COLORS.PRIMARY} />
                        <Text style={{ marginLeft : 8, marginTop : -4, color : COLORS.GREY }}>
                        Donec commodo gravida risus, ac volutpat mauris tristiqueinterdum.
                        </Text>
                    </View>
                    <Text style={{ color : COLORS.GREY, marginTop : 16 }}>
                    Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
                    Donec at mettis lacus. Duis sursus orci a convallis condimentum.
                    Phasellus gravida felis leo.
                    </Text>
                    <Text style={{ color : COLORS.GREY, marginTop : 16 }}>
                    Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
                    Donec at mettis lacus. Duis sursus orci a convallis condimentum.
                    Phasellus gravida felis leo.Vivamus ex felis, ullamcorper ac metus ac, finibus egestas nibh.
                    Donec at mettis lacus. Duis sursus orci a convallis condimentum.
                    Phasellus gravida felis leo.
                    </Text>
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
    marginHorizontal : 32,
    borderRadius : 12,
  },
  termsText: {
    textTransform: 'uppercase',
    fontSize: 13,
    width : '100%',
    fontWeight : 'bold',
    paddingVertical : 12,
    paddingHorizontal : 30,
    color : COLORS.PRIMARY,
    borderRadius : 12,
    backgroundColor : COLORS.WHITE,
  },
  boxWithShadow: {
    shadowColor: COLORS.PRIMARY,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    elevation: 70,
  },
});

export default SettingTermsOfServices;