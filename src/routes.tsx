import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Main/Login';
import Register from './pages/Main/Register';
import Sucess from './pages/Main/VerificationCode/Sucess';
import Actived from './pages/Main/VerificationCode/Actived';

const AppStack =  createStackNavigator();

const Routes = () => {
    return (
        
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    }
                }}
            >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Sucess" component={Sucess} />
                <AppStack.Screen name="Actived" component={Actived} />

            </AppStack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;