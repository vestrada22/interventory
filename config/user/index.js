import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  const _TOKEN = 'token';
  try {
    const value = await AsyncStorage.getItem(_TOKEN);
    return value;
  } catch (error) {
    throw error;
  }
};

export const instance = axios.create({
  baseURL: 'http://quickr.wmt.media/api',
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getDetails = async () => {
  const token = await getToken();
  return instance
    .get(`/userprofile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    })
    .then(result => result.data);
};
