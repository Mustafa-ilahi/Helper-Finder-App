import React, {useState} from 'react';
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
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import {colors} from '../../services';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function CardDetails({navigation}) {
  const [cardDetails, setCardDetails] = useState({
    type: 'VISA',
    name: 'Michael John',
    number: 'xxxx - xxxx - xxxx - xxxx',
    expiry: '01 / 24',
    cvv: '',
  });

  const [updatedCardDetails, setUpdatedCardDetails] = useState({
    type: 'VISA',
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });

  const updateCardDetails = () => {
    setCardDetails({
      ...cardDetails,
      name: updatedCardDetails.name,
      number: updatedCardDetails.number,
      expiry: updatedCardDetails.expiry,
      cvv: updatedCardDetails.cvv,
    });
  };

  const handle = () => {
    // navigation.navigate('');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header title={'Card Details'} />
          <View style={styles.separator}></View>

          <View style={styles.card}>
            <Image style={styles.visaCardImg} source={images.visaCardImg} />
            <View style={styles.visaCardTextContainer}>
              <Text style={styles.type}>{cardDetails.type}</Text>
              <Text style={styles.number}>{cardDetails.number}</Text>
              <Text style={styles.name}>{cardDetails.name}</Text>
              <Text style={styles.expiry}>{cardDetails.expiry}</Text>
            </View>
          </View>

          <Text style={styles.inputLabel}>Name on Card</Text>
          <View
            style={
              Platform.OS == 'android' ? styles.inputView : styles.inputViewIOS
            }>
            <TextInput
              style={styles.inputField}
              placeholder="Name on card"
              placeholderTextColor={colors.disabledBg}
              value={updatedCardDetails.name}
              onChangeText={text => {
                setUpdatedCardDetails(prevState => {
                  return {...prevState, name: text};
                });
              }}
            />
          </View>
          <Text style={styles.inputLabel}>Card Number</Text>
          <View
            style={
              Platform.OS == 'android' ? styles.inputView : styles.inputViewIOS
            }>
            {/* <TextInput
            style={styles.inputField}
            keyboardType="numeric"
            placeholder="Card Number"
            placeholderTextColor={colors.disabledBg}
            value={updatedCardDetails.number}
            onChangeText={text => {
              const numericText = text.replace(/\D/g, '');

              const limitedText = numericText.slice(0, 16);
              var formattedText = limitedText.replace(/(.{4})/g, '$1 - ');

              setUpdatedCardDetails(prevState => {
                return {...prevState, number: formattedText};
              });
            }}
          /> */}

            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              placeholder="Card Number"
              placeholderTextColor={colors.disabledBg}
              value={updatedCardDetails.number}
              onChangeText={text => {
                setUpdatedCardDetails(prevState => {
                  return {...prevState, number: text};
                });
              }}
            />
          </View>

          <View style={styles.inputViewRow}>
            <View>
              <Text style={styles.inputLabel2}>Expiry Date</Text>
              <View
                style={
                  Platform.OS == 'android'
                    ? styles.inputView2
                    : styles.inputView2IOS
                }>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputField2}
                  placeholder="Exp. Date"
                  placeholderTextColor={colors.disabledBg}
                  value={updatedCardDetails.expiry}
                  onChangeText={text => {
                    setUpdatedCardDetails(prevState => {
                      return {...prevState, expiry: text};
                    });
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={styles.inputLabel2}>Security Code</Text>
              <View
                style={
                  Platform.OS == 'android'
                    ? styles.inputView2
                    : styles.inputView2IOS
                }>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputField2}
                  placeholder="CVV"
                  placeholderTextColor={colors.disabledBg}
                  value={updatedCardDetails.cvv}
                  onChangeText={text => {
                    setUpdatedCardDetails(prevState => {
                      return {...prevState, cvv: text};
                    });
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            {Platform.OS == 'android' ? (
              <BottomBtn title={'Save'} onPress={updateCardDetails} />
            ) : (
              <BottomBtnIOS title={'Save'} onPress={updateCardDetails} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
