import {View, Text, SafeAreaView, Image, Touchable} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {sizes} from '../../services';

export default function HelperHeader({title, img}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack}>
        <Image style={styles.backIcon} source={images.headerBackArrow} />
      </TouchableOpacity>
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <Image style={styles.img} source={img} />
    </View>
  );
}
