<<<<<<< HEAD
import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';
import { Dimensions, StatusBar } from 'react-native';

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}
=======
import { StyleSheet } from 'react-native';
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1

export default StyleSheet.create({
  container: {
    backgroundColor: '#35393C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
<<<<<<< HEAD

    //I hope these are necessary
    marginRight: config.deviceWidth * 0.1,
    marginLeft: config.deviceWidth * 0.1,
    
=======
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
  },
  containerBackground: {
    flex: 1,
    backgroundColor: '#35393C',
    //backgroundColor: 'white',
<<<<<<< HEAD
    marginTop: StatusBar.currentHeight
  },
  slotContainer: {
    backgroundColor: '#fc8717',
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingBottom: 10,
    marginRight: config.deviceWidth * 0.1,
    marginLeft: config.deviceWidth * 0.1,
    padding: 20,
    shadowOpacity: 0.5,
    borderRadius: 5,
    shadowRadius: 10,
    shadowColor:'#000',
    shadowOffset:{width:2, height:6},
    elevation: 5,
    // background color must be set
    //backgroundColor : "#0000", // invisible color,
    backgroundColor : "#4f4f4f",
    
  },  
  text: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
=======
  },
  text: {
    color: '#fff',
    fontSize: 20,
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
    //fontFamily: 'SansArabicRegular',
  },  
  text2: {
    color: '#fff',
    fontSize: 17,
<<<<<<< HEAD
    marginTop: 5,
=======
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
  },
  header: {
    marginTop: 30,
    backgroundColor: '#FCBA04',
    flexDirection: 'row'
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#f44c34',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    //margin: 30,
    flexDirection: "row",
    padding: 5,
<<<<<<< HEAD
    backgroundColor: '#707070',
    //backgroundColor: "#f36f57",
    width: 250,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
=======
    backgroundColor: "#f36f57",
    width: 150,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
  },
  buttonText: {
    color:"#F0FFFF",
    fontSize: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  field: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    paddingLeft: 80,
    paddingRight: 80,
    padding: 5,
    fontSize: 15,
    textAlign: 'left',
    display: 'flex', 
    backgroundColor: '#fff'
  },
<<<<<<< HEAD
  datePicker: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius: 3,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    borderStyle: 'solid',
    // borderStartWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  headerMarket: {
    backgroundColor: '#fc8717',
    // backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    marginHorizontal: 0,
    padding: 20,
    shadowOpacity: 0.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    shadowRadius: 10,
    shadowColor:'#000',
    shadowOffset:{width:2, height:6},
    elevation: 5,
    // background color must be set
    //backgroundColor : "#0000", // invisible color,
    backgroundColor : "#4f4f4f",
    
  },  
  carousel:{
  },
  carouselItem:{
    width: 289,
    color: "white",
    padding: 0,
    margin: 0,
  },
  bullets: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  }
=======
>>>>>>> e52cdbb45e29bc541ccd7929efbfd828c3b7e5d1
});