import { StyleSheet } from "react-native";

import { Colors } from "lib/constants";

type Props = {
  locked: boolean;
  width: string | number;
};

const styles = ({ locked, width }: Props) =>
  StyleSheet.create({
    button: {
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      width: width,
      backgroundColor: locked ? "gray" : Colors.light_blue,
      opacity: locked ? 0.5 : 1,
      paddingVertical: 20,
    },
  });

// export styles as default.
export default styles;
