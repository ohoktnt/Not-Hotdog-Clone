import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  render() {
    return (
      <LinearGradient colors={['#dd3e54', '#dd3e09']} style={styles.linaerGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Not Hotdog</Text>
          <Text style={styles.subtitle}>Seafood Startup</Text>
        </View>
        <View style={styles.outputContainer}>
          <Text>Output</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
          title="Camera Roll" 
          titleStyle={{fontSize: 20}} 
          containerStyle={{margin: 5}}
          buttonStyle={styles.button}></Button>
          <Button 
          title="Take a Photo" 
          titleStyle={{fontSize: 20}} 
          containerStyle={{margin: 5}}
          buttonStyle={styles.button}></Button>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linaerGradient: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 70,
    marginLeft: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  outputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 57,
    backgroundColor: 'black',
    borderRadius: 8
  },
})