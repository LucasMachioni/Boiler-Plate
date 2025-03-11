import type { SizeTokens } from "tamagui";
import { Button, Input, Stack, View, Text, XStack } from "tamagui";
import { TouchableOpacity, StyleSheet } from "react-native";

export function SignIn() {
  return (
    <View flex={1} ai="center" jc="center" bg={"#1A1F2C"}>
      <Stack
        minH={350}
        minW={315}
        bg="rgba(16, 147, 255, 0.12)"
        rounded={"$7"}
        gap={"$6"}
        jc="center"
        ai="center"
      >
        <Input
          size="$3"
          height={"$4"}
          width={"$19"}
          fontSize={"$5"}
          placeholder="E-mail"
          maxLength={40}
          keyboardType="email-address"
          pl={"$3"}
          borderWidth={0}
          borderBottomWidth={1}
          borderBottomColor={"$background02"}
          bg="rgba(3, 137, 247, 0.18)"
          rounded={"$1"}
          placeholderTextColor={"$white7"}
          color={"$white2"}
        />
        <Input
          size="$3"
          height={"$4"}
          width={"$19"}
          fontSize={"$5"}
          placeholder="Senha"
          maxLength={32}
          secureTextEntry
          pl={"$3"}
          borderWidth={0}
          borderBottomWidth={1}
          borderBottomColor={"$background02"}
          bg="rgba(3, 137, 247, 0.18)"
          rounded={"$1"}
          placeholderTextColor={"$white7"}
          color={"$white2"}
          elevation={10}
        />

        <XStack ai={"flex-end"}>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </XStack>

        <Button
          width={"$15"}
          fontSize={15}
          bg="rgba(0, 140, 255, 0.95)"
          color={"white"}
          mt={"$7"}
        >
          Entrar
        </Button>
      </Stack>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  link: {
    color:"rgba(0, 153, 255, 0.95)",
    fontSize: 14,
    textDecorationLine: "none",
  },
});
