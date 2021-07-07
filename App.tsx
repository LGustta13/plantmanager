/**
 * Arquivo que será exibido no dispositivo (.tsx é typescript)
 * Pegar os elementos visuais (Text) dentro do React native
 * style é uma propriedade e dentro das chaves é um objeto de estilos
 * O return pode retornar somente 1 elemento, não mais que isso
 * Fragment usado para empacotar elementos
 * <> é usado para fragmentar os returns em um único elemento
 * As fontes devem ser colocadas na raíz do projeto, ou seja, aqui!
 */

import React, {useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import Routes from './src/routes';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

export default function App(){
 
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });  // O useFonts retorna um vetor com [boolean, null], sendo assim a variável fontsLoaded é para salvar o booleano

  // Criando um listener para escutar a notificação
  useEffect(() => {
      Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    
      const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

      return () => subscription.remove();

      /*async function notification() {
        //await Notifications.cancelAllScheduledNotificationsAsync();

        const data = await Notifications.getAllScheduledNotificationsAsync();
        console.log("####### NOTIFICAÇÕES AGENDADAS ########")
        console.log(data); 
      }
      notification();*/
      
  },[])

  if(!fontsLoaded){  
    return <AppLoading/>  // A ideia é segurar a tela de splash até que a fonte seja carregada
  }

  return ( 
    <Routes/>
  )
}
