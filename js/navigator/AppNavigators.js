import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from '../page/WelcomePage';
import LoginPage from '../page/LoginPage';
import RegisterPage from '../page/RegisterPage';
import HomePage from '../page/HomePage';


const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown: false}} />
                <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}} />
                <Stack.Screen name="RegisterPage" component={RegisterPage} options={{headerShown: false}} />
                {/* <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}