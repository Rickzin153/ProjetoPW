import { StyleSheet } from 'react-native';

const estiloInicio = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgray',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    borda: {
        backgroundColor: 'gray',
        width: '80%',
        height: '40%',
        borderRadius: 10,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        padding: 10,
        textAlign: "center",
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: 'null',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: 'darkblue',
        fontWeight:'bold'
    },
});

export default estiloInicio;


