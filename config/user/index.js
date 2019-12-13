import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

let token = "";

let getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if(value !== null) {
      console.log('Value **************' + value)
       token = value
       console.log('Valor del token ------  ' + token)
    }else{
      token = null
    }
  } catch(e) {
      console.log('Error ************** ' + e)
    // error reading value
  }
  console.log('*************************** GETDATA TOKEN **************** ' + token)
}
console.log('***** GETDATA TOKEN1 **************** ' + getData())

export const instance = axios.create({

    baseURL : 'http://quickr.wmt.media/api',
    timeout : 50000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
     
      // Authorization: 'Basic aW50ZXJ2ZW50b3J5b3JkZXI6b3NwMTIz'
    }, 

    
    // auth :{
    //   username : 'interventoryorder',
    //   password : 'osp123'
    // },
    // auth :{
    //   username : 'user',
    //   password : 'osp123'
    // },
  
})
