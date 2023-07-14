import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import CardTile from "../components/CardTile";

const Home = ({ navigation }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getListOfMovies = async () => {
      const response = await fetch(
        "https://imdb-top-100-movies.p.rapidapi.com/",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ea3aa9ee13msh5abe177046ccbb8p1fcee5jsn1eb24c76b5d0",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        }
      );
      const result = await response.json();
      if (result) {
        setLoading(false);
        setMovieList(result);
      }
    };

    getListOfMovies();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  if (loading) {
    return (
      <ActivityIndicator size={"large"} color={"red"} style={{ flex: 1 }} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieList || []}
        renderItem={({ item }) => (
          <CardTile navigation={navigation} item={item} />
        )}
      />
      <StatusBar style="light" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
