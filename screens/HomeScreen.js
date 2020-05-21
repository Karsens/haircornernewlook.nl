import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.welcomeImage}
        />
        <Text style={{ marginVertical: 20 }}>
          Welkom op HaircornerNewlook.nl
        </Text>

        <Text>
          Dit is de site van Haircorner Newlook. Hier kunt u alles vinden over
          onze kapsalons. U kunt zich navigeren in het menu beneden.
        </Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    margin: 40,
  },
  welcomeImage: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
});
