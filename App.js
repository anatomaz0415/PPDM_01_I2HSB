/*
libs: 
npm i react-native-screens react-native-safe-area-context react-native-gesture-handler
npm install @react-navigation/native @react-navigation/stack 
essa não é uma todo list comum, é uma lista de tarefas gamificada
você faz 'missões' e cada missão tem uma pontuação 'XP'
 */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TelaTaverna } from './src/screens/TelaTaverna';
import { TelaPergaminho } from './src/screens/TelaPergaminho';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Taverna">
        <Stack.Screen 
          name="Taverna" 
          component={TelaTaverna} 
          options={{ title: 'Diário de Missões' }} // Título no cabeçalho -> action bar
        />
        <Stack.Screen 
          name="Pergaminho" 
          component={TelaPergaminho} 
          options={{ title: 'Nova Missão' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
