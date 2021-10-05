import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).max(16).label("Password"),
});

function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppText style={styles.welcomeText}>Register your new account</AppText>

            <Form
                initialValues={{ name: '', email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCapitalize="words"
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name='email'
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name='password'
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title='login' />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: '600',
        paddingVertical: 10,
        alignSelf: 'center',
        textAlign: 'center'
    }
})

export default RegisterScreen;