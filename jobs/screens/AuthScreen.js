import React from 'react';
import PropTypes from 'prop-types';
import {Button, SafeAreaView, Text, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

const AuthScreen = props => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <StatusBar style={'light'} backgroundColor="#6a51ae" />
            <Text style={{ color: '#fff' }}>Auth Screen</Text>
        </SafeAreaView>
    );
};

AuthScreen.propTypes = {

};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default AuthScreen;