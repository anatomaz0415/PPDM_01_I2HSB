import React, {useState} from 'react';
import { View, Text, TextInput,
TouchableOpacity, StyleSheet, Alert
} from 'react-native';

export default function App(){
  //estados da memória
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const realizarLogin = ()=>{
    if(email === '' || senha === ''){
      Alert.alert("Preencha todos os campos!")
    }else{
      Alert.alert("Bem-vindo(a)" + email)
    }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>ÁREA DE LOGIN</Text>
      <TextInput
      placeholder="Digite seu e-mail"
      style={styles.input}
      onChangeText={setEmail}
      keyboardType="email-address"
      />
    
      <TextInput
      placeholder="Digite sua senha"
      style={styles.input}
      secureTextEntry={true}
      onChangeText={setSenha}/>
      <TouchableOpacity
      style={styles.botao}
      onPress={realizarLogin}>
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#98e8f0'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ef5a23'
  },
  input:{
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    padding: 15,
    borderRadius: 5
  },
  botao:{
    backgroundColor: '#7439e1',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  textoBotao:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  }
});
