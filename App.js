import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import welcomePage from './src/pages/welcomePage';
import mainMenu from './src/pages/mainMenu';
// import noGardenText from './src/pages/noGardenText';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainStack = createStackNavigator({
  Welcome: {
    screen: welcomePage,
    navigationOptions: {
      title: 'Welcome'
    }
  },
  mainMenu: {
    screen: mainMenu,
    navigationOptions: {
      title: 'Main Menu'
    }
  },
  // noGardenText: {
  //   screen: noGardenText,
  //   navigationOptions: {
  //     title: 'No Garden'
  //   }
  // },
});

const AppContainer = createAppContainer(MainStack);

export default function App({ plantCount }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppContainer initialRouteName={plantCount > 0 ? "mainMenu" : "Welcome"} />
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
});

