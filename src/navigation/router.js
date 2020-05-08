import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Index from '../screen/App.js';
import Login from '../screen/Login.js';
import Register from '../screen/Register.js';


const AppNavigator = createSwitchNavigator(
    {
      MH_index:{screen: Index},
      MH_login:{screen: Login},
      MH_register:{screen: Register},
    },
    {
        initialRouteName: 'MH_index',
    }

);

export default createAppContainer(AppNavigator);
