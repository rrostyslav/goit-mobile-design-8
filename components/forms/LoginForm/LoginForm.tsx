import { View, StyleSheet, Text } from "react-native"
import { EmailField } from "@/components/form-fields/EmailField"
import { PasswordField } from "@/components/form-fields/PasswordField"
import { Button } from "@/components/common/Button"
import { Typography } from "@/components/common/Typography"
import { Link } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type LoginFormState = {
  email: string
  password: string
}

type LoginFormProps = {
  onLogin?: (data: LoginFormState) => void
}

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please write your email")
    .test("email", "Please write valid email", (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)),
  password: yup.string().required("Please write your password"),
})

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const form = useForm<LoginFormState>({
    defaultValues: {
      email: "",
      password: "",
    },
    // resolver: yupResolver(LoginFormSchema),
  })

  return (
    <FormProvider {...form}>
      <View style={styles.loginSection}>
        <Typography name="h1" color="black">
          Welcome to Chat App!
        </Typography>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <EmailField name="email" />
            <PasswordField name="password" />
            <Link href="/">
              <Typography name="action-m" color="highlight">
                Forgot password?
              </Typography>
            </Link>
          </View>
          <View style={{ alignItems: "center", rowGap: 16 }}>
            <Button
              onPress={form.handleSubmit((data) => {
                onLogin?.(data)
              })}
            >
              Login
            </Button>
            <Text>
              <Typography name="body-s" color="gray">
                Not a member?
              </Typography>{" "}
              <Link href="/">
                <Typography name="action-m" color="highlight">
                  Register now
                </Typography>
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  loginSection: {
    flexDirection: "column",
    rowGap: 24,
    padding: 24,
  },
  formContainer: {
    rowGap: 24,
  },
  inputContainer: {
    rowGap: 16,
  },
})
