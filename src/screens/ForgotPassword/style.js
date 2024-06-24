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
    marginTop: sizes.screenHeight * 0.15,
    height: sizes.screenHeight * 0.6,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heading: {
    fontFamily: 'Inter-Bold',
    alignSelf: 'flex-start',
    color: colors.darkBlue,
    fontSize: fontSize.h3,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  bodyText: {
    fontFamily: 'Inter-Medium',
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    alignSelf: 'flex-start',
    color: colors.disabledBg2,
    fontSize: fontSize.regular,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.74,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  inputIcon: {
    height: sizes.screenHeight * 0.034,
    width: sizes.screenHeight * 0.026,
    resizeMode: 'contain',
    marginRight: sizes.screenWidth * 0.03,
  },

  inputField: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.64,
  },

  separator: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.74,
    backgroundColor: colors.disabledBg,
  },
  separatorIOS: {
    alignSelf: 'center',
    height: 1,
    width: sizes.screenWidth * 0.74,
    backgroundColor: colors.disabledBg,
    marginTop:sizes.screenHeight * 0.005
  },

  signInBtn: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.08,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginBottom: sizes.screenHeight * 0.02,
  },
  signInBtnIOS: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.075,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    marginBottom: sizes.screenHeight * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,  
  },

  signInBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    color: colors.white,
    fontWeight:'500'
  },
});
