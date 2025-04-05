import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Playlist from './Playlist';
import Usuario from './Usuarios';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#b94646",
            }}
        >

        <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
        }}
        /><Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{
            tabBarLabel:'Playlist',
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons name="music-note" color={color} size={size}/>
            ),
        }}
        /><Tab.Screen
        name="Usuario"
        component={Usuario}
        options={{
            tabBarLabel:'Usuário',
            tabBarIcon:({color,size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            ),
        }}
        />

        </Tab.Navigator>
    );
}