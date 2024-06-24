import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Landing({navigation}) {
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <SafeAreaView>
      <Image
        style={
          Platform.OS == 'android' ? styles.landingBg : styles.landingBgIOS
        }
        source={images.landingBg}
      />
      <View
        style={
          Platform.OS == 'android'
            ? styles.mainContainer
            : styles.mainContainerIOS
        }>
        <Text style={styles.headingLight}>Welcome to</Text>
        <Text style={styles.heading}>Helper Finder!</Text>
        <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.createAccBtnText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
// <View style={styles.mainContainer}>
// <Text style={styles.heading}>Helper Finder</Text>
// <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
//   <Text style={styles.signInBtnText}>Sign In</Text>
// </TouchableOpacity>
// <TouchableOpacity style={styles.createAccBtn} onPress={handleSignUp}>
//   <Text style={styles.createAccBtnText}>Create Account</Text>
// </TouchableOpacity>
// <View style={styles.socialIconRow}>
//   <TouchableOpacity>
//     <Image style={styles.socialIcon} source={images.fb} />
//   </TouchableOpacity>
//   <TouchableOpacity>
//     <Image style={styles.socialIcon} source={images.google} />
//   </TouchableOpacity>
// </View>
// </View>
