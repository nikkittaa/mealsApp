import { Pressable, View, Image, Text , StyleSheet} from "react-native";
import MealDetails from "./MealDetails";

export default function MealTile({item, onPress}){
    return (
        <View style = {styles.mealItem}>
             <Pressable android_ripple={{color: '#ccc'}} onPress = {onPress}>
                <View>
                    <Image source = {{uri : item.imageUrl}} style = {styles.imageStyle}/>
                    <Text style = {styles.title}>{item.title}</Text>
                </View>
                <MealDetails item = {item} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    imageStyle: {
        width: '100%',
        height: 200,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#e3d5f7',
        elevation: 4,
    }
});