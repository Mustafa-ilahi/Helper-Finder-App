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

export default function ResetPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const handleConfirm = () => {
    navigation.navigate('TypeOfUser');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <View>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.bodyText}>
              Enter a new password to reset the password of your account.
            </Text>
          </View>
          <View>
            <View style={styles.inputRow}>
              <Image style={styles.inputIcon} source={images.passwordIcon} />
              <TextInput
                secureTextEntry={hidePassword}
                style={styles.inputPassField}
                placeholder="New Password"
                placeholderTextColor={colors.disabledBg2}
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}>
                <Image
                  style={styles.eyeIcon}
                  source={hidePassword ? images.hidePass : images.showPass}
                />
              </TouchableOpacity>
            </View>
            <View style={Platform.OS == 'android' ? styles.separator :styles.separatorIOS }></View>
            <View style={styles.inputRow}>
              <Image style={styles.inputIcon} source={images.passwordIcon} />
              <TextInput
                secureTextEntry={hideConfirmPassword}
                style={styles.inputPassField}
                placeholder="Confirm Password"
                placeholderTextColor={colors.disabledBg2}
                value={confirmPassword}
                onChangeText={text => {
                  setConfirmPassword(text);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setHideConfirmPassword(!hideConfirmPassword);
                }}>
                <Image
                  style={styles.eyeIcon}
                  source={
                    hideConfirmPassword ? images.hidePass : images.showPass
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={Platform.OS == 'android' ? styles.separator :styles.separatorIOS }></View>
          </View>

          <TouchableOpacity
            style={Platform.OS == 'android' ? styles.signInBtn : styles.signInBtnIOS}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <Text style={styles.signInBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
