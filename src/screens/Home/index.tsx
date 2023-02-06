import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image  } from "react-native";
import { ClipboardText } from 'phosphor-react-native';
import { TaskListCheckbox } from '../../components/TaskListCheckbox';
import { styles } from "./styles";

export default function Home(){

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');

    function handleTasksAdd(){
        if(tasks.includes(taskName)){
        return Alert.alert("Tarefa já existe", "Já existe uma tarefa na lista com esse nome" );
        }

        if(taskName.split(' ').join('') === '') {
        return Alert.alert("Campo vazio", "Esse campo não pode estar vazio." );
        }

        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');
    }

    function handleTaskRemove(name: string){
        Alert.alert("Remover", `Deseja remover ${name} da lista de tarefas?`, [
        {
            text: 'Sim',
            onPress: () => setTasks(prevState => prevState.filter(task => task !== name))
        },
        {
            text: 'Não',
            style: 'cancel'
        }
        ]);
    }

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
                    onChangeText={setTaskName}
                    value={taskName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleTasksAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            
            <View style={styles.info}>
                <View style={styles.criadas}>
                    <Text style={styles.textCriadas}>Criadas</Text>
                    <View style={styles.containerTextCounterCriadas}>
                        <Text style={styles.textCounterCriadas}>0</Text>
                    </View>
                </View>
                <View style={styles.concluidas}>
                    <Text style={styles.textConcluidas}>Concluídas</Text>
                    <View style={styles.containerTextCounterConcluidas}>
                        <Text style={styles.textCounterConcluidas}>0</Text>
                    </View>
                </View>
            </View>
            <FlatList 
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                <TaskListCheckbox 
                    key={item}
                    name={item} 
                    onRemove={() => handleTaskRemove(item)}
                />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.containerListEmptyText}>
                        <ClipboardText size={76} weight="thin" color="#3D3D3D"/>
                        <Text style={styles.listEmptyTitle}>
                            Você ainda não tem tarefas cadastradas. 
                        </Text>
                        <Text style={styles.listEmptySubtitle}>
                        Crie tarefas e organize seus itens a fazer. 
                        </Text>
                    </View>
                )}
            />  
       
            
        </View>
    )
}