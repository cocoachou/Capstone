import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#DDDDDD'
  },
  modalInnerStyle: {
    width: '80%', 
    backgroundColor: 'white', 
    padding: 40, 
    borderRadius: 10
  },
  buttonStyle: {
    backgroundColor: '#DDDDDD', 
    borderRadius: 10, 
    padding: 10, 
    flex: 1
  },
  canvasStyle: {
    width: 300, 
    height: 500
  },
  colorBox: {
    width: 40, 
    height: 40, 
    margin: 10, 
    borderWidth: 2, 
    borderColor: 'gray'
  },
  endButtonStyle: {
    borderRadius: 10, 
    width: 100, 
    height: 100, 
    padding: 10, 
    margin: 7, 
    backgroundColor: '#DDDDDD', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginTop: 20, 
    backgroundColor: '#DDDDDD'
  },
});
