import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";

import ReviewFlow from "./ReviewFlow";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";


function MainFlow() {
    const MainFlowNavigator = createBottomTabNavigator()

    return (
        <MainFlowNavigator.Navigator
            initialRouteName="MapScreen"
        >
            <MainFlowNavigator.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    title: "Maps",
                    tabBarIcon: ({color, size}) => {
                        return (
                            <Icon
                                type="font-awesome-5"
                                name="map"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            />
            <MainFlowNavigator.Screen
                name="DeckScreen"
                component={DeckScreen}
                options={{
                    title: "Deck",
                    tabBarIcon: ({color, size}) => {
                        return (
                            <Icon
                                type="font-awesome-5"
                                name="clone"
                                size={size}
                                color={color}
                            />
                        )
                    },
                }}
            />
            <MainFlowNavigator.Screen
                name="ReviewFlow"
                component={ReviewFlow}
                options={{
                    title: 'Reviews',
                    tabBarIcon: ({color, size}) => {
                        return (
                            <Icon
                                type="font-awesome-5"
                                name="star"
                                size={size}
                                color={color}
                            />
                        )
                    }
                }}
            >

            </MainFlowNavigator.Screen>
        </MainFlowNavigator.Navigator>
    )
}


export default MainFlow