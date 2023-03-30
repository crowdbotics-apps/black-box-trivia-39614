import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.vQCUQSEV}>Black Box Trivia</Text><TextInput style={styles.uRrPlfUa}></TextInput></ScrollView>
    <TextInput style={styles.KflMaJAM}></TextInput><TextInput style={styles.NrYLTPEG}></TextInput><TextInput style={styles.qrcYwCty}></TextInput><TextInput style={styles.WNMhmgkP}></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  vQCUQSEV: {
    width: 346,
    height: 72,
    lineHeight: 14,
    fontSize: 23,
    borderRadius: 0,
    fontFamily: "Roboto Mono",
    position: "absolute",
    left: 4,
    top: 9
  },
  FrlhdIfZ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  gLIKSQbB: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  rjostZis: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  eUHhuxEz: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 63,
    height: 30,
    left: 0,
    top: 0
  },
  uRrPlfUa: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 40,
    left: 0,
    transform: [{
      rotate: "5deg"
    }],
    top: 266.5,
    position: "absolute"
  },
  KflMaJAM: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  NrYLTPEG: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  qrcYwCty: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  WNMhmgkP: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled1;