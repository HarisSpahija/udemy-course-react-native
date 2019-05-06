import React from "react";
import { View, StyleSheet } from "react-native";

const ListContainer = props => {
  const { placesOutput } = props;
  return <View style={styles.listContainer}>{placesOutput}</View>;
};
const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});
export default ListContainer;
