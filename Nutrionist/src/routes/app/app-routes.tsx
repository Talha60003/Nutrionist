import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import Walkthrough from '@/containers/auth/walkthrough';
import Login from '@/containers/auth/login';
import {Dashboard} from '@/containers/home/dashboard';

import {
  CommonActions,
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyDateRangePicker from '@/containers/home/dateRange';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough">
        <Stack.Screen
          name="Walkthrough"
          component={Walkthrough}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDateRangePicker"
          component={MyDateRangePicker}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
