import {
  Colors,
  commonStyles,
  Fonts,
  getCrossElevation,
  Layout,
} from "lib/constants";
import { StyleSheet } from "react-native";

// constants.
const semiCircleSize = 400;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.twilight_blue,
    paddingTop: 30,
  },
  space: {
    height: 32,
  },
  helloTxt: {
    color: Colors.primary,
    fontSize: 79,
    marginTop: 32,
    fontFamily: Fonts.black,
    letterSpacing: -3,
    lineHeight: 80,
    ...commonStyles.crossTextAlign,
  },
  name: {
    marginTop: 0,
    lineHeight: 80,
    color: Colors.primary,
    fontSize: 79,
    fontFamily: Fonts.black,
    letterSpacing: -3,
    ...commonStyles.crossTextAlign,
  },
  sectionTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    ...commonStyles.cossRowDirection,
  },
  sectionTitleTxt: {
    fontSize: 21,
    color: Colors.blue_zodiac,
    marginLeft: 4,
    fontFamily: Fonts.black,
  },
  topSemiCircle: {
    zIndex: -1,
    position: "absolute",
    backgroundColor: Colors.bostonBlue,
    height: semiCircleSize,
    width: semiCircleSize,
    borderRadius: semiCircleSize / 2,
    top: Layout.window.height * 0.2,
    right: -semiCircleSize * 0.6,
  },
  bottomSemiCircle: {
    zIndex: -1,
    position: "absolute",
    backgroundColor: Colors.semiCircle,
    height: semiCircleSize,
    width: semiCircleSize,
    borderRadius: semiCircleSize / 2,
    top: Layout.window.height * 0.5,
    left: -semiCircleSize * 0.6,
  },
  leftContainer: {
    alignItems: "center",
    ...commonStyles.cossRowDirection,
  },
  viewAllTxt: {
    color: Colors.blue_zodiac,
    fontSize: 14,
    fontFamily: Fonts.black,
  },
  paddingRight: {
    paddingRight: 10,
  },
  listFooter: {
    height: 16,
    width: 16,
  },

  li: {
    padding: 16,
    backgroundColor: Colors.white,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    ...getCrossElevation(),
  },
  liFirstItem: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  internalLi: {
    flexDirection: "row",
    alignItems: "center",
  },
  liRightView: {
    flex: 1,
    paddingLeft: 8,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  liLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  liTitle: {
    fontSize: 14,
    color: Colors.light_blue2,
    fontFamily: Fonts.black,
  },
  dobTxt: {
    fontSize: 14,
    color: Colors.dark_gray,
    fontFamily: Fonts.light,
  },
  title: {
    color: Colors.primary,
    fontSize: 46,
    fontFamily: Fonts.black,
    marginLeft: 5,
    marginTop: -8,
  },
  searchBarContainer: {
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 16,
  },
});

// export styles as default.
export default styles;
