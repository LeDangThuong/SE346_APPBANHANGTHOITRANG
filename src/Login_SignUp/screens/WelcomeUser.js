import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import WellcomeCard from '../components/Cards/WellcomeCard';
import { IMG_PexelsPhotobyJeysTubianosa, IMG_PexelsPhotobyMarleneLeppanen, IMG_PexelsPhotobyRAULREYNOSO } from '../assets/images';
import { IC_Ellipse1, IC_Ellipse2 } from '../assets/icons/index.js';

const slines = [
  {
    id: 1,
    image: require('../assets/images/WellcomeUser/PexelsPhotobyMarleneLeppanen.png'),
    title: "Fantastic And Modern",
    content: "This is scription for all of the app",
    image1: require('../assets/icons/WelcomeUser/Ellipse1.png'),
    image2: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    image3: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    text: "Continue",
    onPress: navigation.navigate('SignIn'),
},
  {
    id: 2,
    image: require('../assets/images/WellcomeUser/PexelsPhotobyRAULREYNOSO.png'),
    title: "Change your mind",
    content: "This is scription for all of the app ",
    image1: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    image2: require('../assets/icons/WelcomeUser/Ellipse1.png'),
    image3: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    text: "Continue",
    onPress: navigation.navigate('SignIn'),
},
  {
    id: 3,
    image: require('../assets/images/WellcomeUser/PexelsPhotobyJeysTubianosa.png'),
    title: "Level Up Your Style",
    content: "Are your ready to make differences ?",
    image1: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    image2: require('../assets/icons/WelcomeUser/Ellipse2.png'),
    image3: require('../assets/icons/WelcomeUser/Ellipse1.png'),
    text: "Get Started",
    onPress: navigation.navigate('SignIn'),
},
];

export default class WelcomeUser extends React.Component {
// const WelcomeUser = props => {
  state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
      <WellcomeCard
        image={item.image}
        title={item.title}
        content={item.content}
        image1={item.image1}
        image2={item.image2}
        image3={item.image3}
        text={item.text}  
        onPress={item.onPress}
      />
      </SafeAreaView>
    );
  }
//   _renderDoneButton = () => {
//     <CustomButton
//         type="primary"
//         text="Continue"
//         onPress={() => navigation.navigate('SignIn')}
//     />
// };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    // onPress={() => navigation.navigate('SignIn')}
  }
  render()
  {
    if (this.state.showRealApp) {
      return <WelcomeUser />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} 
      data={slines} 
      onDone={this._onDone}
      />;
    }
  }
};
const styles = StyleSheet.create({
container: {
  flex: 1,
},

});
// export default WelcomeUser;
