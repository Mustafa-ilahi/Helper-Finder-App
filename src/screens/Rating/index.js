import React, {useEffect, useState, useRef} from 'react';
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
import BottomBtn from '../../components/BottomBtn';
import StarRating from 'react-native-star-rating';
import {colors, sizes} from '../../services';
import HelperHeader from '../../components/HelperHeader';
import Header from '../../components/Header';

export default function Rating({navigation}) {
  const [helper, setHelper] = useState({
    category: 'Delivery Services',
    name: 'John Doe',
    img: images.user1,
    rating: 4,
    price: '$20',
    description:
      "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
  });

  const [review, setReview] = useState('');
  const [starCount, setStarCount] = useState(0);
  const onStarRatingPress = rating => {
    setStarCount(rating);
  };

  const handleSubmit = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header title={'Rating'} />

          <View style={styles.separator}></View>

          <View style={styles.reviewContainer}>
            <View style={styles.helperImgContainer}>
              <Image style={styles.helperImg} source={helper.img} />
            </View>
            <View style={styles.reviewBody}>
              <Text style={styles.heading}>{helper.name}</Text>
              <View style={styles.categoryContainer}>
                <Text style={styles.textBlueSmall}>{helper.category}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <StarRating
                  disabled={false}
                  // emptyStarColor="#FFC259"
                  // fullStarColor="#FFC259"

                  emptyStar={images.disabledStar}
                  fullStar={images.selectedStart}
                  starSize={sizes.screenWidth * 0.06}
                  maxStars={5}
                  rating={starCount}
                  selectedStar={rating => onStarRatingPress(rating)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Write a review"
                  placeholderTextColor={colors.disabledBg2}
                  style={styles.inputField}
                  multiline
                  value={review}
                  onChangeText={text => {
                    setReview(text);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
            <BottomBtn title={'Submit'} onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
