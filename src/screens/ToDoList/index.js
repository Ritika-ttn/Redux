import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
class ToDoList extends Component {
  render() {
    return (
      <>
        {console.log('State : ', this.props.data)}
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Simple Note Taker</Text>
          </View>
          <ScrollView>
            <View style={styles.midContainer}>
              {this.props.data.map((value) => (
                <View style={styles.innerContainer}>
                  <Text style={styles.title}>{value.title}</Text>
                  <Text style={styles.detail}> {value.detail}</Text>
                </View>
              ))}
            </View>

            <View style={styles.mainContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AddData')}>
                <View style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/check.png')}
                  />
                  <Text>ADD NEW NOTE</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.list,
    // stateDetail: state.details,
  };
};

export default connect(mapStateToProps, null)(ToDoList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  innerContainer: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#eb9694',
    borderColor: '#e66562',
  },
  midContainer: {
    margin: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
  detail: {
    fontSize: 20,
  },
  btn: {
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#eb9694',
  },
});
