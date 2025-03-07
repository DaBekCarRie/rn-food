import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={results}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ResultsList;
