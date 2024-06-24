import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {colors} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function UserProfile({navigation, route}) {
  const {type} = route.params;

  const [disabledBtn, setDisabledBtn] = useState(true);
  const [imgUploaded, setImgUploaded] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');

  const [imgUri, setImgUri] = useState(images.userImgBg);
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
      } else {
        const source = {uri: res.uri};
        setImgUri(res.assets[0].uri);
        setImgUploaded(true);
      }
    });
  };

  const handleConfirm = () => {
    if (firstName && lastName && email && location) {
      if (type === 'Seeker')
        navigation.navigate('GetStarted', {
          firstName,
          lastName,
          imgUri,
          imgUploaded,
        });
      else
        navigation.navigate('HelperJobs', {
          firstName,
          lastName,
          imgUri,
          imgUploaded,
        });
    }
  };

  useEffect(() => {
    if (firstName && lastName && email && location) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [firstName, lastName, email, location]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.body}>
            <Text style={styles.heading}>{type}'s Profile</Text>
            <View style={styles.userImgContainer}>
              {imgUri ? (
                <Image
                  source={imgUploaded ? {uri: imgUri} : imgUri}
                  style={styles.userImg}
                />
              ) : (
                <Image style={styles.userImg} source={images.userImgBg} />
              )}

              <TouchableOpacity
                style={styles.editIconContainer}
                onPress={uploadPhoto}>
                <Image style={styles.editIcon} source={images.editIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headingMedium}>Account Information</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder="First Name"
                placeholderTextColor={colors.disabledBg2}
                value={firstName}
                onChangeText={text => {
                  setFirstName(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder="Last Name"
                placeholderTextColor={colors.disabledBg2}
                value={lastName}
                onChangeText={text => {
                  setLastName(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder="Email"
                placeholderTextColor={colors.disabledBg2}
                value={email}
                onChangeText={text => {
                  setEmail(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder="Location"
                placeholderTextColor={colors.disabledBg2}
                value={location}
                onChangeText={text => {
                  setLocation(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>

            <View style={styles.inputRow}>
              <TextInput
                style={Platform.OS == 'android' ? styles.inputField : styles.inputFieldIOS}
                placeholder="Business/Company (Optional)"
                placeholderTextColor={colors.disabledBg2}
                value={company}
                onChangeText={text => {
                  setCompany(text);
                }}
              />
            </View>
            <View style={styles.separator}></View>
          </View>
          <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS }> 
            {Platform.OS == 'android' ? (
               <BottomBtn
               title={'Continue'}
               onPress={handleConfirm}
               btnType={disabledBtn}
             />
            ) : (
              <BottomBtnIOS
              title={'Continue'}
              onPress={handleConfirm}
              btnType={disabledBtn}
            />
            )}
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
