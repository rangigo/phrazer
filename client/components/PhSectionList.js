import React, { Component } from "react";
import { SectionList } from "react-native";
import _ from "lodash";

class PhSectionList extends Component {
  constructor(props) {
    super(props);
  }

  createSections = (data, groupBy) => {
    let sections = [...data];

    sections = _.groupBy(sections, groupBy);

    sections = _.reduce(
      sections,
      (acc, next, key) => {
        acc.push({
          title: key,
          data: next
        });
        return acc;
      },
      []
    );

    return sections;
  };

  createSection = (data, filter, title) => {
    const sectionData = data.filter(filter);

    return { title, data: sectionData };
  };

  render() {
    const {
      data,
      groupBy,
      specials,
      renderItem,
      renderSectionHeader,
      ListFooterComponent
    } = this.props;
    let finals = this.createSections(data, groupBy);
    const localSpecials = specials ? specials : [];

    localSpecials.forEach(({ title, filter, top }) => {
      const section = this.createSection(data, filter, title);
      finals = top ? [section, ...finals] : [...finals, section];
    });

    return (
      <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={finals}
        keyExtractor={(item, index) => item + index}
        ListFooterComponent={ListFooterComponent}
      />
    );
  }
}

export default PhSectionList;
