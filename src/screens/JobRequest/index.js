import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import {colors} from '../../services';
import DatePicker from 'react-native-date-picker';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function JobRequest({navigation, route}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {selectedHelper} = route.params;

  const [helper, setHelper] = useState(selectedHelper);

  const [jd, setJd] = useState({
    time: 8,
    description: '',
    price: 0,
  });

  const [showModal, setShowModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);
  const [moreHelpersModal, setMoreHelpersModal] = useState(false);
  const [counterOfferModal, setCounterOfferModal] = useState(false);
  const [counterOffer, setCounterOffer] = useState({
    name: 'John Doe',
    price: '$160',
  });

  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleModal = () => {
    setBottomModal(true);
    // navigation.navigate('');
  };

  const handleFindingHelpers = () => {
    setMoreHelpersModal(false);
    navigation.navigate('FindingHelpers');
  };

  const handleMoreJobs = () => {
    navigation.navigate('MoreJobs', {helper});
  };

  const handleDoneNow = () => {
    setBottomModal(false);
    setTimeout(() => {
      setShowModal(true);
    }, 500);
    setDisabledBtn(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />

          <ScrollView>
            <View style={styles.scrollViewBody}>
              <View style={styles.userImgContainer}>
                <Image style={styles.userImg} source={helper.img} />
              </View>

              <Text
                style={styles.textBoldLarge}
                onPress={() => {
                  setCounterOfferModal(true);
                }}>
                {helper.name}
              </Text>
              <Text style={styles.textLightSmall}>
                Reviews ({helper.rating})
              </Text>
              <View style={styles.starRatingContainer}>
                <StarRating
                  disabled={true}
                  emptyStar={images.disabledStar}
                  fullStar={images.selectedStart}
                  starSize={18}
                  maxStars={5}
                  rating={helper.rating}
                />
              </View>

              <View style={styles.btnRow}>
                <TouchableOpacity style={styles.btnWhite}>
                  <Text style={styles.btnWhiteText}>{helper.category}</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                  style={styles.btnBlue}
                  onPress={handleMoreJobs}>
                  <Text style={styles.btnBlueText}>More Jobs</Text>
                </TouchableOpacity> */}
              </View>

              <View style={styles.textSection}>
                <Text style={styles.textLightSmall}>Hourly Rates</Text>

                <Text style={styles.textBoldSmall}>{helper.price}</Text>

                <Text style={styles.textLightSmall}>Description</Text>
                <Text style={styles.textBlack}>{helper.description}</Text>
                <Text style={styles.textBoldMedium}>Job's Info</Text>
                <TextInput
                  placeholder={`${jd.time} Hours`}
                  placeholderTextColor={colors.disabledBg2}
                  multiline
                  style={
                    Platform.OS == 'android'
                      ? styles.inputField
                      : styles.inputFieldIOS
                  }
                  keyboardType="numeric"
                />

                <View style={styles.separatorSmall}></View>

                <TextInput
                  placeholder={`About the job`}
                  placeholderTextColor={colors.disabledBg2}
                  multiline
                  style={
                    Platform.OS == 'android'
                      ? styles.inputField
                      : styles.inputFieldIOS
                  }
                />
                <View style={styles.separator}></View>

                <Text style={styles.textBold}>$160</Text>

                <TextInput
                  placeholder={`Recommended fare, adjustable`}
                  placeholderTextColor={colors.disabledBg2}
                  keyboardType="numeric"
                  style={
                    Platform.OS == 'android'
                      ? styles.inputField
                      : styles.inputFieldIOS
                  }
                />
                <View style={styles.separator}></View>
              </View>
              {disabledBtn ? (
                <View
                  style={
                    Platform.OS == 'android'
                      ? styles.bottomBtnContainer
                      : styles.bottomBtnContainerIOS
                  }>
                  {Platform.OS == 'android' ? (
                    <BottomBtn
                      title={'Send Job Request'}
                      onPress={handleModal}
                    />
                  ) : (
                    <BottomBtnIOS
                      title={'Send Job Request'}
                      onPress={handleModal}
                    />
                  )}
                </View>
              ) : (
                <View>
                  <View style={styles.disabledBtn}>
                    <Text style={styles.disabledBtnText}>Send Job Request</Text>
                  </View>
                  <Text style={styles.disabledTextCenter}>
                    While waiting for John to accept. You can issue more jobs
                    for a chance at faster job acceptance
                  </Text>
                  <View style={styles.bottomBtnContainer2}>
                  {Platform.OS == 'android' ? (
                      <BottomBtn
                      title={'Find More Helpers'}
                      onPress={() => {
                        setMoreHelpersModal(true);
                      }}
                    />
                  ) : (
                    <BottomBtnIOS
                    title={'Find More Helpers'}
                    onPress={() => {
                      setMoreHelpersModal(true);
                    }}
                  />
                  )}
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setBottomModal(false);
        }}
        onCancel={() => {
          setOpen(false);
          setBottomModal(false);
        }}
      />

      <Modal
        isVisible={bottomModal}
        onBackButtonPress={() => setBottomModal(false)}
        onBackdropPress={() => setBottomModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.bottomModalContainer}>
          <View style={styles.bottomModalBody}>
            <View style={styles.topHr}></View>
            <Text style={styles.textLight}>Flexible Job Request Options</Text>

            <TouchableOpacity style={styles.modalBtn} onPress={handleDoneNow}>
              <Text style={styles.modalBtnText}>Get it Done Now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setOpen(true);
              }}>
              <Text style={styles.modalBtnText}>Schedule for Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.jobSentImg} style={styles.modalImg} />
          <Text style={styles.modalText}>Job Request Sent</Text>

          <Text style={styles.textBlue}>
            Please wait for John Doe to accept your job request
          </Text>
        </View>
      </Modal>

      <Modal
        isVisible={counterOfferModal}
        onBackButtonPress={() => setCounterOfferModal(false)}
        onBackdropPress={() => setCounterOfferModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBodySmall}>
          <Text style={styles.modalTextLight}>
            {counterOffer.name}'s counter offer is
          </Text>

          <Text style={styles.textBlackBoldLarge}>{counterOffer.price}</Text>

          <TouchableOpacity
            style={styles.modalBtnSmaller}
            onPress={() => {
              setCounterOfferModal(false);
            }}>
            <Text style={styles.modalBtnTextSmall}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalBtnSmallerWhite}
            onPress={() => {
              setCounterOfferModal(false);
            }}>
            <Text style={styles.modalBtnTextSmallBlue}>Reject</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={moreHelpersModal}
        onBackButtonPress={() => setMoreHelpersModal(false)}
        onBackdropPress={() => setMoreHelpersModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={() => {
              navigation.navigate('ClosestHelpers');
              setMoreHelpersModal(false)
            }}>
            <Text style={styles.modalBtnTextSmall}>
              Find more helpers manually
            </Text>
          </TouchableOpacity>

          <View style={styles.orRow}>
            <View style={styles.separatorSmall2}></View>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separatorSmall2}></View>
          </View>

          <TouchableOpacity
            style={styles.modalBtnSmall}
            onPress={handleFindingHelpers}>
            <Text style={styles.modalBtnTextSmall}>
              Send job request to 5 closest helpers
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
