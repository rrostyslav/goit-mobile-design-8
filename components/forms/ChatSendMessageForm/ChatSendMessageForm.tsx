import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { colors } from "@/design-system/colors"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import SendIcon from "@/assets/icons/send.svg"

type ChatSendMessageFormProps = {
  onSubmit: (value: string) => void
}

type ChatSendMessageFormState = {
  message: string
}

const ChatSendMessageSchema = yup.object().shape({
  message: yup.string().required(),
})

export const ChatSendMessageForm = ({ onSubmit }: ChatSendMessageFormProps) => {
  const form = useForm<ChatSendMessageFormState>({
    defaultValues: {
      message: "",
    },
    resolver: yupResolver(ChatSendMessageSchema),
  })

  const handleSubmit: SubmitHandler<ChatSendMessageFormState> = ({ message }) => {
    onSubmit(message)
  }

  return (
    <FormProvider {...form}>
      <View style={styles.container}>
        <Controller
          control={form.control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Message"
              />
              <Pressable style={styles.sendButton} onPress={form.handleSubmit(handleSubmit)}>
                <SendIcon />
              </Pressable>
            </View>
          )}
          name="message"
        />
      </View>
    </FormProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: colors.surface,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    columnGap: 8,
  },
  input: {
    flex: 1,
    color: colors.black,
  },
  sendButton: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.highlight,
    alignItems: "center",
    justifyContent: "center",
  },
})
