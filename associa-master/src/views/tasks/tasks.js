import React from 'react';
import {
  taskStyleheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import MaterialCheckbox from '../../components/materialCheckBox/materialCheckBox';
//import TaskContainer from '../../components/taskContainer/taskContainer';
import taskStyle from './tasksStyle';

function Tasks(props) {
  return (
    <View style={taskStyle.container}>
      <StatusBar
        animated={false}
        barStyle="light-content"
        backgroundColor="rgba(155,155,155,1)"
      />
      <Text style={taskStyle.upcomingTasks}>Upcoming Tasks</Text>
      <Icon name="bars" style={taskStyle.icon} />
      <TaskContainer taskTitle={'collect money'} isTaskDone={true} />
      <TouchableOpacity style={taskStyle.button1}>
        <View style={taskStyle.taskTitle1Row}>
          <Text style={taskStyle.taskTitle1}>Task title</Text>
          <MaterialCheckbox style={taskStyle.materialCheckbox1} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={taskStyle.button2}>
        <View style={taskStyle.taskTitle2Row}>
          <Text style={taskStyle.taskTitle2}>Task title</Text>
          <MaterialCheckbox style={taskStyle.materialCheckbox2} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Tasks;
