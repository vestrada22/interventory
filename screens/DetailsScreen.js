import React from "react";
import { View, Text, Button } from "react-native";

class DetailsScreen extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default DetailsScreen;