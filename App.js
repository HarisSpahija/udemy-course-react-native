import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: ["Rotterdam", "Munich", "New York"]
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  removePlaceHandler = id => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, index) => {
          return index !== id;
        })
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
          <PlaceList
            removePlaceHandler={this.removePlaceHandler}
            places={this.state.places}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
