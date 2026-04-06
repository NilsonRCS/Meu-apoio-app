import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeFeature from '../features/home';
import MeditationFeature from '../features/meditation';
import MusicFeature from '../features/music';
import OvercomeFeature from '../features/overcome';
import HelpFeature from '../features/help';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeFeature} />
        <Stack.Screen name="Meditation" component={MeditationFeature} />
        <Stack.Screen name="Music" component={MusicFeature} />
        <Stack.Screen name="Overcome" component={OvercomeFeature} />
        <Stack.Screen name="Help" component={HelpFeature} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
