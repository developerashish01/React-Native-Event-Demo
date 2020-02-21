import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import DetailScreen from './DetailScreen';
import { createAppContainer, } from "react-navigation";
import ListScreen from './ListScreen';

class App extends React.Component {


  render() {

    return (

      <AppMain />
    )
  }
}


const mainNavigator = createStackNavigator({
  ListScreen: ListScreen,
  DetailScreen: DetailScreen,
}, {
    initialRouteName: 'ListScreen'
  })

const AppMain = createAppContainer(mainNavigator);


export default App;
