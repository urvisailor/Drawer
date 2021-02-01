/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer, AuthNav } from './src/Router';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  // const [islogin, setlogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginFromState, setIsLoginFromState] = useState(false);

  useEffect(() => {
    fetchdetails();
  }, []);

  const fetchdetails = async () => {
    const logindata = await AsyncStorage.getItem('UserData');
    if (logindata != null) {
      // setlogin(true);
      setIsLoginFromState(true);
    }
    setIsLoading(false);
  }

  const loadingPages = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator
          size="small"
          color="black"
        />
      </View>
    );
  }

  if (isLoading) return loadingPages();

  return (
    <NavigationContainer>
      {
        isLoginFromState
          ?
          <MyDrawer postLogout={() => setIsLoginFromState(false)} />
          :
          <AuthNav postLogin={() => setIsLoginFromState(true)} />
      }
    </NavigationContainer>
  );
};
export default App;
