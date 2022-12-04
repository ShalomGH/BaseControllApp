import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const makeRequest = async (ip, request) => {
  try {
    console.log(`http://${ip}/${request}`);
    await fetch(`http://${ip}/${request}`);
  } catch (error) {
    console.error(error);
  }
};

export const Block = props => {
  return (
    <View style={styles.block}>
      <Text style={styles.block_name}>{props.name}</Text>
      <TouchableOpacity
        style={styles.block_button}
        onPress={() => {
          makeRequest(props.ip, props.parametrs);
        }}>
        <Text style={styles.block_button_text}>on</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginVertical: 15,
  },
  block_name: {
    color: '#232323',
    fontSize: 30,
  },
  block_button: {
    marginTop: 5,
    alignSelf: 'stretch',
    backgroundColor: '#77ba99',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  block_button_text: {
    fontSize: 24,
    color: '#232323',
  },
});
