import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {Button, SafeAreaView, Text, StyleSheet, AsyncStorage} from "react-native";
import {StatusBar} from "expo-status-bar";
import * as actions from '../store/actions'

const AuthScreen = ({token, facebookLogin, navigation}) => {
    useEffect(() => {
        // TODO check if token exists asynchronously
        if (token) {
            navigation.navigate('MainFlow')
        } else {
            facebookLogin()
        }
    }, [token])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <StatusBar style={'light'} backgroundColor="#6a51ae" />
            <Text style={{ color: '#fff' }}>Auth Screen</Text>
        </SafeAreaView>
    );
};

AuthScreen.propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    token: PropTypes.string
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


const mapStateToProps = (state) => {
    return {token: state.auth.token}
}

export default connect(mapStateToProps, actions)(AuthScreen);