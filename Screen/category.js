import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';

function Category({navigation}) {
  const [cardData, setCardData] = useState({});
  // console.log(cardData, 'aa datta');

  const initialfunction = () => {
    database()
      .ref('registration')
      .once('value', e => {
        const data = e.val();
        if (!!data) {
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
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <View style={{width: '100%', marginTop: 20, flexDirection: 'row'}}>
            <TextInput
              placeholder="find any product here..."
              //   onChangeText={searchData}
              style={styles.search}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#f96565',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20%',
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <Image
                source={require('../Assets/search.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={{fontSize : 25, fontWeight : 'bold', marginLeft : 20, marginTop : 20}}> BUS </Text>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 20}}>
          {cardData.length ? (
            cardData.map((e, i) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserBooking', e)}
                  key={i}
                  style={{
                    width: '92%',
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: 'center',
                    backgroundColor: 'black',
                  }}>
                  <View
                    style={{
                      borderWidth: 1,
                      width: '95%',
                      borderRadius: 10,
                      backgroundColor: 'white',
                      marginTop: 10,
                    }}>
                    <Image
                      source={{uri: e.imageUri}}
                      style={{width: '100%', height: 200}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', fontSize: 30}}>
                    <Text style={{fontSize: 18, color: 'white'}}>
                      {' '}
                      Category :{' '}
                    </Text>
                    <Text style={{fontSize: 18, color: 'white'}}>
                      {' '}
                      {e.vehicalType}{' '}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View>
              <Text> Data is fetching </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4f4',
    alignItems: 'center',
  },
  search: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: '70%',
    fontSize: 18,
    paddingLeft: 20,
    padding: 15,
  },
});

export default Category;
