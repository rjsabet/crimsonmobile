import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './components/TopBar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import BotmBar from './components/BotmBar';
import CreateTaskWin from './src/CreateTaskWin';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import Dashboard from './src/Dashboard';
import Accounts from './src/Accounts';

const cStack = createNativeStackNavigator();
const cDrawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <cStack.Navigator screenOptions={{headerShown: false}}>
        <cStack.Screen name="Dashboard" component={Dashboard}/>
        <cStack.Screen name="Accounts" component={Accounts}/>
      </cStack.Navigator>
    </NavigationContainer>
  );
}

export default App

/*Removed from styles.container

alignItems: 'center',
justifyContent: 'center',

*/