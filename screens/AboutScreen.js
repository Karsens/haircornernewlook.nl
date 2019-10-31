import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <p>Wij hebben twee filialen:</p>

      <b>Haircorner Newlook Brinkstraat:</b>
      <table>
        <tr>
          <td>adres:</td>
          <td>Brinkstraat 7</td>
        </tr>
        <tr>
          <td>plaats:</td>
          <td>Vries</td>
        </tr>
        <tr>
          <td>postbus 6:</td>
          <td>9480 AA</td>
        </tr>

        <tr>
          <td colspan={2}>
            Afspraak maken? Ons telefoonnummer is: <b>(0592)543587</b>
          </td>
        </tr>
      </table>

      <br />
      <br />
      <b>Haircorner newlook Tynaarlose straat:</b>
      <table>
        <tr>
          <td>adres:</td>
          <td>Tynaarlose straat 56 (Kornoeljehof)</td>
        </tr>
        <tr>
          <td>plaats:</td>
          <td>Vries</td>
        </tr>
        <tr>
          <td>postbus 6:</td>
          <td>9480 AA</td>
        </tr>

        <tr>
          <td colspan={2}>
            Afspraak maken? Ons telefoonnummer is <b>(0592)530700</b>
          </td>
        </tr>
      </table>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
