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
import {colors} from '../../services';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleforgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.body}>
            <Text style={styles.heading}>Sign In</Text>

            <View style={Platform.OS == 'android' ? styles.bodyMain : styles.bodyMainIOS}>
              <View style={Platform.OS == 'android' ? styles.inputRow : styles.inputRow1IOS}>
                <Image style={styles.inputIcon} source={images.emailIcon} />
                <TextInput
                  style={styles.inputField}
                  placeholder="Username"
                  placeholderTextColor={colors.disabledBg2}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                />
              </View>
              <View style={styles.separator}></View>

              <View style={Platform.OS == 'android' ? styles.inputRow : styles.inputRowIOS}>
                <Image style={styles.inputIcon} source={images.passwordIcon} />
                <TextInput
                  secureTextEntry={hidePassword}
                  style={styles.inputPassField}
                  placeholder="Password"
                  placeholderTextColor={colors.disabledBg2}
                  value={password}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}>
                  <Image
                    style={styles.eyeIcon}
                    source={hidePassword ? images.hidePass : images.showPass}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.separator}></View>

              <TouchableOpacity
                style={styles.forgotContainer}
                onPress={handleforgotPassword}>
                <Text style={Platform.OS == 'android' ? styles.forgotText : styles.forgotTextIOS}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={Platform.OS == 'android' ? styles.signInBtn : styles.signInBtnIOS}
              onPress={() => {
                navigation.navigate('TabNavigation');
              }}>
              <Text style={styles.signInBtnText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.bottomLinkContainer}>
              <Text style={styles.bottomLinkText}>Don't have an account? </Text>
              <TouchableOpacity
                style={styles.bottomLink}
                onPress={handleSignUp}>
                <Text style={styles.bottomLinkTextBold}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
