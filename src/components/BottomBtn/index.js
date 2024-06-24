import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function BottomBtn({title, onPress, btnType}) {
  return (
    <TouchableOpacity
      style={btnType ? styles.signInBtn2 : styles.signInBtn}
      onPress={() => {
        onPress();
      }}>
      <Text style={btnType ? styles.signInBtnText2 : styles.signInBtnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
