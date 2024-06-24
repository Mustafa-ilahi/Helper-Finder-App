import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {colors, sizes} from '../../services';

export default function UserHeader({
  img,
  name,
  location,
  notification,
  filter,
  onPress,
  seeker,
  chat,
}) {
  const navigation = useNavigation();

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Image style={styles.userImg} source={img} />
        <View>
          <Text
            style={
              Platform.OS == 'android' ? styles.heading : styles.headingIOS
            }>
            {name}
          </Text>
          <View style={styles.row}>
            <Image style={styles.locationIcon} source={images.locationIcon} />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>

      {notification === true && (
        <>
          {seeker ? (
            <TouchableOpacity
              style={
                Platform.OS == 'android'
                  ? styles.headerNotificationContainer
                  : styles.headerNotificationContainerIOS
              }
              onPress={handleNotifications}>
              <Image
                style={styles.headerNotification}
                source={images.headerNotification}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.headerNotificationContainer}>
              <Image
                style={styles.headerNotification}
                source={images.headerNotification}
              />
            </TouchableOpacity>
          )}
        </>
      )}

      {filter === true && (
        <TouchableOpacity
          style={
            Platform.OS == 'android'
              ? styles.headerNotificationContainer
              : styles.headerNotificationContainerIOS
          }
          onPress={() => {
            onPress();
          }}>
          <Image style={styles.headerNotification} source={images.filterIcon} />
        </TouchableOpacity>
      )}

      {chat === true && (
        <TouchableOpacity
          style={
            Platform.OS == 'android'
              ? styles.headerNotificationContainer
              : styles.headerNotificationContainerIOS
          }
          onPress={() => {
            onPress();
          }}>
          <Image style={styles.headerNotification} source={images.chatIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
