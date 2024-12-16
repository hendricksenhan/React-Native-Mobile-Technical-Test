import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const AppStack = createStackNavigator();

const App = () => {
    return (
        <AppStack.Navigator
            initialRouteName={'ListScreen'}
            screenOptions={{ headerShown: false }}>
            <AppStack.Screen
                name={'ListScreen'}
                component={ListScreen}
            />

            <AppStack.Screen
                name={'DetailScreen'}
                component={DetailScreen}
            />

        </AppStack.Navigator>
    );
};

export default App;
