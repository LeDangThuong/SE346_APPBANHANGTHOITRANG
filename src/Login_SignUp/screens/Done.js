import React, {useState} from 'react';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors.js';
import FONT_FAMILY from '../constants/fonts.js';
import {CustomButton} from '../components/Buttons/CustomButton.js';
import {IMG_mditickcircle} from '../assets/images/index.js';

const Done = props => {
const {navigation} = props;
const [status, setStatus] = useState('');
return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerCenter}>
            <Image
                source={IMG_mditickcircle}
                style={{width: '60%', height: '60%', resizeMode: 'contain',}}
            />

            <View style={styles.textView}>
                <Text style={styles.topText}>
                    COMPLETE!
                </Text>
                <Text style={styles.botText}>
                    Your password has been reset
                </Text>
            </View>
        </View>

        <View style={styles.containerBot}>
            {/* <CustomButton>
                type="primary"
                text="Continue"
                onPress={() => navigation.navigate('Done')}
            </CustomButton> */}
            <Text> Chèn button sau</Text>
        </View>
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
    flex: 1,
},
containerCenter: {
    width: '90%',
    height: '40%',
    top: '20%',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
},
textView: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
},
topText: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 30,
    fontWeight: 700,
    color: CUSTOM_COLOR.Black,
},
botText: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 15,
    color: CUSTOM_COLOR.Black,
},
containerBot: {
    backgroundColor: 'red',
    width: '100%',
    height: '10%',
    bottom: '-40%',
    alignItems: 'center',
    justifyContent: 'center',
},
}); 
export default Done;
