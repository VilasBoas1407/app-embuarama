import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';

import Home from './pages/User/Home';

import HomeAdmin from './pages/Admin/Home';
import Register from './pages/Admin/Register';
import RegisterUser from './pages/Admin/RegisterUser';

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
                <AppStack.Screen name="Home" component={Home} />

                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="HomeAdmin" component={HomeAdmin} />
                <AppStack.Screen name="RegisterUser" component={RegisterUser} />

            </AppStack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;