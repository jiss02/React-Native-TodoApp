import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Subtitle({subtitle}) {
    return (
        <View>
            <Text style={styles.text}>{subtitle}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        color: '#616264',
        fontWeight: 'bold',
    },
});