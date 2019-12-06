import React from "react";
import { View, Text, Button, ProgressBarAndroid } from "react-native";

import Header from "./../components/Header";

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      // <View >

      //   <Header title={'Home'} /> 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          {/* <Button title='Detalle' onPress={() => this.props.navigation.openDrawer()} /> */}
          {/* <Button title='Detalle' onPress={() => this.props.navigation.navigate('Details')} /> */}
           {/* <View style={styles.container}> */}
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      {/* </View> */}
        </View>
      // </View>
    );
  }
}

export default HomeScreen;