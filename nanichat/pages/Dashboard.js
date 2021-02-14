import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Dashboard() {
    return (
            <SafeAreaView style={{ 
                backgroundColor: "#58CCE5", 
                flex: 1, 
                justifyContent: "center", 
                alignItems: "center" }}>
                <Text style={{fontSize: 18}}>Dashboard/Home Screen to view friends!</Text>
            </SafeAreaView>
    );
}

export default Dashboard;
