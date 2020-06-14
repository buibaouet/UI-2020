import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Index from '../screen/App.js';
import Login from '../screen/Login.js';
import Register from '../screen/Register.js';
import Forget from '../screen/forgetPass.js';
import Confirm from '../screen/confirm.js';
import ChangePass from '../screen/changePass.js';
import Home from '../screen/homePage.js';
import Exercise from '../screen/Exercise.js';
import GrammarStudy from '../screen/GrammarStudy.js';
import VocabularyStudy from '../screen/VocabularyStudy.js';
import changeProfile from '../screen/changeProfile.js';
import changePassword from '../screen/changePassword.js';
import updateProfile from '../screen/updateProfile.js';
import noti from '../screen/noti.js'
import GS1 from '../screen/GS1.js';
import GS2 from '../screen/GS2.js';
import GS3 from '../screen/GS3.js';
import GS4 from '../screen/GS4.js';
import GS5 from '../screen/GS5.js';
import GS6 from '../screen/GS6.js';
import GS7 from '../screen/GS7.js';
import V1 from '../screen/V1.js';
import V2 from '../screen/V2.js';
import V3 from '../screen/V3.js';
import V4 from '../screen/V4.js';
import V31 from '../screen/V31.js';
import V32 from '../screen/V32.js';
import V33 from '../screen/V33.js';
import V34 from '../screen/V34.js';
import V35 from '../screen/V35.js';
import V36 from '../screen/V36.js';
import V11 from '../screen/V11.js';
import V12 from '../screen/V12.js';
import V13 from '../screen/V13.js';
import V14 from '../screen/V14.js';
import V15 from '../screen/V15.js';
import V16 from '../screen/V16.js';
import V17 from '../screen/V17.js';
import V18 from '../screen/V18.js';
import Test from '../screen/test.js';
import listTest from '../screen/listTest.js';
import listExercise from '../screen/listExercise.js';
import testKind from '../screen/testKind.js';

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
      MH_changeProfile:{
        screen: changeProfile,
        navigationOptions:{
          title: 'Thay đổi thông tin cá nhân',
        },
      },
      MH_changePassword:{
        screen: changePassword,
        navigationOptions:{
          title: 'Thay đổi mật khẩu',
        },
      },
      MH_updateProfile:{
        screen: updateProfile,
        navigationOptions:{
          title: 'Cập nhật thông tin cá nhân',
        },
      },
      MH_noti:{
        screen: noti,
        navigationOptions:{
          title: 'Thông báo',
        },
      },
      MH_GrammarStudy:{
        screen: GrammarStudy,
        navigationOptions:{
          title: 'Học ngữ pháp',
        },
      },
      MH_VocabularyStudy:{
        screen: VocabularyStudy,
        navigationOptions:{
          title: 'Học từ vựng',
        },
      },
      MH_GS1:{
        screen: GS1,
        navigationOptions:{
          title: '12 thì động từ',
        },
      },
      MH_GS2:{
        screen: GS2,
        navigationOptions:{
          title: 'Câu trực tiếp',
        },
      },
      MH_GS3:{
        screen: GS3,
        navigationOptions:{
          title: 'Câu bị động',
        },
      },
      MH_GS4:{
        screen: GS4,
        navigationOptions:{
          title: 'Câu hỏi đuôi',
        },
      },
      MH_GS5:{
        screen: GS5,
        navigationOptions:{
          title: 'Câu điều kiện',
        },
      },
      MH_GS6:{
        screen: GS6,
        navigationOptions:{
          title: 'Danh động từ',
        },
      },
      MH_GS7:{
        screen: GS7,
        navigationOptions:{
          title: 'Các Loại từ',
        },
      },
      MH_V1:{
        screen: V1,
        navigationOptions:{
          title: 'Theo chủ đề',
        },
      },
      MH_V2:{
        screen: V2,
        navigationOptions:{
          title: 'Từ thông thường',
        },
      },
      MH_V3:{
        screen: V3,
        navigationOptions:{
          title: 'Từ giao tiếp',
        },
      },
      MH_V4:{
        screen: V4,
        navigationOptions:{
          title: 'Nâng cao',
        },
      },
      MH_V31:{
        screen: V31,
        navigationOptions:{
          title: 'Chào hỏi',
        },
      },
      MH_V32:{
        screen: V32,
        navigationOptions:{
          title: 'Đưa ra lời mời',
        },
      },
      MH_V33:{
        screen: V33,
        navigationOptions:{
          title: 'Chúc mừng',
        },
      },
      MH_V34:{
        screen: V34,
        navigationOptions:{
          title: 'Thích và không thích',
        },
      },
      MH_V35:{
        screen: V35,
        navigationOptions:{
          title: 'Đề xuất ý kiến',
        },
      },
      MH_V36:{
        screen: V36,
        navigationOptions:{
          title: 'Hỏi đường',
        },
      },
      MH_V11:{
        screen: V11,
        navigationOptions:{
          title: 'Động vật (Animals)',
        },
      },
      MH_V12:{
        screen: V12,
        navigationOptions:{
          title: ' Cây cối (Plants)',
        },
      },
      MH_V13:{
        screen: V13,
        navigationOptions:{
          title: 'Trái cây (Fruits)',
        },
      },
      MH_V14:{
        screen: V14,
        navigationOptions:{
          title: 'Rau củ (Vegetables)',
        },
      },
      MH_V15:{
        screen: V15,
        navigationOptions:{
          title: 'Phong cảnh (Landscape)',
        },
      },
      MH_V16:{
        screen: V16,
        navigationOptions:{
          title: 'Thời tiết (Weather)',
        },
      },
      MH_V17:{
        screen: V17,
        navigationOptions:{
          title: 'Môi trường (Environment)',
        },
      },
      MH_V18:{
        screen: V18,
        navigationOptions:{
          title: 'Màu sắc (Colors)',
        },
      },
      MH_Test:{
        screen: Test,
        navigationOptions: {
          headerShown: false,
        }
      },
      MH_ListTest:{
        screen: listTest,
        navigationOptions:{
          title: 'Danh sách bài thi',
        },
      },
      MH_ListExercise:{
        screen: listExercise,
        navigationOptions:{
          title: 'Danh sách bài tập',
        },
      },
      MH_TestKind:{
        screen: testKind,
        navigationOptions:{
          title: 'Dạng bài thi',
        },
      },
      MH_Exercise:{
        screen: Exercise,
        navigationOptions:{
          title: 'Dạng bài tập',
        },
      },
    },
    {
        initialRouteName: 'MH_index',
       // initialRouteName: 'MH_Home',
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
