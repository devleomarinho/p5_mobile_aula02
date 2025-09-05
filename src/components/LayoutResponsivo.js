import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutResponsivo = () => {    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>Cabeçalho</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.text}>Conteúdo Principal</Text>
        </View>

        <View style={styles.footer}>    
            <Text style={styles.text}>Rodapé</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({

    container: {flex: 1, padding: 10},
    header: {flex: 1, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5},
    content: {flex: 8, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center', marginVertical: 5, paddingHorizontal: 20},
    footer: {flex: 1, backgroundColor: 'lightcoral', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5},
    text: {fontSize: 16}
});

export default LayoutResponsivo