import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator from './app/Navigations/TopTabNavigator';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <TopTabNavigator />
      </NavigationContainer>
    </View>
  );
}
