import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";

import Routes from './Routes';

export default function(props){
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  )
}