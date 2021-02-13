import { StyleSheet } from 'react-native';

import { isIphoneX } from 'react-native-iphone-x-helper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  tabbar: {
    width: wp('100%'),
    height: isIphoneX() ? hp('10%') : hp('10%'),
    flexDirection: 'row',
    paddingBottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  tabbarItem: {
    width: '15%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  icon: {
    marginTop: 0,
    marginBottom: isIphoneX() ? hp('1%') : hp('1.5%'),
  },
  focusIcon: {
    backgroundColor: '#fff',
    width: hp('12%'),
    height: hp('12%'),
    borderRadius: 50,
    position: 'absolute',
    left: '50%',
    top: -30,
    transform: [{ translateX: hp('6%') * -1 }],
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon_box: {
    width: wp('18%'),
    height: hp('4.7%'),
    marginTop: hp('1.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTab: {
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: '#52B669',
    borderRadius: 50,
    alignItems: 'center',
  },
  icon_img: {
    width: wp('5%'),
    height: hp('5%'),
  },
  focusTabImage: {
    width: wp('7%'),
    height: hp('7%'),
  },
  icon_bage: {
    position: 'absolute',
    right: wp('6%'),
    top: 0,
    backgroundColor: '#d74339',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_bage_txt: {
    color: 'white',
    fontSize: hp('1%'),
    fontWeight: 'bold',
  },
  icon_txt: {
    alignItems: 'center',
    alignContent: 'center',
  },
  icon_txt_font: {
    fontSize: hp('1.3%'),
  },
  icon_back: {
    marginLeft: 25,
    paddingTop: 2,
  },
});
