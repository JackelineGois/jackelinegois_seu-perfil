import { Alert, HStack, Text } from "native-base";

export const CustomAlert = () => {
  return (
    <Alert
      w="100%"
      variant={"subtle"}
      colorScheme="success"
      status="warning"
      borderColor={"black"}
      color={"red.900"}
    >
      <HStack space={2} flexShrink={1} alignItems={"center"}>
        <Alert.Icon />
        <Text>
          {" "}
          <b>Completar perfil: </b> Preencha suas informações para encontrar
          pacientes
        </Text>
      </HStack>
    </Alert>
  );
};
