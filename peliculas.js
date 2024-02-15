import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Button, Modal } from 'react-native';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [selectedPelicula, setSelectedPelicula] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await require('./data/sample.json');
      const filteredData = response.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie");
      const sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
      const slicedData = sortedData.slice(0, 20);
      setPeliculas(slicedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const openModal = (pelicula) => {
    setSelectedPelicula(pelicula);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Películas</Text>
      <View style={styles.peliculasContainer}>
        {peliculas.map((pelicula) => (
          <TouchableOpacity key={pelicula.title} style={styles.peliculaBox} onPress={() => openModal(pelicula)}>
            <ImageBackground source={{ uri: pelicula.images['Poster Art'].url }} style={styles.imageBackground}>
              <View style={styles.overlay}>
                <Text style={styles.peliculaTitle}>{pelicula.title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedPelicula?.title}</Text>
          <Text>{selectedPelicula?.description}</Text>
          <Text>Release Year: {selectedPelicula?.releaseYear}</Text>
          <ImageBackground source={{ uri: selectedPelicula?.images['Poster Art'].url }} style={styles.modalImageBackground}>
            <View style={styles.modalOverlay}></View>
          </ImageBackground>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  peliculasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  peliculaBox: {
    width: 150,
    height: 200,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    width: '100%',
  },
  peliculaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImageBackground: {
    width: 300,
    height: 400,
    marginBottom: 10,
  },
  modalOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Peliculas;
