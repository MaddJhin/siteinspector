import React, { Component } from 'react'
import {
  AsyncStorage,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'

class SiteList extends Component {
  state = {
    sites: []
  }
  componentDidMount = () => AsyncStorage.getItem('name')
    .then((value) => this.setState({ 'name': value }))

  setName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({ 'name': value });
  }

  _addProject = () => {
    console.log("Adding Project");
  }

  render() {
    return (
      <View>
        <View>
          <Text>
            {this.state.sites}
          </Text>
        </View>
        <View style={styles.tabBarInfoContainer}>
          <TextInput style={styles.textInput} />

          <Button
            onPress={this._addProject}
            title="New Site">
            {/* <SimpleLineIcons name="plus" size={50} color="green" />           */}
          </Button>
        </View>
      </View>
    );
  }
}
export default SiteList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    margin: 15,
    height: 35,
    borderWidth: 1,
    backgroundColor: '#7685ed'
  }
})