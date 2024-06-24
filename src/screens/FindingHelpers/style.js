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
    marginTop: sizes.screenHeight * 0.04,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.7,
    fontWeight:'600'
  },

  textLight: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.6,
    textAlign: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  modalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },

  modalImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  modalText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.darkBlue,
    marginVertical: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  textBlue: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.darkBlue,
    textAlign: 'center',
    width: sizes.screenWidth * 0.64,
  },

  typeContainer: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.white,
  },

  typeSelectedContainer: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.darkBlue,
  },

  typeImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.03,
  },

  typeText: {
    fontFamily: 'Inter-Medium',
    color: colors.black,
    fontSize: fontSize.h5,
  },

  bodyText: {
    fontFamily: 'Inter-Regular',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
  },

  codeFieldSection: {
    marginBottom: sizes.screenHeight * 0.05,
  },

  codeFieldContainer: {
    marginBottom: sizes.screenHeight * 0.03,
  },

  codeFieldRoot: {
    width: sizes.screenWidth * 0.64,
    alignSelf: 'center',
  },

  cell: {
    fontFamily: 'Inter-Medium',
    width: sizes.screenHeight * 0.07,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.07,
    fontSize: fontSize.h4,
    backgroundColor: colors.backgroundColor,
    textAlign: 'center',
    color: colors.black,
    borderRadius: 12,
    borderColor: colors.white,
    borderWidth: 2,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  focusCell: {
    fontFamily: 'Inter-Medium',
    width: sizes.screenHeight * 0.07,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.07,
    fontSize: fontSize.h5,
    backgroundColor: colors.backgroundColor,
    textAlign: 'center',
    color: colors.black,
    borderRadius: 12,
    borderColor: colors.white,
    borderWidth: 2,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  otpTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  forgetText: {
    fontSize: fontSize.regular,
    color: colors.black,
    fontFamily: 'Inter-Light',
    fontSize: fontSize.regular,
  },

  forgetTextBold: {
    fontSize: fontSize.regular,
    color: colors.black,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.regular,
    fontWeight:'600'
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.04,
  },
});
