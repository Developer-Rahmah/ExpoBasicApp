import { BottomTabButtonProps } from "components/types";
import { Colors } from "lib/constants";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

export const BottomTabButton: React.FC<BottomTabButtonProps> = ({
  Icon,
  focused,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.internalTabbarBtnStyle,
        focused && { backgroundColor: Colors.mailAbu },
      ]}
      onPress={onPress}
    >
      <Icon height={25} width={25} />
    </TouchableOpacity>
  );
};

export default BottomTabButton;
