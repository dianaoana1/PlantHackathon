import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import welcomePage from './src/pages/welcomePage';
import mainMenu from './src/pages/mainMenu';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App({ plantCount }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={plantCount > 0 ? "mainMenu" : "Welcome"}>
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
