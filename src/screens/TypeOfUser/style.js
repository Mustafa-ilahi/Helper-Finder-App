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
    marginTop: sizes.screenHeight * 0.07,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.86,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    marginBottom: sizes.screenHeight * 0.01,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.55,
    fontWeight:'600'
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
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.white,
    elevation: 8,
  },
  typeContainerIOS: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.darkBlue,
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
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
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.darkBlue,
    elevation: 8,
  },
  typeSelectedContainerIOS: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 2,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.darkBlue,
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.darkBlue,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12, 
   },

  typeImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.05,
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
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.11,

  },
});
