import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { notificationCard } from "../styles/components_style";

export default function NotificationCard() {
  const insets = useSafeAreaInsets();

  const notifications = [
    "AB",
    "NV",
    "MS",
    "DS",
    "SS",
    "KP",
    "MK",
    "MK",
    "MK",
    "MK",
    "MK",
    "MK",
  ];

  return (
    <ScrollView
      style={[notificationCard.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={notificationCard.title}>Notifications</Text>

      {notifications.map((data, index) => (
        <View style={notificationCard.row} key={index}>
          <Avatar
            size={45}
            rounded
            title={data}
            containerStyle={notificationCard.leftAvatar}
          />
          <Text style={notificationCard.text}>
            Yahan aapke diye gaye HTML table ko React Native ke components mein
            convert kiya gaya hai.
          </Text>
          <Avatar
            size={30}
            rounded
            icon={{ name: "trash", type: "font-awesome" }}
            containerStyle={notificationCard.rightAvatar}
          />
        </View>
      ))}
    </ScrollView>
  );
}
