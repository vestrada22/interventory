import axios from 'axios';

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