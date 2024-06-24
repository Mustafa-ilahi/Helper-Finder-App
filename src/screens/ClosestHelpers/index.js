import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors} from '../../services';
import StarRating from 'react-native-star-rating';

export default function ClosestHelpers({navigation}) {
  const [helpers, setHelpers] = useState([
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
    {
      image: images.user1,
      name: 'John Doe',
      job: 'Delivery Services',
      distance: '1.6 km',
      rating: 4,
      price: '$20/hr',
    },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.heading}>Closest Helpers</Text>

          <Text style={styles.textLight}>
            Please wait for a helper to accept your job request
          </Text>
          <View style={styles.scrollViewContainer}>
            <ScrollView>
              <View style={styles.scrollViewBody}>
                {helpers?.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} style={styles.itemContainer}>
                      <View style={styles.itemContainerLeft}>
                        <View style={styles.helperDetail}>
                          <Image style={styles.userImg} source={item.image} />
                          <View>
                            <Text style={styles.textBold}>{item.name}</Text>
                            <Text style={styles.textLightSmall}>
                              {item.distance} away
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
                            rating={item.rating}
                          />
                        </View>
                      </View>
                      <View style={styles.itemContainerRight}>
                        <View style={styles.jobContainer}>
                          <Text style={styles.jobText}>
                            {/* {item.job.length > 16
                              ? `${item.job.slice(0, 16)}...`
                              : item.job} */}

                            {item.job}
                          </Text>
                        </View>
                        <Text style={styles.textBold}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={Platform.OS == 'ios' && styles.marginBottom}></View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
