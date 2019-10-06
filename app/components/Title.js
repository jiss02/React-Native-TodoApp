import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>To do List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 65,
        backgroundColor: '#616264',
        alignItems: 'center',
    },
    text : {
        color: '#FFFAFA',
        fontWeight: 'bold',
        fontSize: 30,
    },
});