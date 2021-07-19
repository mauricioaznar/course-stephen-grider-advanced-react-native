import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, LayoutAnimation, PanResponder, Platform, UIManager, View} from "react-native";
import PropTypes from 'prop-types'


const SCREEN_WIDTH = Dimensions.get('window').width;

const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;


if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Deck = (props) => {

    const [index, setIndex] = useState(0)

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            Animated.event([
                null,
                {
                    dx: pan.x, // x,y are Animated.Value
                    dy: pan.y,
                },
            ], {
                useNativeDriver: false
            })(event, gesture)
        },
        onPanResponderRelease: (event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD) {
                forceSwipe(true)
            } else if (gesture.dx < -SWIPE_THRESHOLD) {
                // Animated.spring(
                //     pan, // Auto-multiplexed
                //     {toValue: {x: 0, y: 0}, useNativeDriver: false} // Back to zero
                // ).start();
                // onSwipeComplete(false)
                forceSwipe(false)
            } else {
                Animated.spring(
                    pan, // Auto-multiplexed
                    {toValue: {x: 0, y: 0}, useNativeDriver: false} // Back to zero
                ).start();
            }
        },
    });

    useEffect(() => {
        setIndex(0)
        LayoutAnimation.configureNext({
            duration: 500,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.4,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
            },
        });
    }, [props.data])


    const forceSwipe = (right = true) => {
        Animated.timing(
            pan,
            {
                toValue: {x: (right ? 1 : -1) * SCREEN_WIDTH * 3, y: 0},
                useNativeDriver: false,
                duration: 200,
            }
        ).start(() => {
            onSwipeComplete(right)
        })
    }

    const onSwipeComplete = (right) => {
        const {onSwipeLeft, onSwipeRight, data} = props

        const item = data[index]


        if (right) {
            onSwipeRight(item)
            setIndex(index + 1)
        } else {
            onSwipeLeft(item)
            setIndex(index + 1)
            // if (index !== 0) {
            //     setIndex(index - 1)
            // }
        }

        pan.setValue({x: 0, y: 0})

        LayoutAnimation.configureNext({
            duration: 1000,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
                delay: 500
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.4,
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
            },
        });
    }

    const getCardStyle = () => {
        const layoutProperties = pan.getLayout()

        const rotate = pan.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })

        return {
            ...layoutProperties,
            transform: [{rotate: rotate}]
        }
    }


    const renderCards = () => {
        if (index >= props.data.length) {
            return props.renderNoMoreCards()
        }

        return props.data.map((item, itemIndex) => {
            if (itemIndex < index) {
                return null
            } else if (itemIndex === index) {
                return (
                    <Animated.View key={item.id}
                                   style={[getCardStyle(), styles.cardStyle, styles.activeCard]}  {...panResponder.panHandlers}>
                        {props.renderCard(item)}
                    </Animated.View>
                )
            }
            return <Animated.View
                key={item.id}
                style={[styles.cardStyle, {top: 10 * (itemIndex - index)}]}
            >
                {props.renderCard(item)}
            </Animated.View>
        }).reverse()
    }

    return (
        <View style={[styles.container]}>
            {renderCards()}
        </View>
    );
};


Deck.propTypes = {
    renderCard: PropTypes.func.isRequired,
    onSwipeRight: PropTypes.func.isRequired,
    onSwipeLeft: PropTypes.func.isRequired,
    renderNoMoreCards: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
}


const styles = {
    container: {
        border: '1px solid red',
        position: 'relative',
        width: '100%',
        // width: SCREEN_WIDTH
    },
    cardStyle: {
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },
    activeCard: {
        zIndex: 100
    }
}

export default Deck;