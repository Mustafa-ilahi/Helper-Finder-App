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
    marginBottom: sizes.screenHeight * 0.01,
    fontWeight:'600'
  },

  editRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: sizes.screenHeight * 0.025,
    width: sizes.screenWidth * 0.86,
  },

  userRowLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: sizes.screenWidth * 0.76,
  },

  editIcon: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    marginRight: sizes.screenWidth * 0.02,
  },

  textBlack: {
    color: colors.darkBlue,
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  textNormal2: {
    color: colors.black,
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    textAlign: 'center',
  },
});
