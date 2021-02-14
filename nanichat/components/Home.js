import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"
import Dashboard from "../pages/Dashboard";
import MyProfile from "../pages/MyProfile";
import Search from "../pages/Search.js";

const Tab = createBottomTabNavigator();

export default function Home(props) {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarIcon: ({focused}) =>
                focused ? (<MaterialIcons name='dashboard' size={40} color='blue' />)
                : (<MaterialIcons name='dashboard' size={30} color='black' />),
            }} />
            <Tab.Screen name="My Profile" children={() => <MyProfile name={props.name}/>} options={{tabBarIcon: ({focused}) =>
                focused ? (<MaterialIcons name='person' size={40} color='blue' />)
                : (<MaterialIcons name='person' size={30} color='black' />),
            }} />
            <Tab.Screen name="Search" children={() => <Search id={props.userId} />} options={{tabBarIcon: ({focused}) =>
                focused ? (<MaterialIcons name='search' size={40} color='blue' />)
                : (<MaterialIcons name='search' size={40} color='black' />),
            }} />
        </Tab.Navigator>
    )
}