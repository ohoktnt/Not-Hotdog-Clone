import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker'; //version 2.3.0 to allow user to pick path?
import Tflite from 'tflite-react-native';


// THESE 3 VARIABLS WILL ALLOW US TO INTERACT WITH NEURAL NETWORK
// instantiate our tflite obj inside memory, which allows us to perform methods on that obj
let tflite = new Tflite();
// create model file to equal path of where were going to store our model(our file neural network will be called)
var modelFile = 'models/model.tflite';
var labelsFile = 'models/labels.txt';

export default class App extends Component {

  constructor(props) {
    // constructot to hold state variables
    super(props);
    this.state = {
      recognitions: null,
      source: null,
    }
  }

  selectGalleryImage() {
    const options = {}; // a dictionary
    ImagePicker.launchImageLibrary(options, (response) => {
      // call back will receive response variable, with the var we want to do some error checking
      if(response.didCancel) {
        console.log('User Cancelled Image')
      } else if (response.error) {
        console.log('Error')
      } else if (response.customButton) {
        console.log('User pressed Custom Button');
      } else {
        // now ready to configure TFlite - it is a library that allows us to interact with the neural network
        // that we are goin got build and make predictions on any store of image
        this.setState({
          source: {uri: response.uri} //setting source state variable to equal to users response uri data
        })
      }
    })
  }

  render() {
    return (
      <LinearGradient colors={['#dd3e54', '#dd3e09']} style={styles.linaerGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Not Hotdog</Text>
          <Text style={styles.subtitle}>Seafood Startup</Text>
        </View>
        <View style={styles.outputContainer}>
          <Image source={require('./assets/hotdog.png')} style={styles.hotdogImage}></Image>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
          title="Camera Roll" 
          titleStyle={{fontSize: 20}} 
          containerStyle={{margin: 5}}
          buttonStyle={styles.button}
          onPress={this.selectGalleryImage.bind(this)}></Button>
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
  hotdogImage: {
    height: 250,
    width: 250
  }
})