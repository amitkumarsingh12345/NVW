import ServiceCard from "@/src/components/ServiceCard";
import { homeScreenStyle } from "@/src/styles/pages_style";
import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function ServicesScreen() {
  const [service, setService] = useState(null);

  useEffect(() => {
    const getServicesData = async () => {
      try {
        const result = await axios.get(
          "https://nvwebsoft.com/php_api/api.php/service"
        );
        setService(result.data);
        console.log(result.data[0]);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };
    getServicesData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f4ff" }}>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: 600, padding: 20 }}>
            All Services
          </Text>
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
    </SafeAreaView>
  );
}
