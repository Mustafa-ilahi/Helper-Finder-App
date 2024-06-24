import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {colors, fontSize, sizes} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';
import PhoneInput from 'react-native-phone-number-input';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function EditProfile({navigation}) {
  // const {userImg, firstName, lastName, userEmail} = route.params;

  const [phoneNo, setPhoneNo] = useState('0512465889');
  const [firstName, setFirstName] = useState('Michael');
  const [lastName, setLastName] = useState('John');
  const [userEmail, setUserEmail] = useState('michaeljohn123@gmail.com');

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const handleConfirm = () => {};

  const [imgUri, setImgUri] = useState(null);
  const uploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        setImgUri(res.assets[0].uri);
      }
    });
  };

  // useEffect(() => {
  //   if (firstName && lastName && email && location) {
  //     setDisabledBtn(false);
  //   } else {
  //     setDisabledBtn(true);
  //   }

  // }, [firstName, lastName, email, location]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.body}>
            <Text style={styles.heading}>Edit Profile</Text>
            <View style={styles.userImgContainer}>
              {imgUri ? (
                <Image source={{uri: imgUri}} style={styles.userImg} />
              ) : (
                <Image style={styles.userImg} source={images.userImg} />
              )}

              <TouchableOpacity
                style={styles.editIconContainer}
                onPress={uploadPhoto}>
                <Image style={styles.editIcon} source={images.editIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headingMedium}>Basic Info</Text>
            <Text style={styles.inputLabe}>First Name</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder={firstName}
                placeholderTextColor={colors.black}
                value={firstName}
                onChangeText={text => {
                  setFirstName(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
            <Text style={styles.inputLabe}>Last Name</Text>

            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder={lastName}
                placeholderTextColor={colors.black}
                value={lastName}
                onChangeText={text => {
                  setLastName(text);
                }}
              />
            </View>

            <View style={styles.separator}></View>
            <Text style={styles.inputLabe}>Phone No</Text>

            <View style={styles.inputRow}>
              {/* <TextInput
              style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
              placeholder={phoneNo}
              placeholderTextColor={colors.black}
              value={phoneNo}
              onChangeText={text => {
                setPhoneNo(text);
              }}
            /> */}
              <PhoneInput
                ref={phoneInput}
                placeholder={phoneNo}
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
                  height: sizes.screenHeight * 0.06,
                  width: sizes.screenHeight * 0.07,
                }}
                textContainerStyle={{
                  backgroundColor: 'transparent',
                  color: colors.black,
                }}
                containerStyle={{
                  height: sizes.screenHeight * 0.06,
                  width: sizes.screenWidth * 0.7,
                  backgroundColor: 'transparent',
                }}
                textInputStyle={{
                  height: sizes.screenHeight * 0.07,
                  color: colors.black,
                  right: 30,
                  backgroundColor: 'transparent',
                  fontFamily: 'Inter-Medium',
                  fontSize: fontSize.regular,
                }}
                textInputProps={{
                  placeholderTextColor: colors.black,
                }}
                onChangeText={text => {
                  setPhoneNo(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
            <Text style={styles.inputLabe}>Email</Text>

            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder={userEmail}
                placeholderTextColor={colors.black}
                value={userEmail}
                onChangeText={text => {
                  setUserEmail(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
          </View>
          <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
            {Platform.OS == 'android' ? (
            <BottomBtn title={'Save'} onPress={handleConfirm} />
            ) : (
            <BottomBtnIOS title={'Save'} onPress={handleConfirm} />
            ) }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
