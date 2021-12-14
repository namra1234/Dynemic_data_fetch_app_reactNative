import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ListOfResult = ({ titleData, resultsData, navigation }) => {
  if (!resultsData.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleData}>{titleData}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={resultsData}
        keyExtractor={(resultsData) => resultsData.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultShowScreen", { id: item.id })
              }
            >
              <View style={{ padding: 10, alignItems: "center" }}>
                <Image style={styles.imagesStyle} source={{ uri: item.image_url }} />
                <Text>{item.name}</Text>
                <Text>{item.rating} Starts</Text>
                <Text>{item.review_count} Reviews</Text>
                <Text>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Text> resultsData: {resultsData && resultsData.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleData: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imagesStyle: {    
    width: 250,
    borderRadius: 4,
    height: 150,
  },
});

export default withNavigation(ListOfResult);
