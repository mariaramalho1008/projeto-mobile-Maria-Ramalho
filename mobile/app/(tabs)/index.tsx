import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/nu bank.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá Maria!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Saldo em conta</ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">R$ 500,00.</ThemedText> 
        </ThemedText>
        <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PIX"
/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Caixinha</ThemedText>
        <ThemedText>
          R$ 500,00.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Cartão Virtual</ThemedText>
        <ThemedText>{' '}
        <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="VER MAIS"
/>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
