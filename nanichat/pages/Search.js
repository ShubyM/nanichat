import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { search } from "../util.js";
import { firebase } from '../config'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Search(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const watchlist = firebase.firestore().collection('watchlists')
  const userID = props.id


  const getAnime = () => {
    search(query).then((response) => {
      setLoading(false);
      setResults(response.data.results);
    });
  };

  const renderItems = () => {
    return isLoading ? (
      <Text style={{marginTop: 5}}> ...loading </Text>
    ) : (
      results.map((item) => 
        <View style={{
            flexDirection: "row", 
            alignContent: "space-between" }}>
          <Text style={{
              width: 270, 
              height: 50, 
              fontSize: 15, 
              paddingTop: 5, 
              paddingLeft: 10,
              paddingRight: 10,
              borderWidth: 1,
              borderTopColor: "#000000", 
              backgroundColor: "#57CC99",  
              textShadowColor: "#20232a"}} key={item.title}> 
            {item.title.substring(0, 45)} 
          </Text>
          <Image source={{uri: item.image_url}} style={{
              width: 50, 
              height: 50, 
              borderWidth: 1,
              borderColor: "#000000" }}/>
          <TouchableOpacity onPress={addToWatchlist} style={{
              width: 40, 
              height: 50,
              borderWidth: 1,
              borderTopColor: "#000000",
              backgroundColor: "#57CC99",  
              paddingTop: 12.5,
              paddingLeft: 7.5 }}>
            <AntDesign name="pluscircleo" size={25} color="black" />
          </TouchableOpacity>
        </View>)
    );
  };

  const addToWatchlist = ({item}) => {
    const timestamp = firebase.firestore.FieldValue.serverTimeStamp();
    const data = {
      id: userID,
      airing: item.airing,
      createdAt: timestamp,
      episodes: item.episodes,
      image: item.image_url,
      rating: item.rating,
      type: item.type,
      title: item.title
    };
    watchlist
      .add(data)
      .catch((error) => {
        alert(error)
      });
  }

  return (
    <SafeAreaView
        style={{
            backgroundColor: "#58CCE5",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
        <TextInput
            style={{ 
                height: 40, 
                width: 250, 
                borderColor: "gray", 
                backgroundColor: "#FFFFFF", 
                paddingLeft: 10, 
                borderWidth: 1,
                marginTop: 30,
                marginBottom: 20 }}
            onChangeText={(text) => setQuery(text)}
            placeholder="Search"
            value={query}/>
        <Button title="search" onPress={() => getAnime()}></Button>
        <View style={{
            width: 400,
            height: 20,
            backgroundColor: "#58CCE5",
            borderBottomWidth: 1,
            borderBottomColor: "#000000" }}>
        </View>
        <ScrollView>{renderItems()}</ScrollView>
    </SafeAreaView>
  );
};

export default Search;
