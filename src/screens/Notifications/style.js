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

  ////////

  scrollViewContainer: {
    height: sizes.screenHeight * 0.9,
  },

  scrollViewInnerContainer: {
    width: sizes.screenWidth,
    alignItems: 'center',
  },

  categoriesRow: {
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.03,
  },

  notificationContainer: {
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.02,
    paddingVertical: sizes.screenHeight * 0.01,
    borderRadius: 16,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 6,
  },

  userImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    marginRight: 6,
  },

  textContainer: {
    width: sizes.screenWidth * 0.7,
  },

  userName: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight:'600'
  },

  distance: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  description: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.black,
    maxWidth: sizes.screenWidth * 0.7,
  },

  time: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    alignSelf: 'flex-end',
  },

  jobContainer: {
    position: 'absolute',
    right: 0,
    top: 6,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: 5,
    borderRadius: sizes.screenHeight * 0.1,
  },

  job: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  margin:{
    marginBottom:sizes.screenHeight * 0.05
  },
});
