import { Platform } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { allConstant } from "../constants/Constant";

// Carousel Slider

const { width, height } = Dimensions.get("window");

const carouselSlider = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: "#f0f4ff",
  },
  page: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f4ff",
  },
  image: {
    width: "93%",
    height: 200,
  },
});

// Logo

const logoStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
    marginBottom: 20,
    paddingBottom: 15,
  },
  logo: {
    width: "100%",
    height: 50,
  },
});

// Service Card

const serviceCard = StyleSheet.create({
  container: {
    boxShadow: "0px 0px 2px gray",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    padding: 10,
  },
  cardText: {
    fontWeight: 700,
    textAlign: "center",
  },
});

// Notification Card

const notificationCard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
    marginTop: allConstant.os == "ios" ? -30 : 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  leftAvatar: {
    backgroundColor: "purple",
    marginRight: 10,
  },
  rightAvatar: {
    backgroundColor: "red",
    marginLeft: 10,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
});

// Bottom Sheet

const bottomSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },

  listContainer: {
    flex: 1,
    padding: 25,
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  listButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  listIcon: {
    fontSize: 26,
    color: "#666",
    width: 60,
  },
  listLabel: {
    fontSize: 16,
  },
});

export {
  carouselSlider,
  logoStyle,
  serviceCard,
  notificationCard,
  bottomSheet,
};
