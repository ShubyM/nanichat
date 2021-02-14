import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { search } from "../util.js";
import { firebase } from "../config.js";

const searchBar = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const getAnime = () => {
    search(query).then((response) => {
      setLoading(false);
      setResults(response.data.results);
    });
  };

  const renderItems = () => {
    return isLoading ? (
      <Text> ...loading </Text>
    ) : (
      results.map((item) => <Text key={item.title}> {item.title} </Text>)
    );
  };

	// const getName = () => {
	// 	let user = firebase.auth().currentUser
	// 	let 
	// }
	// const testUserData = () => {
	// 	let user = firebase.auth().currentUser
	// 	let s = firebase.firestore().collection('users').doc(user.uid).onSnapshot(data => console.log(data.data().name))
	// 	// console.log(s)
	// 		// Vg.collection('users').where("capital", "==", true).get().then(console.log)
	// 		// .doc(user.uid).get().then(res => console.log(res.data))
	// 	// console.log(user)
	// }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setQuery(text)}
        placeholder="search"
        value={query}
      />
		{testUserData()}
      <Button title="search" onPress={() => getAnime()}></Button>
      <ScrollView>{renderItems()}</ScrollView>
    </SafeAreaView>
  );
};

export default searchBar;
