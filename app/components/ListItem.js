import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ListItem({title, iscomplete, changeComplete, deleteItem}) {
    return(
        <View style={styles.listbox}>
            <View style={styles.makerow}>
                <TouchableOpacity onPress={changeComplete}>
                    <AntDesign name={iscomplete? "checkcircle":'frowno'} size={15}/>
                </TouchableOpacity>
                <Text style={iscomplete? styles.end:styles.text}>{title}</Text>
            </View>
            <TouchableOpacity onPress={deleteItem}>
                    <AntDesign name={"close"} size={15}/>
            </TouchableOpacity>
        </View>
    )
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    listbox: {
        flexDirection: "row",
        width: width-100,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',  
    },
    makerow: {
        flexDirection: 'row',
    },
    text: {
        marginLeft: 5,
    },
    end: {
        marginLeft: 5,
        textDecorationLine: 'line-through',
        color: '#A4AAA7',

    },
});