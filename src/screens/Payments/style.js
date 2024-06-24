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
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth,
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.02,
  },

  addCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    marginBottom: sizes.screenHeight * 0.02,
  },

  headingMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.darkBlue,
    fontWeight:'600'
  },

  addCardBtn: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: 4,
    borderRadius: sizes.screenHeight * 0.1,
  },

  addCardBtnText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  card: {
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.77,
    overflow: 'hidden',
    backgroundColor: colors.backgroundColor,
    borderRadius: 12,
    shadowColor: colors.darkBlue,
    elevation: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },

  visaCardImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.78,
    height: sizes.screenHeight * 0.24,
    backgroundColor: colors.backgroundColor,
  },

  visaCardTextContainer: {
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.78,
    position: 'absolute',
  },

  type: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h3,
    color: colors.white,
    position: 'absolute',
    left: sizes.screenWidth * 0.06,
    top: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  number: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.white,
    position: 'absolute',
    left: sizes.screenWidth * 0.06,
    top: sizes.screenHeight * 0.06,
  },

  name: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
    position: 'absolute',
    left: sizes.screenWidth * 0.06,
    bottom: sizes.screenHeight * 0.02,
  },

  expiry: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
    position: 'absolute',
    right: sizes.screenWidth * 0.06,
    bottom: sizes.screenHeight * 0.02,
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

  ///

  modalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
  },

  modalCup: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.12,
    width: sizes.screenHeight * 0.12,
  },

  modalText: {
    fontFamily: 'Inter-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.6,
  },
});
