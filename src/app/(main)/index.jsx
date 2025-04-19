import { View, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import CarouselSlider from "@/src/components/CarouselSlider";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import ServiceCard from "@/src/components/ServiceCard";
import { homeScreenStyle } from "@/src/styles/pages_style";
import Logo2 from "@/src/components/Logo2";
import { allConstant } from "@/src/constants/Constant";

const { height } = Dimensions.get("window");

export default function HomeScreen() {
  const [service, setService] = useState(null);

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const result = await axios.get(
          "https://nvwebsoft.com/php_api/api.php/service"
        );
        setService(result.data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };
    getServicesData();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f4ff" }}>
      {/* Wrap carousel in a fixed-height container */}
      <View
        style={{
          height: height * 0.3,
          marginTop: allConstant.os == "ios" ? 0 : 20,
        }}
      >
        <CarouselSlider />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Logo2 />
      </View>

      <View style={homeScreenStyle.cardContainer}>
        {service?.map((data) => (
          <ServiceCard
            key={data.service_menu_id}
            name={data.service_menu_name}
            icon={data.service_icon}
            status={data.status}
          />
        ))}
      </View>
    </ScrollView>
  );
}
