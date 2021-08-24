import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Stores = () => {
  <View>
    <Text>Home</Text>
  </View>;
};

const Gallery = () => {
  <View>
    <Text>Notifications</Text>
  </View>;
};

const Profile = () => {
  <View>
    <Text>Profile</Text>
  </View>;
};
const Settings = () => {
  <View>
    <Text>Settings</Text>
  </View>;
};

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Stores" component={Stores} />
      <HomeStack.Screen name="Images" component={Gallery} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
