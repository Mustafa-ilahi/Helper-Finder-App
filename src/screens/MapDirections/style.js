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

  chatView: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    height: sizes.screenHeight * 0.22,
    width: sizes.screenWidth,
    backgroundColor: colors.white,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
  },
  chatViewIOS: {
    position: 'absolute',
    zIndex: 10,
    bottom: sizes.screenHeight * 0.06,
    height: sizes.screenHeight * 0.22,
    width: sizes.screenWidth,
    backgroundColor: colors.white,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    alignItems: 'center',
  },

  topHr: {
    height: 6,
    borderRadius: 6,
    width: sizes.screenWidth * 0.2,
    backgroundColor: '#CDCDCD',
    marginVertical: sizes.screenHeight * 0.015,
  },

  helperProfileRow: {
    width: sizes.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  chatViewLeft: {
    height: sizes.screenHeight * 0.14,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  helperProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  helperImgContainer: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: sizes.screenWidth * 0.02,
  },

  helperImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  textBold: {
    fontFamily: 'Inter-Bold',
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight:'600'
  },

  textLightSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  category: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    width: sizes.screenWidth * 0.4,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 30,
  },

  text: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  chatViewRight: {
    height: sizes.screenHeight * 0.14,
    overflow: 'hidden',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  chatIcon: {
    height: 50,
    width: 50,
  },

  chatViewRightBottom: {
    alignItems: 'flex-end',
  },

  starRatingContainer: {
    width: sizes.screenWidth * 0.22,
    marginTop: 6,
  },

  /////////

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
});
