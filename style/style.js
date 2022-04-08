import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#35393C',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  containerBackground: {
    flex: 1,
    backgroundColor: '#35393C',
    //backgroundColor: 'white',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    //fontFamily: 'SansArabicRegular',
  },  
  text2: {
    color: '#fff',
    fontSize: 17,
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
    backgroundColor: "#f36f57",
    width: 150,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
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
});