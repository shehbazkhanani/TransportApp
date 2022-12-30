import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';

function Admin ({navigation}) {
    return (
        <>
        <View style={{backgroundColor : 'white', height : '100%'}}>
        <View>
        <Image
                source={require('../Assets/transport.webp')}
                style={{width: '100%', height: 200}}
              />
        </View>
        <View style={{alignItems : 'center', marginTop : 40}}>
          <Text style={{color : 'black', fontSize : 25}}> ADMIN PANNEL </Text>
        </View>
        <View style={{height : '60%', justifyContent : 'center'}}>
        <View style={{alignItems : 'center', marginTop : 50}}>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={{backgroundColor : 'black', width : '90%', borderRadius : 20, height : 50, alignItems : 'center', justifyContent : 'center'}}>
                <Text style={{color : 'white', fontSize : 20}}> Registered Vehical </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
        </>
    )
}
export default Admin