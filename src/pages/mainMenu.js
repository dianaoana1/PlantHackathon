// this will be the main page displaying the plants and their watering schedules
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function welcomePage(){
    return (
        <View style={StyleSheet.container}>
            <Text>Hello from welcome Page</Text>
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});