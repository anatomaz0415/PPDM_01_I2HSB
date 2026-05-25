//npm i react-native-screens react-native-safe-area-context 
// react-native-gesture-handler 
//npm install @react-navigation/native @react-navigation/stack 
import React, {useState} from 'react';
import {View, Text, Flatlist,
TouchableOpacity, Stylesheet, Alert    
} from 'react-native';

export default function TelaTaverna({navigation}){
    const [missoes, setMissoes] = useState([
        {id: '1', titulo: 'Derrotar o bug gigante', xp: 500}, //mock
        {id: '2', titulo: 'Refatorar o Código Legado', xp: 1000},
    ]);

    //tratamento gestual (gesture handler)
    const lidarComToqueLongo = (titulo) =>{
        Alert.alert("Missão concluída", `Voce finalizou sua missão: ${titulo}. XP Aqdiquirido!`);
        //aqui, poderíamos colocar uma lógica para remover da lista, por exemplo
    }
    return(
      <View style={styles.container}>
          <Text style={styles.titulo}>Quadro de Missões</Text>
          //relembrando manipulação de listas na interface
          <Flatlist
          data={missoes}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => (
            <TouchableOpacity 
            style={styles.cartaoMissao}
            onPress={() => {
              navigation.navigate('Pergaminho', {missaoSelecionada: item})
            }}
            onLongPress={() => lidarComToqueLongo(item.titulo)}
            >
              <Text style={styles.textoMissao}>{item.titulo}</Text>
              <Text style={styles.textoXp}>XP: {item.xp}</Text>

            </TouchableOpacity>
          )}
          />
          //botao para criar uma missao nova; navega sem passar parâmetros
        <TouchableOpacity
        style={styles.botaoNovaMissao}
        onPress={() => navigation.navigate('Pergaminho')}
        >
          <Text style={styles.textoBotao}>+ Nova Missão</Text>

        </TouchableOpacity>   

      </View>
    );
}

const styles = Stylesheet.create({
    container:{
      flex: 1,
      backgroundColor: '#f5f5dc',
      padding: 20
    },
    titulo:{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#4a4a4a',
      textAlign: 'center'
    },
    cartaoMissao:{
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 15,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      elevation: 2
    },
    textoMissao:{
      fontSize: 18,
      color: '#666',
      marginTop: 5
    },
    textoXp:{
      fontSize: 14,
      color: '#666',
      marginTop: 5
    },
    botaoNovaMissao:{
      backgroundColor: '#',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop:10

    },
    textoBotao:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    
    }

    
})


