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
import UserHeader from '../../components/UserHeader';
import Modal from 'react-native-modal';
import {colors, sizes} from '../../services';
export default function HelperHome({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [rejected2, setRejected2] = useState(true);


  const [counterOffer, setCounterOffer] = useState(null);
  const [userImg, setUserImg] = useState(images.user1);
  const [userName, setUserName] = useState('John Doe');
  const [userLocation, setUserLocation] = useState(
    '2464 Royal Ln. Mesa, New Jersey 45463',
  );

  const [jobRequest, setJobRequest] = useState({
    seekerImg: images.userImg,
    name: 'Michael',
    category: 'Delivery Services',
    distance: '1.6 km away',
    jobTime: '8 hr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    recommendedPrice: '160',
    seekersFare: '150',
  });

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleSendCounterOffer = () => {
    setDisabledBtn(true);
    setShowModal(false);
    setStartTime(Date.now());
  };

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = milliseconds => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <UserHeader
          img={userImg}
          name={userName}
          location={userLocation}
          notification={true}
        />
        <View style={styles.body}>
          <Text style={styles.textBoldMedium}>Job Request</Text>
          <View style={styles.scrollViewContainer}>
            <ScrollView>
        <View style={styles.body2}>

            <View style={Platform.OS == 'android' ?styles.jobRequestContainerMain:styles.jobRequestContainerMainIOS}>
            {rejected === true && (
              <View style={styles.deleteRow}>
                <Text style={styles.deleteText}>
                  {jobRequest.name} rejected your counter offer
                </Text>
                <Image style={styles.deleteIcon} source={images.deleteIcon} />
              </View>
            )}

            <View style={styles.jobRequestContainer}>
              <View style={styles.jobRequestSeekerRow}>
                <View style={styles.jobRequestSeekerRowLeft}>
                  <Image
                    style={styles.jobRequestSeekerImg}
                    source={jobRequest.seekerImg}
                  />
                  <View>
                    <Text style={styles.textBoldMedium}>{jobRequest.name}</Text>
                    <Text style={styles.textDisabledSmall}>
                      {jobRequest.distance}
                    </Text>
                  </View>
                </View>
                <View style={Platform.OS == 'android' ? styles.category : styles.categoryIOS}>
                  <Text style={styles.text}>
                    {' '}
                    {jobRequest.category.length > 18
                      ? `${jobRequest.category.slice(0, 18)}...`
                      : jobRequest.category}
                  </Text>
                </View>
              </View>
              <Text style={styles.textDisablednormal}>Hours Needed</Text>
              <Text style={styles.textBoldnormal}>{jobRequest.jobTime}</Text>
              <Text style={styles.textDisablednormal}>About the job</Text>
              <Text style={styles.textBoldnormal}>
                {jobRequest.description}
              </Text>

              <View style={styles.priceRow}>
                <View style={styles.priceContainer}>
                  <Text style={styles.textDisablednormal2}>Rates</Text>
                  <Text style={styles.textBoldnormal}>
                    ${jobRequest.recommendedPrice}
                  </Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.priceContainer}>
                  <Text style={styles.textDisablednormal2}>
                    {jobRequest.name}'s fare
                  </Text>
                  <Text style={styles.textBoldnormal}>
                    ${jobRequest.seekersFare}
                  </Text>
                </View>
              </View>
              <View style={styles.btnWhiteRow}>
                <TouchableOpacity
                  style={Platform.OS == 'android' ? styles.btnWhite : styles.btnWhiteIOS}
                  onPress={() => {
                    setShowModal(true);
                  }}>
                  <Text style={styles.btnTextBlue}>Counter Offer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Platform.OS == 'android' ? styles.btnWhite : styles.btnWhiteIOS}>
                  <Text style={styles.btnTextBlue}>Reject</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Platform.OS == 'android' ? styles.btnBlue : styles.btnBlueIOS}
                onPress={() => {
                  navigation.navigate('JobConfirmation', {jobRequest});
                }}>
                <Text style={styles.btnTextWhite}>Accept</Text>
              </TouchableOpacity>
            </View>
            {rejected === true && (
                            <View style={Platform.OS == 'android'?styles.jobRequestContainerDisabled:styles.jobRequestContainerDisabledIOS}></View>

            )}
          </View>

          <View style={Platform.OS == 'android' ?styles.jobRequestContainerMain:styles.jobRequestContainerMainIOS}>
            {rejected2 === true && (
              <View style={styles.deleteRow}>
                <Text style={styles.deleteText}>
                  {jobRequest.name} rejected your counter offer
                </Text>
                <Image style={styles.deleteIcon} source={images.deleteIcon} />
              </View>
            )}

            <View style={styles.jobRequestContainer}>
              <View style={styles.jobRequestSeekerRow}>
                <View style={styles.jobRequestSeekerRowLeft}>
                  <Image
                    style={styles.jobRequestSeekerImg}
                    source={jobRequest.seekerImg}
                  />
                  <View>
                    <Text style={styles.textBoldMedium}>{jobRequest.name}</Text>
                    <Text style={styles.textDisabledSmall}>
                      {jobRequest.distance}
                    </Text>
                  </View>
                </View>
                <View style={Platform.OS == 'android' ? styles.category : styles.categoryIOS}>
                  <Text style={styles.text}>
                    {' '}
                    {jobRequest.category.length > 18
                      ? `${jobRequest.category.slice(0, 18)}...`
                      : jobRequest.category}
                  </Text>
                </View>
              </View>
              <Text style={styles.textDisablednormal}>Hours Needed</Text>
              <Text style={styles.textBoldnormal}>{jobRequest.jobTime}</Text>
              <Text style={styles.textDisablednormal}>About the job</Text>
              <Text style={styles.textBoldnormal}>
                {jobRequest.description}
              </Text>

              <View style={styles.priceRow}>
                <View style={styles.priceContainer}>
                  <Text style={styles.textDisablednormal2}>Rates</Text>
                  <Text style={styles.textBoldnormal}>
                    ${jobRequest.recommendedPrice}
                  </Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.priceContainer}>
                  <Text style={styles.textDisablednormal2}>
                    {jobRequest.name}'s fare
                  </Text>
                  <Text style={styles.textBoldnormal}>
                    ${jobRequest.seekersFare}
                  </Text>
                </View>
              </View>
              <View style={styles.btnWhiteRow}>
                <TouchableOpacity
                  style={Platform.OS == 'android' ? styles.btnWhite : styles.btnWhiteIOS}
                  onPress={() => {
                    setShowModal(true);
                  }}>
                  <Text style={styles.btnTextBlue}>Counter Offer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Platform.OS == 'android' ? styles.btnWhite : styles.btnWhiteIOS}>
                  <Text style={styles.btnTextBlue}>Reject</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={Platform.OS == 'android' ? styles.btnBlue : styles.btnBlueIOS}
                onPress={() => {
                  navigation.navigate('JobConfirmation', {jobRequest});
                }}>
                <Text style={styles.btnTextWhite}>Accept</Text>
              </TouchableOpacity>
            </View>
            {rejected2 === true && (
              <View style={Platform.OS == 'android'?styles.jobRequestContainerDisabled:styles.jobRequestContainerDisabledIOS}></View>
            )}
          </View>
          </View>
            </ScrollView>
          </View>


        </View>
      </View>
      <Modal
        isVisible={showModal}
        backdropOpacity={0.5}
        onBackButtonPress={() => {
          setShowModal(false);
        }}
        onBackdropPress={() => {
          setShowModal(false);
        }}>
        <View style={styles.modalBody}>
          <View style={styles.inputContainer}>
            <Text style={styles.textBoldLarger}>$</Text>
            <TextInput
              style={styles.input}
              placeholder={jobRequest.recommendedPrice}
              placeholderTextColor={colors.disabledBg2}
              value={counterOffer}
              onChangeText={text => {
                setCounterOffer(text);
              }}
              keyboardType="numeric"
              multiline={false}
            />
          </View>
          <Text style={styles.textDisablednormal2}>
            Specify your counter offer amount
          </Text>
          <Text style={styles.textBoldnormal2}>{formatTime(elapsedTime)}s</Text>
          <View>
            <TouchableOpacity
              style={Platform.OS == 'android' ? styles.btnBlue : styles.btnBlueIOS}
              onPress={handleSendCounterOffer}>
              <Text style={styles.btnTextWhite}>Send Counter Offer</Text>
            </TouchableOpacity>
            {disabledBtn === true && <View style={styles.disabledBtn}></View>}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
