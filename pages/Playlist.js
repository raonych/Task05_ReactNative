import * as React from 'react';
import{Text,View,StyleSheet, ScrollView, TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
   

const musicas = [
    {
        id: 1,
        nome: 'Ghostride',
        banda: 'Crumb',
        duracao: '3:33'
    },
    {
        id: 2,
        nome: 'Redbone',
        banda: 'Childish Gambino',
        duracao: '5:27'
    },
    {
        id: 3,
        nome: 'The Less I Know The Better',
        banda: 'Tame Impala',
        duracao: '3:36'
    },
    {
        id: 4,
        nome: 'R U Mine?',
        banda: 'Arctic Monkeys',
        duracao: '3:21'
    },
    {
        id: 5,
        nome: 'Electric Feel',
        banda: 'MGMT',
        duracao: '3:49'
    },
    {
        id: 6,
        nome: 'Lose Yourself',
        banda: 'Eminem',
        duracao: '5:26'
    },
    {
        id: 7,
        nome: 'Nightrider',
        banda: 'Tom Misch & Yussef Dayes',
        duracao: '4:08'
    }
];


export default function Playlist(){
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.searchBar}>
        <MaterialCommunityIcons name="magnify" color="#666" size={24} style={styles.icon} />
        <TextInput
            style={styles.input}
            placeholder="Buscar música"
            placeholderTextColor="#999"
        />
        </View>
            <View style={styles.musicas}>
        {musicas.map((item) => (
        <View key={item.id} style={styles.musica}>
          <Text style={styles.nome}>
            {item.nome}
          </Text>
          <Text style={styles.nomeBanda}>
            {item.banda}
          </Text>
          <Text style={styles.duracao}>{item.duracao}</Text>
        </View>
      ))}
      </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20 
      },
      musicas:{
        marginTop: 30    
      },
      musica:{
        backgroundColor:'#ededed',
        padding:'20',
        marginVertical:10,
        borderRadius: 15,
        elevation: 12
      },
      nome:{
          fontSize: 22,
           fontWeight: "bold" , 
      },
      nomeBanda:{
          fontSize: 15,
          marginBottom: 15, 
      },
      duracao:{
        fontSize: 13,
          fontWeight: "light",
          marginBottom: -10

      },
      searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        elevation: 12
      },
      icon: {
        marginRight: 8
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: 'black'
      }
});