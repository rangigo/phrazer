import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

import * as actions from '../actions';
import Phraze from '../components/Phraze';
import PhrazeTip from '../components/PhrazeTip';
import AddButtonWithModal from '../components/AddButtonWithModal';
import FilterModal from '../components/FilterModal';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name="filter-list"
        color="white"
        underlayColor="transparent"
        onPress={() => navigation.state.params.handleFilter()}
      />
    ),
  });

  state = {
    refreshing: false,
    page: 1,
    showTip: true,
    showFilterModal: false,
    category: 'Work',
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleFilter: this.onPressFilter });
  }

  onPressFilter = () => {
    this.setState({ showFilterModal: true });
  };

  hideFilterModal = () => {
    this.setState({ showFilterModal: false });
  };

  onPressCategory = category => {
    this.setState({ category });
  };

  renderItem = ({ item }) => {
    return (
      <Phraze
        item={item}
        onPressCheckBox={this.props.onCheckBoxPhraze}
        onPressPhraze={this.openPhrazeDetail}
      />
    );
  };

  openPhrazeDetail = item => {
    this.props.navigation.navigate('PhrazeDetailScreen', { item });
  };

  render() {
    const { navigation, phrazes } = this.props;
    const { showFilterModal, showTip, category } = this.state;

    const phrazeTip = showTip ? (
      <PhrazeTip onPressCancel={() => this.setState({ showTip: false })} />
    ) : null;

    return (
      <View style={styles.container}>
        {phrazeTip}
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={this.fetchData}
          data={phrazes}
          renderItem={this.renderItem}
          ListFooterComponent={<View style={styles.footer} />}
        />
        <FilterModal
          showModal={showFilterModal}
          hideModal={this.hideFilterModal}
          checkedCategory={category}
          onPressCategory={this.onPressCategory}
        />
        <AddButtonWithModal navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 90,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  phrazes: state.phraze.phrazes,
});

const mapDispatchToProps = dispatch => ({
  onPhrazeAdded: phraze => dispatch(actions.addPhraze(phraze)),
  onCheckBoxPhraze: (key, opt) => dispatch(actions.checkBoxPhraze(key, opt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
