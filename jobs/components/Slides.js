import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import {Button} from 'react-native-elements'
import PropTypes from 'prop-types'

const SCREEN_WIDTH = Dimensions.get('window').width

const renderSlides = (data) => {
    return data.map((item, index) => {
        return (
            <View key={item.text} style={{...styles.slide, backgroundColor: item.backgroundColor}}>
                <Text style={{color: 'white', textAlign: 'right'}}>
                    {item.text}
                </Text>
                {
                    index === data.length - 1
                    ? <Button containerStyle={styles.containerButtonStyle} buttonStyle={styles.buttonStyle} title={'Button'} onPress={() => { }} > </Button>
                        : undefined
                }
            </View>
        )
    })
}

const Slides = ({data}) => {
    return (

        <ScrollView
            horizontal
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            pagingEnabled
        >
            {renderSlides(data)}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    slide: {
        width: SCREEN_WIDTH,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButtonStyle: {
        marginTop: 15,
    },
    buttonStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    }
});


Slides.propTypes = {
    data: PropTypes.array.isRequired,
    onComplete: PropTypes.func.isRequired,
}
export default Slides;