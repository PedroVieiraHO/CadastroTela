import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Api from "../../Api";

const CadastroScreen = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister  () {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);

   const response = await Api.post('/usuario', {
    id: id,
    name: name, 
    email: email,
    password: password
   })

   .then(response => console.log(response.data))

    alert("Cadastro sucedido!")

  };

  async function handleDelete () {
    await Api.delete(`/usuario/${id}`)

    alert("Usuário deletado!")
  };

   async function handleUpdate (){
    const response = await Api.put(`/usuario/${id}`,{
      name: name,
      email: email,
      password: password
    })
    .then(response => console.log(response.data))

    alert("Usuário atualizado!")
   }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="ID do Usuário"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Deletar Usuário" onPress={handleDelete} color="red" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Atualizar Usuário" onPress={handleUpdate} color="orange" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginBottom: 24,
    textAlign: 'center',

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

  buttonContainer: {
    marginVertical: 8,
  },
  
});

export default CadastroScreen;


