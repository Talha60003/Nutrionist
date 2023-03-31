import React, {useState} from 'react';

import {
  AppRegistry,
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  Platform,
  LogBox,
} from 'react-native';
// import applyConfigSettings from '@/config/index';
import MainStack from '@/routes/app/app-routes';
import {Provider} from 'react-redux';

// applyConfigSettings();
// // console.disableYellowBox = true;
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

// LogBox.ignoreAllLogs(); //Ignore all log notifications
const Main = props => {
  const [store, setStore] = useState();

  return (
    <View style={{flex: 1}}>
      <MainStack />
    </View>
  );
};

export default Main;
