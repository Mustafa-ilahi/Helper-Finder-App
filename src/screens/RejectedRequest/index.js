import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import StarRating from 'react-native-star-rating';
import {colors, sizes} from '../../services';
import HelperHeader from '../../components/HelperHeader';
import Header from '../../components/Header';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function RejectedRequest({navigation}) {
  const [helper, setHelper] = useState({
    category: 'Delivery Services',
    name: 'John Doe',
    img: images.user1,
    rating: 4,
    price: '$20',
    description:
      "Hello there! 👋 I'm John Doe, your go to delivery expert with a passion for prompt and reliable service. With a smile always ready, I'm here to ensure your packages reach you safely and on time.",
  });

  const handle = () => {};

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Rejected Request'} />

        <View style={styles.separator}></View>

        <View style={styles.helperImgContainer}>
          <Image style={styles.helperImg} source={helper.img} />
        </View>

        <Text style={styles.heading}>{helper.name}</Text>
        <View style={Platform.OS == 'android' ? styles.categoryContainer : styles.categoryContainerIOS}>
          <Text style={styles.textBlueSmall}>{helper.category}</Text>
        </View>

        <Text style={styles.disabledTextMedium}>
          We regret to inform you that your job request has been rejected. We
          appreciate your understanding and encourage you to try another helper
          for your needs.
        </Text>

        <View style={Platform.OS == 'android' ?  styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Try Another Helper'} onPress={handle} />
          ) : (
          <BottomBtnIOS title={'Try Another Helper'} onPress={handle} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
