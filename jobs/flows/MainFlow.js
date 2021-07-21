import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import {View} from "react-native";

import ReviewFlow from "./ReviewFlow";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";


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


export default MainFlow