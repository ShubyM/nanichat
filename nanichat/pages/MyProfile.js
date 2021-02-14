import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { firebase } from "../config";

// main function for page
function MyProfile(props) {
  const [watchlist, setWatchlist] = useState([]);
  const [currWatch, setCurrWatch] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('watchlists')
            .where("id", "==", props.id)
            .onSnapshot(
                querySnapshot => {
                    const newWatchlist = []
                    querySnapshot.forEach(doc => {
                        const watch = doc.data()
                        watch.id = doc.id
                        newWatchlist.push(watch)
                    });
                    setWatchlist(newWatchlist)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const renderWatch = ({item}) => {
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
                        Genres: {item.type}
                    </Text>
                    <Text>
                        Score: {item.score}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

  const renderWatch = ({ item }) => {
    return (
        <View style={{ 
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
                <Text style={styles.textStyle}>Want to Watch</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={watchlist}
                renderItem={renderWatch}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Currently Watching</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={currWatch}
                renderItem={renderWatch}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Already Watched</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>R</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={completed}
                renderItem={renderWatch}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Recommendations</Text>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={recommended}
                renderItem={renderWatch}
                keyExtractor={(item) => item.id}
            />
        </View>
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
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
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
