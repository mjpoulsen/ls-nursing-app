// TODO
// Refer to https://docs.expo.io/versions/latest/react-native/asyncstorage.md
// Documentation shows AsyncStorage functions with 'await' keywords
import { AsyncStorage } from "react-native";


export const USER_KEY = "auth-demo-key";

export const onSignIn = async () => {
  try {
    AsyncStorage.setItem(USER_KEY, "true");
  } catch (err) {
    console.log("onSignIn() error " + err);
  }
};

export const onSignOut = async () => {
  try {
    AsyncStorage.removeItem(USER_KEY);
  } catch (err) {
    console.log("onSignOut() error " + err);
  }
};

export const isSignedIn = async () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(USER_KEY)
        .then(res => {
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));
    });
};