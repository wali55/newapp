import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>React Native Folder Structure</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1718294330460-7f6355d3895a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            reiciendis molestias quasi, expedita necessitatibus possimus, porro
            ea eveniet est dolorum voluptate eum suscipit inventore quis vitae
            atque? Ullam vero in reprehenderit, eos nostrum laudantium maiores
            ab, quis ad dolor ducimus.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://medium.com/@nitishprasad/react-native-folder-structure-e9ceab3150f3',
              )
            }
            >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/in/mohammad-waliullah-658925254/',
              )
            }
            >
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 430,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#EEEEEE',
    elevation: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.5
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500'
  },
  cardImage: {
    height: 250,
    marginBottom: 6
  },
  bodyContainer: {
    padding: 12
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  socialLinks: {
    fontSize: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20
  },
});
