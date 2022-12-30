import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';


function Registration() {
  const initialData = {
    vehicalName: '',
    vehicalType: '',
    noOfSeats: '',
    vehicalTime: '',
    startDestination: '',
    endDestitaion: '',
    vehicalPrice: '',
  };

  const [vehicalData, setVehicalData] = useState(initialData);
  const [isUploadImage, setIsUploadImage] = useState(false);
  // console.log(vehicalData, 'Dataaaaa');

  const name = Math.floor((Math.random() * 10000000000) / 20);

  const SendVehical = () => {
    vehicalData.id = database().ref('registration/').push().key;
    database()
      .ref('registration/' + vehicalData.id)
      .set({
        vehicalName: vehicalData.vehicalName,
        vehicalType: vehicalData.vehicalType,
        noOfSeats: vehicalData.noOfSeats,
        vehicalTime: vehicalData.vehicalTime,
        startDestination: vehicalData.startDestination,
        endDestitaion: vehicalData.endDestitaion,
        vehicalPrice: vehicalData.vehicalPrice,
        id: vehicalData.id,
        imageUri : vehicalData.imageUri
      });
    setIsUploadImage(false);
  };

  const uploadImage = () => {
    let options = {
      storageOption: {},
    };
    launchImageLibrary(options, response => {
      const image = response.assets[0];
      if (image) {
        storage().ref(`Images/${name}`).putFile(image.uri).then((e) => {
          storage().ref(`Images/${name}`).getDownloadURL()
  .then((url) => {
    setVehicalData({imageUri : url})
  })
        })
        setIsUploadImage(true);
      }
    });
  };

  return (
    <>
      <View style={{height: '100%', backgroundColor: 'white'}}>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={{color: 'black', fontSize: 25}}>REGISTRATION FORM</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          {/* // no of seat */}
          {/* set boolean that is service use scadualy or 1 time?? */}
          {/* Scaduale Booking */}
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, vehicalName: txt})
            }
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Vehical Name"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, vehicalType: txt})
            }
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Vehical Type"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, noOfSeats: txt})
            }
            keyboardType="number-pad"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Number Of Seats"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, vehicalTime: txt})
            }
            keyboardType="number-pad"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Vehical Time"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, startDestination: txt})
            }
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Start Destination"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, endDestitaion: txt})
            }
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="End Destination"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            onChangeText={txt =>
              setVehicalData({...vehicalData, vehicalPrice: txt})
            }
            keyboardType="number-pad"
            style={{
              borderWidth: 1,
              borderColor: 'black',
              width: '90%',
              borderRadius: 20,
            }}
            placeholder="Vehical Price"
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={uploadImage}
            style={{
              backgroundColor: 'black',
              width: '90%',
              borderRadius: 20,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              {' '}
              {isUploadImage ? 'Uploaded' : 'Upload Image'}{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <TouchableOpacity
            onPress={SendVehical}
            style={{
              backgroundColor: 'black',
              width: '90%',
              borderRadius: 20,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}> Add Vehical </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Registration;
