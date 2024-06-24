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
    width: sizes.screenWidth * 0.86,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    marginBottom: sizes.screenHeight * 0.03,
    alignSelf: 'flex-start',
    fontWeight:'600'
  },

  userImgContainer: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenHeight * 0.15,
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.15,
    shadowColor: colors.darkBlue,
    elevation: 10,
    marginBottom: sizes.screenHeight * 0.06,
  },

  userImg: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenHeight * 0.15,
    overflow: 'hidden',
    borderRadius: sizes.screenHeight * 0.15,
  },

  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  editIcon: {
    height: 40,
    width: 40,
  },

  headingMedium: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h5,
    fontWeight:'600'
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    marginTop: sizes.screenHeight * 0.012,
    height: 50,
  },

  inputField: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    width: sizes.screenWidth * 0.7,
  },
  inputFieldIOS: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    width: sizes.screenWidth * 0.7,
    marginLeft:sizes.screenWidth * 0.02
  },

  separator: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.84,
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    bottom: 6,
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
