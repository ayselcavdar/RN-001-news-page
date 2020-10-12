import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function MyHeader() {
  return (
    <SafeAreaView style={{ background: '#fff' }}>
      <View style={styleHeader.container}>
        <View>
          <Image 
          style={{ width: 24, height: 24 }}
          source={require('../img/Very-Basic-Menu-icon.png')} />
        </View>
        <View>
        <Text style={{fontStyle:'italic',fontSize:20, marginTop:5}}>Chanel Fashion Week 2020</Text>

        </View>

        <View>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../img/Users-Name-icon.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styleHeader = {
  container: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
