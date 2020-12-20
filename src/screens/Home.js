/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useLayoutEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = (props) => {
  //console.log(props);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <Ionicons
            name="menu"
            size={23}
            color="white"
            style={{marginLeft: 20}}
            onPress={() => props.navigation.toggleDrawer()}></Ionicons>
        );
      },
    });
  }, [props.navigation]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
export default Home;
