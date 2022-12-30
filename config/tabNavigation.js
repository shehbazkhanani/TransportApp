import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Booking from '../Screen/Booking';
import Home from '../Screen/home';
import Profile from '../Screen/profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
     headerShown: false,
     tabBarIcon: () => {
       let iconName;

       if (route.name === 'Home') {
         iconName = 'home'
           ? 'home'
           : 'home';
       } else if (route.name === 'Booking') {
         iconName = 'shoppingcart' ? 'shoppingcart' : 'shoppingcart';
       } else if(route.name === 'Favorite') {
         iconName = 'hearto' ? 'hearto' : 'hearto';
       } else if(route.name === 'Profile') {
         iconName = 'setting' ? 'setting' : 'setting';
       }

       // You can return any component that you like here!
       return <Icon name={iconName} size={25} color='black' />;  
     },
     tabBarActiveTintColor: 'tomato',
     tabBarInactiveTintColor: 'gray',
   })} 
   >
     <Tab.Screen name="Home" component={Home} />
     <Tab.Screen name="Booking" component={Booking} />
     <Tab.Screen name="Profile" component={Profile} />
     {/* <Tab.Screen name="Setting" component={Setting} /> */}
   </Tab.Navigator>
  );
}

export default MyTabs;