import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View} from 'react-native';
import {fontSize} from '../utilities/fonts';

import Profile from '../../screens/Profile';
import Home from '../../screens/Home';
import Map from '../../screens/Map';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.darkBlue,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.09,
          paddingBottom: Platform.OS == 'android' ? sizes.screenHeight * 0.01 : sizes.screenHeight * 0.017,
          paddingHorizontal: sizes.screenWidth * 0.08,
          borderTopWidth: 1,
          borderColor: colors.backgroundColor,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          bottom: 0,
          position: 'absolute',
          elevation: 20,
          shadowColor: colors.black,
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.tabHomeSelected : images.tabHome}
              style={
                focused
                  ? {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.1,
                      height: sizes.screenWidth * 0.1,
                      marginTop: 20,
                    }
                  : {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.07,
                      height: sizes.screenWidth * 0.07,
                      marginTop: 6,
                    }
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.tabMapSelected : images.tabMap}
              style={
                focused
                  ? {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.1,
                      height: sizes.screenWidth * 0.1,
                      marginTop: 20,
                    }
                  : {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.07,
                      height: sizes.screenWidth * 0.07,
                      marginTop: 6,
                    }
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => {
            false;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? images.tabProfileSelected : images.tabProfile}
              style={
                focused
                  ? {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.1,
                      height: sizes.screenWidth * 0.1,
                      marginTop: 20,
                    }
                  : {
                      resizeMode: 'contain',
                      width: sizes.screenWidth * 0.066,
                      height: sizes.screenWidth * 0.066,
                      marginTop: 6,
                    }
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabLabel = ({focused, label}) => {
  const inactiveColor = colors.black;
  const activeColor = colors.backgroundColor;
  return (
    <Text
      style={{
        color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.regular,
        fontFamily: 'Inter-Medium',
      }}>
      {label}
    </Text>
  );
};
