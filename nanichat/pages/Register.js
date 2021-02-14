import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
} from "react-native";
import { firebase } from '../config'

function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSwitchLoginPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                name,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Home', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Register an Account</Text>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="none"
      />
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
      <Button title="Register" onPress={() => onRegisterPress()} />
      <Text>
        Already have an account? <Text onPress={onSwitchLoginPress}>Login</Text>
      </Text>
    </View>
  );
}

export default Register;
