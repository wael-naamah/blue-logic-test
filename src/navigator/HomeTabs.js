import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Favorite from '../screens/Favorite';
import Home from '../screens/Home';
import Tickets from '../screens/Tickets';
import TabBar from './TabBar/TabBar';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        headerShown: false,
      })}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
