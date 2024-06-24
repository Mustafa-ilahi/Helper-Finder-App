import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';

import BottomBtn from '../../components/BottomBtn';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');

  const handleConfirm = () => {
    navigation.navigate('TypeOfUser');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <View>
            <Text style={styles.heading}>Forgot Password</Text>
            <Text style={styles.bodyText}>
              Please enter your email to receive a verification code
            </Text>
          </View>
          <View>
            <View style={styles.inputRow}>
              <Image style={styles.inputIcon} source={images.emailIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Email"
                placeholderTextColor={colors.disabledBg2}
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={Platform.OS == 'android' ? styles.separator : styles.separatorIOS}></View>
          </View>

          <TouchableOpacity
            style={Platform.OS == 'android' ? styles.signInBtn : styles.signInBtnIOS}
            onPress={() => {
              navigation.navigate('ForgotPasswordOtp', {email});
            }}>
            <Text style={styles.signInBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
