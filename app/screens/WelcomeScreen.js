import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import defaultStyles from '../config/styles';

function WelcomeScreen() {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={10}
            source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <AppText style={styles.taglineFirst}>Sell<AppText style={styles.taglineSecond}>Buy</AppText></AppText>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='login' />
                <AppButton title='register' color='secondary' />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    taglineFirst: {
        fontSize: 70,
        fontWeight: '900',
        paddingVertical: 20,
        color: defaultStyles.colors.primary
    },
    taglineSecond: {
        fontSize: 70,
        fontWeight: '600',
        color: defaultStyles.colors.secondary
    }
})

export default WelcomeScreen;