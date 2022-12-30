import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';

function Home({navigation}) {
  const [cardData, setCardData] = useState({});
  // console.log(cardData, 'aa datta');

  const initialfunction = () => {
    database()
      .ref('registration')
      .once('value', e => {
        const data = e.val();
        // console.log(e, 'ee');
        if (data) {
          let initialData = Object.values(data);
          setCardData(initialData);
        }
        // console.log(data, 'home data');
      });
  };

  useState(() => {
    initialfunction();
  }, []);

  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <View>
          <Image
            source={require('../Assets/transport.webp')}
            style={{width: '100%', height: 200}}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{color: 'black', fontSize: 25}}> TRANSPORT APP </Text>
        </View>
        <View>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              {cardData.length ?
                cardData.map((e, i) => {
                  return (
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Category')}
                    key={i}
                      style={{
                        width: '92%',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: 'center',
                        backgroundColor : 'black'
                      }}>
                      <View
                        style={{
                          borderWidth: 1,
                          width: '95%',
                          borderRadius: 10,
                          backgroundColor : 'white',
                          marginTop : 10
                        }}>
                        <Image
                          source={{uri: e.imageUri}}
                          style={{width: '100%', height: 200}}
                        />
                      </View>
                      <View style={{flexDirection : 'row', fontSize : 30}}>
                        <Text style={{fontSize : 18, color : 'white'}}> Category : </Text>
                        <Text style={{fontSize : 18, color : 'white'}}> {e.vehicalType} </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              :
              <View>
                <Text> Data is fetching </Text>
              </View>
              }
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Home;
