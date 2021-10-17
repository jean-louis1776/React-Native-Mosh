import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import {
    AppForm as Form,
    AppFormField as FormField,
    SubmitButton,
    ErrorMessage
} from "../components/forms";
import usersApi from '../api/users';
import authApi from '../api/auth';
import useAuth from '../hooks/useAuth';
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(16).label("Password"),
});

function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexpected error occurred.');
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    }

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppText
                    style={styles.welcomeText}
                >
                    Register your new account
                </AppText>
                <Form
                    initialValues={{ name: '', email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={error} />
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
                    <SubmitButton title='sign up' />
                </Form>
            </Screen>
        </>
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