import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import defaultStyles from '../config/styles';
import AppText from './AppText';

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginBottom: 20,
        marginTop: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: defaultStyles.colors.shadowColor,
        elevation: 10
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    subTitle: {
        color: defaultStyles.colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    }
})

export default Card;