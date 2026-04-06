import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthFeature from '../features/auth';
import AppTabs from './AppTabs';
import { useAuthStore } from '../store/authStore';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="App" component={AppTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthFeature} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
