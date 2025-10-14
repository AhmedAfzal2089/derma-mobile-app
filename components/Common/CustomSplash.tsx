// components/CustomSplash.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CustomSplash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} style={styles.image} />
      <Text style={styles.text}>Welcome to MyApp</Text>
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
