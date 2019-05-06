import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "./src/components/ListItem/ListItem";
import InputContainer from "./src/components/InputContainer/InputContainer";
import ListContainer from "./src/components/ListContainer/ListContainer";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  };

  placeNameChangedHandler = event => {
    this.setState({ placeName: event });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const { placeName, places } = this.state;
    const placesOutput = places.map((place, index) => (
      <ListItem key={index} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <InputContainer
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
        />
        <ListContainer placesOutput={placesOutput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
