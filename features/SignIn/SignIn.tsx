import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  I18nManager,
  Image,
  KeyboardAvoidingView,
  Platform,
  Switch,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import Text from "../../components/Text/Text";
import { isNotEmpty, validateEmail } from "../../helpers/config";
import { OauthService } from "../../services";
import { updateUser } from "../../state/slices/AuthSlice";
import styles from "./styles";
import FormTextField from "components/Input/FormInputField";
import { SignUpFormModel } from "features/types";
import { showCrossToast } from "helpers/general";
import { Colors } from "lib/constants";
import { LocaleKeys } from "localization/LocaleKeys";
import { Translate } from "localization/Translate";
import { ScrollView } from "native-base";
import { langSelector, updateLang } from "state/slices/Lang";
import LocalStorageBasicService from "services/LocalStorageBasicService";
import * as Updates from "expo-updates";

// constants.
const oauthService = OauthService.getService();
const localStorageBasicService = LocalStorageBasicService.getService();
function SignInScreen() {
  const { lang } = useSelector(langSelector);

  //state
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEN, setIsEN] = useState(lang === "en");

  // use redux dispatch.
  const dispatch = useDispatch();
  const formMethods = useForm<SignUpFormModel>({
    mode: "onChange",
  });
  const onSubmit = async (data: any) => {
    try {
      await oauthService.login(data);
      setIsSubmiting(true);

      dispatch(updateUser(data));
    } catch (e: any) {
      setIsSubmiting(false);

      showCrossToast(e.message);
    }
  };
  const toggleSwitchLang = () => {
    setIsEN((previousState) => !previousState);
    dispatch(updateLang(lang === "ar" ? "en" : "ar"));

    localStorageBasicService.setLang(lang === "ar" ? "en" : "ar");
    I18nManager.forceRTL(lang === "en");
    Updates.reloadAsync();
  };
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.flex}
      >
        <SafeAreaView style={styles.flex}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.flexCenter}>
              <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
              />
              <Text
                style={styles.welcomeText}
                large
                text={Translate(LocaleKeys.login.welcome)}
                color={Colors.primary}
              />
              <View style={styles.switchContainer}>
                <Text text="EN" />
                <Switch
                  style={styles.switch}
                  trackColor={{
                    false: Colors.light_gray,
                    true: Colors.light_gray,
                  }}
                  thumbColor={Colors.green}
                  ios_backgroundColor={Colors.light_gray}
                  onValueChange={toggleSwitchLang}
                  value={isEN}
                />
                <Text text="AR" />
              </View>
              <View style={styles.formContainer}>
                <FormProvider {...formMethods}>
                  <FormTextField
                    name="ID"
                    keyboardType="numeric"
                    label=""
                    rules={{
                      required: true,
                      minLength: {
                        value: 10,
                        message: Translate(LocaleKeys.login.invalidID),
                      },

                      maxLength: {
                        value: 10,
                        message: Translate(LocaleKeys.login.invalidID),
                      },
                    }}
                    maxLength={10}
                    alignLeft
                    autoCorrect={false}
                    textFieldStyle={styles.inputContainer}
                    message={Translate(LocaleKeys.login.invalidID)}
                    placeholder={Translate(LocaleKeys.login.id)}
                  />
                  <FormTextField
                    name="email"
                    keyboardType="email-address"
                    label=""
                    rules={{
                      required: true,
                      pattern: {
                        value: validateEmail,
                      } as any,
                    }}
                    alignLeft
                    autoCorrect={false}
                    textFieldStyle={styles.inputContainer}
                    message={Translate(LocaleKeys.login.invalidEmail)}
                    placeholder={Translate(LocaleKeys.login.email)}
                  />
                  <FormTextField
                    label=""
                    name="phone"
                    keyboardType="numeric"
                    maxLength={12}
                    placeholder={Translate(LocaleKeys.login.phoneNumber)}
                    rules={{
                      required: true,
                      validate: (value) => {
                        return isNotEmpty(value);
                      },
                      minLength: {
                        value: 7,
                        message: "min length is 4",
                      },
                      maxLength: {
                        value: 12,
                        message: "max length is 12",
                      },
                    }}
                    alignLeft
                    message={Translate(LocaleKeys.login.invalidPhoneNumber)}
                    textFieldStyle={styles.inputContainer}
                  />

                  <FormTextField
                    datePicker
                    name="dateOfBirth"
                    label={Translate(LocaleKeys.login.invalidPhoneNumber)}
                    rules={{
                      required: true,
                    }}
                  />
                </FormProvider>
                <View style={styles.loginBtnContainer}>
                  <Button
                    width="100%"
                    onPress={formMethods.handleSubmit(onSubmit)}
                    locked={!formMethods.formState.isValid || isSubmiting}
                    text={Translate(LocaleKeys.login.signUp)}
                    isLoading={isSubmiting}
                    textStyle={styles.loginBtnTxt}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignInScreen;
