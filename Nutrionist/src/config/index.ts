// @flow
import DebugSettings from '@/config/DebugSettings';

export default () => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.disableYellowBox = !DebugSettings.yellowBox;
  }
};
