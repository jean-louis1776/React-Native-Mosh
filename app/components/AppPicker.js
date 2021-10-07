import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({
    icon,
    placeholder,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    items,
    selectedItem,
    onSelectItem,
    width = '100%'
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={23} color={defaultStyles.colors.medium} style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons name='chevron-down' size={23} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <View style={styles.closeIcon}>
                        <MaterialCommunityIcons name='close' color='white' size={25} onPress={() => setModalVisible(false)} />
                    </View>
                    <FlatList
                        style={styles.items}
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                name={item.iconName}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    closeIcon: {
        alignSelf: 'center',
        marginVertical: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 15
    },
    icon: {
        marginRight: 10
    },
    items: {

    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})

export default AppPicker;