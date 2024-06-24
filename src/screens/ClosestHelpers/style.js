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
    marginTop: sizes.screenHeight * 0.04,
    height: sizes.screenHeight * 0.45,
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    alignSelf: 'flex-start',
    width: sizes.screenWidth * 0.9,
    fontWeight:'600'
  },

  textLight: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.disabledBg2,
    width: sizes.screenWidth * 0.9,
    marginVertical: sizes.screenHeight * 0.01,
  },

  itemContainer: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 16,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.03,
    shadowColor: colors.darkBlue,
    elevation: 8,
    width: sizes.screenWidth * 0.9,
  },

  itemContainerLeft: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: sizes.screenHeight * 0.1,
  },

  helperDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenHeight * 0.06,
    marginRight: sizes.screenWidth * 0.01,
  },

  textBold: {
    fontFamily: 'Inter-Bold',
    color: colors.black,
    fontSize: fontSize.extraLarge,
    fontWeight:'600'
  },

  marginBottom:{
    marginBottom:sizes.screenHeight * 0.05
  },

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  starRatingContainer: {
    width: sizes.screenWidth * 0.26,
  },

  ratingContainer: {
    alignSelf: 'flex-start',
    marginTop: sizes.screenHeight * 0.01,
  },

  itemContainerRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: sizes.screenHeight * 0.1,
  },

  jobContainer: {
    height: sizes.screenHeight * 0.035,
    width: sizes.screenWidth * 0.3,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: sizes.screenHeight * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },

  jobText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  scrollViewContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.8,
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.01,
  },

  scrollViewBody: {
    gap: sizes.screenHeight * 0.03,
    width: sizes.screenWidth,
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.04,
  },
});
