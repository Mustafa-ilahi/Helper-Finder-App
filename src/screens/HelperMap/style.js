import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  linearBg: {
    position: 'absolute',
    zIndex: 5,
    width: sizes.screenWidth,
    height: 130,
  },

  headerContainer: {
    position: 'absolute',
    zIndex: 10,
  },
  map: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
    alignSelf: 'center',
  },

  destinationAddress: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.backgroundColor,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.02,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.darkBlue,
    elevation: 12,
  },

  destinationAddressIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.backgroundColor,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.02,
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.darkBlue,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  textBold: {
    fontFamily: 'Inter-SemiBold',
    color: colors.black,
    fontSize: fontSize.medium,
  },

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.smallM,
    color: colors.disabledBg2,
  },

  destinationIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },

  separator: {
    width: 1,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.04,
    marginRight: sizes.screenWidth * 0.04,
    marginLeft: sizes.screenWidth * 0.03,
  },

  ///////////

  moreHelperModalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
  },

  modalIcon: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
  },

  textBluekNormal: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.medium,
    color: colors.darkBlue,
    textAlign: 'center',
    width: sizes.screenWidth * 0.5,
    marginTop: sizes.screenHeight * 0.02,
  },

  modalBtnSmall: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.56,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    marginTop: sizes.screenHeight * 0.03,
  },
  modalBtnSmallIOS: {
    backgroundColor: colors.darkBlue,
    width: sizes.screenWidth * 0.56,
    height: sizes.screenHeight * 0.06,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    marginTop: sizes.screenHeight * 0.03,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,  },

  modalBtnTextSmall: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.medium,
    color: colors.white,
  },
});
