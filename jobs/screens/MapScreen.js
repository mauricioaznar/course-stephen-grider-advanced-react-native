import React, {useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from "react-native";
import MapView from "react-native-maps";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import {connect} from 'react-redux'
import * as actions from '../store/actions'
import PropTypes from "prop-types";
import {Button} from "react-native-elements";

const MapScreen = ({fetchJobs, navigation}) => {

    const [region, setRegion] = useState({
        longitude: -122,
        longitudeDelta: 0.04,
        latitude: 37,
        latitudeDelta: 0.09
    })

    const bottomTabBarHeight = useBottomTabBarHeight();

    const onRegionChangeComplete = (regionObj) => {
        console.log(regionObj)
        setRegion(regionObj)
    }

    const onButtonPress = () => {
        fetchJobs(region, () => {
            navigation.navigate('DeckScreen')
        })
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#6a51ae'}]}>
            <MapView
                region={region}
                style={
                    [
                        styles.map,
                        {
                            flex: 1
                        }
                    ]
                }
                onRegionChangeComplete={onRegionChangeComplete}

            />
            <Button
                title={'Button '}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonStyle}
                onPress={onButtonPress}
            >


            </Button>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    map: {
        width: Dimensions.get('window').width,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,

    },
    buttonStyle: {
        width: '100%'
    }
});

MapScreen.propTypes = {
    fetchJobs: PropTypes.func.isRequired,
};


export default connect(null, actions)(MapScreen);