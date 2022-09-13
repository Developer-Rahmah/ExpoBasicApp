import { Colors, Fonts } from "lib/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
  flexCenter: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
    marginTop: "10%",
  },
  welcomeText: {
    marginTop: "20%",
    marginBottom: "9%",
    fontFamily: Fonts.black,
  },
  formContainer: { justifyContent: "space-evenly", width: "100%", flex: 1 },
  loginBtnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  termsAndconditionsContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "7%",
  },
  textAlignCenter: {
    textAlign: "center",
    fontFamily: Fonts.book,
  },
  loginBtnTxt: {
    fontFamily: Fonts.black,
  },
  forgotPasswordContainer: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    color: Colors.black,
    textAlign: "center",
    marginBottom: -5,
  },
  forgotPassInputContainer: {
    width: "100%",
    paddingHorizontal: 30,
    color: Colors.black,
  },
  buttonContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
  },
  enterYourEmailText: {
    marginBottom: 25,
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 16,
  },
  signUpContainer: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  switch: {
    marginHorizontal: 10,
  },
});

export default styles;
