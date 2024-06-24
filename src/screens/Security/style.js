import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  body: {
    marginTop: sizes.screenHeight * 0.03,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.7,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight: '600',
  },

  textNormal2: {
    color: colors.disabledBg2,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'flex-start',
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.12,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  inputIcon: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.03,
  },

  inputField: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.64,
  },

  inputPassField: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.6,
  },

  eyeIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.025,
    width: sizes.screenHeight * 0.025,
  },

  separator: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.74,
    backgroundColor: colors.disabledBg,
    marginBottom: sizes.screenHeight * 0.02,
  },
  separatorIOS: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.77,
    backgroundColor: colors.disabledBg,
    marginBottom: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.007,
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,
  },
});
