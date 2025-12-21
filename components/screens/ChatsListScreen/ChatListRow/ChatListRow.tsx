import { StyleSheet, TouchableOpacity, View, Image } from "react-native"
import { colors } from "@/design-system/colors"
import { Typography } from "@/components/common/Typography"

export type ChatListRowProps = {
  username: string
  userImageUrl?: string
  lastMessage: string
  unreadCount?: number
  onPress?: () => void
}

export const ChatListRow = ({ username, userImageUrl, lastMessage, unreadCount = 0, onPress }: ChatListRowProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require("../../../../assets/user-image-placeholder.png")} />
      <View style={styles.body}>
        <Typography name="h5" color="black">
          {username}
        </Typography>
        <Typography name="body-s" color="neutralDarkest" numberOfLines={2} ellipsizeMode="tail">
          {lastMessage}
        </Typography>
      </View>
      <View>
        {Boolean(unreadCount) && (
          <View style={styles.unreadCounter}>
            <Typography name="caption-m" color="neutral">
              {unreadCount}
            </Typography>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 16,
    alignItems: "center",
    paddingHorizontal: 24,
    height: 72,
  },
  body: {
    flex: 1,
    flexDirection: "column",
  },
  unreadCounter: {
    borderRadius: "50%",
    backgroundColor: colors.highlight,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
})
