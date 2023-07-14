import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardTile from "../components/CardTile";

const Details = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [detailsData, setDetailsData] = useState(null);

  const id = route?.params?.item?.id;

  useEffect(() => {
    if (id) {
      async function getMovieDetailsById() {
        const response = await fetch(
          `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
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
          setDetailsData(result);
        }
      }
      getMovieDetailsById();
    }
  }, []);
  if (loading) {
    return (
      <ActivityIndicator size={"large"} color={"blue"} style={{ flex: 1 }} />
    );
  }

  console.log("itemmmssss", detailsData);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View>
        <Image
          source={{ uri: detailsData?.image }}
          resizeMode="contain"
          style={{
            borderRadius: 4,
            height: "60%",

            width: 250,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 40 }}>
        <Text
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {detailsData?.title}
        </Text>
        <Text
          style={{
            marginBottom: 10,
          }}
        >
          {detailsData?.description}
        </Text>
        <Text
          style={{
            marginBottom: 10,
          }}
        >
          Rating: {detailsData?.rating}
        </Text>
        <Text>Year: {detailsData?.year}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
