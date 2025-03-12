import {
  Button,
  Input,
  Stack,
  View,
  Text,
  XStack,
  Image,
  YStack,
} from "tamagui";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AuthNavigatorRoutesProps } from "../../routes/auth.routes";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { useState } from "react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Nova variável
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(""); // Nova variável
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const navToBack = () => {
    navigation.navigate("signIn");
  };

  // Validação em tempo real
  const handleNameChange = (text: string) => {
    setName(text);
    if (!text.trim()) {
      setErrorName("O nome é obrigatório.");
    } else {
      setErrorName("");
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (!text.trim()) {
      setErrorEmail("O e-mail é obrigatório.");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text)) {
      setErrorEmail("E-mail inválido.");
    } else {
      setErrorEmail("");
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    if (!text) {
      setErrorPassword("A senha é obrigatória.");
    } else if (text.length < 6) {
      setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
    } else {
      setErrorPassword("");
    }
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    if (text !== password) {
      setErrorConfirmPassword("As senhas não coincidem.");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const handleSubmit = () => {
    if (!errorName && !errorEmail && !errorPassword && !errorConfirmPassword) {
      console.log("Cadastro válido!");
      // Prossiga com a lógica do cadastro
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View flex={1} ai="center" jc="flex-end" bg={"white"}>
        <XStack r={"$17"}>
          <TouchableOpacity onPress={navToBack}>
            <ArrowLeft size="$2" />
          </TouchableOpacity>
        </XStack>

        <Text fontStyle="italic" fontSize={"$9"} color={"black"} b={"$7"}>
          Cadastro
        </Text>

        <View
          width={"100%"}
          height={"83%"}
          ai="center"
          jc="center"
          bg={"#1A1F2C"}
          borderTopStartRadius={"$size.11"}
          gap={"$5"}
          overflow="hidden"
        >
          <YStack>
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Digite seu nome"
              maxLength={40}
              keyboardType="default"
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
              value={name}
              onChangeText={handleNameChange}
            />
            {errorName ? (
              <Text color={"red"} ml={"$5"}>
                {errorName}
              </Text>
            ) : null}
          </YStack>

          <YStack>
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Digite seu e-mail"
              maxLength={40}
              keyboardType="email-address"
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
              value={email}
              onChangeText={handleEmailChange}
            />
            {errorEmail ? (
              <Text color={"red"} ml={"$5"}>
                {errorEmail}
              </Text>
            ) : null}
          </YStack>

          <YStack>
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Digite sua senha"
              maxLength={32}
              secureTextEntry
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
              value={password}
              onChangeText={handlePasswordChange}
            />
            {errorPassword ? (
              <Text color={"red"} ml={"$5"}>
                {errorPassword}
              </Text>
            ) : null}
          </YStack>

          <YStack>
            <Input
              size="$3"
              height={"$5"}
              width={"$20"}
              fontSize={"$5"}
              placeholder="Confirme a senha"
              maxLength={32}
              secureTextEntry
              pl={"$3"}
              borderWidth={0}
              borderBottomColor={"$background02"}
              bg="rgba(3, 137, 247, 0.18)"
              rounded={"$7"}
              placeholderTextColor={"$white7"}
              color={"$white2"}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
            />
            {errorConfirmPassword ? (
              <Text color={"red"} ml={"$5"}>
                {errorConfirmPassword}
              </Text>
            ) : null}
          </YStack>

          <Button
            width={"$15"}
            fontSize={15}
            bg="rgba(0, 140, 255, 0.95)"
            color={"white"}
            mt={"$4"}
            onPress={handleSubmit}
          >
            Entrar
          </Button>

          <Image
            source={require("../../../assets/logoprovac-white.png")}
            width={"$10"}
            height={51}
            t={"$6"}
          />
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
