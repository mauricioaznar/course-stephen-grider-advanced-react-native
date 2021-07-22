import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {connect} from "react-redux";
import * as actions from '../store/actions'
import { Button } from 'react-native-elements'
import PropTypes from "prop-types";

const SettingsScreen = (props) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <Button

                title={'Reset liked jobs'}
                onPress={() => { props.clearLikedJobs() }}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

SettingsScreen.propTypes = {
    clearLikedJobs: PropTypes.func.isRequired,
};

export default connect(null, actions)(SettingsScreen);