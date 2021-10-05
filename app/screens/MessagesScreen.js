import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';

const InitialMessages = [
    {
        id: 1,
        title: 'Ilya',
        description: 'Hey! How are you?',
        image: require('../assets/avatar.png')
    },
    {
        id: 2,
        title: 'Mosh',
        description: 'Hi, I want to buy this...',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen() {
    const [messages, setMessages] = useState(InitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'Mosh',
                            description: 'Hi, I want to buy this...',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;