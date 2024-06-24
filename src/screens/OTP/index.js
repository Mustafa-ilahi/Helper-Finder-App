import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import {TextInput} from 'react-native';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import BottomBtn from '../../components/BottomBtn';
import {ScrollView} from 'react-native-gesture-handler';
import BottomBtnIOS from '../../components/BottomBtnIOS';

export default function OTP({navigation}) {
  const [value, setValue] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleConfirm = () => {
    navigation.navigate('TypeOfUser');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Header />
          <View style={styles.body}>
            <View>
              <Text style={styles.heading}>Enter Confirmation Code</Text>
              <Text style={styles.bodyText}>
                You would've received a confirmation code sent to the phone
                number * * 229
              </Text>
            </View>

            <View style={styles.codeFieldSection}>
              <View style={styles.codeFieldContainer}>
                <CodeField
                  ref={ref}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={
                    Platform.OS == 'android'
                      ? styles.codeFieldRoot
                      : styles.codeFieldRootIOS
                  }
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <>
                      {Platform.OS == 'android' ? (
                        <Text
                          key={index}
                          style={[styles.cell, isFocused && styles.focusCell]}
                          onLayout={getCellOnLayoutHandler(index)}>
                          {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                      ) : (
                        <View style={styles.cellIOSContainer}>
                          <Text
                            key={index}
                            style={[
                              styles.cellIOS,
                              isFocused && styles.focusCell,
                            ]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                />
              </View>

              <View style={styles.otpTextContainer}>
                <Text style={styles.forgetText}>Didn't receive the CODE? </Text>

                <TouchableOpacity>
                  <Text style={styles.forgetTextBold}>Resend</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* <View style={styles.otpTextContainer}>
            <Text style={styles.forgetText}>Not your number? </Text>

            <Text style={styles.forgetTextBold}>Change your number</Text>
          </View> */}
          </View>
          <View
            style={
              Platform.OS == 'android'
                ? styles.bottomBtnContainer
                : styles.bottomBtnContainerIOS
            }>
            {Platform.OS == 'android' ? (
              <BottomBtn title={'Confirm'} onPress={handleConfirm} />
            ) : (
              <BottomBtnIOS title={'Confirm'} onPress={handleConfirm} />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
