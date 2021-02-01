import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
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
//import {} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// krunal
import { TabActions } from '@react-navigation/native';
// !--krunal
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/screens/Home';
import Resource from '../src/screens/Resource';
import Supplier from '../src/screens/Supplier';
import QRcode from '../src/screens/QRcode';
import Login from '../src/screens/Login';
import Logout from '../src/screens/Logout';
import AsyncStorage from '@react-native-async-storage/async-storage';


const stack = createStackNavigator();
const drawer = createDrawerNavigator();

const authstack = createStackNavigator();

const configoptions = {
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
};

export const AuthNav = (props) => {
  return (
    <authstack.Navigator>
      <authstack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
        initialParams={{ postLogin: () => props.postLogin() }}
      />
      {/* <authstack.Screen
        name="Home"
        component={HomeNav}
        options={{
          // headerShown: 'false',
          header: () => null,
        }}
      /> */}
      {/* <authstack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: 'false',
        }}></authstack.Screen> */}
    </authstack.Navigator>
  );
};

const HomeNav = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={configoptions}
      />
      <stack.Screen
        name="resource"
        component={Resource}
        options={configoptions}></stack.Screen>
      <stack.Screen
        name="Supplier"
        component={Supplier}
        options={configoptions}></stack.Screen>
      <stack.Screen
        name="QRcode"
        component={QRcode}
        options={configoptions}></stack.Screen>
      <stack.Screen name="Logout" component={Logout}></stack.Screen>
    </stack.Navigator>
  );
};

const CustomDrawer = (props) => {
  console.log('props-->', props);
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,1)' }}>
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
            icon={({ color, size }) => (
              <Icon color="white" size={30} name="home-circle"></Icon>
            )}
            label="Home"
            labelStyle={{ color: 'white', fontSize: 20 }}
            onPress={() => props.navigation.navigate('Home')}></DrawerItem>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon color="white" size={30} name="truck-check"></Icon>
            )}
            label="Resources"
            labelStyle={{ color: 'white', fontSize: 20 }}
            onPress={() => props.navigation.navigate('resource')}></DrawerItem>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon color="white" size={30} name="history"></Icon>
            )}
            label="History"
            labelStyle={{ color: 'white', fontSize: 20 }}
            onPress={() => console.log('click')}></DrawerItem>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon color="white" size={30} name="qrcode-scan"></Icon>
            )}
            label="QRcode Scanner"
            labelStyle={{ color: 'white', fontSize: 20 }}
            onPress={() => props.navigation.navigate('QRcode')}></DrawerItem>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon color="white" size={30} name="account-settings"></Icon>
            )}
            label="Account Settings"
            labelStyle={{ color: 'white', fontSize: 20 }}
            onPress={() => console.log('click')}></DrawerItem>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.drawerStyle}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon color="white" size={size} name="exit-to-app"></Icon>
          )}
          label="Sign-Out"
          labelStyle={{ color: 'white', fontSize: 20 }}
          onPress={async () => {
            props.postLogout();
            await AsyncStorage.removeItem("UserData");
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export const MyDrawer = (restProps) => {
  return (
    <drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} {...restProps} />}>
      <drawer.Screen
        name="Home"
        component={HomeNav}
      />
      {/* <drawer.Screen name="resource" component={Resource}></drawer.Screen>
      <drawer.Screen name="Supplier" component={Supplier}></drawer.Screen>
      <drawer.Screen name="QRcode" component={QRcode}></drawer.Screen> */}
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
//export default MyDrawer;
