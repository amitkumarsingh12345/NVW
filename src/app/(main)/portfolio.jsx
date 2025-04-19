import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProjectCard from "@/src/components/ProjectCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PortfolioScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#f0f4ff" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            marginTop: 10,
          }}
        >
          All Projects
        </Text>
      </View>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ScrollView>
  );
}
