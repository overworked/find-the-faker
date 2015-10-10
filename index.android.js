'use strict';

var globalContext = {};

var GameView = require('./views/gameView.js');

console.log(GameView);

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput
} = React;

class Agar extends React.Component{
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
}

class CheckInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  onClickCreate() {
    if (this.state.username) {
      globalContext.username = this.state.username;

      this.props.navigator.push({
        name: 'GameView',
        component: GameView
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 16}}>
          Enter your screen name
        </Text>
        <TextInput
          style={{fontSize: 16, height: 40, borderColor: 'gray', borderWidth: 1, margin: 6, backgroundColor: '#f8f8f8'}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
      <Button style={{fontSize: 16, color: 'green', backgroundColor: '#f8f8f8', padding: 4}} onPress={this.onClickCreate.bind(this)}>
          Continue
        </Button>
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

AppRegistry.registerComponent('agar', () => Agar);
