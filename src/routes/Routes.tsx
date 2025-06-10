import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFeature from '../features/home';
import AuthFeature from '../features/auth';
import ProfileFeature from '../features/profile';

const Tab = createBottomTabNavigator();
const isFooterVisible = false;

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          ...(isFooterVisible
            ? {
                tabBarActiveTintColor: '#708238',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                  borderTopWidth: 0,
                  elevation: 0,
                },
              }
            : {
                tabBarStyle: { display: 'none' },
              }),
        }}
      >
        <Tab.Screen name="Auth" component={AuthFeature} />
        <Tab.Screen name="Home" component={HomeFeature} />
        <Tab.Screen name="Profile" component={ProfileFeature} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes; 