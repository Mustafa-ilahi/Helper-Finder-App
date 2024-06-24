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
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.04,
  },

  body2:{
marginBottom: sizes.screenHeight*0.1
  },

  scrollViewContainer:{
    height: sizes.screenHeight*0.8,
    width: sizes.screenWidth,
    alignSelf: 'center',
    alignItems: 'center'
  },

  textBoldMedium: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight:'600'
  },

  jobRequestContainerMain: {
    backgroundColor: colors.darkBlue,
    borderRadius: 16,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginVertical: sizes.screenHeight * 0.02,
  },

  jobRequestContainerMainIOS:{
    backgroundColor: colors.darkBlue,
    borderRadius: 16,
    shadowColor: colors.darkBlue,
    elevation: 12,
    marginVertical: sizes.screenHeight * 0.02,
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    marginHorizontal: sizes.screenWidth*0.05

  },

  deleteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginVertical: 10,
  },

  deleteText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.backgroundColor,
  },

  deleteIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },

  jobRequestContainer: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 16,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.49,
  },

  jobRequestContainerDisabled: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.49,
    backgroundColor: colors.backgroundColor,
    borderRadius: 16,
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
  },

  jobRequestContainerDisabledIOS: {
    width: sizes.screenWidth * 0.89,
    height: sizes.screenHeight * 0.49,
    backgroundColor: colors.backgroundColor,
    borderRadius: 16,
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
  },

  jobRequestSeekerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  jobRequestSeekerRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobRequestSeekerImg: {
    borderRadius: 50,
    backgroundColor: colors.black,
    height: 46,
    width: 46,
    marginRight: sizes.screenWidth * 0.02,
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
  },
  categoryIOS: {
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.035,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 30,
    paddingHorizontal: 12,
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
    fontWeight:'500'
  },

  textBoldnormal2: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.smallM,
    color: colors.black,
    marginVertical: 4,
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

  separator: {
    width: 1,
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.04,
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
  btnWhiteIOS: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    width: sizes.screenWidth * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    height: sizes.screenHeight * 0.04,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
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

  btnBlueIOS: {
    backgroundColor: colors.darkBlue,
    borderRadius: sizes.screenWidth * 0.04,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes.screenHeight * 0.01,
    height: sizes.screenHeight * 0.06,
    minWidth: sizes.screenWidth * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  disabledBtn: {
    height: sizes.screenHeight * 0.059,
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
    fontSize: fontSize.h2,
    color: colors.black,
    fontWeight:'500'
  },
});
