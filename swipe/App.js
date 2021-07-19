import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Deck from "./src/Deck";
import {Button, Card, Icon} from 'react-native-elements'


const DATA = [
    {
        id: 1,
        text: 'Card #1',
        uri: 'https://images.unsplash.com/photo-1626298022400-84e2c187be08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 2,
        text: 'Card #2',
        uri: 'https://images.unsplash.com/photo-1626298022400-84e2c187be08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        text: 'Card #3',
        uri: 'https://images.unsplash.com/photo-1626298022400-84e2c187be08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    // {
    //     id: 4,
    //     text: 'Card #4',
    //     uri: 'https://images.unsplash.com/photo-1626298022400-84e2c187be08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    // },
];

export default function App() {

    const [ data, setData ] = useState(DATA)


    const onSwipeLeft = () => {

    }

    const onSwipeRight = () => {

    }

    const renderCard = (item) => {
        return (
            <Card
                key={item.id}
                image={{uri: item.uri}}

            >
                <Card.Title>{item.text}</Card.Title>
                <Card.Image source={{uri: item.uri}}>
                </Card.Image>
                <Text style={{marginBottom: 10}}>
                    I can customize the card further
                </Text>
                <Button
                    icon={
                        <Icon
                            style={{marginRight: 10}}
                            color={'white'}
                            name={'code'}
                            size={15}

                        >

                        </Icon>
                    }
                    color='#517fa4'
                    backgroundColor={'#03A9F4'}
                    title={'View Now!'}
                >

                </Button>
            </Card>
        )
    }


    const reset = () => {
        setData(DATA.slice())
    }

    const renderNoMoreCards = () => {
        return <Card>
            <Card.Title>All done!</Card.Title>
            <Text style={{marginBottom: 10}}>
                There´s no more content here!.
            </Text>
            <Button
                color='#517fa4'
                title={'Get more!'}
                onPress={reset}
            >

            </Button>
        </Card>
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <Deck
                data={data}
                renderCard={renderCard}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
                renderNoMoreCards={renderNoMoreCards}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
