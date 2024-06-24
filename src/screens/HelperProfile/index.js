import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function HelperProfile({navigation}) {
  // const {firstName, lastName} = route.params;

  const [userImg, setUserImg] = useState(images.user1);
  const [firstNamee, setFirstName] = useState('John');
  const [lastNamee, setLastName] = useState('Doe');
  const [userEmaill, setUserEmail] = useState('johndoe123@gmail.com');
  const [userPhonee, setUserPhone] = useState('+1 123456789');

  const handleEditProfile = () => {
    navigation.navigate('HelperEditProfile', {
      userImg,
      firstNamee,
      lastNamee,
      userEmaill,
      userPhonee,
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
              <Text style={styles.switchToBtnText}>Switch To Seeker</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userRow}>
            <View style={styles.userRowLeft}>
              <View style={styles.userImgContainer}>
                <Image style={styles.userImg} source={userImg} />
              </View>
              <View>
                <Text style={styles.textBold}>
                  {firstNamee} {lastNamee}
                </Text>
                <Text style={styles.textNormal}>{userPhonee}</Text>
                <Text style={styles.textNormal}>{userEmaill}</Text>
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
                // navigation.navigate('Chat');
              }}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.editJobsIcon} />
                <Text style={styles.textBlack}>Edit Jobs</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity
              style={styles.editRow}
              onPress={() => {
                navigation.navigate('HelperTasks');
              }}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.yourTaskIcon} />
                <Text style={styles.textBlack}>Job History</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity style={styles.editRow} onPress={() => {}}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.payment} />
                <Text style={styles.textBlack}>Payment</Text>
              </View>
              <Image style={styles.rightArrow} source={images.rightArrow} />
            </TouchableOpacity>
            <View style={styles.separator2}></View>

            <TouchableOpacity
              style={styles.editRow}
              onPress={() => {
                navigation.navigate('Security');
              }}>
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
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Sign Out'} onPress={handleSignOut} />

          ) : (
          <BottomBtnIOS title={'Sign Out'} onPress={handleSignOut} />

          )
          }
        </View>
      </View>
    </SafeAreaView>
  );
}
