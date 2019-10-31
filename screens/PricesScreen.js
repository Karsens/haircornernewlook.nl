import React from "react";
import { View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={{ margin: 20 }}>
      <table width="400">
        <tr>
          <td>Coupe knippen</td>
          <td>vanaf &euro;17,50 (vrijdagavond &euro;16,50)</td>
        </tr>
        <tr>
          <td>Kinderen coupe knippen</td>
          <td>&euro;15,00 (woensdagmiddag &euro;13,00)</td>
        </tr>
        <tr>
          <td>Wassen & föhnen / watergolven</td>
          <td>&euro;18,00 (als je iedere week komt 16,00)</td>
        </tr>
        <tr>
          <td>Permanent</td>
          <td>vanaf &euro;73,50</td>
        </tr>
        <tr>
          <td>Coupe soleil</td>
          <td>vanaf &euro;23,50</td>
        </tr>
        <tr>
          <td>Dia color</td>
          <td>vanaf &euro;23,50</td>
        </tr>
        <tr>
          <td>Verven</td>
          <td>vanaf &euro;23,50</td>
        </tr>
      </table>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "app.json"
};
