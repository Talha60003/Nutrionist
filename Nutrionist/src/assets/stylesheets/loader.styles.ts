import {Dimensions, StatusBar} from 'react-native';
let {width, height} = Dimensions.get('window');
import Theme from '@/assets/stylesheets/theme';

export default {
  container: {
    width: '100%',
    height: '100%',
    zIndex: 9999,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Theme.loaderColor,
  },
};
