import React, { Component } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Text from '../components/MyText';
import { newPhrazes } from './data';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';
import Phraze from '../components/Phraze';
import NewPhrazeOption from '../components/NewPhrazeOption';

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

  NewPhrazeOptions = [
    { title: 'Add new phraze', icon: 'translate' },
    { title: 'Add new category', icon: 'list' },
    { title: 'Add new library', icon: 'local-library' }
  ];

  render() {
    const { navigation } = this.props;

    const phrazeTip = this.state.showTip ? (
      <View style={styles.phrazeTip}>
        <View style={{ flex: 0.2, paddingHorizontal: 10 }}>
          <Icon name="check-box" color="white" />
        </View>
        <View
          style={{
            flex: 0.7,
            paddingHorizontal: 10
          }}
        >
          <Text>Tap a select box if you have learned the phraze.</Text>
        </View>
        <View style={{ flex: 0.1, paddingHorizontal: 10 }}>
          <Icon
            name="cancel"
            color="#848484"
            onPress={() => this.setState({ showTip: false })}
          />
        </View>
      </View>
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
        <Icon
          name="add"
          containerStyle={styles.addButton}
          color="white"
          onPress={() => this.ActionSheet.show()}
          underlayColor="#33AAAA"
          raised
        />
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={
            <Text style={{ color: '#727272', fontSize: 18 }}>
              Choose option
            </Text>
          }
          options={this.NewPhrazeOptions.map(el => (
            <NewPhrazeOption title={el.title} icon={el.icon} />
          )).concat(<Text>Cancel</Text>)}
          cancelButtonIndex={3}
          onPress={index => {
            switch (index) {
              case 0:
                navigation.navigate('NewPhrazeScreen');
                break;
              case 1:
                navigation.navigate('NewPhrazeScreen');
                break;
              case 2:
                navigation.navigate('NewPhrazeScreen');
                break;
            }
          }}
        />

        {/* <Text onPress={() => navigation.navigate('LoginScreen')}>go back</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'
  },
  phrazeTip: {
    paddingVertical: 10,
    backgroundColor: '#D7D7D7',
    flexDirection: 'row',
    alignItems: 'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#33AAAA',
    width: 50,
    height: 50,
    backgroundColor: '#33AAAA'
  }
});

export default HomeScreen;
