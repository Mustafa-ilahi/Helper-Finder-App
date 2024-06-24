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

export default function JobTimer({navigation}) {
  const [addedHours, setAddedHours] = useState(1);

  const [addedHoursModal, setAddedHoursModal] = useState(false);

  const [acceptedModal, setAcceptedModal] = useState(false);
  const [rejectedModal, setRejectedModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

  const [initialTime, setInitialTime] = useState(10);
  const [timerCompleted, setTimerCompleted] = useState(false);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const handleAddMoreHours = () => {
    setAddedHoursModal(true);
  };

  const handleJobCompleted = () => {
    setReviewModal(true);
  };

  const handleComplete = () => {
    setTimerCompleted(true);
  };


const handleAcceptance = () => {
  setAcceptedModal(false)
  setTimeout(() => {
    setAcceptedModal(true)
  }, 500);
}
const handleRejected = () => {
  setAcceptedModal(false)
  setTimeout(() => {
    setRejectedModal(true)
  }, 500);
}
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
        <Text style={styles.textBlackBold}>Total Time Session</Text>
        <Text style={styles.textBlackLarge}>8 hours</Text>

        <View
          style={
            Platform.OS == 'android'
              ? styles.bottomBtnContainer
              : styles.bottomBtnContainerIOS
          }>
          {Platform.OS == 'android' ? (
            <>
              {timerCompleted ? (
                <BottomBtn
                  title={'Job Completed'}
                  onPress={handleJobCompleted}
                />
              ) : (
                <BottomBtn
                  title={'+ Add more hours'}
                  onPress={handleAddMoreHours}
                />
              )}
            </>
          ) : (
            <>
              {timerCompleted ? (
                <BottomBtnIOS
                  title={'Job Completed'}
                  onPress={handleJobCompleted}
                />
              ) : (
                <BottomBtnIOS
                  title={'+ Add more hours'}
                  onPress={handleAddMoreHours}
                />
              )}
            </>
          )}
        </View>
      </View>

      <Modal
        isVisible={addedHoursModal}
        onBackButtonPress={() => setAddedHoursModal(false)}
        onBackdropPress={() => setAddedHoursModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Text style={styles.textBluekBold}>Add Hours</Text>
          <TouchableOpacity style={styles.modalBtnSmall2}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (addedHours > 1) setAddedHours(addedHours - 1);
              }}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.modalBtnTextLarge}>
              {addedHours < 10 ? `0${addedHours}` : addedHours}
            </Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setAddedHours(addedHours + 1);
              }}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={() => {
              setAddedHoursModal(false);
              handleAcceptance()
}}>
            <Text style={styles.modalBtnTextSmall}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={acceptedModal}
        onBackButtonPress={() => setAcceptedModal(false)}
        onBackdropPress={() => setAcceptedModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Image style={styles.modalIcon} source={images.acceptedIcon} />

          <Text style={styles.textBluekNormal}>
            Helper has accepted the request for additional two hours
          </Text>

          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={() => {
              handleRejected()
            }}>
            <Text style={styles.modalBtnTextSmall}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={rejectedModal}
        onBackButtonPress={() => setRejectedModal(false)}
        onBackdropPress={() => setRejectedModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Image style={styles.modalIcon} source={images.rejectedIcon} />

          <Text style={styles.textBluekNormal}>
            Helper has rejected the request for additional two hours
          </Text>

          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={() => {
              setRejectedModal(false);
            }}>
            <Text style={styles.modalBtnTextSmall}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={reviewModal}
        onBackButtonPress={() => setReviewModal(false)}
        onBackdropPress={() => setReviewModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Image style={styles.modalIconLarge} source={images.reviewIcon} />

          <Text style={styles.textBluekNormal}>
            How was your experience with the helper
          </Text>

          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={() => {
              setReviewModal(false);
              navigation.navigate('Rating');
            }}>
            <Text style={styles.modalBtnTextSmall}>Post a review</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
