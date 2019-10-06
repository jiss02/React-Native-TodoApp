import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';

// 부품가져오기
import Title from './app/components/Title';
import SubTitle from './app/components/SubTitle';
import ListItem from './app/components/ListItem';
import Input from './app/components/Input'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue : '',
      todos : [],
    };
  };

  storeData = () => {
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state))
  };

  getData = () => {
    AsyncStorage.getItem('@todo:state').then((state) => {
      if (state !== null){
        this.setState(JSON.parse(state));
      }
    })
  };

  componentWillMount(){
    this.getData()
  };

  _changeText = (value) => {
    this.setState({inputValue: value});
  };

  _addItem = () => {
    if(this.state.inputValue !== ""){
      const preTodo = this.state.todos
      const newTodo = { title: this.state.inputValue, iscomplete:false }

      this.setState({
        inputValue: '',
        todos: preTodo.concat(newTodo)
      }, this.storeData);
    };
  };

  _makeTodoItem = ({item, index}) => {
    return(
      <ListItem
        title={item.title}
        iscomplete={item.iscomplete}
        changeComplete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].iscomplete = !newTodo[index].iscomplete;
          this.setState({todos: newTodo}, this.storeData);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({todos: newTodo}, this.storeData);
        }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Title></Title>
        </View>
        <View style={styles.listbox}>
          <View style={styles.subtitlecontainer}>
            <SubTitle subtitle="Make To do"/>
            <Input
              value={this.state.inputValue}
              changeText={this._changeText}
              addItem={this._addItem}
            />
            <SubTitle subtitle="List"/>
          </View>
          <View>
            <FlatList
              data={this.state.todos}
              renderItem={this._makeTodoItem}
              keyExtractor={(item, index)=>{return `${index}`}}
            />
          </View>
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titlecontainer: {
  },
  subtitlecontainer: {
    marginTop: 20,
  },
  listbox: {
    marginTop: 30,
    marginLeft: 50,
  },
});
