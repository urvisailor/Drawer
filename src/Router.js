import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/screens/Home';
import Resource from '../src/screens/Resource';
import Supplier from '../src/screens/Supplier';
import QRcode from '../src/screens/QRcode';
const stack = createStackNavigator();
const drawer = createDrawerNavigator();

const AuthNav = () => {
  return (
    <stack.Navigator>
      {/* <stack.Screen name='auth' component={}></stack.Screen> */}
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            marginRight: 38,
          },
        }}></stack.Screen>

      {/* <stack.Screen name='Resource' component={Resource}></stack.Screen> */}
    </stack.Navigator>
  );
};

const CustomDrawer = (props) => {
  console.log('props-->',props);
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,1)'}}>
      <View
        style={{
          backgroundColor: 'rgb(0,0,128)',
          height: 100,
          borderTopRightRadius: 190,
          borderBottomRightRadius: 190,
          // borderBottomRightRadius: 90,
          //  borderBottomLeftRadius: 90,
        }}>
        <View style={styles.Title}>
          <Title style={styles.Titlefonts}>Company Name</Title>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <DrawerItem
            icon={({color, size}) => (
              <Icon color="white" size={30} name="home-circle"></Icon>
            )}
            label="Home"
            labelStyle={{color: 'white', fontSize: 20}}
            onPress={() => props.navigation.navigate('Home')}></DrawerItem>
          <DrawerItem
            icon={({color, size}) => (
              <Icon color="white" size={30} name="truck-check"></Icon>
            )}
            label="Resources"
            labelStyle={{color: 'white', fontSize: 20}}
            onPress={() => props.navigation.navigate('resource')}></DrawerItem>
          <DrawerItem
            icon={({color, size}) => (
              <Icon color="white" size={30} name="history"></Icon>
            )}
            label="History"
            labelStyle={{color: 'white', fontSize: 20}}
            onPress={() => console.log('click')}></DrawerItem>
          <DrawerItem
            icon={({color, size}) => (
              <Icon color="white" size={30} name="qrcode-scan"></Icon>
            )}
            label="QRcode Scanner"
            labelStyle={{color: 'white', fontSize: 20}}
            onPress={() => props.navigation.navigate('QRcode')}></DrawerItem>
          <DrawerItem
            icon={({color, size}) => (
              <Icon color="white" size={30} name="account-settings"></Icon>
            )}
            label="Account Settings"
            labelStyle={{color: 'white', fontSize: 20}}
            onPress={() => console.log('click')}></DrawerItem>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.drawerStyle}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon color="white" size={size} name="exit-to-app"></Icon>
          )}
          label="Sign-Out"
          labelStyle={{color: 'white', fontSize: 20}}
          onPress={() => console.log('click')}></DrawerItem>
      </Drawer.Section>
    </View>
  );
};
const MyDrawer = () => {
  return (
    <drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <drawer.Screen name="Home" component={AuthNav}></drawer.Screen>
      <drawer.Screen name="resource" component={Resource}></drawer.Screen>
      <drawer.Screen name="Supplier" component={Supplier}></drawer.Screen>
      <drawer.Screen name="QRcode" component={QRcode}></drawer.Screen>
    </drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  drawerStyle: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  Title: {
    //textAlign:'center'
    marginLeft: 60,
    marginTop: 30,
    marginBottom: 30,
  },
  Titlefonts: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default MyDrawer;
