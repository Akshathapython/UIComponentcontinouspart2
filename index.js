/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox from './src/Flexbox';
import WebView from './src/WebView';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>WebView);
