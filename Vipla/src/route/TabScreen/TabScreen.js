import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Browse from '../../Screen/Browse/Browse';
import Video from '../../Screen/Video/Video';
import Audio from '../../Screen/Audio/Audio';
import PlayList from '../../Screen/PlayList/PlayList';
import More from '../../Screen/More/More';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Browse">
      <Tab.Screen
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'home'} color={color} size={23} />
          ),
        }}
        name="Video"
        component={Video}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Audio',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'search'} color={color} size={23} />
          ),
        }}
        name="Audio"
        component={Audio}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'comment-alt'} color={color} size={23} />
          ),
        }}
        name="Browse"
        component={Browse}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'PlayList',

          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'bell'} color={color} size={23} />
          ),
        }}
        name="PlayList"
        component={PlayList}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name={'user-alt'} color={color} size={23} />
          ),
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
}
