import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloDetalhe from './estiloDetalhe';

function Detalhes() {
    return (
        
        <View style={estiloDetalhe.container}>
            <View style={estiloDetalhe.borda}>

            
            <Text style={estiloDetalhe.titulo}> O que este jogo se trata? </Text>
            <Text style={estiloDetalhe.texto}>Battlefield 2042 é o próximo jogo de tiro da histórica série, com lançamento previsto para 19 de novembro. Deixando de lado os conflitos históricos de Battlefield 1 e Battlefield 5, o novo game se passa em um futuro próximo e promete muitas novidades na gameplay. Há um novo modo, o Hazard Zone, alternativa aos Battle Royale, além do Portal, em que jogadores podem criar partidas com as regras que quiserem, misturando mapas e exércitos de diversas eras retratada ao longo da série.

O jogo desenvolvido pela EA/DICE terá download disponível para PlayStation 4 (PS4) e Xbox One, PlayStation 5 (PS5), Xbox Series X/S e PC. Nos consoles de última geração o valor é de R$ 399, enquanto nos demais o título sai a R$ 299. Já nos computadores é possível encontrar o game por R$ 249 na Origin. O TechTudo reuniu cinco novidades de Battlefield 2042 que chamaram atenção.</Text>

            
<TouchableOpacity style={estiloDetalhe.botaoContainer}>
   <Text style={estiloDetalhe.botaoTexto}>Voltar</Text>
</TouchableOpacity>

</View>
</View>
)
}
export default Detalhes;