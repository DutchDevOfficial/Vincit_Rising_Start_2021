import { faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';
import { Dimensions, StatusBar } from 'react-native';

const config = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height
}

export default StyleSheet.create({
  container: {
    backgroundColor: '#35393C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,

    //I hope these are necessary
    marginRight: config.deviceWidth * 0.1,
    marginLeft: config.deviceWidth * 0.1,
    
  },
  containerBackground: {
    flex: 1,
    backgroundColor: '#35393C',
    //backgroundColor: 'white',
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
    //fontFamily: 'SansArabicRegular',
  },  
  text2: {
    color: '#fff',
    fontSize: 17,
    marginTop: 5,
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
    backgroundColor: '#707070',
    //backgroundColor: "#f36f57",
    width: 250,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
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
});