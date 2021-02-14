import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View, Button, Image } from 'react-native';

// main function for page
function MyProfile(props) {
    return (
        <SafeAreaView style={{ 
            backgroundColor: "#58CCE5", 
            flex: 1, 
            justifyContent: "flex-start", 
            alignItems: "flex-start" }}>
            <View style={{alignSelf: "center"}}>
                <Image source={require('./aqua.png')} style={{
                    height: 150, 
                    width: 150, 
                    borderRadius: 75, 
                    marginTop: 30 }}/>
                <Text style={{alignSelf: "center"}}>{props.name}'s Profile</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Currently Watching</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Want to Watch</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Already Watched</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>R</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Recommendations</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MyProfile;

const styles = StyleSheet.create({
    viewStyle: {
        height: 40,
        width: 300,
        backgroundColor: "#2FC069", 
        flexDirection:"row",
        paddingTop: 5,
        marginLeft: 30,
        marginTop: 15,
        borderRadius: 5
    },
    textStyle: {
        width: 255,
        fontSize: 20,
        color: "#20232a",
        textAlign: "left",
        paddingLeft: 15,
    },
    buttonStyle: {
        height: 30,
        width: 30,
        backgroundColor: "#2FC069",
    },
    buttonText: {
        fontSize: 18,
        color: "#20232a",
        fontWeight: "bold",
        alignSelf: "center",
    },
})
