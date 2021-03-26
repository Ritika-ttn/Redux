import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import {listing, update, deleteData, add} from '../../modules/apicalls/actions';
class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      title: '',
      description: '',
      isupdateModalVisible: false,
      updateId: '',
      updateUserId: '',
    };
  }
  ModalVisible = (visible) => {
    this.setState({isModalVisible: visible});
  };
  updateModalVisible = (visible) => {
    this.setState({isupdateModalVisible: visible});
  };
  componentDidMount() {
    this.props.listing();
  }
  changedID = (data) => {
    this.setState({updateId: data});
  };
  changedUserId = (data) => {
    this.setState({updateUserId: data});
  };
  changedTitle = (data) => {
    this.setState({title: data});
  };
  changedDescription = (data) => {
    this.setState({description: data});
  };
  dataEntered = () => {
    const data = {
      title: this.state.title,
      body: this.state.description,
    };
    this.props.add(data);
    this.setState({isModalVisible: false});
  };
  updateData = () => {
    const data = {
      userId: this.state.updateUserId,
      id: this.state.updateId,
      title: this.state.title,
      body: this.state.description,
    };
    this.props.update(data);
    this.setState({isupdateModalVisible: false});
  };
  dataStyling = ({item}) => {
    return (
      <View style={styles.txt}>
        <TouchableOpacity onPress={() => this.updateModalVisible(true)}>
          <Image
            style={styles.edit}
            source={require('../../assets/edit.png')}
          />
        </TouchableOpacity>
        <Text style={styles.Text}>ID:{item.id}</Text>
        <Text style={styles.Text}>Title:{item.title}</Text>
        <Text style={styles.Text}>Body: {item.body}</Text>
        <TouchableOpacity
          key={item.id}
          onPress={() => this.props.deleteData(item.id)}>
          <Image
            style={styles.delete}
            source={require('../../assets/delete.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.addContainer}>
            <TouchableOpacity onPress={() => this.ModalVisible(true)}>
              <Image
                style={styles.add}
                source={require('../../assets/add.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.innerContainer}>
            <FlatList
              data={this.props.listData}
              renderItem={this.dataStyling}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <Modal
            animationIn="rotate"
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.ModalVisible(false)}
            onRequestClose={() => {
              this.ModalVisible(!this.state.isModalVisible);
            }}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Title"
                onChangeText={(data) => this.changedTitle(data)}
              />
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Description"
                onChangeText={(data) => this.changedDescription(data)}
              />
              <TouchableOpacity onPress={this.dataEntered}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          {/* {console.log('List ', this.props.listData)} */}
          <Modal
            animationIn="rotate"
            isVisible={this.state.isupdateModalVisible}
            onBackdropPress={() => this.updateModalVisible(false)}>
            <View style={styles.modalContainer}>
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Id"
                onChangeText={(data) => this.changedUserId(data)}
              />
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Id"
                onChangeText={(data) => this.changedID(data)}
              />
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Title"
                onChangeText={(data) => this.changedTitle(data)}
              />
              <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Enter new Description"
                onChangeText={(data) => this.changedDescription(data)}
              />
              <TouchableOpacity onPress={() => this.updateData()}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listData: state.list,
  };
};
const mapDispatchToProps = (dispatch) => ({
  listing: () => dispatch(listing()),
  update: (data) => dispatch(update(data)),
  add: (data) => dispatch(add(data)),
  deleteData: () => dispatch(deleteData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  addContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  add: {
    width: 50,
    height: 50,
  },
  innerContainer: {
    flex: 1,
    //backgroundColor: 'yellow',
  },
  txt: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10,
    padding: 10,
  },
  Text: {
    fontSize: 20,
  },
  edit: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  delete: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 60,
    width: '80%',
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
});
