import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  headingMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.h5,
    color: colors.darkBlue,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  scrollViewContainer: {
    height: sizes.screenHeight * 0.75,
  },

  scrollViewInnerContainer: {
    width: sizes.screenWidth,
    alignItems: 'center',
  },

  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.03,
  },

  categoryBtn: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.43,
    height: sizes.screenHeight * 0.15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 10,
  },

  categoryImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.07,
    width: sizes.screenHeight * 0.07,
    marginBottom: 6,
  },

  categoryName: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
    textAlign: 'center',
  },
  categoryNameIOS: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.regular,
    color: colors.black,
    textAlign: 'center',
    width:sizes.screenWidth * 0.4
  },
});
