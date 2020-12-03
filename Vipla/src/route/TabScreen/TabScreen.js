import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
            <MaterialIcons
              name={'movie'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Video"
        component={Video}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Audio',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'musical-notes-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Audio"
        component={Audio}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Browse',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name={'perm-media'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Browse"
        component={Browse}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'PlayList',

          tabBarIcon: ({color}) => (
            <MaterialIcons
              name={'playlist-play'}
              color={color}
              size={RFPercentage(4)}
            />
          ),
        }}
        name="PlayList"
        component={PlayList}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name={'more-horiz'}
              color={color}
              size={RFPercentage(4)}
            />
          ),
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
}
