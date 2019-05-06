import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const { places, removePlaceHandler } = props;
  const placesOutput = places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => alert(`Item pressed - ID: ${i} Name: ${place}`)}
      onItemLongPressed={() => removePlaceHandler(i)}
    />
  ));
  return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
