import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';


interface TaskProps {
    name: string;
    onRemove: () => void;
}

export function TaskListCheckbox({ name, onRemove }: TaskProps) {
    const [checked, setChecked] = useState(false);


    return(

        <View style={styles.container}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                
            />
            {
                checked ? 'checked' && (
                    <Text style={styles.nameChecked}>
                        {name}
                    </Text>

                ) : 'unchecked' && (
                    <Text style={styles.name}>
                        {name}
                    </Text>
                )
            }
    
            <TouchableOpacity 
                style={styles.button}
                onPress={onRemove}
            >
                <Ionicons name="trash" size={22} color="#3D3D3D" />
            </TouchableOpacity>

            
        </View>
    )
}