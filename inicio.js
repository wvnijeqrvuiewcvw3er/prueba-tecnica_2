import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio( props ) {
    const {navigation} = props;

    const goToSeries = ()=> {
      navigation.navigate("series");
    }
    const goToPeliculas = ()=> {
      navigation.navigate("peliculas");
    }

    

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DEMO Streaming</Text>
      </View>
      <View style={styles.enc}>
        <Text style={styles.headerText}>Popular Titles</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.section} onPress={goToSeries}>
          <ImageBackground
            source={{uri: 'https://e7.pngegg.com/pngimages/737/92/png-clipart-film-vecteur-movie-boot-card-angle-rectangle.png'}}
            style={styles.imageBackground}
          >
            <Text style={styles.overlayText}>Series</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={goToPeliculas}>
          <ImageBackground
            source={{uri: 'https://e7.pngegg.com/pngimages/737/92/png-clipart-film-vecteur-movie-boot-card-angle-rectangle.png'}}
            style={styles.imageBackground}
          >
            <Text style={styles.overlayText}>Películas</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Pie de página</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 90,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  enc: {
    height: 50,
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  footer: {
    height: 70,
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});


