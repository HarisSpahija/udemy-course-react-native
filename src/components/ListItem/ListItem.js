import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const listItem = props => {
  const { onItemLongPressed, onItemPressed, placeName } = props;
  return (
    <TouchableOpacity onPress={onItemPressed} onLongPress={onItemLongPressed}>
      <View style={styles.listItem}>
        <Text>{placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default listItem;
