import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import mentors from '../../constants/mentors';

const MentorCard = () => {
  console.log('mentors', mentors)
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={{ uri: mentors.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{mentors.name}</Text>
        <Text style={styles.post}>{mentors.post}</Text>
        <Text style={styles.workExp}>{mentors.workExp}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(mentors.linkedinUrl)}>
          <Text style={styles.link}>LinkedIn Profile</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};


const AskMentor = () => {
  console.log('mentors', mentors)
  return (
    <View style={styles.container}>
      {mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </View>
  )
}

export default AskMentor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  post: {
    fontSize: 16,
    marginBottom: 5,
  },
  workExp: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
