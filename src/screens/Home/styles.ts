import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#131016',
        padding: 24
    },
    
    imgContainer: {
        alignItems: 'center',
    },

    img: {
        width: 110,
        height: 32,
        marginTop: 24,
        marginBottom: 40,
    },

    form: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 32
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },

    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
  
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    info: {
        width: '100%',
        height: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    criadas: {
        // backgroundColor: '#4EA8DE'
    },

    concluidas: {
        // backgroundColor: '#8284FA'
    },

    textCriadas: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },

    textConcluidas: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },

    empty: {
        
    }
})