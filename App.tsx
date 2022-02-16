import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import TextComponent from './src/TextComponent';
import main from 'configs';

export default function App() {
    return (
        <View style={styles.container}>
            <TextComponent />
            <Text style={styles.text}>
                Open up App.tsx to start working on your app!
            </Text>
            <Text>{main.name}</Text>
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#b70e0e',
    },
});
