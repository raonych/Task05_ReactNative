import * as React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function Usuario(){
    return(
        <View style={styles.container}>
            <Text style={styles.nomeUsuario}>Nome do usuário</Text>
        <View style={styles.placeholder}>
        <MaterialCommunityIcons name="account" color="white" size={120} style={styles.icon} />
        </View>
        <View style={styles.bio}>
        <Text style={styles.text}>Estudante de desenvolvimento de sistemas</Text>
        <Text style={styles.text}>Idade: 19</Text>
        <Text style={styles.text}>Aprendendo ReactNative | PHP | Node.js</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        paddingTop:'25%',
        alignItems: 'center',
        backgroundColor:'#1b1a21',
        padding: 10,
    },
    titulo:{
        margin: 20,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    placeholder:{
        borderRadius: '50',
        width:'120',
        height:'120',
        backgroundColor:'#14141a',
        borderRadius: 12,
        elevation: 3,
        shadowColor: 'white',
        marginBottom: 5,
        marginBottom: 12

    },
    nomeUsuario:{
        fontSize:22,
        fontWeight:'bold',
        color: 'white',
        marginBottom: 15
    },

    text:{
        fontWeight:'bold',
        marginTop:10,
        fontSize: 16,
        color: 'white'

    },
    bio:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#14141a',
        padding: 15,
        borderRadius: 12,
        elevation:4,
        shadowColor: 'white',
        color: 'white'
    }
});