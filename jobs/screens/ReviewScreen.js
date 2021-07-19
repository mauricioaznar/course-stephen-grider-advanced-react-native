import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

const ReviewScreen = () => {


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <StatusBar style={'light'} backgroundColor="#6a51ae" />
            <Text style={{ color: '#fff' }}>Review Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', color: '#fff' },
});

export default ReviewScreen;