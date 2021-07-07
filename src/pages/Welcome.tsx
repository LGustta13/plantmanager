/**
 * TouchableOpacity em activeOpacity é colocado um valor em %/100 para indicar o hover no botão
 * useState para armazenar estado
 * {View, Text, Image, TouchableOpacity, StyleSheet} são elementos react native que depois serão renderizadas para cada sistema
 * Android ou iOS
 * resizeMode, provem do Dimensions, responsável por dimensionar a imagem corretamente dependendo de cada device
 * Feather, biblioteca usada da expo para gerar ícones
 */

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Feather} from '@expo/vector-icons';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){

    // Possibilita realizar a navegação entre páginas
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>
                Gerencie {'\n'} 
                suas plantas de{'\n'}
                forma fácil
            </Text>

            <Image source = {wateringImg} style = {styles.image} resizeMode = 'contain'/>

            <Text style = {styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.  
            </Text>

            <TouchableOpacity style = {styles.button} activeOpacity = {0.7} onPress = {handleStart}>
                <Feather name="chevron-right" style = {styles.buttonIcon}/>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',  // extremidades do texto não colam nas bordas
        paddingHorizontal: 16
    },

    title:{
        fontSize: 28,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 30,
        lineHeight: 34

    },

    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 10,
        color:colors.heading,
        fontFamily: fonts.text,
        lineHeight: 24
    },

    image: {
        height: Dimensions.get('window').width *0.7     // tornar a imagem responsiva
    },

    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 15,
        height: 46,
        width: 46
    },

    buttonIcon: {
        color: colors.white,
        fontSize: 28
    }
});