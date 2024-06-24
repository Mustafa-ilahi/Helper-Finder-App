import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    // elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  signInBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.large,
    color: colors.white,
    fontWeight:'600'
  },

  signInBtn2: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenWidth * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    // elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  signInBtnText2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.large,
    color: colors.darkBlue,
    fontWeight:'600'
  },
});
