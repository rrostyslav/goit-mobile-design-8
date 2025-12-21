import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "@/components/screens/LoginScreen"
import { DrawerNavigator } from "@/navigation/DrawerNavigator"
import type { RootStackParamList } from "@/types/navigation"

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Login">
            {({ navigation }) => (
              <LoginScreen
                onLogin={() => {
                  navigation.replace("AppDrawer")
                }}
              />
            )}
          </RootStack.Screen>
          <RootStack.Screen name="AppDrawer" component={DrawerNavigator} />
        </RootStack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )
}
