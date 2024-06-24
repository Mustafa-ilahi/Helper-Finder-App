import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    paddingTop: sizes.screenHeight * 0.2,
  },

  timerContainerMain: {
    marginVertical: sizes.screenHeight * 0.046,
    paddingVertical: 6,
  },

  circle: {
    height: 24,
    width: 24,
    backgroundColor: colors.darkBlue,
    borderRadius: 24,
    position: 'absolute',
    alignSelf: 'center',
  },

  timerContainer: {
    alignItems: 'center',
  },

  jobTimerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  jobTimerIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.01,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.extraLarge,
    color: colors.darkBlue,
    fontWeight:'600'
  },

  textBlackNormal: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },

  textBlackBold: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight:'600'
  },

  textBlackLarge: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.h4,
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
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

  moreHelperModalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
  },

  modalBtnSmall2: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.56,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.02,
    flexDirection: 'row',
  },

  btn: {
    backgroundColor: colors.darkBlue,
    height: 26,
    width: 26,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight:'600'
  },

  modalBtnSmall: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.56,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
  },

  modalBtnTextSmall: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight:'600'
  },

  modalBtnTextLarge: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h5,
    color: colors.white,
    fontWeight:'600'
  },

  textBluekBold: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.darkBlue,
    fontWeight:'600'
  },

  modalIcon: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  },

  modalIconLarge: {
    resizeMode: 'contain',
    height: 90,
    width: 90,
  },

  textBluekNormal: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.darkBlue,
    textAlign: 'center',
    width: sizes.screenWidth * 0.5,
    marginTop: sizes.screenHeight * 0.01,
  },
});
