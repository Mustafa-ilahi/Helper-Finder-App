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
    marginTop: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
  },

  CongratsImg: {
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    marginBottom: sizes.screenHeight * 0.02,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h5,
    alignSelf: 'center',
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight:'600'
  },

  textNormal: {
    color: colors.black,
    fontFamily: 'Inter-Regular',
    fontSize: fontSize.smallM,
    textAlign: 'center',
  },

  textNormal2: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    textAlign: 'center',
  },

  taskDetailsContainer: {
    width: sizes.screenWidth * 0.86,
    paddingVertical: sizes.screenHeight * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.06,
    borderWidth: 1,
    borderRadius: 32,
    borderColor: colors.darkBlue,
    marginTop: sizes.screenHeight * 0.04,
  },

  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.02,
  },

  userRowLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: sizes.screenWidth * 0.76,
  },

  editIcon: {
    resizeMode: 'contain',
    height: 16,
    width: 16,
    marginRight: sizes.screenWidth * 0.01,
  },

  textBlack: {
    color: colors.darkBlue,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.regular,
    fontWeight:'600'
  },

  rightArrow: {
    resizeMode: 'contain',
    height: 16,
    width: 10,
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
