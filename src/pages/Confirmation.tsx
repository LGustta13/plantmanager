import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useRoute } from '@react-navigation/native';

interface Params {
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    hug: "🤗",
    smile: "😇" 
}

export function Confirmation(){

    const navigation = useNavigation();
    const routes = useRoute();

    const {
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navigation.navigate(nextScreen);
    }

    return (
        <View style = {styles.container}>

            <View style = {styles.content}>

            <View style = {styles.form}>
                <Text style = {styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style = {styles.title}>
                    {title}
                </Text>

                <Text style = {styles.subtitle}>
                    {subtitle}
                </Text>

                <View style = {styles.footer}>
                    <Button title = {buttonTitle} onPress = {handleMoveOn}/>
                </View>
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%'
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    emoji: {
        fontSize: 60
    },

    title: {
        fontSize: 22,
        lineHeight: 38,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 30
    },

    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.text,
        paddingVertical: 15,
    },

    footer: {
        marginTop: 30,
        width: '100%',
        paddingHorizontal: 55
    }
});

function useRoutes() {
    throw new Error('Function not implemented.');
}
