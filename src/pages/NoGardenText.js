import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyButton from '../components/openingPageButton.js';

export default function NoGardenTexts() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You do not have any plants yet !</Text>
        <MyButton
          text=" Add plant + "
          navigateTo="mainMenu"
          buttonStyle={styles.button}
          color="#fff"
        />
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 26,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
});
