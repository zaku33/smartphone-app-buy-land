import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
    function navigateToDetail(project) {
    navigation.navigate('Tasks',{project});
  }


  async function loadProjects() {
    if (loading) {
      return;
    }

    if (total > 0 && projects.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/project', {
      params: { page }
    });

    setProjects([...projects, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadProjects();
  }, []);
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{total} cases</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>Choose one of the cases below and save the day.</Text>

{/* line 70 :  id of the project is named as "project" itself i.e project = project.projectid  */}
      <FlatList
        data={projects}
        style={styles.incidentList}
        keyExtractor={project => String(project.ProjectId)}
        onEndReached={loadProjects}
        onEndReachedThreshold={0.2}
        renderItem={({ item: project }) => (
          <View style={styles.incident}>
              <View  style={{flex: 1 , flexDirection:'row'}}>
                    <Image source={logoImg} style={styles.image} />
                    <View >
                        <Text style={styles.incidentProperty}>Project Name:</Text>
                        <Text style={styles.incidentValue}>{project.Name}</Text>
                        <Text style={styles.incidentProperty}>Owner:</Text>
                        <Text style={styles.incidentValue}>{project.Owner}</Text>
                    </View>
              </View>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail(project)}
            >
              <Text style={styles.detailsButtonText}>Tasks for this Project</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />            
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}