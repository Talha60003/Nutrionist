import {Dimensions, StatusBar} from 'react-native';
let {width, height} = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    borderTopRightRadius: 15,
    backgroundColor: 'red',
  },
};
