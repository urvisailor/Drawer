/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ route }, props) => {
  const click = async () => {
    await AsyncStorage.setItem(
      'UserData',
      JSON.stringify({
        user: 'urvisailor@gmail.com',
        token: 'bchasbfjhvsdfhvjdshfbjhdsbfh',
      }),
    );
    route.params.postLogin();
    // props.navigation.navigate('Home');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button title="Login" onPress={click}></Button>
    </View>
  );
};
export default Login;
