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
    marginTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.86,
    // alignItems: 'center',
  },

  heading: {
    fontFamily: 'Inter-Bold',
    color: colors.darkBlue,
    fontSize: fontSize.h4,
    fontWeight:'600'
  },

  userImgContainer: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.15,
    shadowColor: colors.darkBlue,
    elevation: 10,
    overflow: 'hidden',
    marginRight: sizes.screenWidth * 0.02,
  },

  userImg: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    borderRadius: sizes.screenHeight * 0.15,
  },

  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },

  userRowLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: sizes.screenWidth * 0.76,
  },

  textBold: {
    color: colors.black,
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    fontWeight:'600',
  },

  textNormal: {
    color: colors.disabledBg2,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
  },

  editProfileIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },

  switchToBtn: {
    paddingHorizontal: sizes.screenWidth * 0.05,
    backgroundColor: colors.darkBlue,
    borderWidth: 2,
    borderColor: colors.white,
    paddingVertical: 4,
    borderRadius: sizes.screenHeight * 0.1,
    shadowColor: colors.darkBlue,
    elevation: 10,
  },
  switchToBtnIOS: {
    paddingHorizontal: sizes.screenWidth * 0.05,
    backgroundColor: colors.darkBlue,
    borderWidth: 2,
    borderColor: colors.white,
    paddingVertical: 6,
    borderRadius: sizes.screenHeight * 0.1,
    shadowColor: colors.darkBlue,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  switchToBtnText: {
    color: colors.white,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
  },

  separator: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.84,
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.02,
  },

  separator2: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.72,
    alignSelf: 'flex-start',
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
  },

  settingsContainer: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 16,
    width: sizes.screenWidth * 0.86,
    paddingHorizontal: sizes.screenWidth * 0.06,
    paddingVertical: sizes.screenHeight * 0.02,
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginTop: sizes.screenHeight * 0.01,
  },

  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },

  editIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.02,
    width: sizes.screenHeight * 0.02,
    marginRight: sizes.screenWidth * 0.03,
  },

  textBlack: {
    color: colors.black,
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  rightArrow: {
    resizeMode: 'contain',
    height: 16,
    width: 10,
  },

  bottomBtnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.12,
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.19,
  },
});
