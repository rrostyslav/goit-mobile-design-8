import { LoginForm } from "@/components/forms/LoginForm"
import { View, StyleSheet, useWindowDimensions } from "react-native"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"

type LoginScreenProps = {
  onLogin?: () => void
}

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  return (
    <View style={[styles.container, isLandscape && styles.containerLandscape]}>
      <View style={[styles.welcomeImage, isLandscape && styles.welcomeImageLandscape]}>
        <Typography name="h4" color="black">
          [Image of app here]
        </Typography>
      </View>
      <View style={[styles.formContainer, isLandscape && styles.formContainerLandscape]}>
        <LoginForm
          onLogin={() => {
            onLogin?.()
          }}
        />
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLandscape: {
    flexDirection: "row",
  },
  welcomeImage: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.highlight,
  },
  welcomeImageLandscape: {
    height: "100%",
    width: "45%",
  },
  formContainer: {
    flex: 1,
  },
  formContainerLandscape: {
    justifyContent: "center",
    paddingHorizontal: 24,
  },
})
