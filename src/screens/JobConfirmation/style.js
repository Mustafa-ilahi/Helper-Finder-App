import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  separator: {
    height: 1,
    width: sizes.screenWidth,
    backgroundColor: colors.disabledBg,
    marginVertical: sizes.screenHeight * 0.01,
  },

  body: {
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.03,
  },

  textBoldMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight:'600'
  },

  jobRequestContainer: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 16,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginVertical: sizes.screenHeight * 0.02,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.03,
  },

  jobRequestSeekerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: sizes.screenHeight * 0.02,
  },

  jobRequestSeekerRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  jobRequestSeekerImg: {
    borderRadius: 50,
    height: 46,
    width: 46,
    marginRight: sizes.screenWidth * 0.02,
  },

  chatIcon: {
    borderRadius: 50,
    height: 46,
    width: 46,
  },

  shadow:{
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,

  },

  textDisabledSmall: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.tiny,
    color: colors.disabledBg2,
  },

  category: {
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 30,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
  },
  categoryIOS: {
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.04,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 30,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginVertical: sizes.screenHeight * 0.01,
  },

  text: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.darkBlue,
  },

  textDisablednormal: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    marginTop: sizes.screenHeight * 0.02,
  },

  textDisablednormal2: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
  },

  textBoldnormal: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.smallM,
    color: colors.black,
    maxWidth: sizes.screenWidth * 0.7,
    fontWeight:'500'
  },
  textBoldnormal2: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.smallM,
    color: colors.black,
    marginVertical: 4,
    fontWeight:'600'
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: sizes.screenHeight * 0.02,
  },

  priceContainer: {
    alignItems: 'center',
    width: sizes.screenWidth * 0.34,
  },

  btnWhiteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: sizes.screenHeight * 0.01,
  },

  btnWhite: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    width: sizes.screenWidth * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },

  btnTextBlue: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.small,
    color: colors.darkBlue,
    fontWeight:'600'
  },

  btnBlue: {
    backgroundColor: colors.darkBlue,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes.screenHeight * 0.01,
    height: sizes.screenHeight * 0.055,
    minWidth: sizes.screenWidth * 0.6,
  },

  disabledBtn: {
    height: sizes.screenHeight * 0.055,
    minWidth: sizes.screenWidth * 0.6,
    backgroundColor: colors.white,
    opacity: 0.6,
    borderRadius: 12,
    marginVertical: sizes.screenHeight * 0.01,
    position: 'absolute',
  },

  btnTextWhite: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.medium,
    color: colors.white,
  },
  ////////

  modalBody: {
    backgroundColor: colors.backgroundColor,
    width: sizes.screenWidth * 0.7,
    alignSelf: 'center',
    paddingHorizontal: sizes.screenWidth * 0.05,
    paddingVertical: sizes.screenHeight * 0.03,
    borderRadius: 16,
    alignItems: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  input: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.h2,
    color: colors.black,
    padding: 0,
    minWidth: sizes.screenWidth * 0.2,
    fontWeight:'500'
  },

  textBoldLarger: {
    fontFamily: 'Inter-SemiBold',
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight:'500'
  },

  mapContainer: {
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.01,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    overflow: 'hidden',
    marginTop: sizes.screenHeight * 0.01,
  },

  map: {
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
  },

  bottomBtnContainer: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
    alignSelf: 'center',
  },
  bottomBtnContainerIOS: {
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
    alignSelf: 'center',
  },
});
