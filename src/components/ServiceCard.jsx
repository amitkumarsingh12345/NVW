import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { serviceCard } from "../styles/components_style";

export default function ServiceCard({ name, icon, status }) {
  console.log("name" + icon);
  return (
    <View style={serviceCard.container}>
      <Image
        source={{
          uri: `https://nvwebsoft.com/php_api/assets/website_upload/service/${icon}`,
        }}
        height={50}
        width={50}
      />
      <Text style={serviceCard.cardText}>{name}</Text>
    </View>
  );
}
