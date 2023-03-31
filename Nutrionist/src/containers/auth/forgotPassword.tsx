import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';

const ForgotPassword = () => {
  // console.log('sdfaf', isLoading);
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
      //  onPress={() => dispatch(setLoader(true))}
      >
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
