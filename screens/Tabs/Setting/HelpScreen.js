import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

class HelpScreen extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let removeData = async () => {
      try {
        const value = await AsyncStorage.removeItem('token');
        if(value !== null) {
          console.log('Value eliminar **************' + value)
        }
      } catch(e) {
          console.log('Error ************** ' + e)
        // error reading value
      }
    }

    console.log('Remover el token ' + removeData() )
    
    
    this.props.navigation.navigate('Login');
  }

  render() {
    return this.props.navigation.navigate('LoginStack');

    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Help Screen</Text>
    //     <Button title='Detalle' onPress={() => this.props.navigation.openDrawer()} />
    //     {/* <Button title='Detalle' onPress={() => this.props.navigation.navigate('Details')} /> */}
    //   </View>
    // );
  }
}

export default HelpScreen;