import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import UserHeader from '../../components/UserHeader';
import MapView, {Marker} from 'react-native-maps';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import MapViewDirections from 'react-native-maps-directions';

export default function MapDirections({navigation}) {
  const [showModal, setShowModal] = useState(true);
  const [showReachedModal, setShowReachedModal] = useState(false);
  const [chatModal, setChatModal] = useState(false);

  const [filter, setFilter] = useState(false);
  const [marker1, setMarker1] = useState(false);
  const [marker2, setMarker2] = useState(false);
  const [marker3, setMarker3] = useState(false);
  const [marker4, setMarker4] = useState(false);
  const [marker5, setMarker5] = useState(false);

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

  const [selectedHelper, setSelectedHelper] = useState(helper[0]);
  const [modal, setModal] = useState(false);

  const handleChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <UserHeader img={userImg} name={userName} location={userLocation} />
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
        <View style={Platform.OS == 'android' ? styles.chatView : styles.chatViewIOS}>
          <View style={styles.topHr}></View>
          <View style={styles.helperProfileRow}>
            <View style={styles.chatViewLeft}>
              <View style={styles.helperProfile}>
                <View style={styles.helperImgContainer}>
                  <Image style={styles.helperImg} source={helper.img} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textBold}>{helper.name}</Text>
                  <Text style={styles.textLightSmall}>{helper.distance}</Text>
                </View>
              </View>
              <View style={styles.category}>
                <Text style={styles.text}>
                  {helper.category.length > 20
                    ? `${helper.category.slice(0, 20)}...`
                    : helper.category}
                </Text>
              </View>
            </View>
            <View style={styles.chatViewRight}>
              <TouchableOpacity onPress={handleChat}>
                <Image style={styles.chatIcon} source={images.chatIcon} />
              </TouchableOpacity>
              <View style={styles.chatViewRightBottom}>
                <Text
                  style={styles.textLightSmall}
                  onPress={() => {
                    setShowReachedModal(true);
                  }}>
                  Reviews ({helper.reviews})
                </Text>

                <View style={styles.starRatingContainer}>
                  <StarRating
                    disabled={true}
                    emptyStar={images.disabledStar}
                    fullStar={images.selectedStart}
                    starSize={16}
                    maxStars={5}
                    rating={helper.rating}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.onTheWay} style={styles.onTheWay} />
          <Text style={styles.modalText}>
            Great! Your Helper John Doe is on your way. Please sit tight
          </Text>
        </View>
      </Modal>

      <Modal
        isVisible={showReachedModal}
        onBackButtonPress={() => setShowReachedModal(false)}
        onBackdropPress={() => setShowReachedModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('JobTimer');
              setShowReachedModal(false)
            }}>
            <Image
              source={images.reachedModalImg}
              style={styles.reachedModalImg}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>
            The helper has reached your location, and now he will start the job.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
