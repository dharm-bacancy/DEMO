import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '80%',
          marginLeft: '25%',
          fontSize: 30,
        }}>
        Home Screen!!!
      </Text>
      <Button
        title="Go to Playground"
        onPress={() => {
          props.navigation.navigate('PlayGround');
        }}
      />
    </View>
  );
};

export default HomeScreen;
