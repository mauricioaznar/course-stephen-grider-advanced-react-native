import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import ReviewScreen from "../screens/ReviewScreen";
import HeaderButton from "../components/HeaderButton";
import SettingsScreen from "../screens/SettingsScreen";

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

export default ReviewFlow