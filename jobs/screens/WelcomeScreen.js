import React, {useState} from 'react';
import {AsyncStorage, SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Slides from "../components/Slides";
import AppLoading from "expo-app-loading";

const SLIDE_DATA = [
    {
        text: 'Welcome to JobApp',
        backgroundColor: 'orangered'
    },
    {
        text: 'Set your location, then swipe away',
        backgroundColor: 'green'
    },
]

const WelcomeScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(true)

    const onComplete = () => {
        navigation.navigate('AuthScreen')
    }

    const getToken = () => {

        return new Promise (async (resolve, reject) => {
            const token = await AsyncStorage.getItem('fb_token')
            setTimeout(() => {
                if (token) {
                    resolve(token)
                } else {
                    reject('Error')
                }
            }, 2000)
        })
    }

    if (loading) {
        return <AppLoading
            startAsync={getToken}
            onFinish={() => setLoading(false)}
            onError={console.warn}
        />
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <StatusBar style={'light'} backgroundColor="#6a51ae" />
            <Slides data={SLIDE_DATA} onComplete={onComplete} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default WelcomeScreen;