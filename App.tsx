import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { LinkListScreen } from "./src/screens/LinkListScreen";
import { RootNavigation } from "./src/navigations/RootNavigation";
import { RecoilRoot } from "recoil";
import { RecoilCustomPersist } from "./src/Component/RecoilCustomPersis";

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <RecoilCustomPersist>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </RecoilCustomPersist>
      </SafeAreaProvider>
    </RecoilRoot>
  );
}
