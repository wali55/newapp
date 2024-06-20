import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}><Text>One</Text></View>
        <View style={[styles.box, styles.box2]}><Text>Two</Text></View>
        <View style={[styles.box, styles.box3]}><Text>Three</Text></View>
        <View style={[styles.box, styles.box1]}><Text>One</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 8
  },
  box: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  box1: {
    backgroundColor: '#B1AFFF'
  },
  box2: {
    backgroundColor: '#55AD9B'
  },
  box3: {
    backgroundColor: '#F075AA'
  }
});
