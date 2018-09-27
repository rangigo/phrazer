import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import { newPhrazes } from './data';
import Phraze from '../components/Phraze';
import PhrazeTip from '../components/PhrazeTip';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
  };

  state = {
    refreshing: false,
    phrazes: [
      {
        phraze: 'Ban may tuoi va dang lam gi',
        translated: "What's your age and your job?",
        key: '6',
        public: true,
        phrazed: false,
        favorite: true
      },
      {
        phraze: 'Ban thich MERN Stack hay khong?',
        translated: 'Do you have any experiences in MERN Stack?',
        key: '7',
        public: false,
        phrazed: true,
        favorite: true
      },
      {
        phraze: 'Toi dang xem anime Attack on Titan',
        translated: 'I am watching Attack on Titan anime.',
        key: '8',
        public: false,
        phrazed: true,
        favorite: false
      }
    ],
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

  onPressCheckBox = (key, opt) => {
    const newPhrazes = this.state.phrazes.map(el => {
      if (el.key === key) {
        switch (opt) {
          case 'public':
            el.public = !el.public;
            return el;
          case 'phrazed':
            el.phrazed = !el.phrazed;
            return el;
          case 'favorite':
            el.favorite = !el.favorite;
            return el;
        }
      }
      return el;
    });

    this.setState({ phrazes: newPhrazes });
  };

  renderItem = ({ item }) => {
    return <Phraze item={item} onPressCheckBox={this.onPressCheckBox} />;
  };

  render() {
    console.log('props', this.props);
    const phrazeTip = this.state.showTip ? (
      <PhrazeTip onPressCancel={() => this.setState({ showTip: false })} />
    ) : null;

    return (
      <View style={styles.container}>
        {phrazeTip}
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.fetchData}
          data={this.state.phrazes}
          renderItem={this.renderItem}
        />
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

export default HomeScreen;
