import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import UserHeader from '../../components/UserHeader';
import MapView, {Marker} from 'react-native-maps';
import Modal from 'react-native-modal';
import MapViewDirections from 'react-native-maps-directions';

export default function HelperMap({navigation, route}) {
  const {jobRequest} = route.params;

  const [showModal, setShowModal] = useState(false);
  const [userImg, setUserImg] = useState(images.userImg);
  const [userName, setUserName] = useState('Michael John');
  const [userLocation, setUserLocation] = useState(
    '2464 Royal Ln. Mesa, New Jersey 45463',
  );
  const [helper, setHelper] = useState({
    category: 'Delivery Services',
    name: 'John Doe',
    img: images.user1,
    rating: 4,
    reviews: 4.5,
    price: '$20',
    pph: '4 MIN | $20 P/H',
    distance: '1.6 km',
    marker: false,
    description:
      "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
  });
  const origin = {latitude: 37.7408456, longitude: -122.4596002};
  const destination = {latitude: 37.782707, longitude: -122.4263769};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCbWOArVUIn-uRQ8S3fsvayHrep5El4ab4';

  const handleChat = () => {
    navigation.navigate('HelperChat', {jobRequest});
  };

  const handleJobTimer = () => {
    navigation.navigate('HelperJobTimer');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <UserHeader
            img={helper.img}
            name={userName}
            location={userLocation}
            chat={true}
            onPress={handleChat}
          />
        </View>
        <Image style={styles.linearBg} source={images.linearBg} />

        <MapView
          style={styles.map}
          region={{
            latitude: 37.75225,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0722,
          }}>
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeColor="#02A2FC"
            strokeWidth={5}
          />
        </MapView>

        <TouchableOpacity
          style={
            Platform.OS == 'android'
              ? styles.destinationAddress
              : styles.destinationAddressIOS
          }
          onPress={() => {
            setShowModal(true);
          }}>
          <Image
            style={styles.destinationIcon}
            source={images.destinationIcon}
          />
          <View style={styles.separator}></View>
          <View>
            <Text style={styles.textLightSmall}>Destination address</Text>
            <Text style={styles.textBold}>344 St, Ahmadi 00000, lorem</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.moreHelperModalBody}>
          <Image
            style={styles.modalIcon}
            source={images.destinationArrivedModalImg}
          />

          <Text style={styles.textBluekNormal}>
            Your destination arrived, start working now.
          </Text>

          <TouchableOpacity
            style={
              Platform.OS == 'android'
                ? styles.modalBtnSmall
                : styles.modalBtnSmallIOS
            }
            onPress={() => {
              setShowModal(false);
              handleJobTimer();
            }}>
            <Text style={styles.modalBtnTextSmall}>Start</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
