import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import UserHeader from '../../components/UserHeader';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import {colors} from '../../services';

export default function Map({navigation}) {
  const [showModal, setShowModal] = useState(false);
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

  const [helper, setHelper] = useState([
    {
      category: 'Delivery Services',
      name: 'John Doe',
      img: images.user1,
      rating: 4,
      price: '$20',
      pph: '4 MIN | $20 P/H',
      distance: '1.6 km',
      marker: false,
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      category: 'Delivery Services',
      name: 'John Wick',
      img: images.user2,
      rating: 4,
      price: '$18',
      pph: '6 MIN | $18 P/H',
      distance: '1.6 km',
      marker: false,
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      category: 'Delivery Services',
      name: 'Johnny Depp',
      img: images.user3,
      rating: 4,
      price: '$22',
      pph: '8 MIN | $22 P/H',
      distance: '1.6 km',
      marker: false,
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      category: 'Delivery Services',
      name: 'Jack William',
      img: images.user4,
      rating: 4,
      price: '$15',
      pph: '5 MIN | $15 P/H',
      distance: '1.6 km',
      marker: false,
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      category: 'Delivery Services',
      name: 'Henry Thomas',
      img: images.user5,
      rating: 4,
      price: '$25',
      pph: '10 MIN | $25 P/H',
      distance: '1.6 km',
      marker: false,
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
  ]);

  const [selectedHelper, setSelectedHelper] = useState(helper[0]);
  const [modal, setModal] = useState(false);

  const [categories, setCategories] = useState([
    {
      image: images.manualLabour,
      name: 'Manual Labour',
      selected: false,
    },
    {
      image: images.deliveryServices,
      name: 'Delivery Services',
      selected: false,
    },
    {
      image: images.cleaning,
      name: 'Cleaning',
      selected: false,
    },
    {
      image: images.kitchenHand,
      name: 'Store Assistant / Kitchen Hand',
      selected: false,
    },
    {
      image: images.lawnCare,
      name: 'Lawn Care',
      selected: false,
    },
    {
      image: images.liftingObjects,
      name: 'Assistance with Lifting or Moving Objects',
      selected: false,
    },
    {
      image: images.furniture,
      name: 'Setup / Install Equipment / Furniture',
      selected: false,
    },
  ]);

  const handleNotifications = () => {
    setFilter(!filter);
  };
  const scrollViewRef = useRef(null);

  const handleSelect = index => {
    setCategories(prevCategories => {
      return prevCategories.map((item, i) => {
        if (i === index) {
          return {...item, selected: !item.selected};
        }
        return item;
      });
    });

    const containerWidth = 100;
    const selectedContainerWidth = 150;
    const offset = (selectedContainerWidth - containerWidth) / 2;

    scrollViewRef.current.scrollTo({
      x: index * containerWidth - offset,
      animated: true,
    });
  };

  const handleJobRequest = () => {
    console.log(selectedHelper);
    navigation.navigate('JobRequest', {selectedHelper});
  };

  const handleMarkerSelect = index => {
    setHelper(prevHelper => {
      const updatedHelper = prevHelper.map((item, i) => {
        if (i === index) {
          setModal(true);
          return {...item, marker: !helper[index].marker};
        } else {
          return {...item, marker: false};
        }
      });

      const allMarkersFalse = updatedHelper.every(item => !item.marker);
      if (allMarkersFalse) {
        setModal(false);
      }
      return updatedHelper;
    });
  };

  const handleMarkerSelectFalse = () => {
    setHelper(prevHelper => {
      const updatedHelper = prevHelper.map((item, i) => {
        return {...item, marker: false};
      });
      return updatedHelper;
    });
  };

  const handleMapDirection = () => {
    navigation.navigate('MapDirections');
  };

  const [marker, setMarker] = useState([
    {
      latitude: 37.74225,
      longitude: -122.4324,
    },
    {
      latitude: 37.75225,
      longitude: -122.4324,
    },
    {
      latitude: 37.76225,
      longitude: -122.4324,
    },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <UserHeader
            img={userImg}
            name={userName}
            location={userLocation}
            filter={true}
            onPress={handleNotifications}
          />
          {filter === true && (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}>
                <View style={styles.scrollViewHorizontal}>
                  {categories.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={
                          item.selected
                            ? styles.categorySelected
                            : styles.category
                        }
                        onPress={() => handleSelect(index)}>
                        <Text
                          style={
                            item.selected ? styles.textSelected : styles.text
                          }>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </>
          )}
        </View>
        <Image style={styles.linearBg} source={images.linearBg} />

        <MapView
          style={styles.map}
          region={{
            latitude: 37.75225,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0722,
          }}></MapView>

        <View
          style={
            helper[1].marker
              ? styles.markerContainerLarge
              : styles.markerContainer
          }>
          <Text
            style={
              helper[1].marker ? styles.markerTextLarge : styles.markerTextSmall
            }>
            {helper[1].pph}
          </Text>
          <TouchableOpacity
            style={styles.marker}
            onPress={() => {
              handleMarkerSelect(1);
              // setModal(true);
              setSelectedHelper(helper[1]);
            }}>
            <Image
              style={
                helper[1].marker ? styles.markerImgLarge : styles.markerImgSmall
              }
              source={images.marker}
            />
            <Image
              style={helper[1].marker ? styles.user2Large : styles.user2Small}
              source={helper[1].img}
            />
          </TouchableOpacity>
        </View>

        <View
          style={
            helper[4].marker
              ? styles.markerContainer2Large
              : styles.markerContainer2
          }>
          <Text
            style={
              helper[4].marker ? styles.markerTextLarge : styles.markerTextSmall
            }>
            {helper[4].pph}
          </Text>
          <TouchableOpacity
            style={styles.marker}
            onPress={() => {
              handleMarkerSelect(4);
              // setModal(true);

              setSelectedHelper(helper[4]);
            }}>
            <Image
              style={
                helper[4].marker ? styles.markerImgLarge : styles.markerImgSmall
              }
              source={images.marker}
            />
            <Image
              style={helper[4].marker ? styles.user2Large : styles.user2Small}
              source={helper[4].img}
            />
          </TouchableOpacity>
        </View>

        <View
          style={
            helper[2].marker
              ? styles.markerContainer3Large
              : styles.markerContainer3
          }>
          <Text
            style={
              helper[2].marker ? styles.markerTextLarge : styles.markerTextSmall
            }>
            {helper[2].pph}
          </Text>
          <TouchableOpacity
            style={styles.marker}
            onPress={() => {
              handleMarkerSelect(2);
              // setModal(true);

              setSelectedHelper(helper[2]);
            }}>
            <Image
              style={
                helper[2].marker ? styles.markerImgLarge : styles.markerImgSmall
              }
              source={images.marker}
            />
            <Image
              style={helper[2].marker ? styles.user2Large : styles.user2Small}
              source={helper[2].img}
            />
          </TouchableOpacity>
        </View>

        <View
          style={
            helper[3].marker
              ? styles.markerContainer4Large
              : styles.markerContainer4
          }>
          <Text
            style={
              helper[3].marker ? styles.markerTextLarge : styles.markerTextSmall
            }>
            {helper[3].pph}
          </Text>
          <TouchableOpacity
            style={styles.marker}
            onPress={() => {
              handleMarkerSelect(3);
              // setModal(true);

              setSelectedHelper(helper[3]);
            }}>
            <Image
              style={
                helper[3].marker ? styles.markerImgLarge : styles.markerImgSmall
              }
              source={images.marker}
            />
            <Image
              style={helper[3].marker ? styles.user2Large : styles.user2Small}
              source={helper[3].img}
            />
          </TouchableOpacity>
        </View>

        <View
          style={
            helper[0].marker
              ? styles.markerContainer5Large
              : styles.markerContainer5
          }>
          <Text
            style={
              helper[0].marker ? styles.markerTextLarge : styles.markerTextSmall
            }>
            {helper[0].pph}
          </Text>
          <TouchableOpacity
            style={styles.marker}
            onPress={() => {
              handleMarkerSelect(0);
              // setModal(true);

              setSelectedHelper(helper[0]);
            }}>
            <Image
              style={
                helper[0].marker ? styles.markerImgLarge : styles.markerImgSmall
              }
              source={images.marker}
            />
            <Image
              style={helper[0].marker ? styles.user2Large : styles.user2Small}
              source={helper[0].img}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.yourLocationIconContainer}
          onPress={handleMapDirection}>
          <Image
            style={styles.yourLocationIcon}
            source={images.yourLocationIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mapLocationIconContainer}
          onPress={() => {
            setShowModal(!showModal);
          }}>
          <Image
            style={styles.mapLocationIcon}
            source={images.mapLocationIcon}
          />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={modal}
        onBackButtonPress={() => {
          setModal(false);
        }}
        hasBackdrop={false}
        coverScreen={false}>
        {/* <View style={styles.modal}> */}
        <TouchableOpacity
          style={Platform.OS == 'android' ? styles.itemContainer : styles.itemContainerIOS}
          onPress={handleJobRequest}>
          <View style={styles.itemContainerLeft}>
            <View style={styles.helperDetail}>
              <Image style={styles.userImg} source={selectedHelper.img} />
              <View>
                <Text style={styles.textBold}>{selectedHelper.name}</Text>
                <Text style={styles.textLightSmall}>
                  {selectedHelper.distance} away
                </Text>
              </View>
            </View>
            <View style={styles.starRatingContainer}>
              <StarRating
                disabled={true}
                emptyStar={images.disabledStar}
                fullStar={images.selectedStart}
                starSize={18}
                maxStars={5}
                rating={selectedHelper.rating}
              />
            </View>
          </View>
          <View style={styles.itemContainerRight}>
            <View style={styles.jobContainer}>
              <Text style={styles.jobText}>
                {selectedHelper.category.length > 18
                  ? `${selectedHelper.category.slice(0, 18)}...`
                  : selectedHelper.category}
              </Text>
            </View>
            <Text style={styles.textBold}>{selectedHelper.price}/hr</Text>
          </View>

          <TouchableOpacity
            style={styles.modalCrossContainer}
            onPress={() => {
              setModal(false);
              handleMarkerSelectFalse();
            }}>
            <Image style={styles.modalCross} source={images.modalCross} />
          </TouchableOpacity>
        </TouchableOpacity>
        {/* </View> */}
      </Modal>

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
          <Image
            source={images.reachedModalImg}
            style={styles.reachedModalImg}
          />
          <Text style={styles.modalText}>
            The helper has reached your location, and now he will start the job.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
