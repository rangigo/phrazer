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
    )
  });

  state = {
    refreshing: false,
    page: 1,
    showTip: true,
    showFilterModal: false,
    category: 'Meeting'
  };

  componentDidMount() {
    this.props.navigation.setParams({ handleFilter: this.onPressFilter });
    this.props.onGetPhrazesByCategory(this.state.category);
  }

  /** Handle modal functions
   * Start
   */

  onPressFilter = () => {
    this.setState({ showFilterModal: true });
  };

  hideFilterModal = () => {
    this.setState({ showFilterModal: false });
  };

  onPressCategory = category => {
    this.setState({ category });
  };

  onGetPhrazesByCategory = () => {
    this.hideFilterModal();
    this.props.onGetPhrazesByCategory(this.state.category);
  };

  onCancelModal = () => {
    this.hideFilterModal();
    this.setState({ category: this.props.selectedCategory });
  };

  /** Handle modal functions
   * End
   */

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
    const { navigation, phrazesByCategory } = this.props;
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
          data={phrazesByCategory}
          renderItem={this.renderItem}
          ListFooterComponent={<View style={styles.footer} />}
        />
        <FilterModal
          showModal={showFilterModal}
          checkedCategory={category}
          onPressCategory={this.onPressCategory}
          onGetPhrazesByCategory={this.onGetPhrazesByCategory}
          onCancelModal={this.onCancelModal}
        />
        <AddButtonWithModal navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    height: 90
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  phrazes: state.phraze.phrazes,
  phrazesByCategory: state.phraze.phrazesByCategory,
  selectedCategory: state.phraze.selectedCategory
});

const mapDispatchToProps = dispatch => ({
  onPhrazeAdded: phraze => dispatch(actions.addPhraze(phraze)),
  onCheckBoxPhraze: (key, opt) => dispatch(actions.checkBoxPhraze(key, opt)),
  onGetPhrazesByCategory: category =>
    dispatch(actions.getPhrazesByCategory(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
