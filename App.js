import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from './screens/Favorites';
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHandler(){
  return(
    <Drawer.Navigator
      screenOptions = {{
        headerStyle: {backgroundColor: '#3d017d'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#8227e3'},
        drawerContentStyle: {backgroundColor: '#3d017d'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#3d017d',
        drawerActiveBackgroundColor: '#8227e3'
      }}
    >
      <Drawer.Screen name = "Categories" component = {CategoriesScreen}
        options = {
          {title: "All Categories",
          drawerIcon : ({color, size}) => <Ionicons name = "list" color = {color} size = {size}/>
          }
        }
      />
      <Drawer.Screen name = "Favorites" component={Favorites}
        options = {{
          drawerIcon : ({color, size}) => <Ionicons name = "star" color = {color} size = {size}/>
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
    <StatusBar style = 'light'/>
    <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {headerStyle: {backgroundColor: '#3d017d'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#8227e3'}}}>
        <Stack.Screen name = "MealsCategories" component={DrawerHandler} 
          options = {{
            headerShown: false,
          }}/>
        <Stack.Screen name = "MealsOverview" 
          component = {MealsOverviewScreen}
          />
          <Stack.Screen name = "MealScreen" 
          component = {MealScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
