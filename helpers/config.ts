export const linking = {
  prefixes: ["big://"],
};
export const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const validateLinkedin =
  /(ftp|http|https):\/\/?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export const validateFacebook =
  /(ftp|http|https):\/\/?(?:www\.)?facebook.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export const validateTwitter =
  /(ftp|http|https):\/\/?(?:www\.)?twitter.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export const validateInstagram =
  /(ftp|http|https):\/\/?(?:www\.)?instagram.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

export const shouldHaveLetterAtLeast = /^(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

export const DEEPLINKING_BASE_URL = "bigapp://com.fersancapital.big";

export const isNotEmpty = (str: string): boolean => {
  return !(!str || 0 === str.trim().length);
};
