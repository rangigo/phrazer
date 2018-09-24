import React, { Component } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';
import Text from '../components/MyText';

const newPhrazes = [
  {
    phraze: 'Ban ten gi la gi va song o dau?',
    translated: "What's your name and where do you live?",
    key: '1',
    public: true,
    phrazed: false,
    favorite: true,
  },
  {
    phraze: 'Ban ten gi la gi va song o dau?',
    translated: "What's your name and where do you live?",
    key: '2',
    public: true,
    phrazed: false,
    favorite: true,
  },
  {
    phraze: 'Ban ten gi la gi va song o dau?',
    translated: "What's your name and where do you live?",
    key: '3',
    public: true,
    phrazed: false,
    favorite: true,
  },
  {
    phraze: 'Ban ten gi la gi va song o dau?',
    translated: "What's your name and where do you live?",
    key: '4',
    public: true,
    phrazed: false,
    favorite: true,
  },
  {
    phraze: 'Ban ten gi la gi va song o dau?',
    translated: "What's your name and where do you live?",
    key: '5',
    public: true,
    phrazed: false,
    favorite: true,
  },
];

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: <Icon name="home" color="#4AA9A8" />,
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
        favorite: true,
      },
      {
        phraze: 'Ban thich MERN Stack hay khong?',
        translated: 'Do you have any experiences in MERN Stack?',
        key: '7',
        public: true,
        phrazed: false,
        favorite: true,
      },
      {
        phraze: 'Toi dang xem anime Attack on Titan',
        translated: 'I am watching Attack on Titan anime.',
        key: '8',
        public: true,
        phrazed: true,
        favorite: true,
      },
    ],
    page: 1,
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
          page: 2,
        });
      }
      this.setState({
        refreshing: false,
      });
    }, 1000);
  };

  onPressItem = (key, opt) => {
    console.log(key, opt)
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
    return (
      <View style={styles.phrazeContainer}>
        <View style={styles.col1}>
          <CheckBox
            containerStyle={styles.checkBoxContainer}
            iconType="material"
            checkedIcon="people"
            uncheckedIcon="people"
            checkedColor="#33AAAA"
            size={30}
            checked={item.public}
            onPress={() => this.onPressItem(item.key, 'public')}
          />
          <CheckBox
            containerStyle={styles.checkBoxContainer}
            iconType="material"
            checkedIcon="check-box"
            uncheckedIcon="check-box-outline-blank"
            checkedColor="#33AAAA"
            size={30}
            checked={item.phrazed}
            onPress={() => this.onPressItem(item.key, 'phrazed')}
          />
        </View>
        <View style={styles.col2}>
          <Text style={{ fontSize: 20 }}>{item.phraze}</Text>
          <Text style={{ color: '#B2B2B2', fontSize: 20 }}>
            {item.translated}
          </Text>
        </View>
        <View style={styles.col3}>
          <Icon name="volume-mute" color="#ccc" size={30} />
        </View>
        <View style={styles.col4}>
          <Icon name="more-horiz" />
          <CheckBox
            containerStyle={styles.checkBoxContainer}
            iconType="material"
            checkedIcon="star"
            uncheckedIcon="star-border"
            checkedColor="#F6BF26"
            checked={item.favorite}
            size={30}
            onPress={() => this.onPressItem(item.key, 'favorite')}
          />
        </View>
      </View>
    );
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.fetchData}
          data={this.state.phrazes}
          renderItem={this.renderItem}
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
    justifyContent: 'center',
  },
  phrazeContainer: {
    paddingVertical: 23,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  col1: {
    flex: 0.2,
    paddingHorizontal: 10,
  },
  col2: {
    flex: 0.6,
    paddingHorizontal: 10,
  },
  col3: {
    flex: 0.1,
    paddingHorizontal: 10,
  },
  col4: {
    flex: 0.1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBoxContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    width: 30,
  },
});

export default HomeScreen;
