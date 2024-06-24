import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import SignIn from '../SignIn';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  scrollViewBody: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    minHeight: sizes.screenHeight * 0.94,
  },

  userImgContainer: {
    height: sizes.screenWidth * 0.22,
    width: sizes.screenWidth * 0.22,
    borderRadius: sizes.screenWidth * 0.22,
    overflow: 'hidden',
  },

  userImg: {
    height: sizes.screenWidth * 0.22,
    width: sizes.screenWidth * 0.22,
  },

  textBoldLarge: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: fontSize.h4,
    color: colors.darkBlue,
    fontWeight:"700"
  },

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  btnRow: {
    width: sizes.screenWidth * 0.9,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  btnWhite: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.43,
    backgroundColor: colors.backgroundColor,
  },

  btnWhiteText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  btnBlue: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.43,
    backgroundColor: colors.darkBlue,
  },

  btnBlueText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.white,
  },

  textSection: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  textBoldSmall: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight:"600"
  },

  textBlack: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
  },

  textBoldMedium: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: fontSize.large,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
    marginTop: sizes.screenHeight * 0.03,
    fontWeight:"700"
  },

  inputField: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.black,
    width: sizes.screenWidth * 0.8,
  },
  inputFieldIOS: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.black,
    width: sizes.screenWidth * 0.8,
    height:sizes.screenHeight * 0.05
  },

  separatorSmall: {
    height: 1,
    width: sizes.screenWidth * 0.3,
    backgroundColor: colors.disabledBg,
    bottom: 12,
  },

  textBold: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.h5,
    color: colors.black,
    marginTop: sizes.screenHeight * 0.02,
    top: 12,
  },

  separator: {
    height: 1,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.disabledBg,
    bottom: 12,
  },

  disabledBtn: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.07,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
  },

  marginBottom:{
    marginBottom:sizes.screenHeight * 0.1
  },

  disabledBtnText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: '#2A3B6044',
    fontWeight:"600"
  },

  disabledTextCenter: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.8,
    textAlign: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  starRatingContainer: {
    width: sizes.screenWidth * 0.26,
  },

  ///////////////

  bottomModalContainer: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  bottomModalBody: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    alignSelf: 'center',
    borderTopRightRadius: sizes.screenHeight * 0.03,
    borderTopLeftRadius: sizes.screenHeight * 0.03,
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.03,
  },

  topHr: {
    height: 6,
    borderRadius: 6,
    width: sizes.screenWidth * 0.2,
    backgroundColor: '#CDCDCD',
    marginTop: sizes.screenHeight * 0.015,
  },

  textLight: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    marginVertical: sizes.screenHeight * 0.02,
  },

  modalBtn: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.066,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginBottom: sizes.screenHeight * 0.02,
  },

  modalBtnText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
  },

  modalImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },

  modalText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.darkBlue,
    marginVertical: sizes.screenHeight * 0.01,
    fontWeight:"600"
  },

  textBlue: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.darkBlue,
    textAlign: 'center',
    width: sizes.screenWidth * 0.64,
  },

  moreHelperModalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },

  modalBtnSmall: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.7,
    height: sizes.screenHeight * 0.066,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  modalBtnTextSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.white,
  },

  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.8,
    marginVertical: sizes.screenHeight * 0.02,
  },

  separatorSmall2: {
    height: 2,
    width: sizes.screenWidth * 0.22,
    backgroundColor: colors.disabledBg,
  },

  orText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
    marginHorizontal: sizes.screenWidth * 0.03,
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

  bottomBtnContainer2: {
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.04,
  },
  bottomBtnContainer2IOS: {
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.11,
  },

  modalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },

  modalBodySmall: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    paddingVertical: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
  },

  modalTextLight: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  textBlackBoldLarge: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight:'600'
  },

  modalBtnSmaller: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.58,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginVertical: sizes.screenHeight * 0.016,
  },

  modalBtnSmallerWhite: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.58,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  modalBtnTextSmallBlue: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.smallM,
    color: colors.darkBlue,
    fontWeight:'600'
  },
});
