import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MyButton from '../components/openingPageButton.js';

export default function welcomePage(){
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../images/welcomePlant.png')} style={{ width: 200, height: 200, alignSelf: 'center'}} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome to ConU-HackaGrow!</Text>
                </View>
                <MyButton
                    text="Start your own Garden!"
                    navigateTo="mainMenu"
                    buttonStyle={styles.button}
                    color="#fff"
                />
            </View>
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textContainer: {
        padding: 30,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        backgroundColor: 'black',
        marginTop: 20,
    },
});


