import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import { firebase } from "../config.js";
import { search } from "../util.js";

// drop down menu for watching
function openList() {}

// main function for page
function MyProfile() {
  const [name, setName] = useState("");
  const ProfileName = () => {
    setName("Sunny");
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button onPress={ProfileName} title="Profile" />
      <View>
        <Text>{name}'s Profile</Text>
      </View>
      <View>
        <Text>Currently Watching</Text>
      </View>
      <View>
        <Text>Want to Watch</Text>
      </View>
      <View>
        <Text>Already Watched</Text>
      </View>
      <View>
        <Text>Recommendations</Text>
      </View>
    </SafeAreaView>
  );
}

export default MyProfile;
