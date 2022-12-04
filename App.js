import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Block} from './src/block';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Block
        name="Ворота"
        ip={'10.0.90.73'}
        parametrs={'cmd.cgi?psw=AMetwf&cmd=REL,1,1,1'}
      />
      <Block
        name="Калитка"
        ip={'10.0.90.73'}
        parametrs={'cmd.cgi?psw=AMetwf&cmd=REL,2,1,1'}
      />
      <Block name="Бокс 2" ip={'10.0.90.74'} parametrs={'open?box=2'} />
      <Block name="Бокс 3" ip={'10.0.90.75'} parametrs={'open?box=3'} />
      <Block name="Бокс 4" ip={'10.0.90.75'} parametrs={'open?box=4'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: '#eff0d1',
  },
});
