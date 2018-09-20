import { StyleSheet } from "react-native";

export default StyleSheet.create({
  weatherContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  temperatureText: {
    fontSize: 80,
    color: "#555"
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  weatherText: {
    fontSize: 32,
    color: "#555"
  }
});
