import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import * as actions from '../actions'
import { newPhrazes } from './data';
import Phraze from '../components/Phraze';
import PhrazeTip from '../components/PhrazeTip';
import AddButtonWithModal from '../components/AddButtonWithModal';


class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
  };

  state = {
    refreshing: false,
    page: 1,
    showTip: true
  };

  componentDidMount() {
    // this.fetchData();
  }

  fetchData = async () => {
    this.setState({ refreshing: true });

    setTimeout(() => {
      if (this.state.page === 1) {
        this.setState({
          phrazes: this.state.phrazes.concat(newPhrazes),
          page: 2
        });
      }
      this.setState({
        refreshing: false
      });
    }, 1000);
  };

  renderItem = ({ item }) => {
    return <Phraze item={item} onPressCheckBox={this.props.onCheckBoxPhraze} />;
  };

  render() {
    const phrazeTip = this.state.showTip ? (
      <PhrazeTip onPressCancel={() => this.setState({ showTip: false })} />
    ) : null;

    const { navigation, phrazes } = this.props

    return (
      <View style={styles.container}>
        {phrazeTip}
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={this.fetchData}
          data={phrazes}
          renderItem={this.renderItem}
        />
        <AddButtonWithModal navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => ({
  phrazes: state.phraze.phrazes,
})

const mapDispatchToProps = dispatch => ({
  onPhrazeAdded: phraze => dispatch(actions.addPhraze(phraze)),
  onCheckBoxPhraze: (key, opt) => dispatch(actions.checkBoxPhraze(key, opt))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
