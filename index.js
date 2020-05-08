/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigation/router.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
