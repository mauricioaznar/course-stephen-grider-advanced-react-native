import React from 'react';
import {SafeAreaView, StyleSheet, Text, Platform} from "react-native";
import {connect} from 'react-redux'
import MapView from "react-native-maps";

import * as actions from '../store/actions'
import Swipe from "../components/Swipe";
import {Button, Card} from "react-native-elements";
import PropTypes from "prop-types";

const DeckScreen = (props) => {

    const initialRegion = {
        longitude: -122,
        longitudeDelta: 0.04,
        latitude: 37,
        latitudeDelta: 0.09
    }

    const renderCard = (item) => {
        return (
            <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider/>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio eaque facere nesciunt
                    nobis perspiciatis quis recusandae soluta voluptas voluptate. Accusantium aut cum ea fugiat fugit
                    inventore ipsam optio quisquam?</Text>
                <MapView
                    scrollEnabled={false}
                    cacheEnabled={Platform.OS === 'android'}
                    initialRegion={initialRegion}
                    style={
                        [
                            styles.map,
                        ]
                    }
                />
            </Card>
        )
    }

    const onSwipeRight = (job) => {
        props.likeJob(job)
    }

    const renderNoMoreCards = () => {
        return (
            <Card>
                <Card.Title>
                    No more jobs
                </Card.Title>
                <Button
                    title={'Back to map'}
                    onPress={() => {
                        props.navigation.navigate('MapScreen')
                    }}

                >
                </Button>
            </Card>
        )
    }


    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#6a51ae'}]}>
            <Swipe
                data={props.jobs}
                renderCard={renderCard}
                onSwipeRight={onSwipeRight}
                onSwipeLeft={() => {
                }}
                keyProp={'title'}
                renderNoMoreCards={renderNoMoreCards}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
    },
    map: {
        marginTop: 20,
        height: 300,
        width: '100%',

    },
});

DeckScreen.propTypes = {
    likeJob: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps, actions)(DeckScreen);