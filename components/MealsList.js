import { View , Text, StyleSheet, FlatList} from "react-native";
import MealTile from "../components/MealTile";
import { useNavigation } from "@react-navigation/native";

export default function MealsList({displayedMeals}){
    const navigation = useNavigation();
    function renderMeal(itemData){
        function pressHandler(){
            navigation.navigate("MealScreen", {
                mealId: itemData.item.id,
            });
        }
    
        return <MealTile item = {itemData.item} onPress = {pressHandler}/>
    }

    
    return (
            <View style = {styles.container}>
            <FlatList data = {displayedMeals}
                keyExtractor = {(item) => item.id}
                renderItem = {renderMeal}
                />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});