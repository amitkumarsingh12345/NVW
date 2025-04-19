import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Logo from "@/src/components/Logo";
import { TouchableOpacity, View } from "react-native";
import { allConstant } from "@/src/constants/Constant";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

{
  /* Bottom Sheet Dependicies Start*/
}

import React, { useRef } from "react";
import { Text } from "react-native";
import { MaterialIcons as MDIcon } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { bottomSheet } from "@/src/styles/components_style";

{
  /* Bottom Sheet Dependicies End*/
}

export default function MainLayout() {
  const refStandard = useRef();

  const listData = [
    { icon: "insert-drive-file", label: "Document" },
    { icon: "photo-camera", label: "Camera" },
    { icon: "photo", label: "Gallery" },
    { icon: "headset", label: "Audio" },
    { icon: "location-on", label: "Location" },
    { icon: "person", label: "Contact" },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Bottom Sheet Start */}

      <RBSheet
        ref={refStandard}
        draggable
        dragOnContent
        height={allConstant.os == "ios" ? 430 : 330}
      >
        <ScrollView style={bottomSheet.listContainer}>
          <Text style={bottomSheet.listTitle}>Create</Text>
          {listData.map((list, index) => (
            <TouchableOpacity
              key={index}
              style={bottomSheet.listButton}
              onPress={() => refStandard.current.close()}
            >
              <MDIcon name={list.icon} style={bottomSheet.listIcon} />
              <Text style={bottomSheet.listLabel}>{list.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </RBSheet>

      {/* Bottom Sheet End */}

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#031273",
          tabBarInactiveTintColor: "gray",
          headerTitle: () => <Logo />,
          headerTitleAlign: "left",
          headerStyle: {
            height: allConstant.os == "ios" ? 130 : 80,
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => refStandard.current.open()}>
                <Ionicons
                  name="ellipsis-vertical-sharp"
                  size={22}
                  color={"black"}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            elevation: 5,
            shadowOpacity: 0.1,
            height: allConstant.os == "ios" ? 100 : 50,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: true,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-sharp" size={22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="services"
          options={{
            tabBarLabel: "Services",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tools" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="portfolio"
          options={{
            tabBarLabel: "Portfolio",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Feather name="folder" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarLabel: "Notifications",
            headerShown: true,
            tabBarBadge: 0,
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications-sharp" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            tabBarLabel: "Contact",
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <Ionicons name="mail-sharp" size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
