import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors} from '../../services';
import Modal from 'react-native-modal';

export default function FindingHelpers({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.heading}>Finding Closest Helpers</Text>
          <View>
            {loader === true && (
              <ActivityIndicator color={colors.disabledBg2} size={60} />
            )}

            <Text style={styles.textLight}>
              Please wait while your request is sending
            </Text>
          </View>
        </View>
      </View>

      <Modal
        isVisible={showModal}
        onBackButtonPress={() => {
          setShowModal(false);
          setLoader(false);
        }}
        onBackdropPress={() => {
          setShowModal(false);
          setLoader(false);
        }}
        backdropOpacity={0.5}>
        <View style={styles.modalBody}>
          <Image source={images.requestSentThumb} style={styles.modalImg} />
          <Text style={styles.textLight}>
            Job Request sent to the closest 5 helpers. Please wait for a helper
            to accept your job request
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
