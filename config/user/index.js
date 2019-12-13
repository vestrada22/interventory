import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


let token = ''

export const getToken = async () => {
  const _TOKEN = 'token';
  try {
    const value = await AsyncStorage.getItem(_TOKEN);
    token = value
  } catch (error) {
    throw error;
  }
};

export const instance = axios.create({
  baseURL: 'http://quickr.wmt.media',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDetails = () => {
  instance
    .post(`http://quickr.wmt.media/api/details`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.stringify(getToken())}`,
      }
    })
    .then(result => result.data);
};

console.log(JSON.stringify(getToken()));
