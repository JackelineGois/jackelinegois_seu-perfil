import { Alert, HStack, Text } from "native-base";
import { Palette } from "../../theme/palette";
import { AntDesign } from "@expo/vector-icons";

export const CustomAlert = (props) => {
  return (
    <Alert
      w="100%"
      variant={"subtle"}
      colorScheme={props.status}
      status={props.status}
      borderColor={"black"}
      color={"red.900"}
      backgroundColor={Palette.yellow_background}
      rounded={"md"}
    >
      <HStack space={2} flexShrink={1} alignItems={"center"}>
        <AntDesign name="warning" size={22} color={Palette.warning_text} />

        <Text color={Palette.warning_text} fontWeight={"semibold"}>
          {" "}
          <b>Completar perfil: </b> Preencha suas informações para encontrar
          pacientes
        </Text>
      </HStack>
    </Alert>
  );
};
