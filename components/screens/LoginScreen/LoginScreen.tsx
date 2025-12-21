import { LoginForm } from "@/components/forms/LoginForm"
import { Image, View, StyleSheet, useWindowDimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"

type LoginScreenProps = {
  onLogin?: () => void
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, isLandscape && styles.containerLandscape]}>
        <View style={[styles.welcomeImage, isLandscape && styles.welcomeImageLandscape]}>
          <Image source={require("../../../assets/welcome.png")} style={styles.welcomeImageAsset} />
        </View>
        <View style={[styles.formContainer, isLandscape && styles.formContainerLandscape]}>
          <LoginForm
            onLogin={() => {
              onLogin?.()
            }}
          />
          <View style={styles.sloganContainer}>
            <Typography name="body-s" color="gray">
              Connect faster. Chat smarter.
            </Typography>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerLandscape: {
    flexDirection: "row",
  },
  welcomeImage: {
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.highlight,
    overflow: "hidden",
  },
  welcomeImageLandscape: {
    height: "100%",
    width: "45%",
  },
  welcomeImageAsset: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  formContainer: {
    flex: 1,
  },
  formContainerLandscape: {
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  sloganContainer: {
    marginTop: "auto",
    paddingHorizontal: 24,
    paddingBottom: 24,
    alignItems: "center",
  },
})
