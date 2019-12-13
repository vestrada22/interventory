import React from "react";
import { View, Text, Button, ProgressBarAndroid, StyleSheet, ListView, SafeAreaView, FlatList, Dimensions, AsyncStorage } from "react-native";

import Header from "./../components/Header";
import { ScrollView } from "react-native-gesture-handler";

// import { ListItem, FlatList } from 'react-native-elements'
// import { List } from 'react-native-paper';

const list = [
  {
    name: 'Interventoria 1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Interventoria 2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Interventoria 3',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Interventoria 4',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Interventoria 5',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Interventoria 6',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   // more items
]
const { width : WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : WIDTH
  },
  item: {
    backgroundColor: '#aed6f1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})

function Item({ title }) {
  return (
    <View style={styles.item}>
      
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
   
  }



  // keyExtractor = (item, index) => index.toString()
  
  // renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.subtitle}
  //     leftAvatar={{
  //       source: item.avatar_url && { uri: item.avatar_url },
  //       title: item.name[0]
  //     }}
  //     bottomDivider
  //     chevron
  //   />
  // )

  render() {
    return (
      // <View >

      //   <Header title={'Home'} /> 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Interventorias</Text>
          {/* <Button title='Detalle' onPress={() => this.props.navigation.openDrawer()} /> */}
          {/* <Button title='Detalle' onPress={() => this.props.navigation.navigate('Details')} /> */}
           {/* <View style={styles.container}> */}
        {/* <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        /> */}


      {/* </View> */}


      {
          // list.map((l, i) => (
          //   <ListItem
          //     key={i}
          //     input={l.name}
          //     leftAvatar={{ source: { uri: l.avatar_url } }}
          //     title={ {title : {value : l.name} }   }
          //     subtitle={l.subtitle}
          //     bottomDivider
          //   >
          //     {/* <Text title="fdffsdf" input="vdvsdvsdv"/> */}
          //   </ListItem>
          // ))
        }  

<SafeAreaView style={styles.container}>
  <ScrollView>

        {
          list.map((l, i) => (
            // <FlatList
            //   data={list}
            //   renderItem={({ item }) => 
            <Item key={i} title={l.name} />
            // }
            //   keyExtractor={item => item.id}
            // />
            ))
          }
          </ScrollView>
    </SafeAreaView>

{/* <ListItem
  // Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  // linearGradientProps={{
  //   colors: ['#FF9800', '#F44336'],
  //   start: [1, 0],
  //   end: [0.2, 0],
  // }}
  // ViewComponent={LinearGradient} // Only if no expo
  // leftAvatar={{ rounded: true, source: { uri: avatar_url } }}
  title="Chris Jackson"
  titleStyle={{ color: 'white', fontWeight: 'bold' }}
  subtitleStyle={{ color: 'white' }}
  subtitle="Vice Chairman"
  chevron={{ color: 'white' }}
/> */}


 {/* <FlatList
        style={styles.container}
         dataSource={this.list}
         subtitle={this.list.name}
        // renderRow={(data) => <Row {...data} />}
        // renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      /> */}

        </View>
      // </View>
    );
  }
}

export default HomeScreen;