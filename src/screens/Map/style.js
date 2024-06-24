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

  scrollViewHorizontal: {
    flexDirection: 'row',
    gap: 10,
    height: sizes.screenHeight * 0.08,
    alignItems: 'center',
    marginHorizontal: 16,
  },

  category: {
    backgroundColor: '#ffffff88',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    // width: sizes.screenWidth * 0.34,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 30,
    paddingHorizontal: 8,
  },

  categorySelected: {
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    // width: sizes.screenWidth * 0.34,
    borderRadius: 30,
    paddingHorizontal: 8,
  },

  text: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  textSelected: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.white,
  },

  markerContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.08,
    bottom: sizes.screenHeight * 0.65,
  },

  markerContainerLarge: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.05,
    bottom: sizes.screenHeight * 0.64,
  },

  markerContainer2: {
    position: 'absolute',
    alignItems: 'center',
    right: sizes.screenWidth * 0.08,
    bottom: sizes.screenHeight * 0.63,
  },

  markerContainer2Large: {
    position: 'absolute',
    alignItems: 'center',
    right: sizes.screenWidth * 0.05,
    bottom: sizes.screenHeight * 0.62,
  },

  markerContainer3: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.04,
    bottom: sizes.screenHeight * 0.38,
  },

  markerContainer3Large: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.01,
    bottom: sizes.screenHeight * 0.37,
  },

  markerContainer4: {
    position: 'absolute',
    alignItems: 'center',
    right: sizes.screenWidth * 0.12,
    bottom: sizes.screenHeight * 0.34,
  },

  markerContainer4Large: {
    position: 'absolute',
    alignItems: 'center',
    right: sizes.screenWidth * 0.09,
    bottom: sizes.screenHeight * 0.33,
  },

  markerContainer5: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.4,
    bottom: sizes.screenHeight * 0.5,
  },

  markerContainer5Large: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.37,
    bottom: sizes.screenHeight * 0.49,
  },

  markerContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: sizes.screenWidth * 0.08,
    bottom: sizes.screenHeight * 0.65,
  },

  markerTextSmall: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.tiny,
    color: colors.darkBlue,
  },

  markerTextLarge: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  marker: {
    alignItems: 'center',
  },

  markerImgSmall: {
    height: 90,
    width: 70,
    resizeMode: 'contain',
  },

  markerImgLarge: {
    height: 120,
    width: 100,
    resizeMode: 'contain',
  },

  user2Small: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
  },

  user2Large: {
    height: 47,
    width: 47,
    resizeMode: 'contain',
    position: 'absolute',
    top: 9,
  },

  yourLocationIconContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.15,
    left: sizes.screenWidth * 0.08,
    zIndex: 10,
  },

  yourLocationIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
  },

  mapLocationIconContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.15,
    right: sizes.screenWidth * 0.08,
  },

  mapLocationIcon: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
  },

  /////////
  modal: {
    height: sizes.screenHeight,
    width: sizes.screenWidth,
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
    position: 'absolute',
    bottom: sizes.screenHeight * 0.09,
  },
  itemContainerIOS: {
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
    position: 'absolute',
    bottom: sizes.screenHeight * 0.19,
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
  },

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  ratingContainer: {
    alignSelf: 'flex-start',
    marginTop: sizes.screenHeight * 0.01,
  },

  starRatingContainer: {
    width: sizes.screenWidth * 0.3,
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

  modalCrossContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
  },

  modalCross: {
    height: 24,
    width: 24,
  },

  modalBody: {
    backgroundColor: colors.backgroundColor,
    borderRadius: sizes.screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.76,
    alignSelf: 'center',
  },

  onTheWay: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.08,
    width: sizes.screenHeight * 0.08,
    marginBottom: sizes.screenHeight * 0.02,
  },

  reachedModalImg: {
    resizeMode: 'contain',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenHeight * 0.1,
    marginBottom: sizes.screenHeight * 0.02,
  },

  modalText: {
    fontFamily: 'Inter-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.6,
  },

  chatModalBody: {
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  topHr: {
    height: 6,
    borderRadius: 6,
    width: sizes.screenWidth * 0.2,
    backgroundColor: '#CDCDCD',
    marginTop: sizes.screenHeight * 0.015,
  },
});
