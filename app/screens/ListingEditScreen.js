import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car' },
    { label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera' },
    { label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards' },
    { label: 'Clothing', value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
    { label: 'Movies & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones' },
    { label: 'Books', value: 8, backgroundColor: '#9b66e2', icon: 'book-open-variant' },
    { label: 'Other', value: 9, backgroundColor: '#7b8ca1', icon: 'widgets' } //window-maximize
]

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <Picker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width='50%'
                />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default ListingEditScreen;