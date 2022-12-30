import { useState } from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

function UserBooking ({navigation, route}) {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const data = route.params

console.log(data, 'route');

    return (
        <View style={{backgroundColor : 'white'}}>
        <View>
            <Image source={{uri : data.imageUri}} style={{height : 200, width : '100%'}} />
        </View>
        <View style={{alignItems : 'center', marginTop : 40}}>
        <TextInput
            placeholder="Enter Email or Username"
            style={styles.input}
            onChangeText={txt => setLoginData({...loginData, email: txt})}
          />
        </View>
        <View style={{alignItems : 'center', marginTop : 20}}>
        <TextInput
            placeholder="CNIC"
            style={styles.input}
            onChangeText={txt => setLoginData({...loginData, email: txt})}
          />
        </View>
        <View style={{alignItems : 'center', marginTop : 20}}>
        <TextInput
            placeholder="Cell Number"
            style={styles.input}
            onChangeText={txt => setLoginData({...loginData, email: txt})}
          />
        </View>
        <View style={{alignItems : 'center', marginTop : 20, width : '100%'}}>
        <Button title="Confirm Date" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }} />
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('ConfirmRegistered')}>
            <Text style={styles.button}> Confirm Registered </Text>
          </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
    },
    decription: {
      fontSize: 20,
    },
    input: {
      height: 60,
      backgroundColor: 'white',
      width: '80%',
      borderRadius: 10,
      padding: 20,
      fontSize: 16,
      borderBottomWidth: 1,
    },
    center: {
      alignItems: 'center',
      width: '100%',
    },
    button: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonStyle: {
      height: 60,
      width: '80%',
      backgroundColor: 'black',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgButton: {
      borderColor: 'white',
      borderWidth: 1,
      padding: 5,
      margin: 20,
    },
  });

export default UserBooking