import {StatusBar} from 'expo-status-bar';
import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';

// drop down menu for watching
function displayWatching() {
    
}


// main function for page
function MyProfile() {
    const [name, setName] = useState(""); 
    const ProfileName = () => {
        setName("Sunny")
    } 
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button onPress={ProfileName}/>
            <View>
                <Text>{name}'s Profile</Text>
            </View>
            <View>
                <Button onPress={displayWatching} title="Currently Watching"/>
            </View>
            <View>
                <Button onPress={openWatchList} title="Want to Watch"/>
            </View>
            <View>
                <Button onPress={openWatched} title="Already Watched"/>
            </View>
            <View>
                <Button onPress={openRecs} title="Recommendations"/>
            </View>
        </SafeAreaView>
    )
}

export default MyProfile;
