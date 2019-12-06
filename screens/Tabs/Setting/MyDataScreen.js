import React from "react";
import { View, Text, Button, Image } from "react-native";
import { Card, ListItem } from "react-native-elements";
// import PhotoUpload  from "react-native-photo-upload";
// import ImagePicker from 'react-native-image-picker'

import styles from "./../../styles";

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
//  ... // more users here
];

class MyDataScreen extends React.Component {
  constructor(props){
    super(props)
    //  state = {
    //     photo: null,
    // }
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


        //  <Card containerStyle={{padding: 0}} >
        //  {
        //      users.map((u, i) => {
        //      return (
        //          <ListItem
        //          key={i}
        //          roundAvatar
        //          title={u.name}
        //          avatar={{uri:u.avatar}}
        //          />
        //      );
        //      })
        //  }
        //  </Card>
    //     <Card title="CARD WITH DIVIDER">
    //     {
    //         users.map((u, i) => {
    //         return (
    //             <View key={i} style={styles.user}>
    //             <Image
    //                 style={styles.image}
    //                 resizeMode="cover"
    //                 source={{ uri: u.avatar }}
    //             />
    //             <Text style={styles.name}>{u.name}</Text>
    //             </View>
    //         );
    //         })
    //     }
    //     </Card>

    //      <Card containerStyle={{padding: 0}} >
    //     {
    //         users.map((u, i) => {
    //         return (
    //             <ListItem
    //             key={i}
    //             roundAvatar
    //             title={u.name}
    //             avatar={{uri:u.avatar}}
    //             />
    //         );
    //         })
    //     }
    //     </Card>

         <Card
             title='HELLO WORLD'
             image={require('../../../assets/images/perfil.png')}>
                 <Text >Duvan Mejia</Text>
             <Text style={{marginBottom: 10}}>
             The idea with React Native Elements is more about component structure than actual design.
             </Text>
             <Button
             icon={{name: 'code'}}
             backgroundColor='#03A9F4'
             buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
             title='VIEW NOW' />
         </Card>
    //   </View>
    );
  }
}

export default MyDataScreen;