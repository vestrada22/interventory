import React from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Icon } from 'react-native-elements'
import {Input} from 'react-native-elements';
import {MessageBar, showMessage} from 'react-native-messages';

import styles from './styles';
import logo from './../assets/images/login_logo.png';

import {instance} from './../config/user';

let users = {
  data: [
    {
      canEdit: null,
      userName: 'admin',
      email: 'support@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_ADMIN',
        name: 'Administrador',
        accessLevel: 1,
        levelRole: 'LEVEL_1',
        comments: null,
        id: 2,
        canDelete: null,
      },
      firstName: '',
      lastName: '',
      phoneNumber: '',
      mobilePhoneNumber: '',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 10, 11, 7, 42, 4, 573000000],
      expireDate: null,
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 12, 11, 7, 42, 4, 573000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 1,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 2,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'alejandro',
      email: 'alejandro@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Alejandro',
      lastName: 'Perez',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 11, 6, 8, 59, 15, 972000000],
      expireDate: [2019, 11, 29],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 11, 6, 8, 59, 15, 858000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 3,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 9,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'Andres',
      email: 'aaristizabal@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Andres',
      lastName: 'Aristizabal',
      phoneNumber: '',
      mobilePhoneNumber: '',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 11, 25, 14, 4, 8, 378000000],
      expireDate: null,
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 11, 25, 14, 4, 8, 327000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 1,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 10,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'cocacola',
      email: 'cocacola@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Colacola',
      lastName: '',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 10, 28, 9, 51, 16, 982000000],
      expireDate: [2020, 8, 31],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 12, 27, 10, 2, 32, 357000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory:
        '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918;;',
      maxConcurrentSessions: 2,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 5,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'Duvan',
      email: 'dquiros@ospinternational.com',
      password: '1234',
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Duvan',
      lastName: 'Mejia',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 11, 5, 13, 48, 25, 390000000],
      expireDate: [2019, 11, 30],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 11, 5, 13, 48, 24, 768000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 5,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 6,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'natalia',
      email: 'sperez@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Natalia',
      lastName: 'Estrada',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 11, 5, 16, 14, 6, 157000000],
      expireDate: [2019, 11, 30],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 11, 5, 16, 14, 6, 131000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 3,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 8,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'OSP',
      email: 'osp@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'OSP',
        name: 'OSP',
        accessLevel: 3,
        levelRole: 'LEVEL_3',
        comments: '',
        id: 4,
        canDelete: null,
      },
      firstName: 'OSP International',
      lastName: '',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 10, 17, 16, 10, 17, 157000000],
      expireDate: [2020, 12, 31],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 12, 20, 13, 39, 57, 538000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory:
        '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918;;',
      maxConcurrentSessions: 3,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 4,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'root',
      email: 'support@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_ROOT',
        name: 'root',
        accessLevel: 0,
        levelRole: 'LEVEL_1',
        comments: null,
        id: 1,
        canDelete: null,
      },
      firstName: null,
      lastName: null,
      phoneNumber: null,
      mobilePhoneNumber: null,
      userImage: null,
      userSignature: null,
      creationDate: [2019, 10, 11, 7, 42, 4, 573000000],
      expireDate: null,
      remoteAuthentication: false,
      enabled: false,
      passwordExpireDate: [2019, 12, 11, 7, 42, 4, 573000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 1,
      technical: true,
      personId: null,
      colorTheme: 'blue-grey',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: null,
      id: 1,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'sebas',
      email: 'sperez@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Sebastian',
      lastName: 'Perez',
      phoneNumber: '55555555',
      mobilePhoneNumber: '30000000000',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 11, 5, 14, 17, 53, 510000000],
      expireDate: [2019, 11, 30],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 11, 5, 14, 17, 53, 501000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 3,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 7,
      canDelete: null,
    },
    {
      canEdit: null,
      userName: 'user',
      email: 'support@ospinternational.com',
      password: null,
      role: {
        canEdit: null,
        code: 'ROLE_USER',
        name: 'Usuario',
        accessLevel: 10,
        levelRole: 'LEVEL_2',
        comments: null,
        id: 3,
        canDelete: null,
      },
      firstName: 'Icetex',
      lastName: '',
      phoneNumber: '',
      mobilePhoneNumber: '',
      userImage: null,
      userSignature: null,
      creationDate: [2019, 10, 11, 7, 42, 4, 573000000],
      expireDate: [2019, 11, 30],
      remoteAuthentication: false,
      enabled: true,
      passwordExpireDate: [2019, 12, 11, 7, 42, 4, 573000000],
      rangeInitialTime: [0, 0],
      rangeFinalTime: [23, 59],
      allowedDays: null,
      passwordHistory: '',
      maxConcurrentSessions: 5,
      technical: false,
      personId: null,
      colorTheme: 'blue',
      menuType: 'menu-layout-static menu-layout-horizontal',
      comments: '',
      id: 3,
      canDelete: null,
    },
  ],
  response: 'OK',
  errorCode: null,
  errorDescription: null,
  apiTraceId: '0d2c067e-3bdd-4591-9c97-763e150ece1f',
};

class SignInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      token: false,
    };
  }

  componentDidMount() {
    let getData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          this.setState({
            token: true,
          });
        } else {
          this.setState({
            token: false,
          });
        }
      } catch (e) {
        console.log('Error ************** ' + e);
        // error reading value
      }
    };

   // console.log('*************************** GETDATA ' + getData());

    if (typeof getData() == String) {
      console.log('Tiene token ' + getData());
      this.props.navigation.navigate('Home');
    } else {
      console.log('No tiene token  ' + getData());
    }
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

  _signInAsync = async () => {
    console.log('_signInAsync');

    const sendData = {
      data: {
        email: this.state.username,
        password: this.state.password,
      },
      header: {
        userId: '2',
        token: null,
        source: 'SMQUICKR-CORE',
        externalUser: null,
        apiTraceId: '0d2c067e-3bdd-4591-9c97-763e150ece1f',
        tenantId: 'sm',
      },
    };

    let data = await instance.post(`/login`, {
      email: this.state.username,
      password: this.state.password,
    });

    // let data = await instance.post(`/login?email=duvanmejiaocm@gmail.com&password=admin`)

    if (data.data.data.token != null) {
      AsyncStorage.setItem('token', data.data.data.token);
      let storeData = async () => {
        try {
          await AsyncStorage.setItem('token', data.data.data.token);
        } catch (e) {
          console.log('Error al guardar token ' + e);
          // saving error
        }
      };
      storeData();
      this.props.navigation.navigate('Home');
    } else {
      showMessage('Datos incorrectos');
    }
  };

  render() {
    if (this.state.token) return this.props.navigation.navigate('Home');
    else
      return (
        <View>
          <MessageBar />
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View>
            <Input
              id="username"
              name="username"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              placeholder="Ingrese el usuario"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Input
              id="password"
              name="password"
              value={this.state.password}
              onChangeText={password => this.setState({password})}
              placeholder=""
              secureTextEntry={true}
              leftIcon={<Icon name="key" size={24} color="black" />}
            />

            <View
              style={{marginTop: 50, borderRadius: 50, alignItems: 'center'}}>
              <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
          </View>
        </View>
      );
  }
}

export const LoginApp = createSwitchNavigator({
  Login: {
    screen: SignInScreen,
  },
});

export default createAppContainer(LoginApp);
// export default SignInScreen;
