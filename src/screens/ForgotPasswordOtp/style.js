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
    marginTop: sizes.screenHeight * 0.1,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heading: {
    fontFamily: 'Inter-Bold',
    alignSelf: 'flex-start',
    color: colors.darkBlue,
    fontSize: fontSize.h4,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  bodyText: {
    fontFamily: 'Inter-Regular',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'flex-start',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
  },

  bodyTextBold: {
    fontFamily: 'Inter-Bold',
    color: '#00000088',
    fontSize: fontSize.regular,
    fontWeight:'600'
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
  codeFieldRootIOS: {
    width: sizes.screenWidth * 0.7,
    height:sizes.screenHeight * 0.06,
    alignSelf: 'center',
    // overflow:'hidden',
    // alignItems:'center'
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
  cellIOS: {
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
    overflow: 'hidden'
  },

cellIOSContainer:{
  shadowColor: colors.darkBlue,
  shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 12, 
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
