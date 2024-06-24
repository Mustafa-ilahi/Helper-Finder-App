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
    marginTop: sizes.screenHeight * 0.25,
    width: sizes.screenWidth * 0.86,
    alignItems: 'center',
  },

  userImgContainer: {
    height: sizes.screenHeight * 0.17,
    width: sizes.screenHeight * 0.17,
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.15,
    shadowColor: colors.darkBlue,
    elevation: 10,
  },

  userImg: {
    height: sizes.screenHeight * 0.17,
    width: sizes.screenHeight * 0.17,
    overflow: 'hidden',
    borderRadius: sizes.screenHeight * 0.15,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  textNormal: {
    color: colors.disabledBg2,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
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
