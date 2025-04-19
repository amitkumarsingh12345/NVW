import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";
import { carouselSlider } from "../styles/components_style";
import axios from "axios";

export default function CarouselSlider() {
  const pagerRef = useRef(null);
  const [page, setPage] = useState(0);
  const [sliderData, setSliderData] = useState(null);

  useEffect(() => {
    const getSliderData = async () => {
      try {
        const result = await axios.get(
          "https://nvwebsoft.com/php_api/api.php/slider"
        );
        setSliderData(result.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };
    getSliderData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % 3; // Total 3 pages
      pagerRef.current?.setPage(nextPage);
      setPage(nextPage);
    }, 9000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <PagerView
      style={carouselSlider.pagerView}
      initialPage={0}
      ref={pagerRef}
      onPageSelected={(e) => setPage(e.nativeEvent.position)}
    >
      {sliderData?.map((data, index) => (
        <View key={index} style={carouselSlider.page}>
          <Image
            source={{
              uri: `https://nvwebsoft.com/php_api/assets/website_upload/slider/${data.slider_img}`,
            }}
            style={carouselSlider.image}
            resizeMode="cover"
          />
        </View>
      ))}
    </PagerView>
  );
}
