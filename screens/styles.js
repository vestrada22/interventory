import { StyleSheet, Dimensions } from "react-native";

const { width : WIDTH , height : HEIGTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer : {
      flex : 1,
      width: null,
      height : null,
      justifyContent : 'center',
      alignItems : 'center'
  },
  logoContainer : {
      alignItems : 'center'
  },
  logo :{
      marginTop : HEIGTH / 7,
      marginBottom : HEIGTH / 7 + 3
  },
  input : {
      width : WIDTH - 55,
      height : 45,
      borderRadius : 25,
      fontSize : 16,
      paddingLeft : 45,
      backgroundColor : 'rgba(0, 0, 0, 0.35)',
      color : 'rgba(255, 255, 255, 0.7)',
      marginHorizontal : 25
  },
  inputIcon : {
      position : 'absolute',
      top : 8,
      left : 37,
      backgroundColor : 'red'
  },
  profile : {
      width : 80,
      height : 80,
      borderRadius : 40,
      borderWidth : 3,
      borderColor : '#FFF'
  },
  name : {
      color : '#FFF',
      fontSize : 20,
      fontWeight : '800',
      marginVertical : 8
  }
});

export default styles;