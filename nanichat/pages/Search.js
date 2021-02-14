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
        <View>
          <Text key={item.title}> {item.title} </Text>
          <TouchableOpacity>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>)
    );
  };

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
      <Button title="search" onPress={() => getAnime()}></Button>
      <ScrollView>{renderItems()}</ScrollView>
    </SafeAreaView>
  );
};

export default Search;
