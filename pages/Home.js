import * as React from 'react';
import{Text,View,StyleSheet, ScrollView} from 'react-native';
export default function Home(){

    return(
        <ScrollView style={styles.container}>
                <View style={styles.post}>
            <Text style={styles.nomepost}>Ana Souza</Text>
            <Text style={styles.conteudo}>Hoje eu aprendi a usar arrays em JavaScript!</Text>
            <Text style={styles.date}>2025-04-04</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>Carlos Lima</Text>
            <Text style={styles.conteudo}>Curtindo muito programar com JS! 😄</Text>
            <Text style={styles.date}>2025-04-03</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>Fernanda Rocha</Text>
            <Text style={styles.conteudo}>Alguém tem dica de curso bom sobre React?</Text>
            <Text style={styles.date}>2025-04-02</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>João Pedro</Text>
            <Text style={styles.conteudo}>Deploy feito com sucesso! 🚀</Text>
            <Text style={styles.date}>2025-04-01</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>Marina Oliveira</Text>
            <Text style={styles.conteudo}>Começando um novo projeto com Node.js!</Text>
            <Text style={styles.date}>2025-03-30</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>Lucas Martins</Text>
            <Text style={styles.conteudo}>Que diferença faz usar async/await corretamente!</Text>
            <Text style={styles.date}>2025-03-28</Text>
            </View>

            <View style={styles.post}>
            <Text style={styles.nomepost}>Beatriz Almeida</Text>
            <Text style={styles.conteudo}>Primeiro commit do meu portfólio pessoal! 💻</Text>
            <Text style={styles.date}>2025-03-25</Text>
            </View>

      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      padding: 20,
      backgroundColor: '#1b1a21',
    },
    posts:{
      marginTop: 50,
    },
    post:{
      marginBottom: 25,  
      paddingBottom: 15,
      backgroundColor: "#14141a",
      elevation:5,
      shadowColor: 'white',
      padding: 20,
      borderRadius: 12
    },
    nomepost:{
        fontSize: 18,
         fontWeight: "bold" ,
         marginBottom: 15, 
         color: 'white'
    },
    conteudo:{
        fontSize: 20,
        marginBottom: 15, 
        color: 'white'
    },
    date:{
      fontWeight: "light" ,
      color: 'white'
    }
  
});