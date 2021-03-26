import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {todo} from '../../modules/todolist/actions';
class AddData extends Component {
  state = {
    text: '',
    details: '',
  };

  changedText = (item) => {
    this.setState({
      text: item,
    });
  };
  changedDetails = (detail) => {
    this.setState({
      details: detail,
    });
  };
  handleText = () => {
    //var arr = [this.state.text, this.state.details];
    this.props.todo(this.state.text, this.state.details);
    // this.setState({text: ''});
    this.props.navigation.navigate('ToDoList');
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Add a New Note</Text>
          </View>
          <View style={styles.titleContainer}>
            <TextInput
              multiline={true}
              style={styles.title}
              placeholder="Enter Title"
              onChangeText={(text) => this.changedText(text)}
            />
          </View>
          <View style={styles.noteContainer}>
            <TextInput
              multiline={true}
              style={styles.note}
              placeholder="Add a Note here"
              onChangeText={(text) => this.changedDetails(text)}
            />
          </View>
          <View style={styles.mainContainer}>
            <TouchableOpacity onPress={this.handleText}>
              <Image
                style={styles.img}
                source={require('../../assets/check.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({todo}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddData);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  titleContainer: {
    margin: 12,
    borderWidth: 2,
    padding: 10,
    height: 60,

    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 25,
    marginTop: 30,
  },
  note: {
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    width: 50,
    height: 50,
  },
  cross: {
    paddingLeft: 60,
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 50,
    paddingRight: 30,
  },
  noteContainer: {
    height: 300,
    borderWidth: 2,
    margin: 12,
    padding: 15,
    borderRadius: 10,
  },
});
