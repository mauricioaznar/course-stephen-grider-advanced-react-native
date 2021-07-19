import React, {useEffect, useState} from 'react';
import {Animated, View} from "react-native";


const Ball = () => {

    const [position, setPosition] = useState(new Animated.ValueXY({
        x: 200,
        y: 10
    }))

    useEffect(() => {
        Animated.spring(position, {
            toValue: {x: 200, y: 500},
            speed: 1,
            bounciness: 12,
            useNativeDriver: true,
        }).start()
    }, [])


    return (
        <Animated.View style={position.getTranslateTransform()}>
            <View
                style={styles.ball}
            />
        </Animated.View>
    );
};

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
}

export default Ball;