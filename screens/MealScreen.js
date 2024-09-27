
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import { useContext, useLayoutEffect } from "react";
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

export default function MealScreen({route, navigation}){
    const mealId = route.params.mealId;
    const {ids, addFavorite, removeFavorite} = useContext(FavoritesContext);
    const mealsIsFavorite = ids.includes(mealId);

    function favoriteButtonPressed(){
        if(mealsIsFavorite){
            removeFavorite(mealId);
        }else{
            addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
        
        navigation.setOptions({
            title: mealTitle,
            headerRight: () => {
                return <IconButton 
                        icon = {mealsIsFavorite ? 'star' : 'star-outline'}
                        color = "white" onPress = {favoriteButtonPressed}/>
            }
        });
    }, [mealId, navigation, favoriteButtonPressed, mealsIsFavorite]);

    const mealInfo = MEALS.find((meal) => meal.id === mealId);

    
    return(
        <ScrollView style = {styles.root}>
            <Image source = {{uri: mealInfo.imageUrl}} style = {styles.imageStyle}/>
            <Text style = {styles.title}>{mealInfo.title}</Text>
            <MealDetails item = {mealInfo} textStyle = {styles.detailText}/>
            
            <View style = {styles.listOuterContainer}>
           <View style = {styles.listContainer}>
           <Subtitle textTitle='Ingredients'/>
            {mealInfo.ingredients.map(ingredient => 
                
                    <View style = {styles.listItem} key = {ingredient}>
                    <Text style = {styles.listText} >
                            {ingredient}
                        </Text>
                    </View>
                
            )}                
            
            <Subtitle textTitle = 'Steps'/>
            {mealInfo.steps.map(step => 
                <View key = {step} style = {styles.listItem}>
                    <Text style = {styles.listText} >
                        {step}
                    </Text>
                </View>
            )} 
           </View> 
           </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    imageStyle: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: "white"
    },
    detailText: {
        color: 'white',
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#dbbbfc',
    },
    listText: {
        color:'#8227e3',
        textAlign: 'center',

    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',

    },
});