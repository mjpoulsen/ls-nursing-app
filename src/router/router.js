// Depedencies
import { Platform, StatusBar } from "react-native";
import { 
  createMaterialTopTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

// Screens
// import SignUp from "./screens/SignUp";
import SignIn from "../screens/SignIn";
import Profile from "../screens/Profile";
import Submissions from "../screens/Submissions";
import SubmitJob from "../screens/SubmitJob";

const selectSpecialityColor = '#0C6360';

const headerStyle = {
  // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  backgroundColor: selectSpecialityColor
};

// Style guides for navigators:
// https://reactnavigation.org/docs/en/stack-navigator.html
// https://github.com/react-navigation/react-navigation/issues/253
// https://reactnavigation.org/docs/en/material-top-tab-navigator.html

export const SignedOut = createStackNavigator(
  {
    // SignUp: {
    //   screen: SignUp,
    //   navigationOptions: {
    //     title: "Sign Up",
    //     headerStyle
    //   }
    // },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: "Select Specialty Job Submssion",
        headerTitleStyle: {
          flex: 1,
          color: 'white',
          alignSelf: 'center',
          textAlign: 'center',
        },
        headerStyle,
      }
    }
  },
  {
    navigationOptions: {
      style: {
        backgroundColor: '#ffffff'
      }
    }
  }
);

export const SignedIn = createMaterialTopTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="submissions" size={30} color={tintColor} />
        // )
      }
    },
    Submissions: {
      screen: Submissions,
      navigationOptions: {
        tabBarLabel: "Submissions",
        // tabBarIcon: ({ tintColor }) => (
        //   <Text style={{fontSize: 20}}>Test</Text>
        // )
      }
    },
    SubmitJob: {
      screen: SubmitJob,
      navigationOptions: {
        tabBarLabel: "Submit a Job",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="user" size={30} color={tintColor} />
        // )
      }
    }
  },
  {
    order: [
      "Profile",
      "Submissions",
      "SubmitJob"
    ],
    initialRouteName: "Submissions",
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'white'
      },
      style: {
        backgroundColor: selectSpecialityColor,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      // TODO put SignedIn as first option for ternary expression
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    }
  );
};