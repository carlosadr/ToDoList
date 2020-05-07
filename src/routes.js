import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoardsList from './pages/BoardsList';
import ListToDo from './pages/ListToDo';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="BoardsList" component={BoardsList} />
                <AppStack.Screen name="ListToDo" component={ListToDo} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};