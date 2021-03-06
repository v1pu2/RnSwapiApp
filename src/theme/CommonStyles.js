import {StyleSheet} from 'react-native';
import Colors from './Colors';

const c_styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },

  txtSubTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#8a979b',
    marginVertical:20
  },
  containerStyle: {
    borderBottomColor: '#efefef',
    height: 30,
  },
  inputStyle: {
    height: 40,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    marginTop: 20,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  txtValue: {
    color: '#111212',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Colors.color2,
    marginTop: 20,
    marginLeft: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  rootCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.color2,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  txtCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.color0,
    marginBottom: 10,
  },
  txtCardInfo: {
    fontSize: 16,
    color: Colors.color0,
  },
});
export default c_styles;