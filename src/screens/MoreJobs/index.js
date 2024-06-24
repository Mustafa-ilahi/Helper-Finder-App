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
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function MoreJobs({navigation, route}) {
  // const [helper, setHelper] = useState({
  //   category: 'Delivery Services',
  //   name: 'John Doe',
  //   img: images.user1,
  //   rating: 4,
  //   price: '$20',
  //   description:
  //     "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
  // });

  const {helper} = route.params;

  const [categories, setCategories] = useState([
    {
      image: images.manualLabour,
      name: 'Manual Labour',
      selected: false,
      rating: 4,
      price: '$20',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.deliveryServices,
      name: 'Delivery Services',
      selected: false,
      rating: 4,
      price: '$30',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.cleaning,
      name: 'Cleaning',
      selected: false,
      rating: 4,
      price: '$40',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.kitchenHand,
      name: 'Store Assistant / Kitchen Hand',
      selected: false,
      rating: 4,
      price: '$50',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.lawnCare,
      name: 'Lawn Care',
      selected: false,
      rating: 4,
      price: '$60',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.liftingObjects,
      name: 'Assistance with Lifting or Moving Objects',
      selected: false,
      rating: 4,
      price: '$70',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
    {
      image: images.furniture,
      name: 'Setup / Install Equipment / Furniture',
      selected: false,
      rating: 4,
      price: '$80',
      description:
        "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const scrollViewRef = useRef(null);

  const handleCategoryPress = index => {
    setCategories(prevCategories => {
      const updatedCategories = prevCategories.map((item, i) => {
        if (i === index) {
          return {...item, selected: true};
        } else if (item.selected) {
          return {...item, selected: false};
        }
        return item;
      });
      return updatedCategories;
    });

    const selecteddCategory = categories[index];
    setSelectedCategory({
      ...selectedCategory,
      rating: selecteddCategory.rating,
      price: selecteddCategory.price,
      description: selecteddCategory.description,
    });

    const containerWidth = sizes.screenWidth * 0.33;
    const selectedContainerWidth = sizes.screenWidth * 0.38;
    const offset = (selectedContainerWidth - containerWidth) / 2;

    scrollViewRef.current.scrollTo({
      x: index * containerWidth - offset,
      animated: true,
    });
  };

  const handleSelectJob = () => {};

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <HelperHeader title={helper.name} img={helper.img} />

        <View style={styles.separator}></View>
        <View style={styles.scrollViewContainer}>
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
                        ? styles.categoryContainerSelected
                        : styles.categoryContainer
                    }
                    onPress={() => {
                      handleCategoryPress(index);
                    }}>
                    <Image style={styles.categoryImg} source={item.image} />
                    <Text style={styles.categoryName}>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.descriptionBody}>
          <Text style={styles.disabledTextMedium}>Hourly Price</Text>
          <Text style={styles.textBold}>{selectedCategory.price}</Text>
          <Text style={styles.disabledTextMedium}>Description</Text>
          <Text style={styles.textBlack}>{helper.description}</Text>
          <Text style={styles.disabledTextMedium}>Ratings</Text>

          <View style={styles.ratingContainer}>
            <StarRating
              disabled={true}
              emptyStar={images.disabledStar}
              fullStar={images.selectedStart}
              starSize={20}
              maxStars={5}
              rating={helper.rating}
            />
          </View>
        </View>
        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Select Job'} onPress={handleSelectJob} />
          ) : (
          <BottomBtnIOS title={'Select Job'} onPress={handleSelectJob} />
          ) }
        </View>
      </View>
    </SafeAreaView>
  );
}
