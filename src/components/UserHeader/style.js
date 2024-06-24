import {Dimensions, StyleSheet, View} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    justifyContent: 'space-between',
  },

  userImg: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.12,
    width: sizes.screenWidth * 0.12,
    borderRadius: sizes.screenWidth * 0.12,
    marginRight: sizes.screenWidth * 0.03,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: 2,
  },

  location: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: colors.black,
    maxWidth: sizes.screenWidth * 0.57,
  },

  heading: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.darkBlue,
  },
  headingIOS: {
    fontFamily: 'Inter-Bold',
    fontSize: fontSize.large,
    color: colors.darkBlue,
    fontWeight:'600'
  },

  headerNotificationContainer: {
    shadowColor: colors.darkBlue,
    elevation: 8,
    borderRadius: sizes.screenHeight * 0.1,
  },
  headerNotificationContainerIOS: {
    shadowColor: colors.darkBlue,
    borderRadius: sizes.screenHeight * 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },
  headerNotificationContainerIOS: {
    shadowColor: colors.darkBlue,
    borderRadius: sizes.screenHeight * 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },
  headerNotificationContainerIOS: {
    shadowColor: colors.darkBlue,
    borderRadius: sizes.screenHeight * 0.1,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 12,
  },

  headerNotification: {
    resizeMode: 'contain',
    height: sizes.screenWidth * 0.11,
    width: sizes.screenWidth * 0.11,
    borderRadius: sizes.screenWidth * 0.12,
  },
});
