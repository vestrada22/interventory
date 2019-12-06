import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome5";
// import { Icon } from 'react-native-elements'
import { Input } from 'react-native-elements';


import styles from "./styles";
import logo from "./../assets/images/login_logo.png";
import { TextInput } from 'react-native-gesture-handler';


class SignInScreen extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    title: 'Please sign in',
  };

   _signInAsync = async () => {
     
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
         
        </View>

        <View>
            <Input
              placeholder='Ingrese el usuario'
              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='black'
                />
              }
            />
          </View>
          <View style={ {marginTop : 30} }>
           <Input
              placeholder=''
              secureTextEntry={true}
              leftIcon={
                <Icon
                  name='key'
                  size={24}
                  color='black'
                />
              }
              />

            <View style={ {marginTop : 50, borderRadius: 50, alignItems : "center"} }>
             <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        </View>


      </View>
    );
  }
}

export const LoginApp = createSwitchNavigator({
    Login : {
      screen : SignInScreen
    } 
  }
)

export default createAppContainer(LoginApp);
// export default SignInScreen;