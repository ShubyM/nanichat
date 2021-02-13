import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons"
import Dashboard from "../pages/Dashboard";
import MyProfile from "../pages/MyProfile";

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator tabBarOptions={{showLabel: false}}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{tabBarIcon: ({focused}) =>
                focused ? (<MaterialIcons name='dashboard' size={40} color='blue' />)
                : (<MaterialIcons name='dashboard' size={40} color='black' />),
            }} />
            <Tab.Screen name="My Profile" component={MyProfile} options={{tabBarIcon: ({focused}) =>
                focused ? (<MaterialIcons name='person' size={40} color='blue' />)
                : (<MaterialIcons name='person' size={40} color='black' />),
            }} />
        </Tab.Navigator>
    )
}

export default Home;