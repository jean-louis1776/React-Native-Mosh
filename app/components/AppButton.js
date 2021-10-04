import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors[color] }]}
            activeOpacity='0.7'
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        borderRadius: 25,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;