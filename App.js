/*
libs: 
npm i react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install @react-navigation/native @react-navigation/stack 
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as telas que vamos criar
import TelaTaverna from './src/screens/TelaTaverna';
import { TelaPergaminho } from './src/screens/TelaPergaminho';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Taverna">
        {/* Registrando a Tela 1 */}
        <Stack.Screen 
          name="Taverna" 
          component={TelaTaverna} 
          options={{ title: 'Diário de Missões' }} // Título no cabeçalho
        />
        {/* Registrando a Tela 2 */}
        <Stack.Screen 
          name="Pergaminho" 
          component={TelaPergaminho} 
          options={{ title: 'Nova Missão' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
