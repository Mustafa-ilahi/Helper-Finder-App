import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TextInput, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import PhoneInput from 'react-native-phone-number-input';

export default function SignUp({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const [phoneNo, setPhoneNo] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = () => {
    navigation.navigate('OTP');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <Text style={styles.heading}>Sign Up</Text>

          <View style={Platform.OS == 'android' ? styles.bodyMain : styles.bodyMainIOS}> 
            <View style={styles.inputRow}>
              <Image style={styles.inputIcon} source={images.emailIcon} />
              <TextInput
                style={styles.inputField}
                placeholder="Username"
                placeholderTextColor={colors.disabledBg2}
                value={userName}
                onChangeText={text => {
                  setUserName(text);
                }}
              />
            </View>
            <View style={Platform.OS == 'android' ? styles.separator : styles.separatorIOS}></View> 

            <View style={styles.inputRow}>
              <Image style={styles.inputIcon2} source={images.phoneIcon} />

              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="US"
                layout="second"
                withShadow={false}
                autoFocus={false}
                disableArrowIcon={true}
                onChangeFormattedText={text => {
                  setFormattedValue(text);
                }}
                withDarkTheme={false}
                flagButtonStyle={{
                  backgroundColor: 'transparent',
                  height:Platform.OS == 'android' ? sizes.screenHeight * 0.07 : sizes.screenHeight * 0.03,
                  width: sizes.screenHeight * 0.07,
                }}
                textContainerStyle={{backgroundColor: colors.backgroundColor}}
                containerStyle={{
                  height:Platform.OS == 'android' ? sizes.screenHeight * 0.07 : sizes.screenHeight * 0.03,
                  width: sizes.screenWidth * 0.7,
                  backgroundColor: 'transparent',
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.07,
                  color: colors.black,
                  right: 30,
                  backgroundColor: 'transparent',
                  marginBottom:Platform.OS == 'ios' && sizes.screenHeight * 0.01
                }}
                textInputProps={{
                  placeholderTextColor: colors.disabledBg2,
                }}
                onChangeText={text => {
                  setPhoneNo(text);
                }}
              />
            </View>
            <View style={Platform.OS == 'android' ? styles.separator : styles.separatorIOS}></View> 

            <View style={styles.inputRow}>
              <Image style={styles.inputIcon} source={images.passwordIcon} />
              <TextInput
                secureTextEntry={hidePassword}
                style={styles.inputPassField}
                placeholder="Password"
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

          <TouchableOpacity style={Platform.OS == 'android' ? styles.signInBtn : styles.signInBtnIOS} onPress={handleSignUp}>
            <Text style={styles.signInBtnText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.bottomLinkContainer}>
            <Text style={styles.bottomLinkText}>Already have an account? </Text>
            <TouchableOpacity style={styles.bottomLink} onPress={handleSignIn}>
              <Text style={styles.bottomLinkTextBold}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
