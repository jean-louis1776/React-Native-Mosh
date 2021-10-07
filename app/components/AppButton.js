import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import defaultStyles from '../config/styles';

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
            activeOpacity='0.8'
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        borderRadius: 25,
        marginVertical: 10
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;