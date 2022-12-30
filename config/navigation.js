import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Home from '../Screen/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Registration from '../Screen/Registration';
// import Booking from '../Screen/Booking';
import Login from '../Screen/login';
import Signup from '../Screen/signup';
import MyTabs from './tabNavigation';
import AddBooking from '../Screen/AddBooking';
import Admin from '../Screen/admin';
import Category from '../Screen/category';
import UserBooking from '../Screen/userbooking';
import ConfirmRegistered from '../Screen/confirmbooking';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreens" component={MyTabs} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Welcome To Transport'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome To Transport'}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{title: 'Welcome To Registration Form'}}
      />
      <Stack.Screen
        name="AddBooking"
        component={AddBooking}
        options={{title: 'Welcome To Booking'}}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{title: 'Welcome To Admin'}}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="UserBooking" component={UserBooking} />
      <Stack.Screen name="ConfirmRegistered" component={ConfirmRegistered} />
    </Stack.Navigator>
  );
};

export default Navigation;
