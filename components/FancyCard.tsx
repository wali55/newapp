import {Image, StyleSheet, Text, TouchableOpacity, View, Linking} from 'react-native';
import React from 'react';

export default function FancyCard() {
  function goToGoogle(website) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1718743256288-e77382a88aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cox's Bazar</Text>
          <Text style={styles.cardLocation}>Chittagong</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            possimus sint eaque delectus aspernatur cumque repellat sapiente
            explicabo repudiandae accusamus!
          </Text>
          <View style={styles.cardFooter}>
            <Text>12 minutes away</Text>
            <Text>12 minutes away</Text>
          </View>
          <TouchableOpacity  style={styles.buttonContainer}><Text onPress={goToGoogle('https://www.google.com')} style={styles.buttonText}>Add to Cart</Text></TouchableOpacity>
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
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#EEEEEE',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 250,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 12,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 14,
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 30
  },
});
