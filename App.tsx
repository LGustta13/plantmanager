/**
 * Arquivo que será exibido no dispositivo (.tsx é typescript)
 * Pegar os elementos visuais (Text) dentro do React native
 * style é uma propriedade e dentro das chaves é um objeto de estilos
 * O return pode retornar somente 1 elemento, não mais que isso
 * Fragment usado para empacotar elementos
 */

import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function App(){
  /**
   * <> é usado para fragmentar os returns em um único elemento
   */
  return ( 
    <View style = {style.container}>
      <Text>
        Olá!
      </Text>
      <Text>
        NLW#5
      </Text>
    </View>
  )
}

/**
 * Criação de um objeto style para que todos os estilos do texto estejam mais organizados no objeto
 */
const style = StyleSheet.create({
  container:{
    flex: 1, // Mantém uma estrutura flexível para distância e tamanho dos objetos
    justifyContent: 'center', 
    alignItems: 'center'
  }
})