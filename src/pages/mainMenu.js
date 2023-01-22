import { View, Text, StyleSheet } from 'react-native';

function MyGarden() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Garden</Text>
      </View>
      <View style={styles.mainContainer}>
        {/* Add your content here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    margin: 20,
    width: 200,
    height: 50,
    backgroundColor: '#90F694',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
});

export default MyGarden;
