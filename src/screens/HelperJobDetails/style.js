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
    width: sizes.screenWidth * 0.84,
  },

  headingMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h3,
    color: colors.darkBlue,
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  scrollViewContainer: {
    height: sizes.screenHeight * 0.75,
  },

  scrollViewInnerContainer: {
    width: sizes.screenWidth,
    alignItems: 'center',
  },

  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.03,
  },

  categoryBtn: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    marginVertical: sizes.screenHeight * 0.03,
    elevation: 10,
  },
  categoryBtnIOS: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    marginVertical: sizes.screenHeight * 0.03,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  categoryBtnSelected: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.darkBlue,
    shadowColor: colors.darkBlue,
    elevation: 10,
  },

  categoryImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    marginBottom: 6,
  },

  categoryName: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
    textAlign: 'center',
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

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    marginVertical: 6,
    width: sizes.screenWidth * 0.8,
  },

  inputFieldContainer: {
    borderWidth: 1,
    borderColor: colors.disabledBg,
    width: sizes.screenWidth * 0.38,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.02,
  },

  inputField: {
    height: 32,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    padding: 0,
    width: sizes.screenWidth * 0.3,
    fontWeight:'600'
  },

  textBoldMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight:'600'
  },

  inputFieldContainerLarge: {
    borderWidth: 1,
    borderColor: colors.disabledBg,
    width: sizes.screenWidth * 0.84,
    height: sizes.screenHeight * 0.16,
    borderRadius: 14,
    padding: 10,
    marginTop: sizes.screenHeight * 0.01,
  },

  inputFieldLarge: {
    padding: 0,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
  },
});
