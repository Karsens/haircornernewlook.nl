import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Wij hebben twee filialen</Text>

        <Text style={{ fontWeight: "bold", marginTop: 20 }}>
          Haircorner Newlook Brinkstraat
        </Text>

        <View style={styles.box}>
          <View style={styles.row}>
            <Text>Adres</Text>
            <Text>Brinkstraat 7</Text>
          </View>
          <View style={styles.row}>
            <Text>Plaats</Text>
            <Text>Vries</Text>
          </View>
          <View style={styles.row}>
            <Text>Postcode</Text>
            <Text>9481 BJ</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>
              Afspraak maken? Ons telefoonnummer is: <b>(0592)543587</b>
            </Text>
          </View>
        </View>

        <Text style={{ fontWeight: "bold", marginTop: 20 }}>
          Haircorner Newlook Tynaarlose straat
        </Text>

        <View style={styles.box}>
          <View style={styles.row}>
            <Text>Adres</Text>
            <Text>Tynaarlose straat 56 (Kornoeljehof)</Text>
          </View>
          <View style={styles.row}>
            <Text>Plaats</Text>
            <Text>Vries</Text>
          </View>
          <View style={styles.row}>
            <Text>Postcode</Text>
            <Text>9481 AD</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>
              Afspraak maken? Ons telefoonnummer is: <b>(0592)530700</b>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

AboutScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: "#fff"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300
  },
  box: {
    marginVertical: 10
  }
});

export default AboutScreen;
