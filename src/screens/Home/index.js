import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import UserHeader from '../../components/UserHeader';

export default function Home({navigation}) {
  const [userImg, setUserImg] = useState(images.userImg);
  const [userName, setUserName] = useState('Michael John');
  const [userLocation, setUserLocation] = useState(
    '2464 Royal Ln. Mesa, New Jersey 45463',
  );

  const [categories, setCategories] = useState([
    {
      image: images.manualLabour,
      name: 'Manual Labour',
    },
    {
      image: images.deliveryServices,
      name: 'Delivery Services',
    },
    {
      image: images.cleaning,
      name: 'Cleaning',
    },
    {
      image: images.kitchenHand,
      name: 'Store Assistant / Kitchen Hand',
    },
    {
      image: images.lawnCare,
      name: 'Lawn Care',
    },
    {
      image: images.liftingObjects,
      name: 'Assistance with Lifting or Moving Objects',
    },
    {
      image: images.furniture,
      name: 'Setup / Install Equipment / Furniture',
    },
  ]);

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <UserHeader
          img={userImg}
          name={userName}
          location={userLocation}
          notification={true}
          seeker={true}
        />
        <Text style={styles.headingMedium}>What do you need help with?</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewInnerContainer}>
              <View style={styles.categoriesRow}>
                {categories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.categoryBtn}
                      onPress={() => {
                        navigation.navigate('Map');
                      }}>
                      <Image style={styles.categoryImg} source={item.image} />
                      <Text style={Platform.OS == 'android' ? styles.categoryName : styles.categoryNameIOS}>{item.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
