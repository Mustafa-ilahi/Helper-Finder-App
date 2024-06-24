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
import {colors, sizes} from '../../services';
import BottomBtn from '../../components/BottomBtn';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function Security({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.body}>
            <Text style={styles.heading}>Security</Text>
            <Text style={styles.textNormal2}>
              Enter a new password to reset the password on your account.
            </Text>

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
            <View style={Platform.OS == 'android' ? styles.separator : styles.separatorIOS}></View>

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
            <View style={Platform.OS == 'android' ? styles.separator : styles.separatorIOS}></View>
          </View>
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            {Platform.OS == 'android' ? (
              <BottomBtn
                title={'Reset Password'}
                onPress={() => {
                  navigation.navigate('HelperTabNavigation');
                }}
              />
            ) : (
              <BottomBtnIOS
                title={'Reset Password'}
                onPress={() => {
                  navigation.navigate('HelperTabNavigation');
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
