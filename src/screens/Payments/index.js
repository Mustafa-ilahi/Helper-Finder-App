import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import BottomBtn from '../../components/BottomBtn';
import Modal from 'react-native-modal';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function Payments({navigation}) {
  const [cardDetails, setCardDetails] = useState({
    type: 'VISA',
    name: 'Michael John',
    number: 'xxxx - xxxx - xxxx - xxxx',
    expiry: '01 / 24',
  });

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
    // navigation.navigate('');
  };

  const handleCardDetails = () => {
    navigation.navigate('CardDetails');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Payments'} />
        <View style={styles.separator}></View>
        <View style={styles.addCardRow}>
          <Text style={styles.headingMedium}>Payments</Text>
          <TouchableOpacity
            style={styles.addCardBtn}
            onPress={handleCardDetails}>
            <Text style={styles.addCardBtnText}>Add Card Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image style={styles.visaCardImg} source={images.visaCardImg} />
          <View style={styles.visaCardTextContainer}>
            <Text style={styles.type}>{cardDetails.type}</Text>
            <Text style={styles.number}>{cardDetails.number}</Text>
            <Text style={styles.name}>{cardDetails.name}</Text>
            <Text style={styles.expiry}>{cardDetails.expiry}</Text>
          </View>
        </View>
        <View style={Platform.OS == 'android' ? styles.bottomBtnContainer : styles.bottomBtnContainerIOS}>
          {Platform.OS == 'android' ? (
          <BottomBtn title={'Pay Now'} onPress={handleModal} />
          ) : (
          <BottomBtnIOS title={'Pay Now'} onPress={handleModal} />
          )}
        </View>
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.paymentProcessed} style={styles.modalCup} />
          <Text style={styles.modalText}>
            Your Payment was successfully processed
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
