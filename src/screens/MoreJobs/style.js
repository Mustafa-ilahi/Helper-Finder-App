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

  scrollViewContainer: {
    height: sizes.screenHeight * 0.22,
    marginBottom: sizes.screenHeight * 0.02,
  },

  scrollViewHorizontal: {
    flexDirection: 'row',
    gap: 16,
    height: sizes.screenHeight * 0.22,
    alignItems: 'center',
    marginHorizontal: 16,
  },

  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.33,
    shadowColor: colors.darkBlue,
    elevation: 10,
    backgroundColor: colors.backgroundColor,
    borderRadius: 12,
  },

  categoryContainerSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.darkBlue,
    height: sizes.screenHeight * 0.16,
    width: sizes.screenWidth * 0.38,
    shadowColor: colors.darkBlue,
    elevation: 10,
    backgroundColor: colors.backgroundColor,
    borderRadius: 12,
    paddingHorizontal: sizes.screenWidth * 0.025,
  },

  categoryImg: {
    resizeMode: 'contain',
    height: 40,
    width: 40,
  },

  categoryName: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.darkBlue,
    textAlign: 'center',
  },

  descriptionBody: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'flex-start',
  },

  disabledTextMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    marginTop: sizes.screenHeight * 0.02,
  },

  textBold: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  textBlack: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.black,
    marginVertical: sizes.screenHeight * 0.01,
  },

  ratingContainer: {
    marginTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.3,
  },
});
