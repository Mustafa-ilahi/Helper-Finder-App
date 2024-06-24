import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';

export default function Profile({navigation}) {
  // const {firstName, lastName} = route.params;

  const [userImg, setUserImg] = useState(images.userImg);
  const [firstName, setFirstName] = useState('Michael');
  const [lastName, setLastName] = useState('John');
  const [userEmail, setUserEmail] = useState('michaeljohn123@gmail.com');
  const [userPhone, setUserPhone] = useState('+1 123456789');

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {
      userImg,
      firstName,
      lastName,
      userEmail,
    });
  };

  const handleSignOut = () => {
    navigation.navigate('Landing');
  };

  const handleSwitch = () => {
    navigation.navigate('TypeOfUser');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.body}>
          <View style={styles.userRow}>
            <Text style={styles.heading}>Profile</Text>
            <TouchableOpacity style={Platform.OS == 'android' ? styles.switchToBtn : styles.switchToBtnIOS} onPress={handleSwitch}>
              <Text style={styles.switchToBtnText}>Switch To Helper</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userRow}>
            <View style={styles.userRowLeft}>
              <View style={styles.userImgContainer}>
                <Image style={styles.userImg} source={userImg} />
              </View>
              <View>
                <Text style={styles.textBold}>
                  {firstName} {lastName}
                </Text>
                <Text style={styles.textNormal}>{userPhone}</Text>
                <Text style={styles.textNormal}>{userEmail}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleEditProfile}>
              <Image
                style={styles.editProfileIcon}
                source={images.rightArrow}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.separator}></View>

          <Text style={styles.heading}>Settings</Text>

          <View style={styles.settingsContainer}>
            <TouchableOpacity
              style={styles.editRow}
              onPress={() => {
                navigation.navigate('Chat');
              }}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.message} />
                <Text style={styles.textBlack}>Message</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity
              style={styles.editRow}
              onPress={() => {
                navigation.navigate('Payments');
              }}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.payment} />
                <Text style={styles.textBlack}>Payment</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.security} />
                <Text style={styles.textBlack}>Security</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.privacy} />
                <Text style={styles.textBlack}>Privacy Policy</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.faq} />
                <Text style={styles.textBlack}>FAQ</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          <BottomBtn title={'Sign Out'} onPress={handleSignOut} />
        </View>
      </View>
    </SafeAreaView>
  );
}
