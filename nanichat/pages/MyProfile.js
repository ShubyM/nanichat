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

import { search } from "../util.js";

// drop down menu for watching
function openList() {}

// main function for page
function MyProfile() {
  const [name, setName] = useState("");
  const ProfileName = () => {
		setName("sunny")
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
        <Button onPress={openList} title="Currently Watching" />
      </View>
      <View>
        <Button onPress={openList} title="Want to Watch" />
      </View>
      <View>
        <Button onPress={openList} title="Already Watched" />
      </View>
      <View>
        <Button onPress={openList} title="Recommendations" />
      </View>
    </SafeAreaView>
  );
}

export default MyProfile;
