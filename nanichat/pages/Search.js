import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { search } from "../util.js";
import { firebase } from '../config'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Search(props) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  const watchlist = firebase.firestore().collection('users')
  const userID = props.id
  

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
      results.map((item) => 
        <View style={{flexDirection: "row", alignContent: "space-between", marginLeft: 0}}>
          <Text style={{width: 300, height: 40, fontSize: 15, paddingTop: 10, backgroundColor: "#57CC99", paddingLeft: 10, borderRadius: 5, textShadowColor: "#20232a"}} key={item.title}> {item.title.substring(0, 34)} </Text>
          <TouchableOpacity style={{width: 30, height: 40, backgroundColor: "#57CC99", borderRadius:5, paddingTop: 10, marginLeft: -8}}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>)
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
        style={{ height: 40, width: 250, borderColor: "gray", paddingLeft: 10, borderWidth: 1 }}
        onChangeText={(text) => setQuery(text)}
        placeholder="Search"
        value={query}
      />
		{testUserData()}
      <Button title="search" onPress={() => getAnime()}></Button>
      <ScrollView>{renderItems()}</ScrollView>
    </SafeAreaView>
  );
};

export default Search;
