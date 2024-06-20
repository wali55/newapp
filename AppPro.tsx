import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <View >
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello
        </Text>
      </View>
      <View style={[styles.box1, StyleSheet.absoluteFill]}>
        <Text style={styles.whiteText}>1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.whiteText}>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ddd',
  },
  whiteText: {
    color: '#fff',
    fontSize: 40
  },
  darkText: {
    color: '#000',
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#444',
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: 'powderblue',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  box2: {
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    left: 80,
    top: 80
  }
});

export default AppPro;
