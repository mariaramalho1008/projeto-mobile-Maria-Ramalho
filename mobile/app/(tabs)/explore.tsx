import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/nubank.jpg')}
        style={styles.reactLogo}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pix</ThemedText>
      </ThemedView>
      <ThemedText>Para quem vai transferir?</ThemedText>
      <Collapsible title="Marilin Glinski Pereira Ramalho">
        <ThemedText>
          (41) 98123-7645{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Maria Eduarda Rodrigues Rosa">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">(41) 97629-1312</ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Samara Steski">
        <ThemedText>
          (41) 98456-4241
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
       
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Isabella Vitoria">
        <ThemedText>
          (41) 98563-6572<ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Oracildo Ramalho">
        <ThemedText>
          (41) 95337-1313{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
          
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Erica Rodrigues">
        <ThemedText>
          (41) 96448-4105{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },  

  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
