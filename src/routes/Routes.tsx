import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFeature from '../features/home';
import AuthFeature from '../features/auth';
import ProfileFeature from '../features/profile';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeFeature} />
        <Tab.Screen name="Auth" component={AuthFeature} />
        <Tab.Screen name="Profile" component={ProfileFeature} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes; 