import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {colors} from '../../services';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function HelperJobDetails({navigation, route}) {
  const {selected, firstName, lastName, imgUri, imgUploaded} = route.params;
  const [index, setIndex] = useState(0);

  const [selectedCategories, setSelectedCategories] = useState(selected);

  const handleNext = () => {
    if (
      index + 1 < selected.length &&
      selectedCategories[index].description !== '' &&
      selectedCategories[index].hourlyPrice !== ''
    ) {
      setIndex(index + 1);
    }
  };

  const handleSave = () => {
    console.log(selectedCategories);

    if (
      selectedCategories[index].description !== '' &&
      selectedCategories[index].hourlyPrice !== ''
    )
      navigation.navigate('HelperGetStarted', {
        firstName,
        lastName,
        imgUri,
        imgUploaded,
      });
  };

  const handleHourlyPriceChange = text => {
    const updatedCategories = [...selectedCategories];
    updatedCategories[index].hourlyPrice = text;
    setSelectedCategories(updatedCategories);
  };

  const handleUpdatedDescription = text => {
    const updatedDescription = [...selectedCategories];
    updatedDescription[index].description = text;
    setSelectedCategories(updatedDescription);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />

          <View style={styles.body}>
            <Text style={styles.headingMedium}>Add Helper Information</Text>

            <View style={Platform.OS == 'android' ? styles.categoryBtn : styles.categoryBtnIOS}>
              <Image
                style={styles.categoryImg}
                source={selectedCategories[index].image}
              />
              <Text style={styles.categoryName}>
                {selectedCategories[index].name}
              </Text>
            </View>
            <Text style={styles.textLightSmall}>Your hourly rates</Text>
            <View style={styles.inputFieldContainer}>
              <Text style={styles.textBoldMedium}>$ </Text>
              <TextInput
                style={styles.inputField}
                placeholder="20"
                value={selectedCategories[index].hourlyPrice}
                placeholderTextColor={colors.disabledBg2}
                onChangeText={handleHourlyPriceChange}
                keyboardType="numeric"
              />
            </View>
            <Text style={styles.textLightSmall}>
              Briefly tell us your experience about this role, and what you can
              and can't do
            </Text>

            <View style={styles.inputFieldContainerLarge}>
              <TextInput
                style={styles.inputFieldLarge}
                placeholder="Your job description here..."
                value={selectedCategories[index].description}
                placeholderTextColor={colors.disabledBg2}
                onChangeText={handleUpdatedDescription}
                multiline
              />
            </View>
          </View>

          <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
            {Platform.OS == 'android' ? (
                <BottomBtn
                title={index + 1 === selected.length ? 'Save' : 'Next'}
                onPress={() => {
                  index + 1 === selected.length ? handleSave() : handleNext();
                }}
              />
            ) : (
              <BottomBtnIOS
              title={index + 1 === selected.length ? 'Save' : 'Next'}
              onPress={() => {
                index + 1 === selected.length ? handleSave() : handleNext();
              }}
            />
            )}
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
