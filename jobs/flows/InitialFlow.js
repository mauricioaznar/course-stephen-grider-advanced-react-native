import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {View} from "react-native";
import {Icon} from "react-native-elements";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import MainFlow from "./MainFlow";

function InitialFlow() {
    const MainNavigator = createBottomTabNavigator()
    return (
        <MainNavigator.Navigator
            initialRouteName="WelcomeScreen"
            options={{


            }}
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
                    tabBarVisible: false,
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
                    tabBarVisible: false,
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


export default InitialFlow