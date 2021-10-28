import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeDemo/HomeScreen';
import PlaygroundScreen from '../screens/PlayGround/PlayGroundScreen';

const stack = createStackNavigator();

const MapDemoNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRoutName="HomeDemo">
        <stack.Screen name="HomeDemo" component={HomeScreen} />
        <stack.Screen name="PlayGround" component={PlaygroundScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MapDemoNavigator;
