import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

const Login = () => {
  <View>
    <Text>Hi from Login</Text>
  </View>;
};
const SignUp = () => {
  <View>
    <Text>Hi from SignUp</Text>
  </View>;
};

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component="{Login}" />
      <AuthStack.Screen name="Register" component="{SignUp}" />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
