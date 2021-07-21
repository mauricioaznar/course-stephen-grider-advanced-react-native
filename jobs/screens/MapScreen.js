import React, {useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from "react-native";
import MapView from "react-native-maps";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

const MapScreen = () => {

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
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    map: {
        width: Dimensions.get('window').width,
    }
});


export default MapScreen;