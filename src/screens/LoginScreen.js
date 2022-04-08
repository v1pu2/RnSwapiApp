import React, {useState} from 'react';

import {StyleSheet, Dimensions, Text, View, Alert} from 'react-native';
import Button from '../components/Button';
import c_styles from '../theme/CommonStyles';
import Auth0 from 'react-native-auth0';
import Colors from '../theme/Colors';

var credentials = require('../../auth0-configuration');
const auth0 = new Auth0(credentials);

const deviceWidth = Dimensions.get('window').width;
const LoginScreen = props => {
  const [accessToken, setAccessToken] = useState(null);

  const callWebAuth = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then(credentials => {
        Alert.alert('AccessToken: ' + credentials.accessToken);
        setAccessToken(credentials.accessToken);
        props.navigation.navigate('Home');
      })
      .catch(error => console.log('erroe login', error));
  };
  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then(success => {
        Alert.alert('Logged out!');
        setAccessToken(null);
      })
      .catch(error => {
        console.log('Log out cancelled');
      });
  };
  const validateLogin = () => {
    callWebAuth();
  };

  let loggedIn = accessToken !== null;
  return (
    <View style={c_styles.container}>
      <View style={styles.topView}>
        <Text style={styles.txtTitle}>Welcome</Text>
        <Text style={c_styles.txtSubTitle}>SSO Login with Auth0</Text>
        <Text style={styles.txtLoginStatus}>
          You are{loggedIn ? ' ' : ' not '}logged in.{' '}
        </Text>
      </View>
      <View style={styles.SectionStyle}>
        <Button
          text={loggedIn ? 'Log Out' : 'Log In'}
          onPress={loggedIn ? onLogout : validateLogin}
        />
      </View>
    </View>
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
    fontSize: 36,
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
  txtLoginStatus: {
    fontSize: 16,
    color: Colors.color0,
    lineHeight: 20,
  },
});

export default LoginScreen;
