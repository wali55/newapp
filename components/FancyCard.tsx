import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
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
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus sint eaque delectus aspernatur cumque repellat sapiente explicabo repudiandae accusamus!</Text>
            <Text style={styles.cardFooter}>12 minutes away</Text>
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
  card: {},
  cardElevated: {},
  cardImage: {
    height: 250
  },
  cardBody: {},
  cardTitle: {},
  cardLocation: {},
  cardDescription: {},
  cardFooter: {},
});
