import * as Font from "expo-font";
import { Toast } from "native-base";
import { Layout } from "lib/constants";

/**
 * Loads custom fonts.
 */
export const loadCustomFonts = async () => {
  try {
    const customFonts = {
      "CircularStd-Black": require("../assets/fonts/CircularStd-Black.otf"),
      "CircularStd-Bold": require("../assets/fonts/CircularStd-Bold.otf"),
      "CircularStd-Book": require("../assets/fonts/CircularStd-Book.otf"),
      "CircularStd-Light": require("../assets/fonts/CircularStd-Light.otf"),
      "CircularStd-Medium": require("../assets/fonts/CircularStd-Medium.otf"),
    };

    await Font.loadAsync(customFonts);
  } catch (error) {
    console.log("error in loadCustomFonts", error);
  }
};

/**
 * Shows a toast for iOS and Android.
 */
export function showCrossToast(message: string) {
  Toast.show({
    title: message,
    duration: 3000,
    width: Layout.window.width / 1.3,
  });
}
