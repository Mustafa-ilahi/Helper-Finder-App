import {Dimensions, StyleSheet, View} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
  },

  backIcon: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.06,
    width: sizes.screenWidth * 0.06,
    marginRight: sizes.screenWidth * 0.03,
  },

  img: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.09,
    width: sizes.screenWidth * 0.09,
  },

  heading: {
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: colors.darkBlue,
    fontWeight:'600'
  },
});
