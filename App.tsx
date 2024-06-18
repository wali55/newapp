import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <Text>Hello World</Text>
        <View style={styles.bottomMargin}>
          <Button
            title="press me"
            onPress={() => Alert.alert('button pressed')}
          />
        </View>

        <Button
          title="new button"
          color="#FF7F3E"
          onPress={() => Alert.alert('button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomMargin: {
    marginVertical: 8,
  },
});

export default App;
