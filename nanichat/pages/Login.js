import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from '../config';

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	
  const onSwitchRegisterPress = () => {
    navigation.navigate("Register");
  };
  const onLoginPress = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                    alert("User does not exist anymore.")
                    return;
                }
                const user = firestoreDocument.data()
                navigation.navigate('Home')
            })
            .catch(error => {
                alert(error)
            });
    })
    .catch(error => {
        alert(error)
    })
  };

  return (
    <SafeAreaView style={{ 
      backgroundColor: "#58CCE5", 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" }}>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10}}>Login</Text>
      <TextInput style={styles.inputStyle}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput style={styles.inputStyle}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCapitalize="none"
      />
      <Button title="Login" onPress={() => onLoginPress()} />
      <Text style={{marginTop: 10}}>
        Don't have an account?{" "}
      </Text>
      <TouchableOpacity onPress={onSwitchRegisterPress} 
      style={{color: "#0085FF"}}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  inputStyle: {
    height: 40, 
    width: 250, 
    borderColor: "gray", 
    backgroundColor: "#FFFFFF", 
    paddingLeft: 10, 
    borderWidth: 1,
    marginBottom: 20 
  }
})
