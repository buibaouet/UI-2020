import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from '../screen/App.js';
import Login from '../screen/Login.js';
import Register from '../screen/Register.js';
import Forget from '../screen/forgetPass.js';
import Confirm from '../screen/confirm.js';
import ChangePass from '../screen/changePass.js';
import Home from '../screen/homePage.js';

const AppNavigator = createStackNavigator(
    {
      MH_index:{
        screen: Index,
        navigationOptions:{
          title: null,
        },
      },
      MH_login:{
        screen: Login,
        navigationOptions:{
          title: 'Đăng nhập',
        },
      },
      MH_register:{
        screen: Register,
        navigationOptions:{
          title: 'Đăng ký',
        },
      },
      MH_forgetPass:{
        screen: Forget,
        navigationOptions:{
          title: 'Lấy lại mật khẩu',
        },
      },
      MH_confirmEmail:{
        screen: Confirm,
        navigationOptions:{
          title: 'Xác minh tài khoản',
        },
      },
      MH_changePass:{
        screen: ChangePass,
        navigationOptions:{
          title: 'Taọ mật khẩu mới',
        },
      },
      MH_Home:{
        screen: Home,
        navigationOptions:{
          title: 'Trang chủ',
        },
      },
    },
    {
        initialRouteName: 'MH_index',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#e3e3e3',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#111',
            }
        }
    }

);

export default createAppContainer(AppNavigator);
