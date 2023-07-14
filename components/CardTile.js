import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const CardTile = ({ item, navigation }) => {
  const handleDetailsPress = () => {
    navigation.navigate("Details", { item: item });
  };

  return (
    <View>
      <View style={styles.mainCardStyles}>
        <View>
          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={{
              borderRadius: 4,
              height: "100%",
              width: 150,
            }}
          />
        </View>

        <View style={{ marginLeft: 12, flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 14,
              color: "#000",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {`${item.rank} ${item.title}`}
          </Text>

          <View style={{ marginTop: 12 }}>
            <Button onPress={handleDetailsPress} title="Details" color="red" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardTile;

const styles = StyleSheet.create({
  mainCardStyles: {
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,
  },
});
