import { View, StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"
import { ChatsStackNavigator } from "@/navigation/ChatsStackNavigator"
import type { DrawerParamList } from "@/types/navigation"

const Drawer = createDrawerNavigator<DrawerParamList>()

const PlaceholderScreen = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <View style={styles.placeholderContainer}>
    <Typography name="h1" color="black">
      {title}
    </Typography>
    <Typography name="body-s" color="gray">
      {subtitle}
    </Typography>
  </View>
)

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.highlight,
        drawerInactiveTintColor: colors.gray,
        drawerStyle: { backgroundColor: colors.neutral },
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen name="Chats" component={ChatsStackNavigator} options={{ title: "Chats" }} />
      <Drawer.Screen name="Support" options={{ title: "Support" }}>
        {() => <PlaceholderScreen title="Support" subtitle="Extra drawer section placeholder." />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 8,
    paddingHorizontal: 24,
  },
})
