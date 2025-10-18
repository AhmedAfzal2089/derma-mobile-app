// components/CustomSplash.tsx
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function CustomSplash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../public/logo_black.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
});
