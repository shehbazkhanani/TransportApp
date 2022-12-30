import { Text, TouchableOpacity, View } from "react-native"

function Profile ({navigation}) {
    return (
        <>
        <View>
            <Text>
                Profile
            </Text>
        </View>
        <View style={{alignItems : 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor : 'black', width : '90%', borderRadius : 5, alignItems : 'center', height : 40, justifyContent : 'center'}}>
                <Text style={{color : 'white'}}> Login </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Profile