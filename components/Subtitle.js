import {View, Text, StyleSheet} from 'react-native';

export default function Subtitle({textTitle}){
    return(
        <View style = {styles.subtitleContainer}>
            <Text style = {styles.subtitle}>{textTitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#dbbbfc',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    subtitleContainer: {
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 24,
        borderBottomColor: '#dbbbfc',
        borderBottomWidth: 2,
    }
});