import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function Input({value, changeText, addItem}) {
    return (
        <View style={styles.container}>
            <TextInput
                value = {value}
                style={styles.text}
                placeholder={"What's gonna do?"}
                maxLength={30}
                onChangeText={changeText}
                onEndEditing={addItem}
                returnKeyType="done"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});