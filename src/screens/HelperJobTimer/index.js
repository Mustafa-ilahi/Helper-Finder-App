import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {colors, sizes} from '../../services';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function HelperJobTimer({navigation}) {
  const [rejectedModal, setRejectedModal] = useState(false);

  const [initialTime, setInitialTime] = useState(11);
  const [timerCompleted, setTimerCompleted] = useState(false);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const handleJobCompleted = () => {
    navigation.navigate('TaskDetails');
  };

  const handleComplete = () => {
    setTimerCompleted(true);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.jobTimerContainer}>
          <Image style={styles.jobTimerIcon} source={images.jobTimerIcon} />
          <Text style={styles.heading}>JOB{'\n'}TIMER</Text>
        </View>
        <Text style={styles.textBlackNormal}>
          Timer has started! Start your work
        </Text>
        <View style={styles.timerContainerMain}>
          <CountdownCircleTimer
            isPlaying
            size={sizes.screenWidth * 0.54}
            trailStrokeWidth={20}
            strokeWidth={8}
            trailColor={colors.disabledBg3}
            duration={initialTime}
            colors={colors.darkBlue}
            onComplete={handleComplete}>
            {({remainingTime}) => (
              <View style={styles.timerContainer}>
                <Text style={styles.textBlackBold}>Work session</Text>
                <Text style={styles.textBlackLarge}>
                  {formatTime(remainingTime)}
                </Text>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
        <Text
          style={styles.textBlackBold}
          onPress={() => setRejectedModal(true)}>
          Total Time Session
        </Text>
        <Text style={styles.textBlackLarge}>8 hours</Text>

        {timerCompleted === true && (
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            {Platform.OS == 'android' ? (
              <BottomBtn title={'Job Completed'} onPress={handleJobCompleted} />
            ) : (
              <BottomBtnIOS
                title={'Job Completed'}
                onPress={handleJobCompleted}
              />
            )}
          </View>
        )}
      </View>

      <Modal
        isVisible={rejectedModal}
        onBackButtonPress={() => setRejectedModal(false)}
        onBackdropPress={() => setRejectedModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Text style={styles.textBluekNormal}>
            The seeker requires an additional 2 hours.
          </Text>

          <TouchableOpacity
            style={Platform.OS == 'android' ? styles.modalBtnSmall : styles.modalBtnSmallIOS}
            onPress={() => {
              setRejectedModal(false);
            }}>
            <Text style={styles.modalBtnTextSmall}>Accept</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Platform.OS == 'android' ? styles.modalBtnSmall : styles.modalBtnSmallIOS}
            onPress={() => {
              setRejectedModal(false);
            }}>
            <Text style={styles.modalBtnTextSmall}>Decline</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
