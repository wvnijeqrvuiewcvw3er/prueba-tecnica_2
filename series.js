import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Modal, Button } from 'react-native';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await require('./data/sample.json');
      const filteredData = response.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "series");
      const sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
      const slicedData = sortedData.slice(0, 20);
      setSeries(slicedData);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const openModal = (serie) => {
    setSelectedSerie(serie);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Series</Text>
      <View style={styles.seriesContainer}>
        {series.map((serie) => (
          <TouchableOpacity key={serie.title} style={styles.seriesBox} onPress={() => openModal(serie)}>
            <ImageBackground source={{ uri: serie.images['Poster Art'].url }} style={styles.imageBackground}>
              <View style={styles.overlay}>
                <Text style={styles.seriesTitle}>{serie.title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedSerie?.title}</Text>
          <Text>{selectedSerie?.description}</Text>
          <Text>Release Year: {selectedSerie?.releaseYear}</Text>
          <ImageBackground source={{ uri: selectedSerie?.images['Poster Art'].url }} style={styles.modalImageBackground}>
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
  seriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seriesBox: {
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
  seriesTitle: {
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

export default Series;
