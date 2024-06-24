import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../services';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function GetStarted({navigation, route}) {
  const {firstName, lastName, imgUri, imgUploaded} = route.params;

  console.log(imgUri);

  const handleConfirm = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <View style={styles.userImgContainer}>
            <Image
              style={styles.userImg}
              source={imgUploaded ? {uri: imgUri} : imgUri}
            />
          </View>
          <Text style={styles.heading}>
            Hi {firstName} {lastName}!
          </Text>
          <Text style={styles.textNormal}>You're Ready to go!</Text>
        </View>
        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Get Started'} onPress={handleConfirm} />

          ) : (
          <BottomBtnIOS title={'Get Started'} onPress={handleConfirm} />

          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
