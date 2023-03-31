/**
 * @format
 */
import {Text, TextInput, AppRegistry} from 'react-native';
import Main from '@/src-app';
import {name as appName} from './app.json';
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => Main);
