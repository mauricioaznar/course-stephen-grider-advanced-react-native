import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {connect} from 'react-redux'

import Swipe from "../components/Swipe";

import MapView from "react-native-maps";
import {Card} from "react-native-elements";

const DeckScreen = (props) => {

    const renderCard = (item) => {
        return (
            <Card>
                <Card.Title>{item.title}</Card.Title>
                <Card.Divider/>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio eaque facere nesciunt
                    nobis perspiciatis quis recusandae soluta voluptas voluptate. Accusantium aut cum ea fugiat fugit
                    inventore ipsam optio quisquam?</Text>
                <MapView style={
                    [
                        styles.map,
                    ]
                }/>
            </Card>
        )
    }

    const renderNoMoreCards = () => {
        return (
            <Card>
                <Card.Title>
                    No more jobs
                </Card.Title>
            </Card>
        )
    }


    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#6a51ae'}]}>
            <Swipe
                data={props.jobs}
                renderCard={renderCard}
                onSwipeRight={() => {
                }}
                onSwipeLeft={() => {
                }}
                renderNoMoreCards={renderNoMoreCards}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'},
    map: {
        height: 200,
        width: '100%',

    },
});

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs
    }
}

export default connect(mapStateToProps, null)(DeckScreen);