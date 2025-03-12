import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { SignIn } from "../screens/auth/SignIn";
import { Register } from "../screens/auth/Register";
import { RecoverPassword } from "../screens/auth/RecoverPassword";

type AuthRoutesProps = {
  signIn: undefined;
  recover: undefined;
  register: undefined;
};

export type AuthNavigatorRoutesProps =
  NativeStackNavigationProp<AuthRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
      <Screen name="register" component={Register} />
      <Screen name="recover" component={RecoverPassword} />
    </Navigator>
  );
}
