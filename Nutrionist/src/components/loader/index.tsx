import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Theme from '@/assets/stylesheets/theme';
import loaderStyles from '@/assets/stylesheets/loader.styles';

const Loader = () => {
  return (
    <View style={loaderStyles.container}>
      <View style={{alignSelf: 'center'}}>
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

export default Loader;
