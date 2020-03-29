import {StyleSheet} from 'react-native';

const taskStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  upcomingTasks: {
    color: 'rgba(31,49,74,1)',
    fontSize: 15,
    fontFamily: 'roboto-700',
    marginTop: 86,
    marginLeft: 38,
  },
  icon: {
    color: 'rgba(31,49,74,1)',
    fontSize: 20,
    marginTop: -60,
    marginLeft: 21,
  },
  button: {
    width: 274,
    height: 75,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 32,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOpacity: 1,
    flexDirection: 'row',
    marginTop: 77,
    marginLeft: 38,
  },
  taskTitle: {
    color: 'rgba(31,49,74,1)',
    fontSize: 15,
    fontFamily: 'roboto-regular',
    marginTop: 13,
  },
  materialCheckbox: {
    width: 40,
    height: 40,
    marginLeft: 122,
  },
  taskTitleRow: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 15,
    marginLeft: 37,
    marginTop: 18,
  },
  button1: {
    width: 274,
    height: 75,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 32,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOpacity: 1,
    flexDirection: 'row',
    marginTop: 39,
    marginLeft: 43,
  },
  taskTitle1: {
    color: 'rgba(31,49,74,1)',
    fontSize: 15,
    fontFamily: 'roboto-regular',
    marginTop: 13,
  },
  materialCheckbox1: {
    width: 40,
    height: 40,
    marginLeft: 122,
  },
  taskTitle1Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 20,
    marginLeft: 32,
    marginTop: 17,
  },
  button2: {
    width: 274,
    height: 75,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 32,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOpacity: 1,
    flexDirection: 'row',
    marginTop: 43,
    marginLeft: 43,
  },
  taskTitle2: {
    color: 'rgba(31,49,74,1)',
    fontSize: 15,
    fontFamily: 'roboto-regular',
    marginTop: 12,
  },
  materialCheckbox2: {
    width: 40,
    height: 40,
    marginLeft: 123,
  },
  taskTitle2Row: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    marginRight: 15,
    marginLeft: 36,
    marginTop: 18,
  },
});
export default taskStyle;