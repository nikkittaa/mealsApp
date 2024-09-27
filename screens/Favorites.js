import { useContext } from 'react';
import {Text} from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { View , StyleSheet} from 'react-native';

export default function Favorites(){
    const {ids} = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => ids.indexOf(meal.id) >= 0);

    if(favoriteMeals.length === 0){
        return(
            <View style = {styles.rootContainer}>
                <Text style = {styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }
    return (
        <MealsList displayedMeals={favoriteMeals}/>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});