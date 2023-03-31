import { FONT_FAMILY } from '@/constants/fontFamily';
import {Dimensions, Platform, StatusBar} from 'react-native';
import theme from './theme';
let {width, height} = Dimensions.get('window');

export default {
  renderNextMainView: {
    position: 'absolute',
    top: '5%',
    left: '3%',
    zIndex: 100,
  },
  renderNextSecondView:{
    width: '90%',
    backgroundColor: theme.brightRed,
    borderRadius: 10,
    height: 54,
    zIndex: 9999,
    bottom: Platform.OS == 'ios' ? '10%' : 48,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  renderNextTextStyles:{
    fontSize: 16,
    fontFamily: FONT_FAMILY.MontserratBold,
    textTransform: 'uppercase',
    color: theme.white,
  },
  renderDoneMainView:{
    width: '90%',
    backgroundColor: theme.brightRed,
    borderRadius: 10,
    height: 54,
    zIndex: 9999,
    bottom: Platform.OS == 'ios' ? '10%' : 48,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  renderDoneTextStyle:{
    fontSize: 16,
    fontFamily: FONT_FAMILY.MontserratBold,
    textTransform: 'uppercase',
    color: theme.white,
  },
  renderItemMainView:{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'70%',
    width:'90%',
    alignSelf:'center',
  },
  renderItemTitleStyle:{
    color: theme?.black,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:FONT_FAMILY.MontserratBold,
    width:width*0.75
  },
  renderItemTextStyle:{
    top: 12,
    color: theme?.black,
    fontSize: 12,
    textAlign: 'center',
    fontFamily:FONT_FAMILY.MontserratBold

  },
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.white,
  },
  containerImageView:{
    width: width,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
