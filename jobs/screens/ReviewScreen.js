import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, Linking, Platform} from "react-native";
import {connect} from "react-redux";
import {Button, Card} from "react-native-elements";
import MapView from "react-native-maps";

const ReviewScreen = (props) => {

    const initialRegion = {
        longitude: -122,
        longitudeDelta: 0.04,
        latitude: 37,
        latitudeDelta: 0.09
    }



    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
            <ScrollView style={[styles.scrollView]}>
                {
                    props.likes.map((likedJob, index) => {
                        return (
                            <Card containerStyle={{
                                marginTop: index === 0 ? 20 : 0,
                                marginBottom: index + 1 === props.likes.length ? 20 : 20
                            }}>
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
                                <Card.Title>{ likedJob.title }</Card.Title>
                                <Card.Divider />
                                <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, assumenda blanditiis dolorum error fugit officia quae reiciendis. Ab consectetur enim ipsa praesentium quod suscipit voluptas? Hic non provident quis tempore.
                                </Text>
                                <Button
                                    containerStyle={{ marginTop: 20 }}
                                    onPress={() => {
                                        Linking.openURL('https://www.google.com')
                                    }}
                                    title={'Apply now'}
                                >
                                </Button>

                            </Card>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    scrollView: {

    },
    map: {
        marginVertical: 20,
        height: 300,
        width: '100%',

    },
});

const mapStateToProps = (state) => {
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps, null)(ReviewScreen);