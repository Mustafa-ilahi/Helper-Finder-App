import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {styles} from './style';
import images from '../../services/utilities/images';
import BottomBtn from '../../components/BottomBtn';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';

export default function HelperChat({navigation, route}) {
  const {jobRequest} = route.params;
  console.log(jobRequest);

  const [newMsg, setNewMsg] = useState();

  const handle = () => {};

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        <View style={styles.mainContainer}>
          <Header title={'Chat'} />
          <View style={styles.separator}></View>
          <View style={styles.scrollView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.userMsgContainerMain}>
                <Image style={styles.senderImg} source={jobRequest.seekerImg} />
                <View style={styles.userMsgContainer}>
                  <View style={styles.userMsg}>
                    <Text style={styles.userMsgText}>Lorem ipsum</Text>
                  </View>
                  <View style={styles.userMsg}>
                    <Text style={styles.userMsgText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </Text>
                  </View>
                  <Text style={styles.msgSentTimeText}>8:29 pm</Text>
                </View>
              </View>
              <View style={styles.senderMsgContainerMain}>
                <View style={styles.senderMsg}>
                  <Text style={styles.userMsgTextWhite}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Text>
                </View>
                <Text style={styles.msgSentTimeText}>8:29 pm</Text>
              </View>

              <View style={styles.userMsgContainerMain}>
                <Image style={styles.senderImg} source={jobRequest.seekerImg} />
                <View style={styles.userMsgContainer}>
                  <View style={styles.userMsg}>
                    <Text style={styles.userMsgText}>
                      Duis aute irure dolor in reprehenderit in voluptate
                    </Text>
                  </View>
                  <Text style={styles.msgSentTimeText}>8:29 pm</Text>
                </View>
              </View>

              <View style={styles.senderMsgContainerMain}>
                <View style={styles.senderMsg}>
                  <Text style={styles.userMsgTextWhite}>
                    Ut enim ad minim veniam, quis nostrud
                  </Text>
                </View>
                <Text style={styles.msgSentTimeText}>8:29 pm</Text>
              </View>
            </ScrollView>
          </View>
            <View
              style={
                Platform.OS == 'android'
                  ? styles.newMsgContainer
                  : styles.newMsgContainerIOS
              }>
              <TextInput
                style={styles.inputField}
                multiline
                placeholder="Write a message"
                placeholderTextColor={colors.disabledBg2}
                value={newMsg}
                onChangeText={text => {
                  setNewMsg(text);
                }}
              />
              <TouchableOpacity style={styles.sendMsgButton}>
                <Image style={styles.sendMsgIcon} source={images.sendMsgIcon} />
              </TouchableOpacity>
            </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
