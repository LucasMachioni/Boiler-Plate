import { Button, Input, Stack, View, Text, XStack, Image } from "tamagui";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";

export function RecoverPassword() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const navToBack = () => {
    navigation.navigate("signIn");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View flex={1} ai="center" jc="flex-end" bg={"white"}>
        <Image
          source={require("../../../assets/logoprovac.png")}
          width={"$20"}
          height={"$11"}
          b={"$8"}
        />
        <View
          width={"100%"}
          height={"70%"}
          ai="center"
          jc="center"
          bg={"#1A1F2C"}
          borderTopStartRadius={"$size.11"}
        >
          <Text fontWeight={"bold"} fontSize={"$9"} color={"white"} b={"$5"}>
            Cadastro
          </Text>

          <Stack
            minH={350}
            minW={315}
            bg="rgba(16, 147, 255, 0)"
            rounded={"$7"}
            gap={"$6"}
            jc="center"
            ai="center"
            mt={"$4"}
          >
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Nome"
              maxLength={40}
              keyboardType="default"
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
            />
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="E-mail"
              maxLength={40}
              keyboardType="email-address"
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
            />
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Senha"
              maxLength={32}
              secureTextEntry
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
            />

            <XStack>
              <TouchableOpacity onPress={navToBack}>
                <Text style={styles.link}>Já tenho uma conta</Text>
              </TouchableOpacity>
            </XStack>

            <Button
              width={"$15"}
              fontSize={15}
              bg="rgba(0, 140, 255, 0.95)"
              color={"white"}
              mt={"$4"}
            >
              Entrar
            </Button>
          </Stack>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  link: {
    color: "rgba(0, 153, 255, 0.95)",
    fontSize: 14,
    textDecorationLine: "none",
  },
});
