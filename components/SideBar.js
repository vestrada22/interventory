import React from "react";
import { ScrollView, SafeAreaView, ImageBackground, View, Image } from 'react-native'
import { Text } from "react-native-elements";
import styles from "../screens/styles";
import { DrawerNavigatorItems, DrawerItems } from "react-navigation-drawer";

export default function(props) {
    let menu = ['Home', 'Details', 'Tabs']
    return (
        <ScrollView>
            <SafeAreaView>
                 <ImageBackground 
                    source={require('../assets/images/background.jpg')}
                    style={ {width : undefined, padding : 16, paddingTop : 48 }} >
                    <Image source={require('../assets/images/perfil.png')} style={styles.profile} />
                    <Text style={styles.name}>Duvan Mejia</Text>
                </ImageBackground> 

                <View forceInset={ { top : 'always', horizontal : 'never' } }>
                    <DrawerNavigatorItems {...props} 
                        items={ props.items.filter( e=> menu.indexOf(e.key) != -1 )}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}