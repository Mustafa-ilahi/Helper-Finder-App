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
    marginTop: sizes.screenHeight * 0.03,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.9,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.7,
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight:'600'
  },

  scrollViewContainer: {
    height: sizes.screenHeight * 0.86,
    width: sizes.screenWidth * 0.86,
  },

  task: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    marginVertical: sizes.screenHeight * 0.01,
  },

  taskLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskIconBlue: {
    height: 36,
    width: 36,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.01,
  },

  textBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight:'500'
  },

  textNormal: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.black,
  },

  rightArrow: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  margin:{
    marginBottom:sizes.screenHeight * 0.04
  },
});
