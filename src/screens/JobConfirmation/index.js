import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';

import MapView from 'react-native-maps';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function JobConfirmation({navigation, route}) {
  const {jobRequest} = route.params;

  const [userImg, setUserImg] = useState(images.user1);
  const [userName, setUserName] = useState('John Doe');
  const [userLocation, setUserLocation] = useState(
    '2464 Royal Ln. Mesa, New Jersey 45463',
  );

  const handleNext = () => {
    navigation.navigate('HelperMap', {jobRequest});
  };

  const handleChat = () => {
    navigation.navigate('HelperChat', {jobRequest});
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
          <Header title={'Confirmation'} />
       
        <View style={styles.separator}></View>
        <View style={styles.body}>
          <View style={styles.jobRequestSeekerRow}>
            <View style={styles.jobRequestSeekerRowLeft}>
              <Image
                style={styles.jobRequestSeekerImg}
                source={jobRequest.seekerImg}
              />
              <Text style={styles.textBoldMedium}>{jobRequest.name}</Text>
            </View>
            <TouchableOpacity
              onPress={handleChat}
              style={Platform.OS == 'ios' && styles.shadow}>
              <Image style={styles.chatIcon} source={images.chatIcon} />
            </TouchableOpacity>
          </View>
          <View
            style={
              Platform.OS == 'android' ? styles.category : styles.categoryIOS
            }>
            <Text style={styles.text}>
              {jobRequest.category.length > 18
                ? `${jobRequest.category.slice(0, 18)}...`
                : jobRequest.category}
            </Text>
          </View>
          <Text style={styles.textDisablednormal}>Hours Needed</Text>
          <Text style={styles.textBoldnormal}>{jobRequest.jobTime}</Text>
          <Text style={styles.textDisablednormal}>About the job</Text>
          <Text style={styles.textBoldnormal}>{jobRequest.description}</Text>
          <Text style={styles.textDisablednormal}>8 hours rates</Text>
          <Text style={styles.textBoldLarger}>${jobRequest.seekersFare}</Text>

          <Text style={styles.textDisablednormal}>Location</Text>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: 40.7590615,
                longitude: -73.969231,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>
        </View>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          {Platform.OS == 'android' ? (
            <BottomBtn title={'Get Started'} onPress={handleNext} />
          ) : (
            <BottomBtnIOS title={'Get Started'} onPress={handleNext} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
