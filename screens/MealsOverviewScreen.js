import { View , Text, StyleSheet, FlatList} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealTile from "../components/MealTile";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

export default function MealsOverviewScreen({route, navigation}){
   
    const {categoryId} = route.params;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
   
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation]);

    return (
        <MealsList displayedMeals={displayedMeals}/>
    );
}

