import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Text from "../Text/Text";
import styles from "./styles";
import { Colors, commonStyles, Fonts } from "lib/constants";
import { ButtonProps } from "components/types";

/**
 * A function component that shows a button.
 */
function Button({
  onPress,
  fontFamily,
  locked,
  text: text,
  txtColor,
  leftIcon,
  style,
  width = "80%",
  textStyle,
  isLoading,
}: ButtonProps) {
  /**
   * Handles item press.
   */
  const handlePress = () => {
    if (!locked) {
      onPress();
      return;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={locked}
      style={[
        styles({ locked, width }).button,
        style,
        commonStyles.cossRowDirection,
      ]}
    >
      {leftIcon}
      {isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text
          fontFamily={fontFamily ? fontFamily : Fonts.bold}
          style={textStyle}
          numberOfLines={0}
          text={text}
          color={txtColor}
          medium
        />
      )}
    </TouchableOpacity>
  );
}

// export as default.
export default Button;
