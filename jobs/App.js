import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from "react-redux";

import store from './store'
import InitialFlow from "./flows/InitialFlow";



export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider style={styles.SafeArea}>
                <NavigationContainer>
                    <InitialFlow/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
