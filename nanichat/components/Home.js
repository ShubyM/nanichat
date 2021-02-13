import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../pages/Dashboard";
import MyProfile from "../pages/MyProfile";

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="My Profile" component={MyProfile} />
        </Tab.Navigator>
    )
}

export default Home;