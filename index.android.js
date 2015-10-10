/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

class FindTheFaker extends React.Component{
  render() {
    return (
      <Navigator
          initialRoute={{name: 'CheckInView', component: CheckInView}}
          configureScene={() => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              if (route.component) {
                  return React.createElement(route.component, { navigator });
              }
          }}
       />
    );
  }
};

class CheckInView extends React.Component {
  onClickCreate() {
    console.log('called');
    this.props.navigator.push({
      name: 'ChatView',
      component: ChatView
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Create a username???
        </Text>
        <Text onPress={this.onClickCreate.bind(this)}>
          Go to feed!
        </Text>
      </View>
    );
  }
}

class ChatView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Chat View???
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FindTheFaker', () => FindTheFaker);
