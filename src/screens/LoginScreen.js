import React, {useState, useRef} from 'react';

import {
  StyleSheet,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Alert,
} from 'react-native';
import Button from '../components/Button';
import c_styles from '../theme/CommonStyles';
import Auth0 from 'react-native-auth0';

var credentials = require('../../auth0-configuration');
const auth0 = new Auth0(credentials);

const deviceWidth = Dimensions.get('window').width;
const LoginScreen = props => {
  const [accessToken, setAccessToken] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const passRef = useRef();

  const validateEmail = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) !== true) {
      Alert.alert('Email should be valid');
      return false;
    } else if (userEmail.toLowerCase() !== props.user?.email.toLowerCase()) {
      Alert.alert('User is not registered');
      return false;
    } else {
      return true;
    }
  };
  const callWebAuth = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then(credentials => {
        Alert.alert('AccessToken: ' + credentials.accessToken);
        setAccessToken(credentials.accessToken);
      })
      .catch(error => console.log('erroe login', error));
  };
  const validateLogin = () => {
 
    // userEmail && userEmail !== '' && validateEmail() && 
    callWebAuth();
       props.navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView style={c_styles.container}>
      <View style={styles.topView}>
        <Text style={styles.txtTitle}>Welcome</Text>
        <Text style={c_styles.txtSubTitle}>Sub-title text goes here</Text>
      </View>
      <View style={styles.SectionStyle}>
        <TextInput
          style={c_styles.inputStyle}
          value={userEmail}
          placeholder="Email Address *"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            passRef.current.focus();
          }}
          onChangeText={item => setUserEmail(item)}
          placeholderTextColor="#8b9cb5"
          underlineColorAndroid="#f000"
        />

        <TextInput
          ref={passRef}
          style={c_styles.inputStyle}
          value={userPassword}
          onChangeText={item => setUserPassword(item)}
          placeholder="Password *"
          placeholderTextColor="#8b9cb5"
          secureTextEntry={true}
        />

        <Button text="Login" onPress={validateLogin} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  topView: {width: deviceWidth, alignItems: 'center'},
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#041115',
  },
  SectionStyle: {
    width: deviceWidth,
    paddingHorizontal: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
});

export default LoginScreen;
