import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/Login';
import Home from './components/Home';
import searchBar from './pages/Search.js';


const Stack = createStackNavigator();

export default function App() {
	// added some random change
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Search" component={searchBar} />
        {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
