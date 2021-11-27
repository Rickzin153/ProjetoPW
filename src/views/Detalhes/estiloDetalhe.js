import { StyleSheet } from 'react-native';

const estiloDetalhes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: 'darkgray',
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },

    texto: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    titulo: {
        fontSize: 50,
        color: 'darkblue',
        fontWeight: 'bold',
        padding: 10,
        margin: 70,
        width: '87%',
        height: '20%',
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
export default estiloDetalhes;