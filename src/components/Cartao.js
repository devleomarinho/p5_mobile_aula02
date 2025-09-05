import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';

const CartaoApresentacao = () => {
  
    const handleGithub = () => {
    const githubProfile = 'http://github.com/devleomarinho/';
    Linking.openURL(githubProfile)
      .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o GitHub'));
  }
  
  const handleLinkedIn = () => {
    const linkedinProfile = 'https://www.linkedin.com/in/devleomarinho/'; 
    
    Linking.openURL(linkedinProfile)
      .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o LinkedIn'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/fotoleo.jpg')}
            style={styles.profileImage}
          />
        </View>

        {/* Informações pessoais */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Leo Marinho</Text>
          <Text style={styles.profession}>Engenheiro de dados</Text>
          
        </View>

        {/* Separador */}
        <View style={styles.separator} />

        {/* Botões de contato */}
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Entre em contato:</Text>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.contactButton, styles.githubButton]} onPress={handleGithub}>
              <Text style={styles.buttonText}> GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.contactButton, styles.linkedinButton]} onPress={handleLinkedIn}>
              <Text style={styles.buttonText}> LinkedIn</Text>
            </TouchableOpacity>
            
          </View>

                     
            
         
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    elevation: 8,
  },
  imageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#4A90E2',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
    marginBottom: 3,
    textAlign: 'center',
  },
  company: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 3,
    textAlign: 'center',
  },
  location: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  contactContainer: {
    width: '100%',
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  contactButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  githubButton: {
    backgroundColor: '#25D366',
  },
  
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CartaoApresentacao;