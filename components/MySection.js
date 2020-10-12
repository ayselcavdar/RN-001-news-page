import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const MySection = () =>{
  return(
  <SafeAreaView style={{ marginTop: 20, margin: 15, flex: 1 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle:'italic',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          {' '}
        MOST VIEWED ARTICLES{' '}
        </Text>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../img/img1.jpg')}
          />
          <Text style={stylesSection.sectionText}>
            Milan Fashion Week: Giorgio Armani Spring/Summer 2021{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../img/img2.jpg')}
          />
          <Text style={stylesSection.sectionText}>
           Milan Fashion Week: Fendi Spring/Summer 2021{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../img/img3.jpg')}
          />
          <Text style={stylesSection.sectionText}>
           Milan Fashion Week: Dolce&Gabbana Spring/Summer 2021{' '}
          </Text>
        </View>
        <View style={stylesSection.sectionContainers}>
          <Image
            style={stylesSection.sectionImages}
            source={require('../img/img4.jpg')}
          />
          <Text style={stylesSection.sectionText}>
           Milan Fashion Week: Prada Spring/Summer 2021{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesSection = {
  sectionContainers: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  sectionText: {
    width: '50%',
    fontSize: '22',
  },
  sectionImages: {
    width: '50%',
    marginRight: 5,
  },
};

 

export default MySection;
