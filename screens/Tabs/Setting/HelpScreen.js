import React from "react";
import { View, Text, Button } from "react-native";

class HelpScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Help Screen</Text>
        <Button title='Detalle' onPress={() => this.props.navigation.openDrawer()} />
        {/* <Button title='Detalle' onPress={() => this.props.navigation.navigate('Details')} /> */}
      </View>
    );
  }
}

export default HelpScreen;