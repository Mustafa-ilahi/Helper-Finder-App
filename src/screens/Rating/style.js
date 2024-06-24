import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  separator: {
    height: 1,
    width: sizes.screenWidth,
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
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

  reviewContainer: {
    width: sizes.screenWidth,
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.06,
  },

  helperImgContainer: {
    borderWidth: 5,
    borderColor: colors.white,
    borderRadius: sizes.screenHeight * 0.1,
    height: sizes.screenWidth * 0.28,
    width: sizes.screenWidth * 0.28,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
  },

  helperImg: {
    height: sizes.screenWidth * 0.26,
    width: sizes.screenWidth * 0.26,
  },

  reviewBody: {
    width: sizes.screenWidth * 0.86,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.darkBlue,
    elevation: 10,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.07,
    paddingTop: sizes.screenHeight * 0.07,
  },

  heading: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: fontSize.h4,
    color: colors.darkBlue,
    fontWeight:'700'
  },

  categoryContainer: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.4,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: sizes.screenHeight * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: sizes.screenHeight * 0.01,
  },

  textBlueSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  ratingContainer: {
    marginVertical: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.35,
  },

  inputContainer: {
    backgroundColor: '#E1E1E1',
    height: sizes.screenHeight * 0.3,
    width: sizes.screenWidth * 0.76,
    marginVertical: sizes.screenHeight * 0.02,
    borderRadius: 12,
  },

  inputField: {
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },
});
