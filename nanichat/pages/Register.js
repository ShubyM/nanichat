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
    <SafeAreaView style={{ 
      backgroundColor: "#58CCE5", 
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center" }}>
      <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 5}}>Register an Account</Text>
      <TextInput style={styles.inputStyle}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="none"
      />
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
      <Button title="Register" onPress={() => onRegisterPress()} />
      <Text style={{marginTop: 10}}>
        Already have an account? 
      </Text>
      <TouchableOpacity onPress={onSwitchLoginPress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Register;

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
