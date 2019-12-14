import React from 'react';
import {View, Image, Dimensions, SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {instance, getToken, getDetails} from './../../../config/user';

const {width: WIDTH} = Dimensions.get('window');

class MyDataScreen extends React.Component {

  constructor(props) {
    super(props);
    console.log('Constructor MyDataScreen ');
    this.state = {
      name: '',
      lastName: '',
      dateOfBirth: '',
      placeOfBirth: '',
      gender: '',
      language: '',
      educationLevel: '',
      maritalStatus: '',
      numberPeople: '',
      job: '',
      montlyIncome: '',
      photo: null,
      token: '',
    };
  }

  async componentDidMount() {
    const userInfo = await getDetails()
      console.log('========>>> ',userInfo.data);
    this.setState({
      name : userInfo.data.firstname
    })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');

    let data = instance
      .post(
        `/update_userprofile?firstname=${this.state.name}&lastname=${this.state.lastName}&date_of_birth=${this.state.dateOfBirth}&gender=${this.state.gender}&language=${this.state.language}`,
      )
      .then(result => {
        console.log('Result update_userprofile ' + result);
      })
      .catch(err => {
        console.log('Error en update_userprofile ' + err);
      });
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView>
            <Image
              style={{
                alignSelf: 'center',
                height: 150,
                width: WIDTH,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 1,
              }}
              source={{uri: ''}}
              resizeMode="stretch"
            />

            <Input
              id="name"
              placeholder="Nombre"
              value={this.state.name}
              onChangeText={name => this.setState({name})}
              name="name"
            />

            <Input
              placeholder="Apellidos"
              value={this.state.lastName}
              onChangeText={lastName => this.setState({lastName})}
              onBlur={() => this.sendData()}
              name="lastName"
              id="lastName"
            />

            <Input
              placeholder="Fecha de nacimiento"
              value={this.state.dateOfBirth}
              onChangeText={dateOfBirth => this.setState({dateOfBirth})}
              name="dateOfBirth"
              id="dateOfBirth"
            />

            <Input
              placeholder="Lugar de nacimiento"
              value={this.state.placeOfBirth}
              onChangeText={placeOfBirth => this.setState({placeOfBirth})}
              name="placeOfBirth"
              id="placeOfBirth"
            />

            <Input
              placeholder="Genero"
              value={this.state.gender}
              onChangeText={gender => this.setState({gender})}
              name="gender"
              id="gender"
            />

            <Input
              placeholder="Lenguaje"
              value={this.state.language}
              onChangeText={language => this.setState({language})}
              name="language"
              id="language"
            />

            <Input
              placeholder="Nivel de educacion"
              value={this.state.educationLevel}
              onChangeText={educationLevel => this.setState({educationLevel})}
              name="educationLevel"
              id="educationLevel"
            />

            <Input
              placeholder="Numero de personas"
              value={this.state.numberPeople}
              onChangeText={numberPeople => this.setState({numberPeople})}
              id="numberPeople"
              name="numberPeople"
            />

            <Input
              placeholder="Trabajo"
              value={this.state.job}
              onChangeText={job => this.setState({job})}
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
