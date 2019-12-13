import React from "react";
import { View, Text, Button, Image, Dimensions, SafeAreaView } from "react-native";
import { Card, ListItem, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
// import PhotoUpload  from "react-native-photo-upload";
// import ImagePicker from 'react-native-image-picker'

import {instance} from './../../../config/user'
import AsyncStorage from "@react-native-community/async-storage";


const { width : WIDTH } = Dimensions.get('window')

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
//  ... // more users here
];

let t = ""

class MyDataScreen extends React.Component {
  constructor(props){
    super(props)
    console.log('Constructor MyDataScreen ')
      this.state = {
        name : "",
        lastName : "",
        dateOfBirth : "",
        placeOfBirth : "",
        gender : "",
        language : "",
        educationLevel : "",
        maritalStatus : "",
        numberPeople : "",
        job : "",
        montlyIncome :"",
        photo: null,
        token : ""
     }

    //  let getData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('token')
    //     if(value !== null) {
    //       console.log('Value **************' + value)
    //       this.setState({
    //           token : value
    //       })
    //     }else{
    //      this.setState({
    //          token : value
    //      })
    //     }
    //   } catch(e) {
    //       console.log('Error ************** ' + e)
    //     // error reading value
    //   }
    // }

    // console.log('*************************** GETDATA ' + getData())
     
    let a =AsyncStorage.getItem('token').then(r => {
      console.log('----------------*   ' + r);
      t = r;
      return r;
    }
      )
      console.log('//////////////////////' + t)
    
     let data = instance.post(`/api/details`, 
     {
      headers: {'Authorization': "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2VydmljZSJdLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU3NjI0ODMwOCwiYXV0aG9yaXRpZXMiOlsiQ0xJRU5UIl0sImp0aSI6IjAxNTA4ZmI1LTRlYmYtNDZkNC05MGExLWQ2N2Q1YzA4YjFmZSIsImNsaWVudF9pZCI6ImNsaWVudCJ9.F2y3Io-dFuiL6RQAdPlbztJcilgZLBH_SRBMkNgNaLg'}
      })
      .then((result) => {
        console.log('Result update_userprofile ' + result)
      }).catch((err) => {
        console.log('Error en update_userprofile ' + err)
      });

      console.log('Data ' + data + ' token ' + AsyncStorage.getItem('token').then(r => 
        console.log('----------------*   ' + r)))

  }


// handleChoosePhoto = () => {
//     const options = {
//       noData: true,
//     }
//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.uri) {
//         this.setState({ photo: response })
//       }
//     })
//   }

  //  sendData = () => {
  //    console.log('SendData')
  //  }
   
   componentDidUpdate(){
     console.log('componentDidUpdate')

     let data = instance.post(
       `/api/update_userprofile?firstname=${this.state.name}&lastname=${this.state.lastName}&date_of_birth=${this.state.dateOfBirth}&gender=${this.state.gender}&language=${this.state.language}`)
       .then((result) => {
         console.log('Result update_userprofile ' + result)
       }).catch((err) => {
         console.log('Error en update_userprofile ' + err)
       });
      
       console.log('Data ' + data)
    }

  render() {
      //  const { photo } = this.state
    return (

    //      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     {/* {photo && (
    //       <Image
    //         source={{ uri: photo.uri }}
    //         style={{ width: 300, height: 300 }}
    //       />
    //     )} */}
    //     <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    //   </View>




    //   <View style={{ justifyContent: 'center' }}>
          // <View>
          //      <PhotoUpload
          //       onPhotoSelect={avatar => {
          //           if (avatar) {
          //           console.log('Image base64 string: ', avatar)
          //           }
          //       }}
          //       >
          //            <Image
          //               style={{
          //               paddingVertical: 30,
          //               width: 150,
          //               height: 150,
          //               borderRadius: 75
          //               }}
          //               resizeMode='cover'
          //               source={{
          //               uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
          //               }}
          //           />
          //       </PhotoUpload>
          // </View>


       

      <View>
        
      <SafeAreaView >
        <ScrollView>
        <Image
          style={{
            alignSelf: 'center',
            height: 150,
            width: WIDTH ,
            borderWidth: 2,
            borderColor : 'black',
            borderRadius: 1
          }}
          source={{uri: ''}}
          resizeMode="stretch"
      />
      

      <Input
        id="name"
        placeholder='Nombre'
        value={this.state.name}
        onChangeText={(name) => this.setState({name})}
        name="name"
      />

      <Input
        placeholder='Apellidos'
        value={this.state.lastName}
        onChangeText={(lastName) => this.setState({lastName})}
        onBlur={() => this.sendData()}
        name="lastName"
        id="lastName"
      />  

      <Input
        placeholder='Fecha de nacimiento'
        value={this.state.dateOfBirth}
        onChangeText={(dateOfBirth) => this.setState({dateOfBirth})}
        name="dateOfBirth"
        id="dateOfBirth"
      />

      <Input
        placeholder='Lugar de nacimiento'
        value={this.state.placeOfBirth}
        onChangeText={(placeOfBirth) => this.setState({placeOfBirth})}
        name="placeOfBirth"
        id="placeOfBirth"
      />

      <Input
        placeholder='Genero'
        value={this.state.gender}
        onChangeText={(gender) => this.setState({gender})}
        name="gender"
        id="gender"
      />

      <Input
        placeholder='Lenguaje'
        value={this.state.language}
        onChangeText={(language) => this.setState({language})}
        name="language"
        id="language"
      />

      <Input
        placeholder='Nivel de educacion'
        value={this.state.educationLevel}
        onChangeText={(educationLevel) => this.setState({educationLevel})}
        name="educationLevel"
        id="educationLevel"
      />


      <Input
        placeholder='Numero de personas'
        value={this.state.numberPeople}
        onChangeText={(numberPeople) => this.setState({numberPeople})}
        id="numberPeople"
        name="numberPeople"
      />


      <Input
        placeholder='Trabajo'
        value={this.state.job}
        onChangeText={(job) => this.setState({job})}
        name="job"
        id="job"
      />



          </ScrollView>
      </SafeAreaView>
     </View>
    );
  }
}

export default MyDataScreen;