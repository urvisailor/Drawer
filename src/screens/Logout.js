/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

const Logout = (props) => {
  const [islogout, setlogout] = useState(true);
  useEffect(() => {
    AsyncStorage.removeItem('UserData');
    props.navigation.navigate('Login');
    setlogout(false);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {islogout ? (
        <ActivityIndicator size="large" color="black"></ActivityIndicator>
      ) : (
        <></>
      )}
    </View>
  );
};
export default Logout;
