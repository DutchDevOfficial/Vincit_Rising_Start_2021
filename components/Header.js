import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet  } from 'react-native';
import style from '../style/style';
import Images from '../constants/Images';
import { useFonts } from "expo-font";

export default function Header() {
    const [loaded] = useFonts({
        SansArabicRegular: require('../assets/fonts/IBMPlexSansArabic-Regular.ttf'),
        RobotoCondensed: require('../assets/fonts/RobotoCondensed-Regular.ttf'),
    });

    if(!loaded) {
        return null;
    }

    return(
        // <View style={styles.header}>
        //     <Text style={styles.title}>
        //         Vincit Crypto
        //     </Text>
        // </View>
        <View
            style={{
                width: '100%',
<<<<<<< HEAD
<<<<<<< HEAD
                height: 100,
=======
                height: 150,
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
=======
                height: 100,
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
                shadowOpacity: 0.5,
                shadowRadius: 11,
                shadowColor:'#000',
                shadowOffset:{width:0, height:4},
            }}    
        >
            <ImageBackground
                source={Images.banner2}
                resizeMode="cover"
                style={{
                    flex: 1,
                    alignItems: 'center',
<<<<<<< HEAD
<<<<<<< HEAD
                    opacity: 0.8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
=======
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
=======
                    opacity: 0.8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
                }}
            >
                <Text style={styles.heading}>Vincit Crypto</Text>
            </ImageBackground>

        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
      fontFamily: 'RobotoCondensed',
      color: '#fff',
<<<<<<< HEAD
<<<<<<< HEAD
    //   fontWeight: 'bold',
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      marginTop: 15,
=======
      fontWeight: 'bold',
=======
    //   fontWeight: 'bold',
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
      flex: 1,
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
<<<<<<< HEAD
      marginTop: 45,
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
=======
      marginTop: 15,
>>>>>>> de6588128f86d312d099d6100cff2faa6b9237be
    },
    shadow: {
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor:'#000',
        shadowOffset:{width:0, height:4},
      },
  })