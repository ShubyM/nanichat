import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        autoCapitalize="none"
      />
      <Button title="Login" onPress={() => onLoginPress()} />
      <Text>
        Don't have an account?{" "}
        <Text onPress={onSwitchRegisterPress}>Sign up</Text>
      </Text>
    </View>
  );
}

export default Login;
