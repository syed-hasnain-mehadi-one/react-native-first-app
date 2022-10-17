import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

interface listProp{
  date: string,
      task: string,
}

const App = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [list, setList] = useState<listProp>([]);
  const handlePress = () => {
    const newData = [...list];
    newData.push({task, date});
    setList(newData);
    console.log('newData', newData);
    setDate('');
    setTask('');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        onChangeText={e => setDate(e)}
        value={date}
        keyboardType="text"
        placeholder="Enter Your Task"
      />
      <TextInput
        style={styles.input}
        onChangeText={e => setTask(e)}
        value={task}
        keyboardType="numeric"
        placeholder="e.g. dd-mm-yyyy"
      />
      <View style={styles.button}>
        <Button onPress={handlePress} title="ADD TASK" />
      </View>
      {
        list.map((li,i)=>(
          <View style={styles.list} key={i}>
        <Text style={styles.listTitle}>{li?.task}</Text>
        <Text style={styles.listDate}>{li.task}</Text>
      </View>
        ))
      }
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 4,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 22,
    borderRadius: 5,
  },
  button: {
    width: '100%',
    alignItems: 'center',
  },

  list: {
    backgroundColor: 'grey',
    width: '100%',
    height: 50,
    marginTop:10,
    borderRadius: 3,
  },
  listTitle:{
    color:"#ffffff",
    fontSize:22,
    padding:1,
  },
  listDate:{
    color:"#ffffff",
    fontSize:14,
    padding:1,
   
  }
});

export default App;
