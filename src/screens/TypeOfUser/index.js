import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function TypeOfUser({navigation}) {
  const [type, setType] = useState('');

  const handleConfirm = () => {
    if (type !== '') {
      navigation.navigate('UserProfile', {type});
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.heading}>What do you want to do?</Text>
          {Platform.OS == 'android' ? (
            <TouchableOpacity
              style={
                type === 'Helper'
                  ? styles.typeSelectedContainer
                  : styles.typeContainer
              }
              onPress={() => {
                if (type === 'Helper') setType('');
                else setType('Helper');
              }}>
              <Image style={styles.typeImg} source={images.helperIcon} />
              <Text style={styles.typeText}>Be A Helper</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={
                type === 'Helper'
                  ? styles.typeSelectedContainerIOS
                  : styles.typeContainerIOS
              }
              onPress={() => {
                if (type === 'Helper') setType('');
                else setType('Helper');
              }}>
              <Image style={styles.typeImg} source={images.helperIcon} />
              <Text style={styles.typeText}>Be A Helper</Text>
            </TouchableOpacity>
          )}

          {Platform.OS == 'android' ? (
                      <TouchableOpacity
                      style={
                        type === 'Seeker'
                          ? styles.typeSelectedContainer
                          : styles.typeContainer
                      }
                      onPress={() => {
                        if (type === 'Seeker') setType('');
                        else setType('Seeker');
                      }}>
                      <Image style={styles.typeImg} source={images.seekerIcon} />
                      <Text style={styles.typeText}>I Seek Help</Text>
                    </TouchableOpacity>
          ) : (
            <TouchableOpacity
            style={
              type === 'Seeker'
                ? styles.typeSelectedContainerIOS
                : styles.typeContainerIOS
            }
            onPress={() => {
              if (type === 'Seeker') setType('');
              else setType('Seeker');
            }}>
            <Image style={styles.typeImg} source={images.seekerIcon} />
            <Text style={styles.typeText}>I Seek Help</Text>
          </TouchableOpacity>
          )}

        </View>
        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          {Platform.OS == 'android' ? (
            <BottomBtn title={'Continue'} onPress={handleConfirm} />
          ) : (
            <BottomBtnIOS title={'Continue'} onPress={handleConfirm} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
