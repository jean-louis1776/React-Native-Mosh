import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import AppText from '../components/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, ErrorMessage } from '../components/forms';
import authApi from '../api/auth';
import useAuth from '../hooks/useAuth';
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(16).label("Password"),
});

function LoginScreen() {
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await loginApi.request(email, password);

        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    }

    return (
        <>
            <ActivityIndicator visible={loginApi.loading} />
            <Screen style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <AppText style={styles.welcomeText}>Welcome! Please, login to your account!</AppText>

                <AppForm
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error='Invalid email and/or password.' visible={loginFailed} />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name='email'
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name='password'
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title='login' />
                </AppForm>
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

export default LoginScreen;