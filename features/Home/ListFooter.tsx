import React from "react";
import { View } from "react-native";
import styles from "./styles";

/**
 * A function component that shows an empty list footer just to occupy
 * an empty space (16 dpi only).
 */
function ListFooter() {
  return <View style={styles.listFooter} />;
}

// export as default.
export default ListFooter;
