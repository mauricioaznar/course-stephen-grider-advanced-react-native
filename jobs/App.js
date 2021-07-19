import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import {Icon} from "react-native-elements";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import {createStackNavigator} from "@react-navigation/stack";
import SettingsScreen from "./screens/SettingsScreen";
import MapScreen from "./screens/MapScreen";
import HeaderButton from "./components/HeaderButton";

function ReviewFlow({navigation}) {
    const ReviewStackFlow = createStackNavigator();

    return (
        <ReviewStackFlow.Navigator>
            <ReviewStackFlow.Screen name="ReviewScreen" component={ReviewScreen} options={{
                title: 'Jobs',
                headerRight: (props) => {
                    return (
                        <HeaderButton
                            {...props}
                            onPress={() => {
                                navigation.navigate('SettingsScreen')
                            }}
                            iconName="chevron-right"
                        />
                    )
                },
            }}/>
            <ReviewStackFlow.Screen name="SettingsScreen" component={SettingsScreen} options={{
                title: 'Settings',
                headerLeft: (props) => (
                    <HeaderButton
                        {...props}
                        iconName="chevron-left"
                        onPress={() => {
                            navigation.navigate('ReviewScreen')
                        }}
                    />
                ),
            }}/>
        </ReviewStackFlow.Navigator>
    )
}


function MainFlow() {
    const MainFlowNavigator = createBottomTabNavigator()

    return (
        <MainFlowNavigator.Navigator
            initialRouteName="DeckScreen"
        >
            <MainFlowNavigator.Screen
                name="DeckScreen"
                component={DeckScreen}
                options={{
                    title: "Deck",
                    tabBarIcon: ({color, size}) => {
                        return (<Icon
                            type="material"
                            name="storage"
                            size={size}
                            color={color}
                        />)
                    },
                }}
            />
            <MainFlowNavigator.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    title: "Maps",
                    tabBarIcon: ({color, size}) => {
                        return (
                            <View>
                                <Icon
                                    type="font-awesome-5"
                                    name="shopping-bag"
                                    size={size}
                                    color={color}
                                />
                            </View>
                        )
                    }
                }}
            />
            <MainFlowNavigator.Screen
                name="ReviewFlow"
                component={ReviewFlow}
                options={{
                    title: 'Reviews',
                    tabBarIcon: ({color, size}) => {
                        return (
                            <View>
                                <Icon
                                    type="material-community"
                                    name="logout"
                                    size={size}
                                    color={color}
                                />
                            </View>
                        )
                    }
                }}
            >

            </MainFlowNavigator.Screen>
        </MainFlowNavigator.Navigator>
    )
}

function InitialFlow() {
    const MainNavigator = createBottomTabNavigator()
    return (
        <MainNavigator.Navigator
            initialRouteName="WelcomeScreen"
        >
            <MainNavigator.Screen
                name="AuthScreen"
                component={AuthScreen}
                options={{
                    title: "Auth",
                    tabBarVisible: false,
                    tabBarIcon: ({color, size}) => {
                        return (<Icon
                            type="material"
                            name="storage"
                            size={size}
                            color={color}
                        />)
                    },
                }}
            />
            <MainNavigator.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    title: "Welcome",
                    tabBarIcon: ({color, size}) => {
                        return (
                            <View>
                                <Icon
                                    type="font-awesome-5"
                                    name="shopping-bag"
                                    size={size}
                                    color={color}
                                />
                            </View>
                        )
                    }
                }}
            />
            <MainNavigator.Screen
                name="MainFlow"
                component={MainFlow}
                options={{
                    title: 'Main',
                    tabBarIcon: ({color, size}) => {
                        return (
                            <View>
                                <Icon
                                    type="material-community"
                                    name="logout"
                                    size={size}
                                    color={color}
                                />
                            </View>
                        )
                    }
                }}
            >

            </MainNavigator.Screen>
        </MainNavigator.Navigator>
    )
}


export default function App() {
    return (
        <SafeAreaProvider style={styles.SafeArea}>
            <NavigationContainer>
                <InitialFlow/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});
