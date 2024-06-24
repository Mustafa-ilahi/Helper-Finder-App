import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {Use} from 'react-native-svg';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function TaskDetails({navigation}) {
  const [task, setTask] = useState({
    category: 'Delivery Services',
    duration: '8 hours',
    price: '$160',
  });

  const handleConfirm = () => {
    navigation.navigate('HelperTabNavigation');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.body}>
          <Image style={styles.CongratsImg} source={images.CongratsImg} />
          <Text style={styles.heading}>Congratulations!</Text>
          <Text style={styles.textNormal}>
            The task you undertook has been successfully completed. Your
            dedication and hard work have made a significant impact, and we
            sincerely appreciate your commitment to helping others.
          </Text>

          <View style={styles.taskDetailsContainer}>
            <Text style={styles.heading}>Task Details</Text>

            <View style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.jobIcon} />
                <Text style={styles.textBlack}>Job</Text>
              </View>
              <Text style={styles.textNormal2}>{task.category}</Text>
            </View>

            <View style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image
                  style={styles.editIcon}
                  source={images.totalDurationIcon}
                />
                <Text style={styles.textBlack}>Total Duration</Text>
              </View>
              <Text style={styles.textNormal2}>{task.duration}</Text>
            </View>

            <View style={styles.editRow}>
              <View style={styles.userRowLeft}>
                <Image style={styles.editIcon} source={images.totalPayIcon} />
                <Text style={styles.textBlack}>Total Pay</Text>
              </View>
              <Text style={styles.textNormal2}>{task.price}</Text>
            </View>
          </View>
        </View>
        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Back to Home'} onPress={handleConfirm} />
          ) : (
          <BottomBtnIOS title={'Back to Home'} onPress={handleConfirm} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
