
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';


const Logo = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.ord} onPress={() => {
      navigation.navigate('Login')
    }}>
      <ImageBackground
        source={{
          uri: 'https://images.squarespace-cdn.com/content/v1/5b08f0e9266c07fe672e16ba/1662813533964-TZQEACVY5KFHJM7KWEVJ/Explorer%2BX%2BHERO%2BTraveling%2BMan.jpeg?format=1500w',
        }} // Replace with the path to your image
        style={styles.backgroundImage}
      >
        <View style={styles.container}>

          <Image
            style={styles.tinyLogo}
            source={require('./logo-removebg-preview.png')}
          />
          {/* <Text style={styles.text}>Travel Explorer</Text> */}
          {/* <Button title="Sign up" style={styles.welcome} onPress={(e)=>navigation.navigate('Login')}/> */}

        </View>

      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 44,
    color: 'white',
    marginTop: 50,
    marginBottom: 30,
  },
  det: {
    marginTop: 10,
    width: 400,
    marginBottom: 50,
  },

  tinyLogo: {
    width: 250,
    height: 200,
    marginTop: -340,
    alignItems: 'center',
  },
  ord: {
    height: 1000,

  },
});
export default Logo;







//==============================================modal exam rn==========================================================


// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';


// const Logo = ({ navigation }) => {
//   return (
//     <TouchableOpacity style={styles.ord}
//     //  onPress={() => { navigation.navigate('Login')    }}
//     >
//       <ImageBackground
//         source={{
//           uri: 'https://media.istockphoto.com/id/652899770/photo/computer-room.jpg?s=612x612&w=0&k=20&c=xqCQeechjpoFN4szIQNlEp8FkoIsFD0uerl0YOpHleI=',
//         }} // Replace with the path to your image
//         style={styles.backgroundImage}
//       >
//         <View style={styles.container}>
//           <Text style={styles.ctext}>RVS COLLOGE OF ARTS AND SCIENCE</Text>
//           <Text style={styles.ctext}>SULUR</Text>
//           <Text style={styles.text}>MCA LAB</Text>
//           <Button title=" Sign In for admin" style={styles.welcome} onPress={(e) => navigation.navigate('Login')} />
//           <Text style={styles.txt}></Text>
//           <Button title=" Sign In for faculty" style={styles.welcome} onPress={(e) => navigation.navigate('Login')} />
//           <Text style={styles.txt}></Text>
//           <Button title="Sign up for new user" style={styles.welcome} onPress={(e) => navigation.navigate('Signup')} />
          
//         </View>

//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Cover the entire container
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   text: {
//     fontSize: 44,
//     color: 'white',
//     marginTop: -150,
//     marginBottom: 100,
//   },
//   ctext: {
//     fontSize: 24,
//     color: 'white',
//     marginTop: -150,
//     marginBottom: 150,
//   },
//   det: {
//     marginTop: 10,
//     width: 400,
//     marginBottom: 50,
//   },
//   txt: {
//     fontSize: 23,
//     color: 'red',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   tinyLogo: {
//     width: 250,
//     height: 200,
//     marginTop: -340,
//     alignItems: 'center',
//   },
//   ord: {
//     height: 1000,

//   },
//   welcome: {
//     marginTop: 50,
//     marginBottom: 30,
//   },
  
// });
// export default Logo;


