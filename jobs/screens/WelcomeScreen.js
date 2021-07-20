import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import Slides from "../components/Slides";

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
    const onComplete = () => {
        navigation.navigate('AuthScreen')
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