import React from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image  } from "react-native";
import { styles } from "./styles";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image 
                    style={styles.img}
                    source={require('../../assets/Logo.png')}
                />
            </View>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#6B6B6B'
                    onChangeText={() => {}}
                    value=''
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.info}>
                <View style={styles.criadas}>
                    <Text style={styles.textCriadas}>Criadas 0</Text>
                </View>
                <View style={styles.concluidas}>
                    <Text style={styles.textConcluidas}>Concluídas 0</Text>
                </View>
            </View>
            <View style={styles.empty}>
                
            </View>
       
            
        </View>
    )
}