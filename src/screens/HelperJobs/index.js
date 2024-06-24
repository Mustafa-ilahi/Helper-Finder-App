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

export default function HelperJobs({navigation, route}) {
  const {firstName, lastName, imgUri, imgUploaded} = route.params;

  const [disabledBtn, setDisabledBtn] = useState(true);

  const [categories, setCategories] = useState([
    {
      image: images.manualLabour,
      name: 'Manual Labour',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.deliveryServices,
      name: 'Delivery Services',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.cleaning,
      name: 'Cleaning',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.kitchenHand,
      name: 'Store Assistant / Kitchen Hand',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.lawnCare,
      name: 'Lawn Care',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.liftingObjects,
      name: 'Assistance with Lifting or Moving Objects',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
    {
      image: images.furniture,
      name: 'Setup / Install Equipment / Furniture',
      selected: false,
      hourlyPrice: '',
      description: '',
    },
  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleConfirm = () => {
    const selected = categories.filter(item => item.selected);
    if (selected.length > 0) {
      navigation.navigate('HelperJobDetails', {
        selected,
        firstName,
        lastName,
        imgUri,
        imgUploaded,
      });
    }
  };

  const handleSelect = index => {
    setCategories(prevCategories => {
      return prevCategories.map((item, i) => {
        if (i === index) {
          return {...item, selected: !item.selected};
        }
        return item;
      });
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <Text style={styles.headingMedium}>
          Select all the categories you wish to provide
        </Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollViewInnerContainer}>
              <View style={styles.categoriesRow}>
                {categories.map((item, index) => {
                  return (
                    <>
                    {Platform.OS == 'android' ? (
                      <TouchableOpacity
                      // key={index}
                      style={
                        item.selected
                          ? styles.categoryBtnSelected
                          : styles.categoryBtn
                      }
                      onPress={() => handleSelect(index)}>
                      <Image style={styles.categoryImg} source={item.image} />
                      <Text style={Platform.OS == 'android' ? styles.categoryName : styles.categoryNameIOS}>{item.name}</Text>
                    </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                      key={index}
                      style={
                        item.selected
                          ? styles.categoryBtnSelectedIOS
                          : styles.categoryBtnIOS
                      }
                      onPress={() => handleSelect(index)}>
                      <Image style={styles.categoryImg} source={item.image} />
                      <Text style={Platform.OS == 'android' ? styles.categoryName : styles.categoryNameIOS}>{item.name}</Text>
                    </TouchableOpacity>
                    )}
           </>
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <View style={Platform.OS == 'ios' && styles.margin}></View>
        </View>

        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}> 
          {Platform.OS == 'android' ? (
            <BottomBtn title={'Continue'} onPress={handleConfirm} />
          ) : (
            <BottomBtnIOS title={'Continue'} onPress={handleConfirm} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
