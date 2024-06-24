import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  signInBtn: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.07,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  signInBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.large,
    color: colors.white,
  },

  signInBtn2: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.86,
    height: sizes.screenHeight * 0.07,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
  },

  signInBtnText2: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.large,
    color: colors.darkBlue,
  },
});
