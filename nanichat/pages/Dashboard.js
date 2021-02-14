import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from "../config";

function Dashboard(props) {
    const [name, setName] = useState("")
    const [friendsList, setFriendsList] = useState([])
    const [watchlist, setWatchlist] = useState("");

    const renderWatch = ({ item }) => {
        return (
            <SafeAreaView style={{
                    width: 300,
                    marginLeft: 30,
                    backgroundColor: "#57CC9B",
                    borderWidth: 1,
                    borderColor: "#2FC069",
                    flexDirection: "row", 
                    justifyContent: "flex-start",
                    alignContent: "flex-start"}}>
                <View>
                    <Image source={{uri: item.image}} style={{width: 125, height: 125}}/>
                </View>
                <View style={{
                    marginLeft: 10,
                    marginTop: 5,
                    marginBottom: 5,
                    backgroundColor: "#57CC9B",
                }}>
                    <Text>
                        {item.title.substring(0, 24)}
                    </Text>
                    <Text>
                        Airing/Aired: {item.airing}
                    </Text>
                    <Text>
                        Episodes: {item.episodes}
                    </Text>
                    <Text>
                        Rating: {item.rating}
                    </Text>
                    <Text>
                        Type: {item.type}
                    </Text>
                </View>
            </SafeAreaView>
        );
      };

    useEffect(() => {
        firebase
          .firestore()
          .collection("watchlists")
          .where("id", "==", friendsList)
          .onSnapshot((querySnapshot) => {
            const newWatchlist = [];
            querySnapshot.forEach((doc) => {
              const watch = doc.data();
              watch.id = doc.id;
              newWatchlist.push(watch);
            });
            setWatchlist(newWatchlist);
          });
      }, []);

    const addFriend = () => {
        firebase.firestore().collection("users")
        .where("name", "==", name)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                firebase.firestore().collection("watchlists")
                .where("id", "==", doc.data().id)
                .get()
                // console.log(doc.data().id)
                const data = {
                    me: props.id,
                    id: doc.data().id,
                    friend: doc.data().name,
                }
                setFriendsList(doc.data().id)
                firebase.firestore().collection("friends")
                .add(data)
                .catch((error) => {
                  alert(error)
                });
            })
        })
        setName("");
    }

    return (
            <SafeAreaView style={{ 
                backgroundColor: "#58CCE5", 
                flex: 1, 
                justifyContent: "center", 
                alignItems: "center" }}>
                <Text style={{fontSize: 18}}>Dashboard/Home Screen to view friends!</Text>
                <TextInput onChangeText={(text) => setName(text)} value={name} placeholder="Type their name"/>
                <TouchableOpacity onPress={() => addFriend()}>
                    <Text>Add Friends</Text>
                </TouchableOpacity>
                <FlatList
                data={watchlist}
                renderItem={renderWatch}
                keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
    );
}

export default Dashboard;
