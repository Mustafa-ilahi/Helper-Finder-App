import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    justifyContent: 'center',
  },

  body: {
    width: sizes.screenWidth * 0.8,
    alignItems: 'center',
  },

  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h3,
    color: colors.darkBlue,
    alignSelf: 'flex-start',
    fontWeight:'600'
  },

  bodyMain: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.86,
    borderRadius: 16,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 12,
    paddingVertical: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.04,
  },
  bodyMainIOS: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.86,
    // height:sizes.screenHeight * 0.2,
    borderRadius: 16,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    paddingVertical: sizes.screenHeight * 0.05,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.04,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,  
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },
  inputRowIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.05,
    marginBottom: sizes.screenHeight * 0.005,
  },
  inputRow1IOS: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.005,
  },

  inputIcon: {
    height: sizes.screenHeight * 0.034,
    width: sizes.screenHeight * 0.026,
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
  },

  forgotContainer: {
    marginVertical: sizes.screenHeight * 0.02,
    alignSelf: 'flex-end',
    marginRight: sizes.screenWidth * 0.03,
  },

  forgotText: {
    color: colors.black,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.smallM,
    fontWeight:'500'
  },
  forgotTextIOS: {
    color: colors.black,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.small,
    fontWeight:'500',
    marginRight:sizes.screenWidth * 0.02
  },

  signInBtn: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.08,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginBottom: sizes.screenHeight * 0.02,
  },
  signInBtnIOS: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    marginBottom: sizes.screenHeight * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  signInBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight:'600'
  },

  createAccBtnText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.black,
  },

  bottomLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: sizes.screenHeight * 0.01,
    alignSelf: 'center',
  },

  bottomLinkText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  bottomLinkTextBold: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.smallM,
    color: colors.black,
    textDecorationLine: 'underline',
    fontWeight:'600'
  },
});
