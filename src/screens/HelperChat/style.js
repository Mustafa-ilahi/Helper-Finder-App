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

  userMsgContainerMain: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.86,
    marginVertical: sizes.screenHeight * 0.01,
  },

  senderImg: {
    height: 36,
    width: 36,
    borderRadius: 40,
    marginRight: sizes.screenWidth * 0.02,
  },

  userMsgContainer: {
    alignItems: 'flex-start',
  },

  userMsg: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    maxWidth: sizes.screenWidth * 0.7,
    paddingVertical: sizes.screenHeight * 0.015,
    paddingHorizontal: sizes.screenWidth * 0.04,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: sizes.screenHeight * 0.01,
  },

  userMsgText: {
    fontFamily: 'Inter-Regular',
    fontSize: fontSize.smallM,
    color: colors.darkBlue,
  },

  msgSentTimeText: {
    fontFamily: 'Inter-Medium',
    fontSize: fontSize.small,
    color: colors.disabledBg2,
    marginBottom: sizes.screenHeight * 0.01,
  },

  senderMsgContainerMain: {
    width: sizes.screenWidth * 0.86,
    marginVertical: sizes.screenHeight * 0.01,
    alignItems: 'flex-end',
  },

  senderMsg: {
    borderColor: colors.darkBlue,
    backgroundColor: colors.darkBlue,
    maxWidth: sizes.screenWidth * 0.8,
    paddingVertical: sizes.screenHeight * 0.02,
    paddingHorizontal: sizes.screenWidth * 0.04,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: sizes.screenHeight * 0.01,
  },

  userMsgTextWhite: {
    fontFamily: 'Inter-Regular',
    fontSize: fontSize.smallM,
    color: colors.white,
  },

  newMsgContainer: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    shadowColor: colors.darkBlue,
    elevation: 8,
    backgroundColor: colors.backgroundColor,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.03,
    maxHeight: sizes.screenHeight * 0.1,
    alignItems: 'center',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.04,
  },
  newMsgContainerIOS: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.9,
    justifyContent: 'space-between',
    shadowColor: colors.darkBlue,
    backgroundColor: colors.backgroundColor,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.03,
    maxHeight: sizes.screenHeight * 0.12,
    minHeight: sizes.screenHeight * 0.06,
    alignItems: 'center',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.11,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  scrollView: {
    maxHeight: sizes.screenHeight * 0.84,
  },

  sendMsgIcon: {
    height: 26,
    width: 26,
  },

  inputField: {
    width: sizes.screenWidth * 0.75,
  },

  sendMsgButtonIOS:{
    bottom:sizes.screenHeight * 0.11
  },

});
