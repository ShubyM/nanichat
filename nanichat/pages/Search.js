import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { search } from "../util.js";

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
        placeholder="search"
        value={query}
      />
      <Button title="search" onPress={() => getAnime()}></Button>
      <ScrollView>{renderItems()}</ScrollView>
    </SafeAreaView>
  );
};

export default searchBar;
