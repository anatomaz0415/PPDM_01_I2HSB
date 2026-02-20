import React, {useState} from 'react';
import { View, Text, TextInput,
TouchableOpacity, StyleSheet, Alert,
ImageBackground} from 'react-native';

export default function App(){
  //estados da memória
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  //email guarda o texto,
  //o setEmail é a função que altera esse texto
  //mesma coisa para a senha

  const realizarLogin = ()=>{
    if(email === '' || senha === ''){
      Alert.alert("Preencha todos os campos!")
    }else{
      Alert.alert("Bem-vindo(a)" + email)
    }
  }
  return(
    <ImageBackground 
    source={require('./assets/splash.png')}
   resizeMode="cover"
   style={styles.fundo}>
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
      <Text style={styles.forgotPasswd}>Esqueci minha senha</Text>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '70%',
    height: '50%',
    padding: 40,
    borderRadius: 20,
    backgroundColor: '#98e8f0'
  },
  fundo:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  forgotPasswd:{
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#364374',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ef5a23'
  },
  input:{
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
