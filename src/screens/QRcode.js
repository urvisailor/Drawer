import React, {Component, useState} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const QRcode = () => {
  const [result, setresult] = useState('');
  onSuccess = (e) => {
    setresult(e.data);
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text>QR Code Scanner</Text>
        <Text>Scan your code</Text>
        {result != null ? <Text>{result}</Text> : null}
      </View>
      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        onRead={onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to{' '}
        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //     your computer and scan the QR code.
        //   </Text>
        // }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
      <View style={{padding: 20}}>
        <Text>QR Code Scanner</Text>
        <Text>Scan your code</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QRcode;
