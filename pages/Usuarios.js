import * as React from 'react';
import{Text,View,StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function Usuario(){
    return(
        <View style={styles.container}>
            <Text style={styles.nomeUsuario}>Nome do usuário</Text>
        <View style={styles.placeholder}>
        <MaterialCommunityIcons name="account" color="#666" size={120} style={styles.icon} />
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
        marginTop:'25%',
        alignItems: 'center',
        padding: 10,
    },
    titulo:{
        margin: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    placeholder:{
        borderRadius: '50',
        width:'120',
        height:'120',
        backgroundColor:'#ededed',
        borderRadius: 12,
        elevation: 7,
        marginBottom: 5

    },
    nomeUsuario:{
        fontSize:22,
        fontWeight:'bold'
    },

    text:{
        fontWeight:'bold',
        marginTop:10,

    },
    bio:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ededed',
        padding: 15,
        borderRadius: 12,
        elevation: 17
    }
});