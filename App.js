import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import welcomePage from './src/pages/welcomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import mainMenu from './src/pages/mainMenu';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Welcome"
          component={welcomePage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="mainMenu"
          component={mainMenu}
          options={{title: 'Main Menu'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
