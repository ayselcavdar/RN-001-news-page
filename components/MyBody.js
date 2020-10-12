import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';

const MyBody = () => {
  return (
    <SafeAreaView style={stylesBody.container}>
      <View>
        <Text style={stylesBody.styleText}>
          {' '}
          Chanel after Karl Lagerfeld is looking blah despite a Paris runway
          invader
        </Text>
        <Text>
          PARIS (WASHINGTON POST) - Karl Lagerfeld made it look easy. His
          version of Chanel, typically presented in runway shows against an
          elaborately designed mise-en-scène, was an avalanche of ideas. The
          models, sometimes almost 100 of them, marched along so fast that it
          was a challenge to the senses just trying to sort it all out.
          Lagerfeld was a master at making you curious. Popular culture flowed
          through the Chanel atelier, infusing the collection with urgency - or
          at least awareness.
        </Text>
      </View>
      <View>
        <Image
          style={{ resizeMode: 'cover', width: 345, height: 200, margin: 5 }}
          source={require('../img/nz_runway_021042.jpg')}
        />
      </View>

      <View>
        <Text style={stylesBody.styleText}>
          {' '}
          <View>
            <Text style={stylesBody.styleText}>
              {' '}
              Paris Fashion Week: Chanel Haute Couture Spring/Summer 2020
            </Text>
            <Text>
              We saw classic Chanel tweed on full skirts, dresses and suits worn
              with tights and socks as if mimicking school girls. Finished with
              oversized colours and double-breasted fastenings, blazers were
              worn with straight skirts some of which were layered with tulle.
            </Text>
          </View>
          <View>
            <Image
              style={{
                resizeMode: 'cover',
                width: 345,
                height: 200,
                margin: 5,
              }}
              source={require('../img/19_SS_2020_HC_finale_pictures_by_Olivier_Saillant_3.jpg')}
            />
          </View>
        </Text>
        <Text>
          PARIS (WASHINGTON POST) - Karl Lagerfeld made it look easy. His
          version of Chanel, typically presented in runway shows against an
          elaborately designed mise-en-scène, was an avalanche of ideas. The
          models, sometimes almost 100 of them, marched along so fast that it
          was a challenge to the senses just trying to sort it all out.
          Lagerfeld was a master at making you curious. Popular culture flowed
          through the Chanel atelier, infusing the collection with urgency - or
          at least awareness.
        </Text>
      </View>
      <View>
        <Image
          style={{ resizeMode: 'cover', width: 345, height: 200, margin: 5 }}
          source={require('../img/47_LOOK_047-768x592.jpg')}
        />
      </View>
    </SafeAreaView>
  );
};

const stylesBody = {
  container: {
    margin: 10,
    marginTop: 20,
    flex: 1,
  },
  styleText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
};

export default MyBody;
